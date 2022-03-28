// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import "../styles/summary.css";
// import Loop from "./createordertable2"
import { Confirm } from "./button"
// import {useNavigate, useLocation, Link } from "react-router-dom";
import nextId from "react-id-generator";
import SucessNotPop from "./sucessnote"

const Summary = (props) => {
  const state = props.sendData;
  console.log("props",props)
  console.log("props.sendData",props.sendData)
  console.log("state",state)
  var blarray = []
  let subprice = 0;
  let quntity = 0;
  for (let prod of Object.keys(state)) {
    var eachprod = state[prod];
    console.log(prod, eachprod);
    quntity+=parseInt(eachprod[1])
    subprice += eachprod[3]
    blarray.push(eachprod)
  }

  let name, value;
  const [user,setuser]= useState({prodType:[],totalItem:0,orderId:nextId(),orderDate:new Date().toLocaleString(), storeLocation:"", storeaddress:"" ,storePhone:"" ,subTotal:0,price:0,address:"Home:#223, 10th road, Jp Nagar, Bangalore"});
  const [addresstext , setaddresstext] = useState("hidtext")
  const [addpara,setaddpara] = useState("homepara")
  const [addpara2,setaddpara2] = useState("homepara")
  const [gotoPop,setgotoPop] = useState(false)
  const handleinput1 = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
    setaddpara2("homepara")
    setaddpara("homepara")
  }
  const setprod = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value,["prodType"]:blarray,["totalItem"]:quntity,["subTotal"]:subprice,["price"]:subprice+90});
    
  }
  const handleinput2 = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
  }
  const handleinput2other = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
    setaddpara2("homepara2")
    setaddpara("homepara")
  }
  const handleinput3 = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
    setaddpara("homepara2")
    setaddpara2("homepara")
  }

  const clickOnX = (e)=>{
    props.sendtrigger(false)
    setaddpara2("homepara")
    setaddpara("homepara")
    setaddresstext("hidtext")
  }
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
        window.alert("Your order is unsuccessfully.")
        console.log("Your order is unsuccessfully.")
      } else {
        setgotoPop(true)
        // window.alert("Your order is successfully.")
        console.log(" Your order is successfully.")  
      }
      // navigate("/history")
    }catch (e) {
     console.log( e.massage)
     console.log("inside catch block")
    }
    setaddpara2("homepara")
    setaddpara("homepara")
    setgotoPop(true)
    // props.sendtrigger(false)
  }
  return (props.trigger) ?
    (<>
    <div className='mainpop'  >
      <div className="summary">
        <header className="summary-header">
          <div className="header-left">Summary</div>
         <button type="button"className="header-right" onClick={clickOnX}> X </button>
         {/* ()=> props.sendtrigger(false)  */}
        </header>
        <div className="second-section">
            <div className="col1">
                <p className='namepara123' >Store Location</p>
              <input type="text" placeholder="Store location"  required
                  value={user.storeLocation} onChange = {setprod} autoComplete="off"
                  name="storeLocation" prodType="prodType" totalItem="totalItem" subTotal="subTotal" ></input>
            </div>
            <div className="col2">
              <p>
                <strong>Store Address:</strong>
              </p>
              <input type="text" required
                  value={user.storeaddress} onChange={handleinput2} autoComplete="off"
                  name="storeaddress"  placeholder="Stor Address"></input>
            </div>
            <div className="col3">
              <p>
                <strong>Phone</strong>
              </p>
              <input type="number"  required
                  value={user.storePhone} onChange={handleinput2} autoComplete="off"
                  name="storePhone" placeholder="Stor Phone"  ></input>
            </div>
        </div>
        <div className="third-section">
          <p className='orderPara' > order details</p>
          <div className='itemdiv' >
            {blarray.map((Item) => {
              return (
                <ul  className='ulelement' >
                  <li className='liItem' >{Item[0]}</li>
                  <li className='liItem'>{Item[2].join(",")}</li>
                  <li className='liItem3' >{Item[3]}</li>
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
          <div className="total-price"> <h1 className="total" >Total:Rs {subprice + 90}</h1> </div>
          <div className="address">
            <p className='AddreassPara' >Address</p>
            <div className="address-box">
              <p name="address"className={addpara} onClick={handleinput3} value="Home:#223, 10th road, Jp Nagar, Bangalore" >
                <strong>Home</strong>
                #223, 10th road, Jp Nagar, Bangalore
              </p>
              <p name="address" className={addpara2} onClick={handleinput2other}  value="Other:#223, 10th road, Jp Nagar, Bangalore"   >
                <strong>Other</strong>
                #223, 10th road, Jp Nagar, Bangalore
              </p>
              <textarea  className={addresstext} onChange={handleinput1} rows="4" cols="50" 
                  value={user.address}  autoComplete="off"
                  name="address"  >
              </textarea>
              <button  className="add"  onClick={()=>setaddresstext("hidtext2")}  >Add New</button>
            </div>
          </div>
          <div className="footer" >
          <div  className="btncnf" type="submit" value="Register" onClick={PostData}> 
          <Confirm /></div>
            <SucessNotPop trigger={gotoPop} sendtrigger={setgotoPop}  ></SucessNotPop>
          </div>
        </div>
      </div>

      </div>
    </>):"";

};

export default Summary;
