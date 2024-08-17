import React from 'react';
import Box from './box';
import axios from 'axios'
import video from '../data/data';
function Videos() {
    
    return ( <>
    <div className='container p-lg-5'>
        <div className='row px-lg-5'>
            <div className='col-lg-4 px-lg-5'>
                {video.map((ele)=>{
                    if((ele.chapter)%3 ===1){
                        return <Box Imag="images/video1.png" Title={ele.Title} Intorduction={ele.Content} Num={ele.chapter}/>
                    }
                })}
            </div>
            <div className='col-lg-4 px-lg-5'>
            {video.map((ele)=>{
                    if((ele.chapter)%3 === 2){
                        return <Box Imag="images/video1.png" Title={ele.Title} Intorduction={ele.Content} Num={ele.chapter}/>
                    }
                })}
            </div>
            <div className='col-lg-4 px-lg-5'>
            {video.map((ele)=>{
                    if((ele.chapter)%3 ===0){
                        return <Box Imag="images/video1.png" Title={ele.Title} Intorduction={ele.Content} Num={ele.chapter}/>
                    }
                })}
            </div>
        </div>
    </div>
    </> );
}

export default Videos;