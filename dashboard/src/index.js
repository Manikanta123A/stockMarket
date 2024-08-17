import {React,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useSelector } from "react-redux" 
import { useDispatch } from "react-redux"
import Home from "./components/Home";
import Notfound from "./components/NotFound";
import {store} from "./components/store1";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
function App(){
  console.log("dfaksj")
  let [token,settoken] = useState("")
  let [isverified, setisverified] = useState(false)
  useEffect(()=>{
    axios.post("http://localhost:3002/Check", {token:localStorage.getItem('token')}).then((res)=>{
      if(res.data.sucess=="sucess"){
        console.log(res.data)
        localStorage.setItem("Name",res.data.user)
        setisverified(true)
      }
    })
  },[])
  let func= (tokener)=>{
    console.log("hello")
    localStorage.setItem("token",tokener)
    setisverified(true)
  }
  return(
  <BrowserRouter>
  <Routes>
  <Route path="/*" element={isverified? <Home/>:<Notfound func={func} />}/>
  </Routes>
</BrowserRouter>)
}
root.render(
  <Provider store={store}>
     <App/>
  </Provider>
  
);