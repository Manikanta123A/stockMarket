import React from 'react';
import { Link } from 'react-router-dom';
function Education() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
       <div className="container mt-5">
        <div className='row mt-5'>
            <div className='col-lg-6 col-sm-12 p-lg-5 p-sm-0'>
                <img src="images/education.svg" style={{width:"80%"}}/>
            </div>
            <div className="col-lg-6 col-sm-12 mt-5">
                <h1 className='fs-3 mt-5 mb-4'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <Link onClick={go} to='/varsity' className="mb-4">Varsity <i class="fa-solid fa-arrow-right-long"></i></Link>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='https://tradingqna.com/' className='mt-4'>TrendingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;