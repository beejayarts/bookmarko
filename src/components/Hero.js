import React from "react";
import Herolaptop from "../images/illustration-hero.svg";
import '../styles/hero.css'

const Hero = () => {
  return (
    <section id='Hero' className='mt-10 md:mt-20'>
      <div className='flex flex-col px-4 mx-auto max-w-7xl md:flex-row md:items-center md:justify-between'>
        <div className='mt-8 text-center md:text-left md:mt-0 text-content'>
          <h1 className='text-3xl font-medium md:font-bold md:text-5xl text-blue-dark'>
            A Simple Bookmark <br /> Manager
          </h1>
          <p className='pt-3 text-base md:pt-6 text-blue-light'>
            A clean and simple interface to organize your favorite 
            websites.<br/> Open a new browser tab and see your sites load 
            instatntly. Try it for free
          </p>
          {/* CTA buttons */}
          <div className='flex flex-col mt-5 md:flex-row'>
              <button id='left-button' className='w-3/4 px-8 py-2 mx-auto text-base rounded shadow-lg md:mx-0 md:w-auto text-white-neutral bg-blue-neutral'>Get it on Chrome</button>
              <button id='right-button' className='w-3/4 px-8 py-2 mx-auto mt-3 text-base rounded shadow-lg md:w-auto md:mt-0 md:ml-4 text-blue-dark bg-white-neutral' >Get it on Firefox</button>
          </div>
        </div>

        {/* image div */}
        <div className='relative order-first md:order-none'>
            <img src={Herolaptop} alt='hero illustration' className='w=4/5'/>
            <div id='illu-bg'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
