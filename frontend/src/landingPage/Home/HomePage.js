import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Pricing from './pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
function HomePage() {
    return ( 
        <>
        <Hero/>
        <Award/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;