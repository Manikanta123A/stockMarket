import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( <>

     <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
            <div class="container p-2">
                <Link onClick={go} class="navbar-brand mr-5" to="/varsity"><img src="http://localhost:3000/images/varsitylogo.png" alt="Logo" style={{width:"85%"}}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"40%"}}>
                    <ul class="navbar-nav ml-auto mb-2">
                        <li class="nav-item fs-3">
                            <Link class="nav-link active" aria-current="page" to="/Module">Modules</Link>
                        </li>
                        <li class="nav-item fs-3">
                            <Link class="nav-link active" to="/video" >Videos</Link>
                        </li>
                        <li class="nav-item fs-3">
                            <Link class="nav-link active" to="/Certified">Certified</Link>
                        </li>
                        <li class="nav-item fs-3">
                            <Link class="nav-link active" to="/JuniorPage">Junior</Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link active" to="/support">Support</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </> );
}

export default NavBar;