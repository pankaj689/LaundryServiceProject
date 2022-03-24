import React from 'react';
import {Create} from "./button"
const NoOrder  = function noorder () {
    return (
        <div className='no-order'>
                <p>No orders available</p>
                <div>
                    <a href ="/createorder"><Create /></a>
                </div>
            </div>
 
    )
}


export default NoOrder;