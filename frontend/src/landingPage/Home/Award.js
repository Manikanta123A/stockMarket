import React from 'react';
import {Link} from 'react-router-dom';
function Award() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
        <div className='container p-lg-5 p-sm-0'>
            <div className="row p-lg-5 p-sm-0">
                <div className='col-lg-6  col-sm-12 p-lg-5 p-sm-0' >
                <h1 className='mb-lg-5 fs-2'>Trust with confidence</h1>

                <h2 className='fs-4'>Customer-first always</h2>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like..</p>
                              
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                             
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                             
                <h2 className='fs-4'>Do better with money</h2>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                      
                </div>
                <div className='col-lg-6 col-sm-12 mt-2 p-lg-5 p-sm-0'>
                    <img src="https://zerodha.com/static/images/ecosystem.png" style={{width:"100%", height:"90%"}} className='mb-2'/>
                    <div className='ml-sm-0 mb-sm-4'>
                    <Link onClick={go} to='/product'className='ml-5' style={{margin:"2rem 2rem 0 4rem"}}>Explore Out Products <i class="fa-solid fa-arrow-right-long"></i></Link>
                    <a className='ml-2'>Try Kit Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <img src="images/pressLogos.png" className="ims"></img>
            </div>
        </div>
     );
}

export default Award;