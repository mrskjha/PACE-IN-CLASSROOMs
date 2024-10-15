import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
// import ParticleRing from "./components/ParticeRing.jsx";
import { World } from "./components/World";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SquishyCard from "./components/Couses";
import Phytoplankton from "./components/Phytoplankton";
import OwnPace from "./components/OwnPace";
import { VideoLearning } from "./components/VideoLearning";
import { AuthProvider, useAuth } from "./components/AuthContext";
import LightFundamentals from "./components/LightFundamentals";
import Footer from "./components/Footer";
import VideoCources from "./components/VideoCources";
import GoogleMap from "./components/GoogleMap";
import Teacher from "./components/Teacher";
import FetchNASAData from "./components/FetchNASAData";
import Game from "./components/Game";
import Fiels from "./components/Files";
import TeacherUploads from "./components/teacherUploads";
import Game1 from "./components/Game1";

function App() {
  const globeConfig = {
    globeColor: "#282888",
    ambientLight: "#ffffff",
    directionalLeftLight: "#fff",
    directionalTopLight: "#aaa",
    pointLight: "#fff",
    arcData: [],
  };

  const [globeData, setGlobeData] = useState([]);

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
          {/* <ParticleRing className="absolute inset-0 z-0" /> */}
          <Navbar className="z-10 text-black" />
          <AuthRoutes globeConfig={globeConfig} globeData={globeData} />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

// Helper function to check if user is a teacher
const isTeacher = (user) => {
  console.log("User:", user); // Log user to check if it has a teacher role
  return user && user.category === "teacher";
};

// New component to handle routes and authentication
const AuthRoutes = ({ globeConfig, globeData }) => {
  const { isAuthenticated, user } = useAuth(); 

  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <Routes>
        {isAuthenticated ? (
          <>
            <Route 
              path="/" 
              element={
                <>
                  <World globeConfig={globeConfig} data={globeData} />
                  <About /> {/* Render About component here for the Home page */}
                  <Contact />
                </>
              } 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<SquishyCard />} />
            <Route path="/maps" element={<GoogleMap />} />
            
            {/* Check if user is defined and has a teacher role */}
            {isTeacher(user) ? (
              <Route path="/teacher" element={<Navigate to="/" />} />
            ) : (
              <Route path="/teacher" element={<><Teacher /><Fiels /></>} />
            )}

            <Route
              path="/learning/lightfundamentals"
              element={
                <>
                  <LightFundamentals />
                  <VideoCources />
                </>
              }
            />
            <Route path="/learning/phytoplankton" element={<Phytoplankton />} />
            <Route path="/learning/ownpace" element={<OwnPace />} />
            <Route path="/learning/fetchNASAData" element={<FetchNASAData />} />
            <Route path="/learning/teacherUploads" element={<TeacherUploads />} />
            <Route path="/video-learning" element={<VideoLearning className="z-50" />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game1" element={<Game1 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
