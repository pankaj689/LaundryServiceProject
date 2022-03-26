import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/orderTable.css'


const OrderTable = () => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/prodlist").then(res => setOrderList(res.data.resultArray))
    }, [])
    return (
        <div className="product-Container">
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