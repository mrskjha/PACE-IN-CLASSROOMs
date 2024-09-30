import { useState } from "react";
import "../styles/Learning.css";
import LightFundamentals from "./LightFundamentals"; // Ensure this component is correctly defined and exported

function Learning() {
  const [showLightFundamentals, setShowLightFundamentals] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // To keep track of the active section

  const cardData = [
    {
      title: "Shedding Light on PACE",
      content: "Color is a property of light perceived by the organisms that view it...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zfK35DbIRXUzrcOR0lz0RbfgOLMghIrASA&s"
    },
    {
      title: "The Color Equation",
      content: "The color of objects is influenced by how that object interacts with the incoming light...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zfK35DbIRXUzrcOR0lz0RbfgOLMghIrASA&s"
    },
    {
      title: "Incoming Light Spectrum - Sunlight!",
      content: "While our Sun emits a wide range of electromagnetic wavelengths...",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zfK35DbIRXUzrcOR0lz0RbfgOLMghIrASA&s"
    }
  ];

  const explore = (section) => {
    setActiveSection(section); // Set the active section
    setShowLightFundamentals(true); // Show LightFundamentals component
  };

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      {showLightFundamentals ? (
        <LightFundamentals section={activeSection} /> // Pass the active section to LightFundamentals if needed
      ) : (
        cardData.map((card, index) => (
          <div key={index} className="flip-card-container m-2">
            <div className="flip-card moving-rgb-border bg-black">
              {/* Front Side */}
              <div className="flip-card-front bg-gradient-to-b from-black to-blue-900 text-blue-200 border-r-2 relative rounded-lg overflow-hidden shadow-lg">
                <h1 className="text-center text-xl font-bold mt-4 text-white">
                  {card.title}
                </h1>
                <p className="text-center mt-2 text-gray-300 px-4">
                  {card.content}
                </p>
                <button
                  className="bg-teal-400 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-500 transition duration-300 absolute bottom-4 left-1/2 transform -translate-x-1/2"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the card from flipping when button is clicked
                    explore(card); // Call the explore function with the current card
                  }}
                >
                  Explore Me
                </button>
                <div className="flex justify-center items-center h-full mt-2">
                  <img
                    src={card.imageUrl}
                    alt="Description of the image"
                    className="object-cover h-full w-full rounded-xl"
                  />
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back bg-blue-800 text-white rounded-lg shadow-lg flex justify-center items-center p-4">
                <div>
                  <h2 className="text-xl font-bold">Learn More</h2>
                  <button
                    className="text-black bg-teal-400 py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-300"
                    onClick={() => explore(card)} // Call the explore function with the current card
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Learning;
