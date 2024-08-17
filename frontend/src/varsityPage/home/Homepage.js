import React from 'react';
import Hero from './hero';
import Explore from './explore';
import Varsity from './varsity';
import LeftImage from './leftimage';
import OpenAccount from '../../landingPage/OpenAccount';
import RightSection from './rightsection';
import NavBar from '../navbar';
function varsityHomePage() {
    return ( 
        <>
        <Hero/>
        <Explore/>
        <Varsity/>
        <RightSection Image={"images/certified.svg"} Title={"Certified"} Para={"An online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets."}/>
        <RightSection Image={"images/modules.svg"} Title={"Modules"} Para={"Explore all the open-access Varsity modules that cover the entire spectrum of financial literacy and capital markets; everything from savings and taxation to option strategies and technical analysis."}/>
        <OpenAccount/>
        </>
     );
}

export default varsityHomePage;