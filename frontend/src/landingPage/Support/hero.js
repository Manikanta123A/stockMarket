import React from 'react';
function Hero() {
    return (
        <section className='container-fluid px-lg-5' style={{backgroundColor:"blue"}}>
            <div className='mt-5 px-lg-5 pt-lg-4' id="empty">
                    <h3 style={{color:"white"}}>Support Portal</h3>
                    <a className="fs-4 mb-1" style={{textDecoration:"underline",color:"White"}}>Text center</a>
            </div>
            <div className='row px-lg-5 pt-lg-5'>
                <div className='col-lg-6 col-sm-12 px-lg-5 pb-lg-5 mb-5'>
                    <h1 className='fs-3 text-white mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: How do i activate F&O ' className="mb-3"style={{width:"100%" , height:"40px"}}/><br/>
                    <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Track account opening </a>
                    <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Track segment activation </a>
                    <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Intraday margins </a>
                    <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Kite user manual</a>
                </div>
                <div className='col-lg-6 col-sm-12 px-lg-5'>
                <h1 className='fs-3 text-white mb-3'>Featured</h1>
                <ol className='text-white'>
                    <li>  <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Surveillance measure on scrips - August 2024 </a></li>
                    <li>  <a href='' style={{color:"white",margin:"10px", textDecoration:"underline"}}>Latest Intraday leverages and Square-off timings</a></li>
                </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;