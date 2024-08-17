import React from 'react';
import { Link } from 'react-router-dom';
function Pricing() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
        <div className='container px-lg-5  p-sm-2 mt-lg-0 mt-sm-5'>
            <div className='row  px-lg-5 p-sm-2 mt-sm-5'>
                <div className="col-lg-6 col-sm-12 px-lg-5  p-sm-2">
                    <h1 className="fs-2 mb-4">Unbeatable pricing</h1>
                    <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to="/Price" onClick={go} style={{color:"blue"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i> </Link>
                </div>
                <div className='col-lg-6 col-sm-12  px-lg-5  m-0 p-sm-2'>
                    <div className='row px-3 pb-3'>
                    <div className="border text-center col-lg-6 col-sm-12">
                        <h1 className=' mb-5 mt-3'>₹0</h1>
                        <p className='mb-4'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="border text-center col-lg-6 col-sm-12">
                        <h1 className='mb-5 mt-3'>₹20</h1>
                        <p className='mb-4'>Intraday and F&O</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;