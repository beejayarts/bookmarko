import React from "react";
import chromelogo from "../images/logo-chrome.svg";
import firefoxlogo from "../images/logo-firefox.svg";
import operalogo from "../images/logo-opera.svg";
import "../styles/extensioncard.css";

const ExtensionCards = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around max-w-5xl mx-auto mt-10 min card-wrapper">
        {/* first card starts here */}
        <div className="flex flex-col items-center pt-10 pb-4 overflow-hidden rounded-lg shadow-2xl card-one w-72">
          <img className="w-20" src={chromelogo} alt="chrome logo" />
          <div className="mt-6 text-wrapper">
            <h4 className="font-bold text-center text-blue-dark">
              Add to chrome
            </h4>
            <p className="mt-2 text-sm text-blue-light">Minimum version 62</p>
          </div>
          <button className="px-12 py-3 mt-8 text-sm rounded card-button text-white-neutral bg-blue-neutral">
            Add & install extension
          </button>
        </div>
        {/* second card starts here */}
        <div className="flex flex-col items-center pt-10 pb-4 overflow-hidden rounded-lg shadow-2xl card-two w-72">
          <img className="w-20" src={firefoxlogo} alt="chrome logo" />
          <div className="mt-6 text-wrapper">
            <h4 className="font-bold text-center text-blue-dark">
              Add to chrome
            </h4>
            <p className="mt-2 text-sm text-blue-light">Minimum version 62</p>
          </div>
          <button className="px-12 py-3 mt-8 text-sm rounded card-button text-white-neutral bg-blue-neutral">
            Add & install extension
          </button>
        </div>

        {/* third card starts here */}

        <div className="flex flex-col items-center pt-10 pb-4 overflow-hidden rounded-lg shadow-2xl card-three w-72">
          <img className="w-20" src={operalogo} alt="chrome logo" />
          <div className="mt-6 text-wrapper">
            <h4 className="font-bold text-center text-blue-dark">
              Add to chrome
            </h4>
            <p className="mt-2 text-sm text-blue-light">Minimum version 62</p>
          </div>
          <button className="px-12 py-3 mt-8 text-sm rounded card-button text-white-neutral bg-blue-neutral">
            Add & install extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCards;
