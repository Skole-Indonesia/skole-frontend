import React, { useState } from "react";
import "./index.css";

const index = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-16 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
          Frequently asked questions
        </h1>
        <div className="mt-12 space-y-3">
          {data.map((item, index) => (
            <div className="border-2 border-gray-100 rounded-lg" key={index}>
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => handleClick(index)}
              >
                <h1 className="font-semibold text-gray-700">{item.question}</h1>
                {activeIndex === index ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full transform rotate-180 p-2 transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full p-2 transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                )}
              </button>
              {activeIndex === index ? (
                <div>
                  <hr className="border-gray-200 transition duration-300 ease-in-out" />
                  <p className="p-8 text-sm text-gray-500 transition duration-300 ease-in-out">
                    {item.answer}
                  </p>
                </div>
              ) : (
                <div>
                  <hr className="border-gray-200 transition duration-0 ease-in-out opacity-0 h-0" />
                  <p className="text-sm text-gray-500 transition duration-0 ease-in-out opacity-0 h-0">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
