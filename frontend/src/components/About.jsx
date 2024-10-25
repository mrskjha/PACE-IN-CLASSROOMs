// import ParticleRing from "./ParticeRing"
import {Suspense, lazy} from "react"
const ParticleRing = lazy(() => import('./ParticeRing'));
import ModernHome from "/src/assets/satellite.png";
import smallimg from "/src/assets/home1.png" 



const About = () => {
    return (
      <>
      
      <Suspense fallback={<div>Loading...</div>}>
          <ParticleRing className="" />
      </Suspense>
      <div>
          <div className=" absolute top-[100%] w-full h-screen ">
      
   
      <div className=" text-white min-h-screen flex flex-col items-center justify-center">
        <div className="relative max-w-5xl mx-auto p-8">
        
          <div className="absolute top-0 left-[-30%] w-32 h-32 ml-16 rounded-full border-4 border-purple-900 bg-transparent" ><img src={smallimg}></img></div>
              
          
          <div className="absolute top-96 right-[-30%] w-32  h-32 mr-24 rounded-full border-4 border-purple-900 bg-transparent" ><img src={smallimg}></img></div>
          
          
          <div className="flex flex-col md:flex-row items-center">
           
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-full overflow-hidden border-4 border-black ">
                <img
                  src={ModernHome}
                  alt="Modern Home"
                  className="object-cover h-72 w-72"
                />
              </div>
            </div>
            
           
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Pace Satellite</h2>
              <p className="mb-4">
                PACE is a satellite mission that will make global ocean color measurements to provide extended data records on ocean biology, biogeochemistry, and ecology. .

              </p>
              <p className="mb-4">
                PACE will carry a state-of-the-art ocean color instrument, the Ocean Color Instrument (OCI), and two polarimeters, the Polarization and Directionality of Earth's Reflectances (PADER) and the Compact Ocean Polarimeter (COP). .
              </p>
              
            </div>
          </div>
        </div>
      </div>
 
  
          </div>
      </div>
      </>
    )
  }
  
  export default About