import React from 'react';
function Brokerage() {
    return ( 
        <div className='container p-lg-5'>
            <div className='row border-top p-lg-5 mt-5'>
                <div className='col-lg-8 col-sm-12'>
                    <a href="*" className='px-lg-5 text-muted text-center'><h4>Brokerage Caluculator</h4></a>
                    <ul style={{fontSize:"0.8rem",textAlign:"start"}}className='mt-4'>
                    <li className='mt-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li className='mt-2'>Digital contract notes will be sent via e-mail.</li>
                    <li className='mt-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li className='mt-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li className='mt-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li className='mt-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-lg-4 col-sm-12'>
                <a href="*" className='px-lg-5 text-center'><h4 className='text-muted'>List of charges</h4></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;