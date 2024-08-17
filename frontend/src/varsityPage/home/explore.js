import React from 'react';
import Cards from './cards';
function Explore() {
    return ( <>
    <div className='cotainer p-lg-5'>
        <div className='row p-lg-5'>
            <h2 className='px-lg-5 mb-5'>Explore varsity</h2>
            <Cards className="srcd px-lg-5" Image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} Title={"Modules"}/>
            <Cards className="srcd px-lg-5 " Image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} Title={"Modules"}/>
            <Cards className="srcd px-lg-5 " Image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} Title={"Modules"}/>
            <Cards className="srcd px-lg-5 " Image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} Title={"Modules"}/>
            <Cards className="srcd px-lg-5 " Image={"https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"} Title={"Modules"}/>
        </div>
    </div>
    </> );
}

export default Explore;