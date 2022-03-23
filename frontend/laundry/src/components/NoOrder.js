import React from 'react';
import {Create} from "./button"
const NoOrder  = function noorder () {

    return (
        <div className='btndiv'>
        <p className='NoOrders' >No Orders avaialble</p>
         <div className="btnCreat"><Create /></div>
    </div>
    )
}


export default NoOrder;