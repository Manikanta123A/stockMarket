import React from 'react';
import { Link,useParams} from 'react-router-dom';
import VideoScreen from '../videoScreen';
import axios from 'axios'
import video from './data/data';
import { useState } from 'react';
function VideoPage() {
    const  {number}=useParams();
    let [embed, setembed] = useState("")
    let videolink = (embed)=>{
        console.log("hello")
        setembed(embed)
    }
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( <>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 p-lg-5'>
                <h5 className='mb-5'>{video[number].Title}</h5>
                <div className='mt-5  border orderx' style={{width:"60%", height:"400px"}}>
                    {video.map((ele)=>{
                       if (ele.chapter == number){
                        return ele.ChapterNames.map((e)=>{
                           return  <div className='border-bottom ordery'>
                           <p  className='orderp' onClick={()=>{videolink(ele.chapterLinks[ele.ChapterNames.indexOf(e)])}}>{e}</p>
                           <p></p>
                       </div>
                        })
                        
                       }
                    })}
                </div>
            </div>
            <div className='col-lg-6 text-end'>
                <Link onClick={go} to={`/video`} className='mb-5 mt-5 pt-5 text-end'>Back To The Module Pages</Link>
                <VideoScreen Source={embed}/>
                <p className='text-start'>We recommend reading this chapter on Varsity to learn more and understand the concepts in-depth.</p>
            </div>
        </div>
    </div>
    </> );
}

export default VideoPage;