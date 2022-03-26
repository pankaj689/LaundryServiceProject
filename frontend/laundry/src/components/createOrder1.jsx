import { useState, useEffect } from 'react';
import axios from 'axios';

import washimgh from '../assests/washing-machine-hilight.jpg';
import washimg from '../assests/washing-machine.png';
import ironing from '../assests/ironing.jpg';
import ironingh from '../assests/ironing-hilight.jpg';
import towel from '../assests/towel.jpg';
import towelh from '../assests/towel-hilight.png';
import bleach from '../assests/bleach.jpg';
import bleachh from '../assests/bleach-hilight.jpg';
import nextId from "react-id-generator";

import '../styles/orderTable.css'


const OrderTable = () => {

    const washPrice = {
        wash: 20,
        iron: 15,
        fold: 10,
        bleach: 25
    }
    const [orderList, setOrderList] = useState([])

    const [tookOrder, setTookOrder] = useState([])
    const [wash, setWash] = useState([])
    const [eachPrice, setEachPrice] = useState(0)
    const [quantity, setQunatity] = useState(0)
    const [prod, setProdType] = useState([])
    const [eachOrder, setEachOrder] = useState({})

    const handleProdType = (e) => {
        setProdType([...prod, e.taget.name])
        let newP = prod[-1];
        setEachOrder({newP: [wash, eachPrice, quantity]})
        console.log(eachOrder)
        setTookOrder([...tookOrder, eachOrder])
        // setWash([])
        // setEachPrice(0)
        // setQunatity(0)
        // setEachOrder({})
        console.log(tookOrder)
    }
    const handleQunatity = (e) =>{
        setQunatity(e.target.value)
    }

    const handleSrcWash  = (e) => {
        e.target.src = washimgh
        let price = quantity*washPrice["wash"]
        setWash([...wash, e.target.name])
        setEachPrice(eachPrice+price)
    }
    const handleSrcIron = (e) =>{
        e.target.src = ironingh
        let price = quantity*washPrice["iron"]
        setEachPrice(eachPrice+price)
    }
    const handleSrcTowel = (e) =>{
        e.target.src = towelh
        let price = quantity*washPrice["towel"]
        setEachPrice(eachPrice+price)
    }
    const handleSrcBleach = (e) =>{
        e.target.src = bleachh
        let price = quantity*washPrice["bleach"]
        setEachPrice(eachPrice+price)
    }
    const Reset = (e) =>{
        let cls = e.target.className;
        let tag = document.getElementsByClassName(".cls")
        console.log(tag.value)
    }

    useEffect(() =>{

    const [orderList, setOrderList] = useState([])

        axios.get("http://localhost:5000/api/prodlist").then(res => setOrderList(res.data.resultArray))
    }, [])
    return (
        <div className="product-Container">

            <table>
                <thead className='order-header'>
                    <th className='product-details'>Product Types</th>
                    <th>Qunatity</th>
                    <th>Wash</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th></th>
                </thead>
                <tbody>
                    {orderList.map(item =>{
                        let idx = nextId()
                            return (
                            <tr key = {idx}>
                                <td className='prod-data' >
                                    <img name={item.prodType} onClick={handleProdType} src ={item.prodImg} alt="prod" />
                                    <div>
                                    <h>{item.prodType}</h>
                                    <p>{item.prodDesc}</p>
                                    </div>
                                </td>
                                <td><input onChange ={handleQunatity} type ="number"/>quantity</td>
                                <td className = {idx} onClick={handleSrcWash} ><img name="washing" src = {washimg}/></td>
                                <td><img className = {idx} onClick={handleSrcIron} name="ironing" src ={ironing} /></td>
                                <td ><img className = {idx} onClick={handleSrcTowel} name="towel" src ={towel} /></td>
                                <td><img className = {idx} onClick={handleSrcBleach} name="bleach" src ={bleach} /></td>
                                <td className = {idx}>Price</td>
                                <td><button className ="order-reset">Reset</button></td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
            <button className ='create-cancel'>Cancel</button>
            <button className ='create-submit'>Submit</button>

            <table className='maindiv' >
                <thead className='tablehead' >
                    <th className='prodtype' >Product Types</th>
                    <th className='quntity' >Qunatity</th>
                    <th className='washtype'   >Wash</th>
                    {/* <th></th>
                    <th></th>
                    <th></th> */}
                    <th className='price' >Price</th>
                    {/* <th></th> */}
                </thead>
                <tbody>
                    {orderList.map(item => {
                        return (
                            <tr className='tablerow'  >
                                <td className='prodinfo' >
                                    {/* <img src={item.prodImg} alt="prod" />
                                    <img className='prodimage' alt="prodimage" src={Item.prodImg} />
                                    <div>
                                        <h6>{item.prodType}</h6>
                                        <p>{item.prodDesc}</p>
                                    </div> */}
                                    <div>
                                        <img className='prodimage' alt="prodimage" src={Item.prodImg} />
                                    </div>
                                    <div className='namedex'>
                                        <h1 className={prodname} onClick={productname1} type="Number" name="prodType"   >{Item.prodType}</h1>
                                        <p className='des' >{Item.prodDesc}</p>
                                    </div>
                                </td>
                                <td className='inputdiv' > <input className='intinput' value={user.quantity} onChange={productname2} type="number" name="quantity" ></input></td>
                                <td className='opretionimg' >

                                    <div className={stylewash} onClick={changeStylewash} type="washing" name="wash"></div>
                                    <div className={styleiron} onClick={changeStyleiron} type="ironong" name="press" ></div>
                                    <div className={styletowel} onClick={changeStyletowel} type="fold" name="fold"></div>
                                    <div className={stylebleach} onClick={changeStylebleach} type="pack" name="pack"></div>
                                </td>


                                {/* <td>ironing</td>
                                <td>Fold</td>
                                <td>bleach</td>
                                <td>Price</td> */}
                                <td className='res' > <p className='initialprice' value="0" onClick={pricefun} type="Number" name="price"  >{dipprice}</p>
                                    <button className={resbtn} onClick={resFun} >Reset</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>

            <div className='orderbtn'>
                <div className='cle'><Cancel /></div>
                <div className='cle' onClick={console.log({ product })}><Process /></div>
            </div>


        </div>
    )
}

export default OrderTable;