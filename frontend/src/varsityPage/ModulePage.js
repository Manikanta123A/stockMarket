import React from 'react';
import { Link,useParams } from 'react-router-dom';
import video from './data/data';
function ModulePage() {
    let {number} = useParams();
     let go = ()=>{
        window.scrollTo(0,0);
    }

    return ( <div className='container p-lg-5'>
        <div className='row p-lg-5 border-bottom'>
         <div className='videos col-4'>
            <h1 style={{marginRight:"4px"}}>{number}</h1>
            <div style={{width:"100%",height:"5px",marginTop:"30px",backgroundColor:"orange"}}></div>
        </div>
        <h2 className='mb-3'>{video[number].Title}</h2>
        <Link to={`/VideoPage/${number}`} onClick={go}>WatchVideos</Link>
        </div>
        <div className='row p-lg-5'>
            {video.map((ele)=>{
                if ( (ele.chapter) == number){
                    return ele.ChapterNames.map((e)=>{
                         return <><h3 className='px-lg-5'>{e}</h3> 
                         <p className='px-lg-5 mb-5'>{ele.ChapterContents[ele.ChapterNames.indexOf(e)]}</p>
                         </>
                    })
                }
            })}
        </div>
    </div> );
}

export default ModulePage;