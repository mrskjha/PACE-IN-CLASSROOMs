// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// export const SlideTabsExample = () => {
//   return (
//     <div className="bg-neutral-100 py-20">
//       <SlideTabs />
//     </div>
//   );
// };

// const SlideTabs = () => {
//   const [position, setPosition] = useState({
//     left: 0,
//     width: 0,
//     opacity: 0,
//   });

//   return (
//     <ul
//       onMouseLeave={() => {
//         setPosition((pv) => ({
//           ...pv,
//           opacity: 0,
//         }));
//       }}
//       className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
//       style={{ position: "relative" }} // Make sure the parent is relatively positioned
//     >
//       <Tab setPosition={setPosition}>Home</Tab>
//       <Tab setPosition={setPosition}>Pricing</Tab>
//       <Tab setPosition={setPosition}>Features</Tab>
//       <Tab setPosition={setPosition}>Docs</Tab>
//       <Tab setPosition={setPosition}>Blog</Tab>

//       <Cursor position={position} />
//     </ul>
//   );
// };

// const Tab = ({ children, setPosition }) => {
//   const ref = useRef(null);

//   return (
//     <li
//       ref={ref}
//       onMouseEnter={() => {
//         if (!ref?.current) return;

//         const { width } = ref.current.getBoundingClientRect();
        
//         // Set the position and width of the cursor
//         setPosition({
//           left: ref.current.offsetLeft, // Using offsetLeft for the horizontal positioning
//           width, // Width of the current tab
//           opacity: 1, // Make it visible
//         });
//       }}
//       className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black md:px-5 md:py-3 md:text-base"
//     >
//       {children}
//     </li>
//   );
// };

// const Cursor = ({ position }) => {
//   return (
//     <motion.li
//       animate={{
//         left: position.left,
//         width: position.width,
//         opacity: position.opacity,
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth transition
//       className="absolute z-0 h-7 rounded-full bg-black md:h-12"
//     />
//   );
// };
