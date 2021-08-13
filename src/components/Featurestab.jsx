import React, { useState } from "react";

import Laptopillu from "../images/illustration-features-tab-1.svg";
import SearchImage from "../images/illustration-features-tab-2.svg";
import Manwoman from "../images/illustration-features-tab-3.svg";
import "../styles/featurestab.css";

const Featurestab = () => {
const [toggleTab, setToggleTab] = useState(1);

const toggler = (index)=>{
setToggleTab(index);
}


  return (
    <div id='tab-wrapper' className="relative pt-6 mx-auto mt-8 md:mt-0 max-w-7xl">
      {/* buttons */}
      <div className="flex flex-col items-center justify-center w-5/6 mx-auto mb-10 md:w-3/5 md:flex-row button-wrapper">
        <button
          id="simple-btn" onClick={()=>toggler(1)}
          className={`${toggleTab === 1 && 'btn-active'} mb-4 px-8 pb-6 md:mb-0 text-base font-semibold text-center outline-none focus:outline-none btn md:pt-6 text-blue-light `}
        >
          Simple Bookmarking
        </button>
        <button
          id="speedy-btn" onClick={()=>toggler(2)}
          className={`${toggleTab ===2 && 'btn-active'} mb-4 md:mb-0 px-8 pb-6 md:mx-20 text-base font-semibold text-center outline-none focus:outline-none btn md:pt-6 text-blue-light `}
        >
          Speedy Searching
        </button>
        <button
          id="easy-btn" onClick={()=>toggler(3)}
          className={`${toggleTab ===3 && 'btn-active'}  px-8 pb-6 md:pb-6 text-base font-semibold text-center outline-none focus:outline-none btn md:pt-6 text-blue-light`}
        >
          Easy Sharing
        </button>
      </div>

      {/* tab contents start here */}

      <div id="content1" className={`${toggleTab ===1 && 'show-content'} flex  flex-col md:flex-row items-center content`}>
        <div className="relative left">
          <img
            src={Laptopillu}
            className="w-4/5 mx-auto mb-10 md:w-full md:mx-0"
            alt="illustration of laptop screen"
          />
          <div id="illus-bg"></div>
        </div>

        {/* text content */}
        <div className="flex justify-center px-4 mt-8 md:px-12 md:ml-12 md:mt-0 md:w-2/5 right">
          <div className='flex flex-col items-center md:block'>
            <h3 className="text-xl font-bold text-center md:text-left md:text-3xl text-blue-dark">
              Bookmark in one click
            </h3>

            <p className="pt-3 mx-auto text-base text-center md:text-left md:pt-6 text-blue-light">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>

            <button
              id="tab-button"
              className="px-8 py-2 mt-6 text-base rounded shadow-lg text-white-neutral bg-blue-neutral"
            >
              More info
            </button>
          </div>
        </div>
      </div>

      {/* content 2 starts here  */}

      <div id="content2" className={`${toggleTab ===2 && 'show-content'} flex  flex-col md:flex-row items-center content`}>
        <div className="relative left">
          <img
            src={SearchImage}
            className="w-4/5 mx-auto mb-10 md:w-full md:mx-0"
            alt="illustration of laptop screen"
          />
          <div id="illus-bg"></div>
        </div>

        {/* text content */}
        <div className="flex justify-center px-4 mt-8 md:px-12 md:ml-12 md:mt-0 md:w-2/5 right">
          <div className='flex flex-col items-center md:block'>
            <h3 className="text-xl font-bold text-center md:text-left md:text-3xl text-blue-dark">
            Intelligent Search
            </h3>

            <p className="pt-3 mx-auto text-base text-center md:text-left md:pt-6 text-blue-light">
            Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks
            </p>

            <button
              id="tab-button"
              className="px-8 py-2 mt-6 text-base rounded shadow-lg text-white-neutral bg-blue-neutral"
            >
              More info
            </button>
          </div>
        </div>
      </div>

     
     {/* quasi content 2 starts here  */}

     <div id="content3" className={`${toggleTab ===3 && 'show-content'} flex  flex-col md:flex-row items-center content`}>
        <div className="relative left">
          <img
            src={Manwoman}
            className="w-4/5 mx-auto mb-10 md:w-full md:mx-0"
            alt="illustration of laptop screen"
          />
          <div id="illus-bg"></div>
        </div>

        {/* text content */}
        <div className="flex justify-center px-4 mt-8 md:px-12 md:ml-12 md:mt-0 md:w-2/5 right">
          <div className='flex flex-col items-center md:block'>
            <h3 className="text-xl font-bold text-center md:text-left md:text-3xl text-blue-dark">
            Share your bookmarks
            </h3>

            <p className="pt-3 mx-auto text-base text-center md:text-left md:pt-6 text-blue-light">
            Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>

            <button
              id="tab-button"
              className="px-8 py-2 mt-6 text-base rounded shadow-lg text-white-neutral bg-blue-neutral"
            >
              More info
            </button>
          </div>
        </div>
      </div>

     

    
    </div>
  );
}

export default Featurestab;
