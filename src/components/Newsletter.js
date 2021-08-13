import React from "react";

const Newsletter = () => {
  return (
    <section id="extension" className="mx-auto mt-72 md:mt-32 bg-blue-neutral">
      <div className="flex items-center justify-center py-24 mx-auto wrapper max-w-7xl">
        <div>
          <p className="mb-8 text-xs tracking-widest text-center md:text-base text-white-neutral">
            35000+ ALREADY JOINED
          </p>
          <h3 className="w-3/4 mx-auto text-xl font-semibold text-center md:text-3xl text-white-neutral">
            Stay up-to-date with what we are doing
          </h3>
          <div className="w-3/4 mx-auto mt-8 newsletterform">
            <form className='flex flex-col md:flex-row md:justify-around '>
            
              <input type="email" name="email" id='email' placeholder="Enter your email address " required className='px-10 py-3 rounded shadow-md focus:outline-none border-red-neutral' />
              <button className='px-8 py-2 mt-2 text-base rounded shadow-lg text-white-neutral bg-red-neutral hover:bg-white-neutral hover:text-red-neutral'>contact us</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
