import React from 'react';
function Varsity() {
    return ( <>
    <div className='container px-lg-3 my-5' style={{backgroundColor:"lightgrey"}}>
        <div className='row px-lg-5 my-5'>
            <div className='col-lg-6 px-lg-5 my-5'>
                <h2>Varsity on mobile</h2>
                <p className='text-muted'>Explore stock market lessons in bite size modules, quizzes, and tests.</p>
            </div>
            <div className='col-lg-6 px-lg-5 my-5'>
                <img  className="ml-5" style={{width:"30%", marginLeft:"30px", display:"inline"}} src="images/googlePlayBadge.svg" alt="google"/>
                <img  className="mr-5" style={{width:"30%"}}src="images/appstoreBadge.svg" alt="google"/>
            </div>
        </div>
    </div>
    </> );
}

export default Varsity;