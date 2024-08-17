import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
            <div class="container p-2">
                <Link class="navbar-brand" to="/"><img src="images/logo.svg" alt="logo" style={{width:"25%"}}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/About" >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/product">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/Price">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/support">Support</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/varsity" class="nav-link active" href="">Education</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;