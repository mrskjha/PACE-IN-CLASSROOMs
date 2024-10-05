import React, { useEffect, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, translateY: 20, scale: 0.95 }, // Start slightly below
  visible: { opacity: 1, translateY: 0, scale: 1 }, // Final state
};


function Phytoplankton() {
  const [expandedSections, setExpandedSections] = useState([
    false,
    false,
    false,
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
      "title": "What is Phytoplankton?",
      "description": "Phytoplankton are microscopic organisms that live in the sunlit layer of the ocean. They are crucial for the marine food web. discover the world of phytoplankton. marine food web.",
      "extra": "Phytoplankton are tiny plants and algae that live in the upper sunlit layer of almost all water bodies on Earth. Powered by the sun's energy, they come in many shapes and sizes. They serve as the base of the marine food web, and produce oxygen vital to life. Studying this incredibly diverse group is key to understanding the health - and future - of our ocean and life on earth. PACE's advanced ocean color technology is designed to help to distinguish who's who in terms of phytoplankton communities.",
      "img": "https://pace.oceansciences.org/images/phytopia-tutorial1.png"
    },
    {
      "title": "Importance of Phytoplankton",
      "description": "Phytoplankton serve as the primary producers in marine ecosystems, forming the base of the food chain. additional: They play a crucial role in the carbon cycle and are responsible for producing a significant portion of the oxygen we breathe. Understanding phytoplankton dynamics is essential for studying marine ecosystems and climate change. ",
      "extra": " They play a crucial role in the carbon cycle and are responsible for producing a significant portion of the oxygen we breathe. Understanding phytoplankton dynamics is essential for studying marine ecosystems and climate change. ",
      "img": "https://pace.oceansciences.org/images/pace_chlorophyll_v1.png"
    },
    {
      "title": "Primary Production",
      "description": "Primary production is the process by which phytoplankton convert sunlight into chemical energy. additional: This process forms the foundation of marine food webs and carbon cycling. chlorophyll concentration serves as an indicator of phytoplankton biomass. watch the video to learn more about primary production.",
      "extra": "This process forms the foundation of marine food webs and carbon cycling. chlorophyll concentration serves as an indicator of phytoplankton biomass. watch the video to learn more about primary production.",
      "img": "https://pace.oceansciences.org/images/pace_first_light_harp2.png"
    },
    {
      "title": "Factors Influencing Growth",
      "description": "Phytoplankton growth is influenced by light, nutrients, and water temperature. xtra: Understanding these factors is crucial for studying phytoplankton populations. Changes in these conditions can impact phytoplankton distribution and abundance.",
      "extra": "Understanding these factors is crucial for studying phytoplankton populations. Changes in these conditions can impact phytoplankton distribution and abundance.",
      "img": "https://pace.oceansciences.org/images/phytopia_demo.gif"
    },
    {
      "title": "Chlorophyll and Its Significance",
      "description": "Chlorophyll is the pigment that enables phytoplankton to photosynthesize. additional: Chlorophyll concentration serves as an indicator of phytoplankton biomass. satellite observations help monitor chlorophyll levels in the ocean.",
      "extra": "Chlorophyll concentration serves as an indicator of phytoplankton biomass.chlorophyll concentration serves as an indicator of phytoplankton biomass. satellite observations help monitor chlorophyll levels in the ocean.", 
      "img": "https://pace.oceansciences.org/images/get_to_know01.png"
    },
    {
      "title": "Harmful Algal Blooms",
      "description": "Harmful algal blooms are rapid increases in phytoplankton populations that can produce toxins. additional: These blooms can have severe effects on marine life and human health. PACE will help monitor and predict harmful algal blooms.",
      "extra": "These blooms can have severe effects on marine life and human health. PACE will help monitor and predict harmful algal blooms. monitor and predict harmful algal blooms.",
      "img": "https://pace.oceansciences.org/images/pace_first_light_spexone.png"
    },
    {
      "title": "Climate Change Effects",
      "description": "Climate change affects phytoplankton through temperature changes and nutrient availability.  additional: These changes can impact their growth rates and distribution. PACE will help monitor the effects of climate change on phytoplankton.",
      "extra": "These changes can impact their growth rates and distribution. PACE will help monitor the effects of climate change on phytoplankton. help monitor the effects of climate change on phytoplankton.",
      "img": "https://pace.oceansciences.org/images/pace_first_light_oci.png"
    },
    {
      "title": "Role of Citizen Science",
      "description": "Citizen science allows the public to contribute to phytoplankton research. additional: It enhances data collection and increases awareness of marine health. PACE will engage citizen scientists in phytoplankton research.",
      "extra": "It enhances data collection and increases awareness of marine health. PACE will engage citizen scientists in phytoplankton research. engage citizen scientists in phytoplankton research. ",
      "img": "https://pace.oceansciences.org/images/pace_first_light_harp2.png"
    },
    
  ]
  

  useEffect(() => {
    // Show alert when progress reaches 100%
    if (getProgress() === 100) {
      alert("🎉 Congratulations! You've completed all sections! 🎉");
    }
  }, [expandedSections]);

  return (
    <div className="p-4 bg-black text-white pl-16  pt-24">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Fundamental Properties of Phytoplankton
      </h1>
      <button className=" h-10 w-60 bg-gray-700 text-yellow-300 "><a href="https://pace.oceansciences.org/e-brochures.htm?id=1583">Learrn About Phytoplankton</a></button>

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
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://pace.oceansciences.org/phyto_quiz.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white text-lg font-semibold rounded-lg transition-colors duration-300"
        >
          Take the Quiz
        </a>
      </motion.div>
    </div>
  );
}

export default Phytoplankton;
