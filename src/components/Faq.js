import React from 'react';
import Faqtext from '../components/Faqtext.js';
import Faqaccordion from '../components/Faqaccordion.js';


const Faq = () => {
    return (
        <section id='extension' className='mx-auto mt-72 md:mt-32 max-w-7xl'>
            <Faqtext/>
            <Faqaccordion/>
        </section>
    )
}

export default Faq
