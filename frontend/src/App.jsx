
import { useEffect } from "react";
import { useState } from "react";
import ParticleRing from "./components/particeRing";
import { World } from "./components/World"; // Assuming your globe logic is in World component
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const globeConfig = {
    globeColor: "#640D5F",
    ambientLight: "#ffffff",
    directionalLeftLight: "#fff",
    directionalTopLight: "#aaa",
    pointLight: "#fff",
    arcData: [/* Globe arc data here */]
  };
  const [globeData, setGlobeData] = useState([]);

  // Mock some data for the globe arcs
  useEffect(() => {
    const data = [
      {
        startLat: 37.7749,
        startLng: -122.4194,
        endLat: 40.7128,
        endLng: -74.0060,
        color: "#ff0000",
        arcAlt: 0.3,
        order: 1,
      },
      {
        startLat: 51.5074,
        startLng: -0.1278,
        endLat: 48.8566,
        endLng: 2.3522,
        color: "#00ff00",
        arcAlt: 0.3,
        order: 2,
      },
      // Add more arcs as needed
    ];
    setGlobeData(data);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {/* Particle Ring as background */}
      <ParticleRing />
      
      {/* Main Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <World globeConfig={globeConfig}  data={globeData}/>
      </div>


      <ParticleRing />
      <div className="absolute top-[100%] w-full h-full z-10  "><About /></div>
      <ParticleRing />
      
      
      <div className="absolute top-[200%] w-full h-full z-10  "><Contact /></div>
      {/* <ParticleRing />
      <div className="absolute top-[300%] w-full h-full z-10"><Service /></div>
      <Learning /> */}

     </div>



  );
}

export default App;