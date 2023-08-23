import React from "react";
import Button from "@Components/Button";

const index = ({
  heading,
  subHeading,
  buttonClassName,
  buttonText,
  imageUrl,
}) => {
  return (
    <>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-2xl">
              <h1
                className="text-2xl font-semibold text-gray-800 lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h1>
              <p className="mt-3 text-gray-600 text-sm lg:text-lg">
                {subHeading}
              </p>
              <Button className={buttonClassName} text={buttonText} />
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={imageUrl}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
