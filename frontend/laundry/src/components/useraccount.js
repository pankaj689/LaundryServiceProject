import React, { useState, useEffect } from 'react'
// import "../styles/header.css";
import Sidebar from "./sidebar"
import "../style/useraccount.css"
import Footer from './footer';
// import NoOrder from "./NoOrder"
import Loop from "./createordertable2"
import { Create } from "./button"
import UserHeader from './userHeader';

const UserAccountPage = () => {
  const [noOrderState, setnoOrderState] = useState("NoOrders")
  const [ordertable, setordertable] = useState("displyordertab")
  const [disorderCount, setdisorderCount] = useState("Orders |0")

  const hideNoorder = () => {

    setordertable("displyordertab2")
    setnoOrderState("NoOrders2")
    setdisorderCount("Create Orders")
  }
  return (
    <div className='useracc'  >
      <UserHeader />
      <div className='midSection'>
          <Sidebar />
            <div className='sidediv'>
                <div className='midlefttop'>
                    <h5 className='initialOrder0' ><b>{disorderCount}</b></h5>
                    <input className='inputclass no-outline' type="text" name="search" />
                </div>
                <div className={noOrderState} >
                    <p className='Noorderpara' >No orders available</p>
                    <div onClick={hideNoorder} className="creatbtn" >
                      <Create />
                    </div>
                </div>
                 <div className={ordertable} ><Loop /></div>
            </div>
      </div>
      <Footer/>
    </div>

  );
}

export default UserAccountPage;
