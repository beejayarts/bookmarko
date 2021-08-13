import React, { useState } from "react";
import logo from "../images/logo-bookmark.svg";
import '../styles/header.css'
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";



const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = ()=>{
    setClicked(!clicked)
  }

  return (
    <header className="relative ">
      <div className='flex justify-between px-6 mx-auto mt-5 align-center max-w-7xl'>
        <div className='w-32 cursor-pointer'>
          <img src={logo} alt="bookmarko branding" className='w-full'/>
        </div>

        <nav className={`${!clicked && 'hidden'} bg-white-neutral pb-8 md:pb-0 absolute w-full top-full mt-8 md:mt-0 md:static mx-auto md:mx-0 transition-all duration-150  left-0 z-20 md:block md:w-auto `}>
          <ul className='flex flex-col text-center md:flex-row align-center md:flex-end'>
            <li className='list-none md:mr-5'>
              <a href="#features" className='pt-3 text-base transition-all duration-100 md:pt-0 hover:text-red-neutral text-blue-dark'>FEATURES</a>
            </li>
            <li className='list-none md:mr-5'>
              <a href="#sectionid" className='pt-3 text-base transition-all duration-100 md:pt-0 hover:text-red-neutral text-blue-dark'>PRICING</a>
            </li>
            <li className='list-none md:mr-16'>
              <a href="#sectionid" className='pt-3 text-base transition-all duration-100 md:pt-0 hover:text-red-neutral hover:outline-0 text-blue-dark'>CONTACT</a>
            </li>
            <li className='mt-4 text-white list-none md:mt-0'>
              <a href="#sectionid" className='px-8 py-2 text-base rounded shadow-lg text-white-neutral bg-red-neutral login '>LOGIN</a>
            </li>
          </ul>
        </nav>

        <button onClick={handleClick} className="inline-block cursor-pointer md:hidden focus:outline-none">
          {clicked? <FaTimes/> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
