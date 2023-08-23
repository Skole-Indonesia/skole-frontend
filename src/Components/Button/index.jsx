import React from "react";

const index = ({ className, text }) => {
  return (
    // <button
    //   className={`${className} w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}
    // >
    <button
      className={`${className} w-full px-5 py-2 mt-6 text-sm tracking-wider uppercase transition-colors duration-300 transform rounded-lg lg:w-auto focus:outline-none`}
    >
      {text}
    </button>
  );
};

export default index;
