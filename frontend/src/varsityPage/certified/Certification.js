import React from 'react';
function Certificate() {
    return ( 
        <div className='container p-lg-5'>
            <div className= "row p-lg-5">
                <div className='col-2'></div>
                <div className='col-lg-4 pl-lg-5'>
                    <img src="images/Register.svg"/>
                </div>
                <div className='col-lg-5'>
                    <h1>Varsity Certified</h1>
                    <p className='mb-3 mt-3 text-muted'>Varsity Certified is an online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets.</p>
                    <p className='text-muted'>Easy registration by choosing an exam schedule convenient for you. A nominal fee of ₹250 + 18% GST is charged to cover the cost of organising the test.</p>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </div>
        </div>
     );
}

export default Certificate;