// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import "../styles/summary.css";
// import Loop from "./createordertable2"
import { Confirm } from "./button"
import { useLocation, Link } from "react-router-dom";
import nextId from "react-id-generator";
import SucessNot from "./sucessnote"

const Summary = (props) => {
  const location = useLocation();
  const state = location.state;
  var blarray = []
  let subprice = 0;
  let quntity =0;
  for (let prod of Object.keys(state)) {
    var eachprod = state[prod];
    console.log(prod, eachprod);
    quntity+=eachprod[1]
    subprice += eachprod[3]
    blarray.push(eachprod)
  }

  let name, value;
  const [user,setuser]= useState({prodType:blarray,totalItem:quntity,orderId:nextId(),orderDate:new Date().toLocaleString(), storeLocation:"", storeaddress:"" ,storePhone:"" ,subTotal:subprice,price:subprice+90,address:"Home:#223, 10th road, Jp Nagar, Bangalore"});
  const [addresstext , setaddresstext] = useState("hidtext")
 //Id:newId(),quntity :, date:new date()
  const handleinput2 = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
  }
  // const updateHome = (e)=>{
  //   name = e.target.name;
  //   value = e.target.value;
  //   setuser({...user,[name]:value});
  // }
  // const addnewaddress = (e)=>{
  //   setaddresstext("hidtext2")

  // }

  const PostData = async (e)=>{
    console.log("user",user)
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const {prodType,totalItem ,orderId ,orderDate  , storeLocation, storeaddress ,storePhone ,subTotal,price,address} = user ;
      const res = await  fetch("http://localhost:5000/api/Createorder",{
        method:"POST", 
         headers: {
            "Content-Type": "application/json",
            "Authorization": 'test ' + token
          }
          ,body:JSON.stringify({prodType,totalItem ,orderId ,orderDate, storeLocation, storeaddress ,storePhone ,subTotal,price,address})
      })

      const data = await res.json();
      if(data.status === 400  || !data ) {
        window.alert("Invalid Ragistretion")
        console.log("Invalid Ragistretion")
      } else {
        window.alert("Ragistretion Succesful")
        console.log(" Ragistretion Succesful")
      }
    
    }catch (e) {
     console.log( e.massage)
     console.log("inside catch block")
    }
    
    
  }


  return (
    <>
      {/* <Loop/> */}
      <div className="summary">
        <header className="summary-header">
          <div className="header-left">Summary</div>
          <div className="header-right button">
            <button type="button"> X </button>
          </div>
        </header>
        <div className="second-section">
          <div className="three-cols">
            <div className="col1">
              <div className="name">
                <p>Store Location</p>
              </div>
              <input type="text" placeholder="Store location"  required
                  value={user.storeLocation} onChange = {handleinput2} autoComplete="off"
                  name="storeLocation"  ></input>
            </div>
            <div className="col2">
              <p>
                <strong>Store Address:</strong>
              </p>
              <input type="text" required
                  value={user.storeaddress} onChange={handleinput2} autoComplete="off"
                  name="storeaddress"></input>
            </div>
            <div className="col3">
              <p>
                <strong>Phone</strong>
              </p>
              <input type="number"  required
                  value={user.storePhone} onChange={handleinput2} autoComplete="off"
                  name="storePhone"   ></input>
            </div>
          </div>
        </div>
        <div className="third-section">
          <p> order details</p>
          <div>
            {blarray.map((Item) => {
              return (
                <ul>
                  <li>{Item[0]}</li>
                  <li>{Item[2].join(",")}</li>
                  <li >{Item[3]}</li>
                </ul>
              )
            })}
          </div>
          <div className="pricedata" >
            <div className="flt">
              <div className="Sub" >
                Sub total:  {subprice}
              </div>
              <div className="Pickup">
                Pickup Charges:  90
              </div>
            </div>

          </div>

          <div className="total-price"> <div className="total" >Total:Rs {subprice + 90}</div> </div>

          <div className="address">
            <p>Address</p>
            <div className="address-box">
              <p name="address" onChange={handleinput2} value="Home:#223, 10th road, Jp Nagar, Bangalore" >
                <strong>Home</strong>
                #223, 10th road, Jp Nagar, Bangalore
              </p>
              <p name="address" value="Other:#223, 10th road, Jp Nagar, Bangalore"  onChange={handleinput2} >
                <strong>Other</strong>
                #223, 10th road, Jp Nagar, Bangalore
              </p>
              <textarea  className={addresstext} onChange={handleinput2} rows="4" cols="50" 
                  value={user.address}  autoComplete="off"
                  name="address"  >
                <button  className="Add" onClick={()=>setaddresstext("hidtext2")}  >Add New</button>
              </textarea>
            </div>
          </div>
          <div className="footer" >
          <div  className="btncnf" type="submit" value="Register" onClick={PostData}  > 
          
          <Confirm /></div>  
          </div>
        </div>
      </div>
    </>

  );
};

export default Summary;
