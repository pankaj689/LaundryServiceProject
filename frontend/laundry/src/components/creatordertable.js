import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/createordertable.css';
import "../style/stylebtn.css"
import Eachprodlist from "./Eachprodlist"
import Summary from './summary';


function Loop(props) {
  const token = localStorage.getItem('token');
  console.log(token);
  
  const [dt, setdt] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/prodlist")
      .then(res => {
        setdt(res.data.resultArray)
      }).catch(err => {
        console.log(`${err} in data fetching`)
      })
  }, [])
  console.log("dt", dt)

  return (
    <><div className='maindiv'>
      <div className='itemtable'>
        <div className='tablehead'>
          <div className='prodtype'>Produt Types</div>
          <div className='quntity'>Quantity</div>
          <div className='washtype'>Wash Type</div>
          <div className='price'>Price</div>
        </div>
      </div>

      {dt.map((item) => {
        return <Eachprodlist {...item} />;
      })}
    </div></>
  )
}

export default Loop

