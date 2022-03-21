import React from 'react';
import "../style/stylebtn.css"

function Ragister (){
    return <button className='toragister'>Ragister</button>
}

function Ragisteruser (){
    return <button className='ragisterUser'>Ragister</button>
}

function SigninReg (){
    return <button className='toragister signinbtn '>Sign In</button>
}

function Signinhome (){
    return <button className='ragisterUser signinbtn'>Sign In</button>
}

function Create (){
    return <button className='createbtn'>Create</button>
}

function Cancel (){
    return <button className='cancelbtn'>Cancel</button>
}

function Process (){
    return <button className='processbtn'>Process</button>
}

function Reset (){
    return <button className='Resetbtn'>Reset</button>
}

function Confirm (){
    return <button className='confirmbtn'>Confirm</button>
}

function Go_To_Orders(){
    return <button className='Go_To_Orders'>Go To Orders</button>
}

function Cancel_Order(){
    return <button className='Cancel_order'>Cancel order</button>
}

export {Ragister,Ragisteruser,SigninReg,Signinhome,Create, Cancel,Process,Reset,Confirm,Go_To_Orders,Cancel_Order}