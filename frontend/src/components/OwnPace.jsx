import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element, Events } from "react-scroll";
import { motion } from "framer-motion";

// Step Data
const steps = [
  {
    title: "Step 1: Prepare Your Materials",
    description: [
      "Cut solid lines, including the red circle and two small red notches.",
      "Cut out the 'Bus End Piece' and save it until later.",
      "Fold along all dashed lines, creating a cube shape.",
      "Glue tabs marked '1' to the corresponding inner walls of the Bus, leaving the top open until the Beam and Solar Array are built.",
    ],
    image: "https://pace.oceansciences.org/images/paper_model_materials.png",
    imageAlt: "Materials",
  },
  {
    title: "Step 2: Assemble the Beam and Solar Array",
    description: [
      "Cut out the Beam. (If using thin paper, shorten or omit red notches.)",
      "Fold along the long dashed lines. Leave ends unfolded.",
      "Glue along the green dots to form a rectangular piece.",
      "Cut out the Solar Array and its 'End Piece.' Fold along all lines.",
      "Glue tabs marked '1' to the long edge of the Solar Array.",
      "Following directions printed on the Beam, place it in the Solar Array.",
      "Glue Solar Array tabs marked '2'.",
      "Fold back the ends of the Beam.",
      "Glue the 'Solar Array End Piece' over the Beam's folded end.",
      "Insert the Beam's other end in the hole in the Bus. Fold back its ends.",
      "With the Beam sitting in the notch, glue the top of the Bus closed.",
      "Glue the 'Bus End Piece' on top of the Beam's folded end.",
    ],
    image: "https://pace.oceansciences.org/images/paper_model_beam.png",
    imageAlt: "Beam Model",
  },
  {
    title: "Step 3: Cut Out and Assemble the Radiator Shield",
    description: [
      "Note the direction of red arrows and cut out the Radiator Shield.",
      "Fold along all lines. There is one dotted line ('valley fold').",
      "Glue tabs marked '1' to the short sides of the triangles (per red arrows).",
      "Push folded paper into the Radiator Shield, over the tab marked '2'.",
      "Glue the tab marked '2' to the bottom of the folded paper.",
    ],
    image: "https://pace.oceansciences.org/images/paper_model_shield.png",
    imageAlt: "Radiator Shield",
  },
  {
    title: "Step 4: Assemble the OCI",
    description: [
      "Cut out the OCI. Make all folds, including the valley above spectrographs.",
      "Glue areas marked '1' to form the rectangular solar calibration assembly.",
      "Glue tabs marked '2' to form the back of the OCI.",
      "Glue tabs marked '3' to form the data, control, and interface units.",
      "Glue tabs marked '4.' Each tab can be pinched closed separately.",
      "Glue tabs marked '5' to finish the front side of the OCI.",
      "Glue areas marked '6' to finish the bottom and the port side.",
    ],
    image: "https://pace.oceansciences.org/images/paper_model_oci.png",
    imageAlt: "OCI Model",
  },
  {
    title: "Final Assembly: Complete Your PACE Model",
    description: [
      "Glue the Radiator Shield to the OCI. Be sure to align the two white boxes.",
      "Glue the OCI/Radiator Shield to the Bus (or optional 'Hinge').",
      "Slightly bend down the Beam.",
    ],
    image: "https://pace.oceansciences.org/images/paper_model_hinge.png",
    imageAlt: "Final Model",
  },
];

// Step Component
const Step = ({ title, description, image, imageAlt }) => (
  <motion.section
    className="mb-8 p-4 bg-black rounded-lg shadow-md"
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    transition={{
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    }}
    viewport={{ once: false }}
  >
    <h2 className="text-3xl font-bold text-yellow-300 mb-4 border-b-2 border-yellow-300 pb-2">
      {title}
    </h2>
    <img
      src={image}
      alt={imageAlt}
      className="w-60 h-60 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300"
    />
    <ul className="list-disc ml-6 text-white space-y-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.section>
);

// Main OwnPace Component
const OwnPace = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen py-10 px-6 relative">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide mb-6 text-purple-600 mt-24">
          Build Your Own PACE
        </h1>
        <p className="text-lg font-light text-white max-w-3xl mx-auto">
          PACE is a self-paced, online course designed to help you learn about
          the ocean's influence on you and your influence on the ocean.
        </p>
      </motion.div>

      {/* Step-by-Step Instructions */}
      <div className="flex max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl space-y-12 w-full">
          {steps.map((step, index) => (
            <Element name={`step${index}`} key={index}>
              <Step
                title={step.title}
                description={step.description}
                image={step.image}
                imageAlt={step.imageAlt}
              />
            </Element>
          ))}
        </div>
      </div>

      {/* Interactive Button */}
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
};

export default OwnPace;
