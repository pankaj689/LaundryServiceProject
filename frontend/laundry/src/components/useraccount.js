import React from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../styles/header.css";
import Sidebar from "./sidebar"
import "../style/useraccount.css"
import Footer  from './footer';
// import {Create} from "./button"
import Loop from "./creatordertable"
// import NoOrder from "./NoOrder"

const userAccountPage = () => {

  return (
    // <Router>
    <div >
        
        <header>
        <h4>LAUNDRY</h4>
        <nav>
          <ul>
            <li>Pricing</li>
            <li>Carrer</li>
            <div className='userAcc' >
                {/* <img className='userImage' alt="user Image"  src='img/Ellipse 645.png'/> */}
                <div className='userImage'></div>
                <p className='userName' >User Name</p>
            </div>
          </ul>
        </nav>
      </header>
        <div className='midSection'>
            <Sidebar/>
            <div className='sidediv'>
                <div className='midlefttop'>
                <h1 className='initialOrder0' ><b>Orders | 0</b></h1>
                <input className='inputclass no-outline'   type="text" name="search"  />
                </div>
                {/* <Routes>
                  <Route exact path='/no' elemtent={ <NoOrder/>} ></Route>
                  <Route exact path='/' elemtent={<Loop/>} ></Route>  
          </Routes> */}
          
        <div><Loop/></div>  
            </div>
        </div>
        <Footer/>
    </div>
    // </Router>
  );
}

export default userAccountPage;
