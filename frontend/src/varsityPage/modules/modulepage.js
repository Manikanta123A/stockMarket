import React from 'react';
import ModuleCard from './modulecard';
import video from '../data/data';
function Module() {
    return ( <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                {video.map((ele)=>{
                    if((ele.chapter)%3 === 1){
                        return <ModuleCard Intorduction={ele.Content} Title={ele.Title} Num={ele.chapter} />}
                })}
            </div>
            <div className='col-lg-4'>
            {video.map((ele)=>{
                    if((ele.chapter)%3 === 2){
                        return <ModuleCard Intorduction={ele.Content} Title={ele.Title} Num={ele.chapter} />}
                })}
            </div>
            <div className='col-lg-4'>
            {video.map((ele)=>{
                    if((ele.chapter)%3 === 0){
                        return <ModuleCard Intorduction={ele.Content} Title={ele.Title} Num={ele.chapter} />}
                })}
            </div>
        </div>
    </div>);
}

export default Module;