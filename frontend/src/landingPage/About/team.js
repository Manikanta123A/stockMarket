import React from 'react';
function Team() {
    return ( 
        <div className='containter p-lg-5'>
            <div className='row pt-2 mt-4 text-center'>
                <h1>People</h1>
            </div>

            <div className='row p-lg-5 pt-lg-1 text-muted' style={{lineHeight:"1.8", fontSize:"1.1em"}}>
                <div className="col-lg-6 col-sm-12p-lg-3 pr-lg-0" style={{textAlign:"center"}} >
                    <img src="images/nithinKamath.jpg" alt="Photo" className='rounded-circle' style={{width:"50%"}}/>
                    <p className='mt-2 ml-5'>Nithin Kamath</p>
                    <p className="mt-1">Founder,CEO</p> 
                </div>
                <div className='col-lg-6 col-sm-12 p-lg-5 pl-lg-0'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href="*">Homepage</a> / <a href="#">TradingQnA</a> / <a href="*">Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;