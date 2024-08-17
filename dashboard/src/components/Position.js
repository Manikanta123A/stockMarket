import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Position() {
    let [allposition, setallposition] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3002/allposition").then((res)=>{
        setallposition(res.data)
      })
    },[])
    return (  <>
        <h3 className="title">Positions (2)</h3>
  
        <div className="order-table">
          <table>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
            {allposition.map((position,index)=>{
              let currValue = position.price * position.qty;
              const profit = currValue - position.avg*position.qty;
              const profitclass = profit>=0? "profit":"loss";
              const profitclass2 = position.isLoss? "loss":"profit";
              return( <tr key={index}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty.toFixed(2)}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td className={profitclass}>{currValue.toFixed(2)}</td>
                <td className={profitclass}>{profit.toFixed(2)}</td>
                <td className={profitclass2}>{position.day}</td>
              </tr>)
            })}
          </table>
        </div>
      </> );
}

export default Position;