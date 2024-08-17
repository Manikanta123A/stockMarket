import React from 'react';
function Iamge() {
    return ( 
        <div className='container p-lg-5'>
            <div className= "row  border">
                <div className='col-2'></div>
                <div className='col-lg-4 pl-lg-0 py-lg-2'>
                    <img src="images/certified.svg"/>
                </div>
                <div className='col-lg-5 py-lg-2 pr-lg-0'>
                    <h1>Varsity Certified</h1>
                    <p className='mb-3 mt-3 text-muted'>Varsity Certified is an online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets.</p>
                </div>
            </div>
        </div>
     );
}

export default Iamge;