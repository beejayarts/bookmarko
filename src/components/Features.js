import React from 'react';
import Featurestext from '../components/Featurestext';
import Featurestab from '../components/Featurestab';

const Features = () => {
    return (
        <section id='features' className='min-h-screen mb-10'>
            <div className='mx-auto mt-20 max-w-7xl'>
            <Featurestext/>
            <Featurestab/>
            </div>
        </section>
    )
}


export default Features
