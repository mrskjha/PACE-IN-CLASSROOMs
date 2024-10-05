import React, { useEffect, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, translateY: 20, scale: 0.95 }, // Start slightly below
  visible: { opacity: 1, translateY: 0, scale: 1 }, // Final state
};


function LightFundamentals() {
  const [expandedSections, setExpandedSections] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  // Toggle Function
  const toggleSection = (index) => {
    const newSections = [...expandedSections];
    newSections[index] = !newSections[index];
    setExpandedSections(newSections);
  };

  // Progress Bar Logic
  const getProgress = () => {
    const expandedCount = expandedSections.filter((section) => section).length;
    return (expandedCount / expandedSections.length) * 100;
  };

  const sections = [
    {
      title: "1. What is Light?",
      description:
        "Light surrounds us each day, but what exactly is it? A particle? A wave? Unfortunately, depending on the property being investigated, the answer varies from one ,  both , to  neither  as well as we re not quite sure.",
      extra:
        " Light is a form of energy that is visible to the human eye. It is a type of electromagnetic radiation that is made up of electromagnetic waves. These waves are produced by the vibration of charged particles. Light is made up of photons, which are particles of light. Photons are the smallest unit of light. They are massless and travel at the speed of light. Light is a form of energy that is visible to the human eye. It is a type of electromagnetic radiation that is made up of electromagnetic waves. These waves are produced by the vibration of charged particles. Light is made up of photons, which are particles of light. Photons are the smallest unit of light. They are massless and travel at the speed of light.",
      img: "https://pace.oceansciences.org/images/Freq_Wavelength_white_v2.jpg",
    },
    {
      title: "2. How is Light Categorized?",
      description:
        "This spectrum of energy, or spectrum of light, is referred to as the Electromagnetic Spectrum. NASA explores the properties of different wavelength regions in the electromagnetic spectrum ranging from radiowaves to gamma rays. Right around the middle of the spectrum we have visible light - the rainbow of colors we know and love. Just shorter than visible light are the ultraviolet wavelengths, which we wear sunscreen to protect ourselves from. Just longer than visible light is infrared, which we sense as warmth on our skin.",
      extra:
        "Let's look closer at the visible light portion of the spectrum. Blue light is more energetic than red light; i.e., it has a shorter wavelength than red light. Specifically, we can say that blue light wavelengths are between 450-490 nanometers (nm) long whereas red light is 620-750 nm long. One nanometer is the equivalent of 0.000000001 meters. When discussing how light interacts with the ocean and atmosphere, we often refer to wavelengths in terms of nm.",
      img: "https://pace.oceansciences.org/images/spectrum_radio_waves_graphic_web_0_arrows.png",
    },
    {
      title: "3. How Does Light Move or 'Behave'?",
      description:
        "Transmission of light waves occurs when light waves pass through an obstacle without a change of direction (e.g, a pane of glass or clear plastic). Obstacles that allow light to pass through unimpeded (unchanged) are called… you guessed it: transparent! The opposite of transparent is opaque, wherein light is unable to to penetrate an object and instead creates a shadow.Absorption occurs when photons from incoming light hit atoms and molecules in the object (e.g., pavement) and cause them to vibrate. The more an object's molecules move and vibrate, the hotter they become. If enough energy is absorbed, it may then be re-emitted from the object as infrared, or thermal energy (at a lower energy level than incoming light). Infrared cameras have sensors that measure the amount of heat emitted from objects, and display the results as thermal images.",
      extra:
        "Scattering occurs when a photon of incoming light hits an object and bounces off it in one or many directions. Scattering can change the wavelength of the light or leave it unchanged.Reflection occurs when incoming light hits an object and is redirected in a new and predictable direction. Smooth surfaces, like mirrors, or the still surface of a pond, reflect almost all light, which is why we can easily see our… you guessed it… reflection. Refraction occurs when light slows down very slightly and changes direction as it passes from one medium to another with a different density. This occurs, for example, as light travels between air and water. Refraction is why a pencil, partially submerged in a glass of water looks as if it has been bent. The change in direction is predictable if you know the densities of the materials that light is traveling through.",
      img: "https://pace.oceansciences.org/images/pace_spectrum.png",
    },
    {
      title: "4. Advanced Topic - Types of Scattering",
      description:
        " Scattering is the process by which small particles suspended in the atmosphere change the direction of light rays. The scattering of light plays a crucial role in the color of the sky, the brightness of the Sun, and the appearance of clouds. There are three main types of scattering: Rayleigh scattering, Mie scattering, and non-selective scattering. Each type of scattering is caused by different sized particles and has different effects on the light that passes through them.",
      extra:
        " Rayleigh scattering is caused by particles that are much smaller than the wavelength of the light being scattered. This type of scattering is responsible for the blue color of the sky and the red color of the Sun at sunrise and sunset. Mie scattering is caused by particles that are about the same size as the wavelength of the light being scattered. This type of scattering is responsible for the white color of clouds and the hazy appearance of the sky on a cloudy day. Non-selective scattering is caused by particles that are much larger than the wavelength of the light being scattered. This type of scattering is responsible for the white color of the sky on a clear day.",
      img: "https://pace.oceansciences.org/images/scattering_What_is_PACE_v3.jpg",
    },
    {
      title: "5. How Do Rainbows Work?",
      description:
        " Rainbows are a beautiful natural phenomenon that occur when light is refracted, or bent, as it passes through water droplets in the air. The light is then reflected off the back of the droplet and refracted again as it exits the droplet and travels to our eyes. The result is a beautiful spectrum of colors that we see as a rainbow.",
      extra:
        "These raindrops are acting like optical prisms, or white light splitters. You may be familiar with the acronym, ROYGBIV (red, orange, yellow, green, blue, indigo and violet)? This denotes the predictable order of the light wavelengths that occur when dispersed/refracted. More energetic wavelengths (e.g., violet) slow down slightly more than the less energetic wavelengths (e.g., red). Back inside our raindrop example, the dispersed light is reflected off the back of the raindrop, and refracted once again as it exits the raindrop back into air, and then travels to our eyes. Did you know that rainbows occur in the section of the sky opposite the Sun? So next time you want to see a rainbow, make sure to turn so the Sun is at your back.",
      img: "https://pace.oceansciences.org/images/Light_dispersion_conceptual_waves.gif",
    },
    {
      title: "6. What Determines the Color We See?",
      description:"Color is a property of light perceived by the organisms that view it. The color of objects is influenced by how that object interacts with the incoming light illuminating it. A banana appears yellow to the human eye because the banana peel is absorbing strongly all wavelengths of visible light except for a range of the yellow wavelengths, which are being reflected back to the viewer. This allows us to visually detect the object that our brain recognizes as a YELLOW BANANA ",
      extra:"Similarly, in the ocean, water molecules strongly absorb red light, preferentially leaving behind the blue light which we see as the deep azure color of the open ocean. Explore the wide range of ocean colors in PACE's Ocean Color Image Gallery.",
      img:"https://pace.oceansciences.org/images/PACEColorBananaRainbowRedraw_nosmudge.png"
    },{
      title:"7. What Determines the Color of an Object?",
      description:"We know that the color of an object that we see is due to the light reflected off of that object. If a banana is ripe, it will reflect back yellow light. If a banana is not ripe, it will reflect more green light. If the banana is very ripe, we'll see a black banana (and probably smell it too!).",
      extra:"Colors of light reflected from the peel of (A) an unripe, green banana versus (B) a ripe, yellow banana. Note the two highlighted wavelengths in both A and B. The green arrow at 550 nm notes the green region of the color spectrum, and the red arrow at 675 nm, notes the red region. When comparing these spectral distributions, these areas contribute significantly to the overall reflected color from bananas. Reflectance is expressed in relative units. ",
      img:"https://pace.oceansciences.org/images/3_Figure_BananaReflectanceB.png",
    },{
      title:"8. Measuring What's in the Ocean",
      description:"Just as bananas have spectral signatures, so do OACs in the ocean. The spectral signatures of each of these constituents – for example, chlorophyll, CDOM, sediment – tells scientists about their Inherent Optical Properties , information that is critical to deciphering which elements are being observed by PACE.",
      extra:"The spectral signatures of each of these constituents – for example, chlorophyll, CDOM, sediment – tells scientists about their Inherent Optical Properties , information that is critical to deciphering which elements are being observed by PACE.",
      img:"https://pace.oceansciences.org/images/Ocean_Modal_Bkgrd_1333x1333_JamesBay.png",
    },{
      title:"9. How Does the Atmosphere Interact With Light?",
      description:"The electromagnetic spectrum ranges from gamma rays to radio waves. However, the light that reaches the surface of the Earth does not contain this full suite of wavelengths. So what happened along the way between open space and the Earth’s surface? Well, the light had to make its way through the Earth’s atmosphere. The light that travels through the atmosphere is altered by attenuation. Click here for a deeper dive into attenuation .",
      extra:"One important element of light attenuation through the atmosphere is that not all wavelengths of light are reduced the same as they move toward the surface of the Earth -- some wavelengths of light pass easily through the atmosphere, while other wavelengths interact with components of the atmosphere and do not reach the surface of the Earth. The bands of wavelengths where light passes through the atmosphere unhindered are referred to as atmospheric windows",
      img:"https://pace.oceansciences.org/images/Solar_spectrum_en_v5.jpg",
    }
    ,{
      title:"10. Measuring What's in the Atmosphere",
      description:"Just as bananas have spectral signatures, so do aerosols, clouds, and gases in the atmosphere. Knowing the spectral signatures of individual components of the atmosphere provides scientists with critical information to decipher which elements are being observed by PACE. Click here for more information on Spectral Signatures . PACE's onboard instruments will work synergistically to decode complex signals of light into atmospheric components using three main sensors: the Ocean Color Instrument (OCI), and two polarimeters (SPEXone and HARP2).",
      extra:"The OCI is a highly advanced optical spectrometer that will enable continuous measurement of light at fine wavelength resolution. These hyperspectral light sensing capabilities will reveal a detailed range of colors reflected from the ocean and atmosphere, i.e., a detailed spectral signature. The more detailed the spectral signature, the more scientists can learn about the components of the ocean and atmosphere. Read more about how the detailed spectral information from the OCI informs science .",
      img:"https://pace.oceansciences.org/images/Aerosol_Modale_base_2000w.jpg",
    }
  ];

  useEffect(() => {
    // Show alert when progress reaches 100%
    if (getProgress() === 100) {
      alert("🎉 Congratulations! You've completed all sections! 🎉");
    }
  }, [expandedSections]);

  return (
    <div className="p-4 bg-black text-white pl-16  pt-24">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Fundamental Properties of Light
      </h1>

      {/* Circular Progress Bar */}
      <div className="flex justify-end mr-24">
        <CircularProgressWithLabel value={getProgress()} />
      </div>

      {/* Congratulatory Message */}
      {getProgress() === 100 && (
        <div className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4">
          🎉 Congratulations! You've completed all sections! 🎉
        </div>
      )}

      {sections.map((section, index) => (
       <motion.section
       key={index}
       className="mb-8 p-4 bg-black rounded-lg shadow-md"
       initial="hidden"
       whileInView="visible" // Trigger animation while in view
       variants={sectionVariants}
       transition={{
         duration: 0.5,
         delay: index * 0.1,
         type: "spring",
         stiffness: 300,
       }}
       viewport={{ once: false }} // Animation will play every time it comes into view
     >
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4 text-left">
            {section.title}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-left">
              <p className="text-white mb-4">{section.description}</p>
              {expandedSections[index] && (
                <p className="text-white mb-4">{section.extra}</p>
              )}
              <button
                className="bg-teal-400 hover:bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
                onClick={() => toggleSection(index)}
              >
                {expandedSections[index] ? "Show Less" : "Learn More"}
              </button>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 text-right">
              <img
                src={section.img}
                alt={section.title}
                className="max-w-xs rounded-lg mb-4 ml-48"
              />
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

export default LightFundamentals;
