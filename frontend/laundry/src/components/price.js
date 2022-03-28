import React from 'react';
import "../style/price.css"

const NoOrder = function noorder(props) {
    return (props.trigger) ?
        (<div className='mainpop123'>
            <div className='price123'>
                    <h1  className="pricehead2123"  >Prices are as below</h1>
                    <p className='pricehead123'  >Wash - 20</p>
                    <p  className='pricehead123' >Press - 15</p>
                    <p  className='pricehead123'> Fold - 10</p>
                    <p  className='pricehead123' >Pack - 25</p>
                    <button  className='okbtn123' onClick={()=> props.sendtrigger(false)} >OK</button>  
            </div>
        </div>) : "" ;
}


export default NoOrder;