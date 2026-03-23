

import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    // theme toggle container
    // <div className="">
    //     {/*1. theme toggle btn */}
     
    // </div>
     <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed left-5 bottom-5 px-4 py-2.5 bg-black dark:bg-white rounded-full 
        flex items-center gap-2  cursor-pointer"
      >
        {/*1. Background Icons */}
        <MdOutlineLightMode className="text-white dark:text-black text-lg z-0" />
        <MdOutlineDarkMode className=" text-white dark:text-black text-lg z-0" />

        {/* 2.Sliding Circle */}
        <div
          className={`z-10 absolute top-1/2 -translate-y-1/2 left-2.5 w-6 h-6 bg-white dark:bg-black rounded-full
            transition-transform duration-300 ease-in-out
            
            ${darkMode ? "translate-x-8" : "translate-x-0"}
          `}
        />
      </button>
  );
};

export default DarkLightMode;





//  useEffect(() => {
//     if (darkMode) {
//         document.documentElement.classList.add("dark")
//     } else {
//         document.documentElement.classList.remove("dark")
//     }
// }, [darkMode])