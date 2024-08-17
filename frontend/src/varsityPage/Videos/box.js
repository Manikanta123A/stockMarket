import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Box({Imag,Title,Intorduction,Num}) {
    let [color,setcolor] = useState(false)
    let enter=()=>{
        setcolor(!color)
    }
    let leave = ()=>{
        setcolor(!color)
    }
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( <>
    <div className='mb-5'>
        <div className='videos'>
            <h3 style={{marginRight:"4px"}}>{Num}</h3>
            <div style={{width:"100%",height:"5px",marginTop:"15px",backgroundColor:"orange"}}></div>
        </div>
        <Link to={`/VideoPage/${Num}`} onClick={go} chapter={Num}>
        <div className='card border p-3'>
            <img src={Imag} alt='image'  className='card-img'/>
            <div className='card-img-overlay'>
             <h1 className='card-text uidds fs-2' onMouseEnter={enter} onMouseLeave={leave}>{color? <i className="fa-solid fa-circle-play" style={{color: "#74C0FC"}}></i>:<i className="fa-regular fa-circle-play"></i>}</h1>
            </div>
        </div>
        </Link>

        <div>
            <Link to={`/VideoPage/${Num}`} onClick={go} chapter={Num}>
            <h1 className='mt-4 fs-2 orderp'>{Title}</h1>
            <p >{Intorduction}</p>
            </Link>
            <Link to={`/ModulePage/${Num}`} onClick={go} className='mt-4'>View Module</Link>
        </div>
    </div>
    </> );
}

export default Box;