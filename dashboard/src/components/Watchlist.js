import React,{useState,useEffect} from 'react';
import axios, { all } from 'axios';
import {Tooltip, Grow} from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'
function Watchlist() {
    let [allwatchlist, setallwatchlist] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:3002/allWatchlist').then((res)=>{
        setallwatchlist(res.data)
      })
    },[])
    return ( 
        <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {allwatchlist.map((list,index)=>{
          return(<>
             <Watchlistitem stock={list} key={index}/>
          </>)
        })}
      </ul>
    </div>
     );
}

export default Watchlist;
const Watchlistitem = ({stock})=>{
  const [showActions, setshowActions] = useState(false);
  const Mouseenter= (e)=>{
    setshowActions(true);
  }
  const MouseLeave = (e)=>{
    setshowActions(false)
  }
  return(
    <li onMouseEnter={Mouseenter} onMouseLeave={MouseLeave}>
      <div className='item'>
        <p className={stock.isDown? "up":"down"}>{stock.name}</p>
        <div className='item-info'>
          <span className='percent'>{stock.percent}</span>
          {stock.isDown?  (<KeyboardArrowDown className="down"  style={{marginLeft:"4px"}}/>): (<KeyboardArrowUp className='up'  style={{marginLeft:"4px"}}/>)}
          <span className='price' style={{marginLeft:"4px"}}>{stock.percent}</span>
        </div>
      </div>
      {showActions && <Watchlistaction/>}
    </li>
  )

}
const Watchlistaction = ({name})=>{
  return(
  <span className='actions'>
    <span>
      <Tooltip 
      title="Buy (B)"
      placement='top'
      arrow
      TransitionComponent={Grow}>
        <button className='buy'>B</button>
      </Tooltip>
      <Tooltip 
      title="Sell (S)"
      placement='top'
      arrow
      TransitionComponent={Grow}>
        <button className='sell'>S</button>
      </Tooltip>
      <Tooltip 
      title="Analytics (A)"
      placement='top'
      arrow
      TransitionComponent={Grow}>
        <button><BarChartOutlined/></button>
      </Tooltip>
      <Tooltip 
      title="More"
      placement='top'
      arrow
      TransitionComponent={Grow}>
        <button><MoreHoriz/></button>
      </Tooltip>
    </span>
  </span>);
}