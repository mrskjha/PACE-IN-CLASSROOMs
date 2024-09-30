"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "./globe.json"; // Example countries data

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspectRatio = window.innerWidth / window.innerHeight; // Update for full screen
const cameraZPosition = 300;

export function GlobeVisualization({ globeConfig, arcData }) {
  const [globePointsData, setGlobePointsData] = useState(null);
  const globeInstanceRef = useRef(null);

  const defaultConfig = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: globeConfig.globeColor || "#640D5F", // Control globe color through prop
    emissiveColor: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcAnimationTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
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

  return <threeGlobe ref={globeInstanceRef} />; // Adjusted globe position to the right
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
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <div className="w-screen h-screen flex  bg-none "> {/* Full screen */}
      {/* Heading and Paragraph on the Left Side */}
      <div className="flex flex-col justify-center mr-5 text-white  px-4 w-[700px] ">
        <h1 className="text-2xl font-bold mb-2 text-white ml-5">Start Exploring PACE Data Today!</h1>
        <p className="text-md mb-4  ">
          We are glad you are here , pace is new earth observing satellite
        </p>
        <div>
      <button className=' uppercase bg-gray-800 top-[30%] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 ml-[20%] mt-7'>
      Explore</button>
</div>
      </div>

      <Canvas 
        scene={scene} 
        camera={new PerspectiveCamera(50, aspectRatio, 180, 1800)} 
        className="w-full h-full" // Full screen
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
        <GlobeVisualization globeConfig={globeConfig} arcData={globeConfig.arcData} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={cameraZPosition}
          maxDistance={cameraZPosition}
          autoRotateSpeed={1}
          autoRotate={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

// Utility to convert hex to RGB
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Utility to generate random numbers for rings
function genRandomNumbers(min, max, count) {
  const numbers = new Set();
  

  while (result.size < count) {
    result.add(Math.floor(Math.random() * (max - min)) + min);
  }
  return Array.from(result);
}
