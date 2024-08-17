import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Menu() {
  let [selectedicon, isselectedIcon] = useState(0)
  let [profiledropdown, isprofiledropdown] = useState(false)
  let [box,setbox] = useState(false)
  let Selecticon = (index)=>{
    isselectedIcon(index);

  }
  let profile=()=>{
    isprofiledropdown(!profiledropdown)
  }
  let logout = ()=>{
    setbox(!box)
  }
  let quit = ()=>{
    localStorage.clear()
    window.location.href="http://localhost:3001/";
  }
  let menu = "menu"
  let activemenu = "menu selected"
    return ( <>
        <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} onClick={()=>Selecticon(0)}>
            <p className={selectedicon===0? activemenu:menu}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/order" style={{textDecoration:"none"}} onClick={()=>Selecticon(1)}>
            <p className={selectedicon===1? activemenu:menu}>Order</p>
            </Link>
          </li>
          <li>
            <Link to="/holding" style={{textDecoration:"none"}} onClick={()=>Selecticon(2)}>
            <p className={selectedicon===2? activemenu:menu}>Holding</p>
            </Link>
          </li>
          <li>
            <Link to="/position" style={{textDecoration:"none"}} onClick={()=>Selecticon(3)}>
            <p className={selectedicon===3? activemenu:menu}>Position </p>
            </Link>
          </li>
          <li>
            <Link to="/Funds" style={{textDecoration:"none"}} onClick={()=>Selecticon(4)}>
            <p className={selectedicon===4? activemenu:menu}>Fund</p>
            </Link>
          </li>
           <li>
            <Link to="/App" style={{textDecoration:"none"}} onClick={()=>Selecticon(5)}>
            <p className={selectedicon===5? activemenu:menu}>APP</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username" onClick={logout}>USERID</p>
        </div>
        {box && <div className='logoutbox'> <Link onClick={quit} style={{textDecoration:"none",color:"black"}} ><h3>Logout</h3></Link></div>}
      </div>
      
          </div>




















      <div className="menu-container2">
            <img src="logo.png" style={{ width: "50px" }} />
            {selectedicon==0 && <h3>Dashboard</h3>}
            {selectedicon==1 && <h3>Order</h3>}
            {selectedicon==2 && <h3>Holding</h3>}
            {selectedicon==3 && <h3>Position</h3>}
            {selectedicon==4 && <h3>Fund</h3>}
            {selectedicon==5 && <h3>App</h3>}
            <div className="profile" >
              <div className="avatar">ZU</div>
              <p className="username" onClick={logout}>USERID</p>
            </div>
            {box && <div className='logoutbox'> 
              <Link onClick={quit} style={{textDecoration:"none",color:"black"}} ><h3>Logout</h3></Link>
              <Link to="/" style={{textDecoration:"none",color:"black"}} ><h3>Dashboard</h3></Link>
              <Link to="/order" style={{textDecoration:"none",color:"black"}} ><h3>Order</h3></Link>
              <Link to="/holding" style={{textDecoration:"none",color:"black"}} ><h3>Holding</h3></Link>
              <Link to="/position" style={{textDecoration:"none",color:"black"}} ><h3>Position </h3></Link>
              <Link to="/Funds" style={{textDecoration:"none",color:"black"}} ><h3>Fund</h3></Link>
              <Link to="/App" style={{textDecoration:"none",color:"black"}} ><h3>App</h3></Link>
            </div>}
      
        </div>
          </>
          
     );
}

export default Menu;