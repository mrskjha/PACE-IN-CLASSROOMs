"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "./globe.json"; // Example countries data
import { Link } from "react-router-dom";

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
        a.findIndex((v2) => ["lat", "lng"].every((key) => v2[key] === v[key])) === i
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
        (defaultConfig.arcAnimationTime * defaultConfig.arcLength) / defaultConfig.rings
      );
  };

  useEffect(() => {
    if (!globeInstanceRef.current || !globePointsData) return;

    const interval = setInterval(() => {
      if (!globeInstanceRef.current || !globePointsData) return;
      const activeRings = genRandomNumbers(0, arcData.length, Math.floor((arcData.length * 4) / 5));

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
    <div className="w-screen h-screen flex bg-none"> {/* Full screen */}
      {/* Heading and Paragraph on the Left Side */}
      <div className="flex flex-col justify-center mr-5 text-white px-[100px] w-[900px] ">
        <h1 className=" text-green-500 text-4xl font-bold mb-1">PACE</h1>
        <h1 className="text-2xl font-bold mb-2 text-white ">Start Exploring PACE Data Today!</h1>
        <p className="text-md mb-2">
          We are glad you are here, pace is a new earth observing satellite.
        </p>
        <div>
          <Link to="/courses">
          <button className='uppercase bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 mt-1'>
            Explore
          </button>
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
        <GlobeVisualization globeConfig={defaultGlobeConfig} arcData={globeConfig.arcData} />
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