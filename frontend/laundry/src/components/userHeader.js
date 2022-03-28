import Pricepop from "./price"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
const UserHeader = () => {

const [pricePop,setpricePop] = useState(false)
const navigate = useNavigate();
const Logout = () => {
  localStorage.clear();
  navigate("/");
};
    return (<header>
        <h4>LAUNDRY</h4>
        <nav>
          <ul>
            <li onClick={()=>setpricePop(true)}  >Pricing</li>
            <Pricepop trigger={pricePop} sendtrigger={setpricePop}></Pricepop>
            <li>Carrer</li>
            <li className="logoutButn" stylesheet="width:80px;">
            <a href="/" onClick={Logout}>
              Logout
            </a>
          </li>
            <div className='userAcc' >
                <div className='userImage'></div>
                <p className='userName' >User Name</p>
            </div>
          </ul>
        </nav>
      </header>)
}

export default UserHeader;

