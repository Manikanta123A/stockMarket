import React from 'react';
import { Link} from 'react-router-dom';
import VideoScreen from '../../videoScreen';
import { useState } from 'react';
function Junior() {
    let [embed, setembed] = useState("")
    let videolink = (embed)=>{
        console.log("hello")
        setembed(embed)
    }
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( <>
    <div className='container border-bottom'>
        <div className='row'>
            <div className='col-lg-6'>
                <h5 className='mb-5'>Module 1. Introduction to Stock Market (video series)</h5>
                <div className='mt-5  border orderx' style={{width:"60%", height:"400px"}}>

                        <div className='border-bottom ordery'>
                            <p  className='orderp' onClick={()=>{videolink("9155SZc96kk?si=zMdSVQW63L4AGbbo")}}>1. Ideas by the lake</p>
                            <p></p>
                        </div>
                        <div className='border-bottom ordery'>
                            <p  className='orderp' onClick={()=>{videolink("D916Xq4Fbxg?si=PDqJLfoJXWEC4-EH" )}}>2. The vegetable list</p>
                            <p></p>
                        </div>
                        <div className='border-bottom ordery'>
                            <p  className='orderp' onClick={()=>{videolink("5O2f--QwFEI?si=FqrZJ-dCbdibPwIr")}}>3. The Haircut Affair</p>
                            <p></p>
                        </div>
                       
                </div>
            </div>
            <div className='col-lg-6 text-end'>
                <VideoScreen Source={embed}/>
                <p className='text-start'>This is Recommended to show to your kids, This content might be look intresting to them</p>
            </div>
        </div>
    </div> </>);
}

export default Junior;