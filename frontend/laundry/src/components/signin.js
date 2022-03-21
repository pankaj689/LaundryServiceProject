import React from 'react';
import "../style/signin.css"
import "../style/stylebtn.css"

import {Ragister,Signinhome} from "./button"
function Signin (){

    return (
        <div  className="main" >
           <h1 className='Laundry'>Laundry Service</h1>
                <p className='doorstep'>Doorstep Wash & Dryclean Service</p>
                <p className='notaccount'>Don’t Have An Account?</p>
                <div className="laundryreg"><Ragister /></div>
               
            <div className='right'>
               <h2 className='sign'>SIGN IN</h2>
               <input name="Mobile/email" value="" placeholder="Mobile/Email" className='mob' />
               <input name="password" value="" placeholder="Password" className='pass' />
               <a href='#' className='forget'>Forget Password?</a>
               <div className='londrysign'><Signinhome/></div>
            </div>
        </div>
    ) 
}
export {Signin}