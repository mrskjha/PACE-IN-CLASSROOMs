// import React, { useEffect, useRef, useState } from "react";
// import { Canvas, useThree, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { Color, Fog, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import countries from "../globe.json";

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const cameraZ = 300;

// const Globe = ({ globeConfig, data }) => {
//   const [globeData, setGlobeData] = useState(null);
//   const globeRef = useRef(null);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;
//     const globeMaterial = globeRef.current.globeMaterial();
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data || [];
//     let points = [];
//     for (let arc of arcs) {
//       const rgb = hexToRgb(arc.color);
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     const filteredPoints = points.filter((v, i, a) =>
//       a.findIndex((v2) => ["lat", "lng"].every((k) => v2[k] === v[k])) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => defaultProps.polygonColor);

//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => d.startLat)
//       .arcStartLng((d) => d.startLng)
//       .arcEndLat((d) => d.endLat)
//       .arcEndLng((d) => d.endLng)
//       .arcColor((e) => e.color)
//       .arcAltitude((e) => e.arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashGap(15)
//       .arcDashAnimateTime(defaultProps.arcTime);

//     globeRef.current
//       .pointsData(globeData)
//       .pointColor((e) => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e) => (t) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;

//       const numbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
//       globeRef.current.ringsData(globeData.filter((_, i) => numbersOfRings.includes(i)));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [globeData]);

//   return <threeGlobe ref={globeRef} />;
// };

// const WebGLRendererConfig = () => {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0xffaaff, 0);
//   }, [gl, size]);

//   return null;
// };

// const World = (props) => {
//   const { globeConfig } = props;

//   return (
//     <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }}>
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// };

// // Utility Functions
// const hexToRgb = (hex) => {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// };

// const genRandomNumbers = (min, max, count) => {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }
//   return arr;
// };

// export default World;
