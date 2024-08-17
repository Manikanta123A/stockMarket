import React from 'react';
function LeftSection({image,title,para,a1,a2,h1,h2}) {
    return ( 
        <div className='container px-lg-5'>
            <div className='row px-lg-5'>
                <div className='col-lg-6 col-sm-12  pb-lg-5'>
                    <img src= {image} alt="image" style={{width:"95%"}}/>
                </div>
                <div className='col-2'></div>
                <div className='col-lg-4 col-sm-12 mt-lg-5 ml-0 pr-lg-5 pb-lg-5' >
                    <h1 className=''>{title}</h1>
                    <p className='mt-3'>{para}</p>
                    {a1? <a href={h1} style={{color:"blue"}}>{a1} <i class="fa-solid fa-arrow-right"></i></a>:null}
                    &nbsp;&nbsp;
                    {a2? <a href={h2} style={{color:"blue"}}>{a2} <i class="fa-solid fa-arrow-right"></i></a>:null}
                    <div className='row mt-3'>
                    <img className='col-6' src="images/googlePlayBadge.svg" alt="google"/>
                    <img className='col-6' src="images/appstoreBadge.svg" alt="google"/>
                </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;