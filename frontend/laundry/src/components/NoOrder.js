import React from 'react';
import { Create } from './button';
import "../style/useraccount.css"
const Pricing  = function noorder () {
    return (
        <div className='no-order'>
        <p>No orders available</p>
        <div>
            <a href ="/createorder"><Create /></a>
        </div>
    </div>
    )
}


export default Pricing;