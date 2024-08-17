import React from 'react';
function RightSection({Image,Title,Para}) {
    return ( <>
    <div className='container p-lg-5'>
        <div className='row p-lg-5'>
            <div className='col-lg-6 px-lg-5'>
                <img src={Image} alt="iamge" style={{width:"80%"}}/>
            </div>
            <div className='col-lg-6 px-lg-5'>
                <h1 style={{fontSize:"5rem",fontWeight:"10rem"}}><b>{Title}</b></h1>
                <p>{Para}</p>
                <button className='btn btn-primary mt-3'>Learn More</button>
            </div>
        </div>
    </div>
    </> );
}

export default RightSection;