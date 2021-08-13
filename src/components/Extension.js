import React from 'react';
import Extensiontext from './ExtensionText'
import ExtensionCards from './ExtensionCards'


const Extension = () => {
    return (
        <section id='extension' className='mx-auto mt-72 md:mt-32 max-w-7xl'>
            <Extensiontext/>
            <ExtensionCards/>
            
           
        </section>
    )
}

export default Extension;