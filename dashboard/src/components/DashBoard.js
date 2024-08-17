import React from 'react';
import Watchlist from './Watchlist';
import { Routes, Route} from 'react-router-dom'
import Summary from './Summary';
import Order from './order';
import Position from './Position';
import Holdings from './Holdings';
import Funds from './Funds';
import App from './App';
function DashBoard() {
    return ( 
        <>
        <div className='dashboard-container'>
           
                <Watchlist />
            <div className='content'>
                <Routes>
                    <Route path="/" element={<Summary/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/position" element={<Position/>}/>
                    <Route path="/holding" element={<Holdings/>}/>
                    <Route path="/Funds" element={<Funds/>}/>
                    <Route path="/App" element={<App/>}/>
                    <Route path="/App" element = {<Watchlist/>}/>
                </Routes>
            </div>
        </div>
        </>
     );
}

export default DashBoard;