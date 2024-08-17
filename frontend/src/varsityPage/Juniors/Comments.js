import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
function Comment() {
    let [comments, setcomments] = useState([])
    let [datas, setdatas] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/allcomment").then((res) => {
            setdatas(res.data)
        })
    }, [])
    let d = new Date()
    let month = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"]
    let [isvalue, setisvalue] = useState({ Name: "", comment: "" })
    let changeName = (e) => {
        setisvalue({ ...isvalue, [e.target.id]: e.target.value })
    }
    let re = ()=>{
        axios.get("http://localhost:3002/allcomment").then((res) => {
            setdatas(res.data)
        })
    }
    let buttonclick = (e) => {
        e.preventDefault()
        setisvalue({ Name: "", comment: "" })
        let d = new Date()
        axios.post("http://localhost:3002/comment", {...isvalue,Month:d.getMonth(), year: d.getFullYear(), hours:d.getHours(), Minutes: d.getMinutes()}).then(() => {
        })
       setdatas([...datas,{...isvalue,Month:d.getMonth(), year: d.getFullYear(), hours:d.getHours(), Minutes :d.getMinutes()}])
    }
    return (<>
        <div className='container p-lg-5'>
            <div className='row border p-lg-5'>
                <h2 className='mb-5'>Recent Comments</h2>
                {datas.map((ele) => {
                    return <div className='border-bottom'>
                        <span style={{ display: "flex", flexDirection: "row" }}>
                            <img src="https://secure.gravatar.com/avatar/4b87f9843cfd8f9f59c232305c27b4b1?s=32&d=identicon&r=g" alt='img' style={{ width: "4%", display: "inline", marginRight: "10px", marginTop: "10px" }} />
                            <h2 className='mt-3 mb-2'>{ele.Name} says:</h2>
                        </span>
                        <span >{month[ele.Month - 1]},</span>
                        <span style={{ marginLeft: "8px" }}>{ele.year} at</span>
                        <span style={{ marginLeft: "8px" }} >{ele.hours}:{ele.Minutes}</span>
                        <p className='mb-4 mt-3 pl-lg-5'>{ele.comment}</p>
                    </div>
                })}
                <div className='border-bottom'>
                </div>
            </div>
            <div className='row p-lg-5'>
                <form noValidate className='needs-validation'>
                    <label className='form-label my-3' htmlFor='Name'>Name</label>
                    <input className='form-control' type='Name' id='Name' placeholder='Enter your Name' value={isvalue.Name} onChange={changeName} required style={{ width: "400px" }} />
                    <label className='form-label my-3' htmlFor='comment'>Comment</label>
                    <textarea className='form-control mb-3' type='textarea' id='comment' placeholder='Enter your Comment' onChange={changeName} value={isvalue.comment} required></textarea>
                    <button onClick={buttonclick} className='btn btn-outline-primary mb-4'>Post Comment</button>
                </form>
            </div>
        </div>
    </>);
}

export default Comment;