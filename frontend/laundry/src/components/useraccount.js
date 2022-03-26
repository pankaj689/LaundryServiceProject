import React from 'react';
import "../styles/header.css";
import Sidebar from "./sidebar"
import "../style/useraccount.css"
import Footer  from './footer';
// import {Create} from "./button"
import Loop from "./createordertable2"
import UserHeader from './userHeader';
// import NoOrder from "./NoOrder"


const UserAccountPage = () => {
  return (
    <div >
        <UserHeader />
        <div className='midSection'>
            <Sidebar/>
            <div className='sidediv'>
                <div className='midlefttop'>
                <h5 className='initialOrder0' ><b>Create Orders</b></h5>
                <input className='inputclass no-outline'   type="text" name="search"  />
                </div>      
              
        <div><Loop/></div>  
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}

export default UserAccountPage;
