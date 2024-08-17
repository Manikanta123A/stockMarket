import React from 'react';
import { Link } from 'react-router-dom';
function ModuleCard({Intorduction,Title,Num}) {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return (
         <div className='mb-5 mt-5 pt-5'>
        <div className='videos'>
            <h3 style={{marginRight:"4px"}}>{Num}</h3>
            <div style={{width:"100%",height:"5px",marginTop:"15px",backgroundColor:"orange"}}></div>
        </div>
        <Link to={`/ModulePage/${Num}`} onClick={go} className="link" chapter={Num}>
            <h1 className='mt-4 fs-2'>{Title}</h1>
            <p>{Intorduction}</p>
        </Link>
        <Link to={`/ModulePage/${Num}`} onClick={go} className='mt-4 mr-3'>View Module</Link> &nbsp;&nbsp; <Link to={`/videoPage/${Num}`} href='*' className='ml-3'>Watch videos</Link>

    </div>
   );
}

export default ModuleCard;