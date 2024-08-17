import React from 'react';
function Hero() {
    return ( <>
    <div className='container p-lg-3 py-lg-4'>
        <div className='row p-lg-3 py-lg-4'>
            <div className='col-lg-6 p-lg-5'>
                <h1 style={{fontSize:"5rem",fontWeight:"10rem"}}><b>Free and open</b></h1>
                <h2 className='mb-3'>stock market and financial education</h2>
                <p className='fs-5 text-muted'>Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at Zerodha. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.</p>
            </div>
            <div className='col-lg-6 p-lg-3'>
                <img src="images/varsityf.png" alt='logo' style={{width:"80%"}}/>
            </div>
        </div>
    </div>
    </> );
}

export default Hero;