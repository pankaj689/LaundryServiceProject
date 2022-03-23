import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/createordertable.css';
import {Cancel,Process} from "./button"
function Loop() {
  const [dt, setdt] = useState([])
  function item(element, index) {

      return (        
  <tr className='tablerow' key={index}>
    <td className='prodinfo '>
        <div>
        <img className='prodimage'  alt="prodimage" src={element.prodImg}/>
        </div>
        <div className='namedex'>
          <h1 className='prodname' >{element.prodType}</h1>
          <p className='des'  >{element.prodDesc}</p>
          </div>
        </td>
    <td  ><input className='intinput' type="Number" /></td>
    <td className='opretionimg' > 
      <div className='washing'></div>
      <div className='ironong'></div>
      <div className='towel'></div>
      <div className='bleach'></div>
     </td>
    <td><p className='initialprice' >—</p></td>
  </tr>
      )
  }
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
      <div className='maindiv'>
        <table className='itemtable'>
          <tr className='tablehead'>
    <th className='prodtype'>Produt Types</th>
    <th className='quntity'>Quantity</th>
    <th className='washtype'>Wash Type</th>
    <th className='price'>Price</th>
  </tr>
   {dt.map(item)}
  </table>
        <div className='orderbtn' >
         <div className='cle'  ><Cancel/></div>
      <div className='cle'><Process/></div>
        </div>
      </div>
  )
}

export default Loop


// {dt.map(item =>{
//   return  (<tr>
//     <td>
//       {item.prodImg}
//       <h1>{item.prodType}</h1>
//       <p>{item.prodDesc} </p>
//      </td>
//     {/* </td>
//     <td>
//       {item.prodType}
//     </td>
//     <td>
//      {item.prodDesc} 
//     </td> */}
//   </tr>)
  
  
// })}