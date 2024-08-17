import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Holdings() {
    let [allholdings, setallholdings] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:3002/allholding').then((res)=>{
        setallholdings(res.data)
      })
    },[])
    return (   <>
        <h3 className="title">Holdings ({allholdings.length})</h3>
  
        <div className="order-table">
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
            {allholdings.map((stock,index)=>{
              let currValue = stock.price * stock.qty;
              const profit = currValue - stock.avg*stock.qty;
              const profitclass = profit>=0? "profit":"loss";
              const isdayloss = stock.isLoss? "loss":"profit";
              return(<tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profitclass}>{profit.toFixed(2)}</td>
                <td className={profitclass}>{stock.net}</td>
                <td className={isdayloss}>{stock.day}</td>
              </tr>)
            })}
          </table>
        </div>

  
        <div className="row">
          <div className="col">
            <h5>
              29,875.<span>55</span>{" "}
            </h5>
            <p>Total investment</p>
          </div>
          <div className="col">
            <h5>
              31,428.<span>95</span>{" "}
            </h5>
            <p>Current value</p>
          </div>
          <div className="col">
            <h5>1,553.40 (+5.20%)</h5>
            <p>P&L</p>
          </div>
        </div>
      </> );
}

export default Holdings;