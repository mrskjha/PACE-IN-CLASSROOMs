"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "./globe.json"; // Example countries data
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { genRandomNumbers } from './path/to/your/utils'; // Adjust the path accordingly


extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspectRatio = window.innerWidth / window.innerHeight; // Update for full screen
const cameraZPosition = 400; // Adjusted camera position

export function GlobeVisualization({ globeConfig, arcData }) {
  const [globePointsData, setGlobePointsData] = useState(null);
  const globeInstanceRef = useRef(null);

  const defaultConfig = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: globeConfig.globeColor || "#640D5F", // Control globe color
    emissiveColor: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcAnimationTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    globeScale: globeConfig.globeScale || 0.5, // Reduced globe scale
    ...globeConfig,
  };

  useEffect(() => {
    if (globeInstanceRef.current) {
      initializeData();
      configureGlobeMaterial();
    }
  }, [globeInstanceRef.current]);

  const configureGlobeMaterial = () => {
    if (!globeInstanceRef.current) return;

    const globeMaterial = globeInstanceRef.current.globeMaterial();
    globeMaterial.color = new Color(defaultConfig.globeColor);
    globeMaterial.emissive = new Color(defaultConfig.emissiveColor);
    globeMaterial.emissiveIntensity = defaultConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultConfig.shininess || 0.9;
  };

  const initializeData = () => {
    const arcs = arcData;
    let points = [];

    arcs.forEach((arc) => {
      const rgb = hexToRgb(arc.color);
      points.push({
        size: defaultConfig.pointSize,
        order: arc.order,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultConfig.pointSize,
        order: arc.order,
        color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    });

    const uniquePoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every((key) => v2[key] === v[key])
        ) === i
    );

    setGlobePointsData(uniquePoints);
  };

  useEffect(() => {
    if (globeInstanceRef.current && globePointsData) {
      globeInstanceRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultConfig.showAtmosphere)
        .atmosphereColor(defaultConfig.atmosphereColor)
        .atmosphereAltitude(defaultConfig.atmosphereAltitude)
        .hexPolygonColor(() => defaultConfig.polygonColor);
      startAnimation();
    }
  }, [globePointsData]);

  const startAnimation = () => {
    if (!globeInstanceRef.current || !globePointsData) return;

    globeInstanceRef.current
      .arcsData(arcData)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((e) => e.color)
      .arcAltitude((e) => e.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultConfig.arcLength)
      .arcDashInitialGap((e) => e.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultConfig.arcAnimationTime);

    globeInstanceRef.current
      .pointsData(arcData)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeInstanceRef.current
      .ringsData([])
      .ringColor((e) => (t) => e.color(t))
      .ringMaxRadius(defaultConfig.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultConfig.arcAnimationTime * defaultConfig.arcLength) /
          defaultConfig.rings
      );
  };

  // Function to generate random numbers
  function genRandomNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
      const num = Math.floor(Math.random() * (max - min)) + min;
      numbers.add(num);
    }
    return Array.from(numbers);
  }

  // Your useEffect
  useEffect(() => {
    if (!globeInstanceRef.current || !globePointsData) return;

    const interval = setInterval(() => {
      if (!globeInstanceRef.current || !globePointsData) return;
      const activeRings = genRandomNumbers(
        0,
        arcData.length,
        Math.floor((arcData.length * 4) / 5)
      );

      globeInstanceRef.current.ringsData(
        globePointsData.filter((d, i) => activeRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeInstanceRef.current, globePointsData]);

  return (
    <threeGlobe
      ref={globeInstanceRef}
      globeScale={defaultConfig.globeScale} // Apply the globe scale
    />
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World({ globeConfig }) {
  const defaultGlobeConfig = {
    ...globeConfig,
    globeScale: 0.3, // Further reduced size to 0.3
  };

  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <div className="w-screen h-screen flex bg-none">
      {" "}
      {/* Full screen */}
      {/* Heading and Paragraph on the Left Side */}
      <div className="flex flex-col justify-center mr-5 text-white px-20 w-[1200px] ">
        <motion.h1
          className="text-indigo-900 text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PACE
        </motion.h1>
        <motion.h1
          className="text-3xl font-bold mb-3 text-white "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start Exploring PACE Data Today!
        </motion.h1>
        <motion.p
          className="text-md mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We are glad you are here. PACE is a new Earth observing satellite.
        </motion.p>
        <div>
          <Link to="/courses">
            <motion.button
              className="uppercase bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition duration-300 "
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explore
            </motion.button>
          </Link>
        </div>
      </div>
      <Canvas
        scene={scene}
        camera={new PerspectiveCamera(50, aspectRatio, 100, 2000)} // Adjusted camera field of view and position
        className="w-full h-full"
      >
        <WebGLRendererConfig />
        <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
        <directionalLight
          color={globeConfig.directionalLeftLight}
          position={new Vector3(-400, 100, 400)}
        />
        <directionalLight
          color={globeConfig.directionalTopLight}
          position={new Vector3(-200, 500, 200)}
        />
        <pointLight
          color={globeConfig.pointLight}
          position={new Vector3(-200, 500, 200)}
          intensity={0.8}
        />
        <GlobeVisualization
          globeConfig={defaultGlobeConfig}
          arcData={globeConfig.arcData}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={cameraZPosition}
          maxDistance={1000} // Increased max distance to allow for better perspective
        />
      </Canvas>
    </div>
  );
}
