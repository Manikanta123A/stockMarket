import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div className='container p-5'>
        <div className='row text-center'>
                <h1>404 Not Found</h1>
                <p className='mb-5 mt-4 text-muted'>sorry, the page you are looking doesnot exist. </p>
              <Link to="/" ><button className='btn btn-primary p-2 fs-5'style={{width:"150px", margin:"0 auto"}} type="submit">Go Home</button></Link>
        </div>
    </div>
    );
}

export default NotFound;