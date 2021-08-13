import React, { useState } from "react";
import { DataFaq } from "../components/DataFaq";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import '../styles/Faqaccordion.css';


console.log(DataFaq);

const Faqaccordion = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (i) => {
    if(clicked === i){
        return setClicked(null)
    }

    setClicked(i);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 accordion">
      {DataFaq.map((data, index) => {
        return (
          <div className="max-w-xl px-4 mx-auto mb-8 md:px-0 accordion-wrapper">
            <div className="accordion-header">
              <div className='header-container'>
                <h5 className='font-semibold hover:text-red-neutral text-blue-dark'>{data.question}</h5>
                <button  className='accordion-btn focus:outline-none' onClick={()=>handleClick(index)}>
                  {clicked === index ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </div>
            </div>
            <div className={`${clicked === index ? 'accordion-body show': 'accordion-body'}`}>
              <div className="container">
                <p className='text-blue-light'>{data.answer}</p>
              </div>
            </div>
          </div>
        );
      })}

     <div className='flex items-center justify-center'>
     <button
              
              className="px-8 py-2 mt-6 text-base rounded shadow-lg text-white-neutral bg-blue-neutral"
            >
              More info
            </button>
     </div>
    </div>
  );
};

export default Faqaccordion;
