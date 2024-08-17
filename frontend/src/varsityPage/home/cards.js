import React from 'react';
function Cards({Image, Title}) {
    return ( <>
        <div className="card srcd px-lg-5 shadow p-3 mb-5 bg-white rounded" style={{width: "15rem" , height:"11rem",marginLeft:"30px"}}>
            <img className="card-img-top" src={Image} alt="Card image cap"/>
            <h5 className="card-title fs-2 mb-2">{Title}</h5>
        </div>
    </> );
}

export default Cards;