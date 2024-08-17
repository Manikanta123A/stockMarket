import React from 'react';
function Eligibility() {
    return ( <div className='container p-lg-5'>
        <div className='row p-lg-5'>
            <div className='col-lg-6'>
                <h2>Format</h2>
                <p className='text-muted'>Answer 100 multiple-choice online questions in 100 minutes.</p>
                <h2>Eligibility</h2>
                <p className='text-muted'>Score a minimum of 65% and get a certificate as soon as you clear the test.</p>
            </div>
            <div className='col-lg-6'>
                <h2>Test topics</h2>
                <p className='text-muted'>Introduction to stock markets, Fundamental analysis, Technical Analysis, and Personal Finance (Mutual Funds)
                Study material is available in both text and video format. It is recommended to go through the text content for exhaustive information while using the videos as an aid to learning. Ensure to give yourself 2 to 4 weeks for preparation.</p>
            </div>
        </div>
    </div> );
}

export default Eligibility;