import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Notfound({func}) {
    let [isvalue,setisvalue] = useState({email:"",username:"",password:""})
    let [error,seterror] = useState(false)
    let[message,setmessage] = useState("")
    let go =()=>{
        window.location.href="http://localhost:3000/";
    }
    let changeName = (e)=>{
        seterror(false)
        setmessage("")
        setisvalue({...isvalue, [e.target.id] : e.target.value})
    }
    let clickbutton = async(e)=>{
        e.preventDefault()
        setisvalue({email:"",username:"",password:""})
        axios.post("http://localhost:3002/Signup",isvalue).then((res)=>{
            if(res.data.message){
                seterror(true)
                setmessage(res.data.message)
            }
            if(res.data.sucess != undefined){
                localStorage.setItem("Name",res.data.user)
                func(res.data.token)

            }
        })
    }
    let login = ()=>{
        let f = document.getElementById("form2")
        let f1 = document.getElementById("form1")
        f.style.display="block"
        f1.style.display="none"
    }
    let signup = ()=>{
            let f = document.getElementById("form2")
            let f1 = document.getElementById("form1")
            f1.style.display="block"
            f.style.display="none"
    }
    let buttonclick = async (e)=>{
        e.preventDefault()
        console.log("checking")
        setisvalue({email:"",username:"",password:""})
        axios.post("http://localhost:3002/Login",{email:isvalue.email,password:isvalue.password}).then((res)=>{
            if (res.data.message != undefined){
            seterror(true)
            setmessage(res.data.message)
           }
           if (res.data.sucess != undefined){
                localStorage.setItem("Name",res.data.user)
                func(res.data.token)
           }
        })
    }
    return ( 
        <>
        <Link onClick={go} ><h1 className='text-center mt-5 pt-lg-5'>Back to the Page</h1></Link>
        <div className='container p-lg-5'>
        <div className='row p-lg-5'>
            <div className='col-lg-5 col-md-12 col-sm-12 px-lg-5'>
                <img src="signup.png" alt='image'/>
            </div>
            <div className='col-lg-2'></div>
            <div className='col-lg-5 col-md-12 col-sm-12 ml-10 px-lg-5 mt-5'>
                <button onClick={signup} className='btn btn-outline-primary mr-5' style={{marginRight:"10px"}}>SIGNUP</button>
                <button onClick={login} className='btn btn-outline-primary ml-3'>LOGIN</button>
                {error && <h1 className='fs-4' style={{color:"red"}}>{message}</h1>}
                <form noValidate className='needs-validation' id="form1">
                    <label className='form-label my-3' htmlFor='email'>Email</label>
                    <input className='form-control' type='email' id='email' placeholder='Enter your mail' value={isvalue.email} onChange={changeName} required/>
                    <label className='form-label my-3' htmlFor='name'>Name</label>
                    <input className='form-control' type='text' id='username' placeholder='Enter your name' onChange={changeName} value={isvalue.name} required/>
                    <label className='form-label my-3' htmlFor='password'>Password</label>
                    <input className='form-control mb-3' type='password' id='password' placeholder='Enter your password'onChange={changeName} value={isvalue.password } required/>
                    <button onClick={clickbutton} className='btn btn-primary'>Sign UP</button>   
                </form>
                <form noValidate className='needs-validation' id="form2" style={{display:"none"}}>
                    <label className='form-label my-3' htmlFor='email'>Email</label>
                    <input className='form-control' type='email' id='email' placeholder='Enter your mail' value={isvalue.email} onChange={changeName} required/>
                    <label className='form-label my-3' htmlFor='password'>Password</label>
                    <input className='form-control mb-3' type='password' id='password' placeholder='Enter your password'onChange={changeName} value={isvalue.password } required/>
                     <button onClick={buttonclick} className='btn btn-primary'>LOgin</button>  
                </form>
            </div> 
        </div>
        <div className='row px-lg-5'>
        <p className='mt-3 mb-3 text-muted px-lg-5 text-center'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
        <p className='pl-5 px-lg-5 text-muted text-center'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
        </div>
        </div>
        </>
     );
}

export default Notfound;