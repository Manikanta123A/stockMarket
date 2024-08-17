import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h2 className='p-lg-5 my-5 fs-5 text-muted'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>
                <h1 className='mb-3'>The Zerodha Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <br />
                <br />

                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5' >
                    <img src="images/smallcaseLogo.png" alt="small case" style={{ width: "35%" }} />
                    <br /><br />
                    <p>Thematic investment platform</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5'>
                    <img src="images/streakLogo.png" alt="image" style={{ width: "35%" }} />
                    <br /><br />
                    <p>Algo & strategy platform</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5'>
                    <img src="images/sensibullLogo.svg" alt="iamge" style={{ width: "35%" }} />
                    <br /><br />
                    <p>oprions trading platform</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5'>
                <img src="images/zerodhaFundhouse.png" alt="image" style={{ width: "35%" }} />
                    <br /><br />
                    <p>Asset Management</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5'>
                <img src="images/dittoLogo.png" alt="img" style={{ width: "35%" }} />
                    <br /><br />
                    <p>Insurance</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-lg-3 mt-5'>
                  <img src="images/dittoLogo.png" alt="img" style={{ width: "35%" }} />
                    <br /><br />
                    <p>Insurance</p>
                </div>
            </div>
        </div>

    );
}

export default Universe;