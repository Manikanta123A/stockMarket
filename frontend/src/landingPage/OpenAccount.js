import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
        <div className='container p-lg-5'>
        <div className='row text-center'>
                <h1>Open a Zerodha account</h1>
                <p className='mb-5 mt-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link onClick={go} to='/signup'><button className='btn btn-primary p-lg-2 fs-5'style={{width:"150px", margin:"0 auto"}} type="submit">Sign up now</button></Link>
        </div>
    </div>
    );
}

export default OpenAccount;