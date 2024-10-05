import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticleRing from "./components/particeRing";
import { World } from "./components/World";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SquishyCard from "./components/Couses";
import Phytoplankton from "./components/Phytoplankton";
import OwnPace from "./components/OwnPace";
import { VideoLearning } from "./components/VideoLearning";
import Login from "./components/Login";
import { AuthProvider, useAuth } from "./components/AuthContext";
import LightFundamentals from "./components/LightFundamentals";
import Footer from "./components/Footer";
import VideoCources from "./components/VideoCources";
import GoogleMap from "./components/GoogleMap";

function App() {
  const globeConfig = {
    globeColor: "#6439FF",
    ambientLight: "#ffffff",
    directionalLeftLight: "#fff",
    directionalTopLight: "#aaa",
    pointLight: "#fff",
    arcData: [],
  };

  const [globeData, setGlobeData] = useState([]);
  // Remove useAuth() from here; it will be called inside the routes

  useEffect(() => {
    const data = [
      {
        startLat: 37.7749,
        startLng: -122.4194,
        endLat: 40.7128,
        endLng: -74.006,
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
    ];
    setGlobeData(data);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="relative w-screen h-screen">
          <ParticleRing className="absolute inset-0 z-0" />
          <Navbar className="z-10 text-black" />
          <>
            <AuthRoutes globeConfig={globeConfig} globeData={globeData} />
            <ParticleRing />
            <div>
              <About className="absolute top-[400%] w-full h-full z-10 " />
            </div>
            <ParticleRing />
            <SquishyCard className="absolute top-[200%] w-full h-full z-10  " />
            <GoogleMap />
            <Footer />
          </>
          {/* <ParticleRing className="absolute inset-0  z-0" /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

// New component to handle routes and authentication
const AuthRoutes = ({ globeConfig, globeData }) => {
  const { isAuthenticated } = useAuth(); // Get authentication state

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      {isAuthenticated ? (
        <Routes>
          <Route
            path="/"
            element={<World globeConfig={globeConfig} data={globeData} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<SquishyCard />} />
          <Route path="/maps" element={<GoogleMap />} />
          <Route
            path="/learning/lightfundamentals"
            element={
              <>
                <LightFundamentals /> <VideoCources />
              </>
            }
          />
          <Route path="/learning/phytoplankton" element={<Phytoplankton />} />
          <Route path="/learning/ownpace" element={<OwnPace />} />
          <Route path="/video-learning" element={<VideoLearning />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
