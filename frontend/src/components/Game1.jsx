import React, { useState } from "react";

// Satellite components with unique images for each part
const components = [
  {
    id: "solarPanel",
    name: "Solar Panel",
    position: "left",
    description: "Generates power from sunlight",
    imgSrc:
      "https://static.vecteezy.com/system/resources/thumbnails/041/935/099/small_2x/ai-generated-the-last-rays-of-the-sun-cast-a-fiery-glow-over-a-vast-array-of-solar-panels-emphasizing-the-blend-of-technology-and-natural-energy-photo.jpeg",
  },
  {
    id: "antenna",
    name: "Communication Antenna",
    position: "top",
    description: "Facilitates communication with Earth",
    imgSrc: "https://images5.alphacoders.com/123/1230116.jpg",
  },
  {
    id: "thruster",
    name: "Thruster",
    position: "bottom-right",
    description: "Provides propulsion and orbit adjustment",
    imgSrc:
      "https://img.freepik.com/premium-photo/thruster-ignition-orbital-spacecraft-earth-human-space-flight-space-travel-ai-generated_1078939-1002.jpg",
  },
  {
    id: "camera",
    name: "Camera",
    position: "top-right",
    description: "Captures images of space and Earth",
    imgSrc:
      "https://www.arquimea.com/wp-content/uploads/2024/02/satellite-camera-systems.jpg",
  },
  {
    id: "mainBody",
    name: "Main Body",
    position: "center",
    description: "Houses key systems and controls",
    imgSrc:
      "https://c4.wallpaperflare.com/wallpaper/290/320/866/star-atmosphere-space-sky-wallpaper-preview.jpg",
  },
];

const Game1 = () => {
  const [droppedItems, setDroppedItems] = useState({
    left: null,
    top: null,
    bottom: null,
    "bottom-right": null,
    "top-right": null,
    center: null,
  });

  const [draggingItem, setDraggingItem] = useState(null);
  const [isGameComplete, setIsGameComplete] = useState(false); // New state to track game completion

  const handleDragStart = (component) => {
    setDraggingItem(component);
  };

  const handleDrop = (position) => {
    if (draggingItem) {
      setDroppedItems((prev) => ({ ...prev, [position]: draggingItem }));
      setDraggingItem(null); // Reset dragging item after drop

      // Check if the game is complete
      if (Object.values(droppedItems).filter(Boolean).length === components.length - 1) {
        setIsGameComplete(true); // Set game to complete if all components are dropped
      }
    }
  };

  const resetGame = () => {
    setDroppedItems({
      left: null,
      top: null,
      bottom: null,
      "bottom-right": null,
      "top-right": null,
      center: null,
    });
    setIsGameComplete(false); // Reset game completion status
  };

  return (
    <>
      <div className="bg-black text-white justify-between p-6">
        <h1 className="text-4xl font-bold mb-8 ml-[600px] mt-12">
          Build Your Satellite
        </h1>

        <div className="flex flex-wrap gap-6 w-[1300px] mx-auto">
          {/* Drag Items */}
          <div className="w-full sm:w-1/3">
            <h2 className="text-2xl mb-6 ml-[510px] w-[300px] mt-10">
              Satellite Components
            </h2>
            <div className="flex justify-between w-[1300px] gap-4">
              {components.map((component) => (
                <div
                  key={component.id}
                  draggable
                  onDragStart={() => handleDragStart(component)}
                  className="p-2 text-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 shadow-md"
                  title={component.description}
                >
                  <img
                    src={component.imgSrc}
                    alt={component.name}
                    className="w-32 h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-center">{component.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Satellite Model (Drop Zones) */}
          <div className="w-full h-[380px] sm:w-2/3 relative bg-slate-900 rounded-lg p-8 shadow-lg ml-[200px]">
            <h2 className="text-2xl mb-4 text-center">Satellite</h2>
            <div className="relative w-full h-[300px] bg-black rounded-lg">
              {/* Center (Main Body) */}
              <div
                className={`absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 ${
                  droppedItems.center ? "border-purple-600" : "border-gray-500"
                } rounded-lg flex items-center justify-center transition duration-300`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop("center")}
              >
                {droppedItems.center ? (
                  <img
                    src={droppedItems.center.imgSrc}
                    alt="Main Body"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400">Main Body</div>
                )}
              </div>

              {/* Left (Solar Panel) */}
              <div
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-24 h-24 border-4 ${
                  droppedItems.left ? "border-purple-600" : "border-gray-500"
                } rounded-lg flex items-center justify-center transition duration-300`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop("left")}
              >
                {droppedItems.left ? (
                  <img
                    src={droppedItems.left.imgSrc}
                    alt="Solar Panel"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400">Solar Panel</div>
                )}
              </div>

              {/* Top (Antenna) */}
              <div
                className={`absolute top-5 left-1/3 transform -translate-x-1/2 w-24 h-24 border-4 ${
                  droppedItems.top ? "border-purple-600" : "border-gray-500"
                } rounded-lg flex items-center justify-center transition duration-300`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop("top")}
              >
                {droppedItems.top ? (
                  <img
                    src={droppedItems.top.imgSrc}
                    alt="Antenna"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400">Antenna</div>
                )}
              </div>

              {/* Bottom Right (Thruster) */}
              <div
                className={`absolute bottom-0 right-[20%] transform translate-x-1/2 w-24 h-24 border-4 ${
                  droppedItems["bottom-right"]
                    ? "border-purple-600"
                    : "border-gray-500"
                } rounded-lg flex items-center justify-center transition duration-300`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop("bottom-right")}
              >
                {droppedItems["bottom-right"] ? (
                  <img
                    src={droppedItems["bottom-right"].imgSrc}
                    alt="Thruster"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400">Thruster</div>
                )}
              </div>

              {/* Top Right (Camera) */}
              <div
                className={`absolute top-7 right-[15%] transform translate-x-1/2 w-24 h-24 border-4 ${
                  droppedItems["top-right"]
                    ? "border-purple-600"
                    : "border-gray-500"
                } rounded-lg flex items-center justify-center transition duration-300`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop("top-right")}
              >
                {droppedItems["top-right"] ? (
                  <img
                    src={droppedItems["top-right"].imgSrc}
                    alt="Camera"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-gray-400">Camera</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {isGameComplete && (
          <div className="mt-6 p-4 bg-green-600 rounded-lg text-white text-lg">
            Congratulations! You have built your satellite!
          </div>
        )}

        {/* Reset Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={resetGame}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Reset Game
          </button>
        </div>
      </div>
    </>
  );
};

export default Game1;
