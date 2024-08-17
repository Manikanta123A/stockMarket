import React from 'react';
import { Link} from 'react-router-dom';
function Hero() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                    <img src="images/homeHero.png" className='mb-5'/>
                    <h1>Invest in Everything</h1>
                    <p className='mb-5 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <Link onClick={go} to="/signup"><button className='btn btn-primary p-2 fs-5'style={{width:"150px", margin:"0 auto"}} type="submit">Sign up now</button></Link>
            </div>
        </div>
     );
}

export default Hero;