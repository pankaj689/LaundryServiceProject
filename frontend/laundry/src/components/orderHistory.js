import { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from "./sidebarOrederhis";

// import Sidebar from "./sidebar";

import UserHeader from './userHeader'
import '../styles/orderHistory.css';
import search from '../assests/search.svg'
// import NoOrder from "./NoOrder";
import Footer from "./footer";
import CancelOrder from './cancelOrder';

import OrderSummary from './odersumpop';
import { FaRegEye } from 'react-icons/fa';
import UserAccountPage from './useraccount';



const OrderHistory = () => {
    const [order, setOrders] = useState([])
    const [cls, setCls] = useState("")
    const [pop, setPop] = useState(false)
    const [orderI, setOrderI] = useState("")

    const [viewId, setviewId] = useState("")
    const [CancelOrderBtn, setCancelOrderBtn] = useState("")

    const token = localStorage.getItem('token');
    const [sumstate, setsumState] = useState(false)
    const [details, setDetails] = useState({})
   

    useEffect(() =>{
        axios.get("http://localhost:5000/api/Createorder", {
            headers: {
              "Authorization": 'test ' + token
            }
          }).then(res => setOrders(res.data.orders));
    }
    ,[])


    const getOrdDetail = async (_idx) => {
        setviewId(_idx);
        try{
            console.log(viewId);
        await axios.get(`http://localhost:5000/api/summary/${_idx}`).then(res => setDetails(res.data.summaryData))
        setsumState(true)
        }catch(e){
            console.log(e.message);
        }
    }


    const handleStatusUpdate = (idx) => {
        setOrderI(idx)
        setPop(true)
        setCls('order-container')
      }


    let orderCount = 0
    let xx = 'even'
    orderCount = order.length > 0 ? order.length: orderCount;
    // console.log(order)

    let count = 0
    if (orderCount === 0){
        return (
        <div>

       
        <UserAccountPage/>
        </div>);
    }else{
    return (
        <div className={cls}>

            <OrderSummary details = {details} smstate= {sumstate} setsmState = {setsumState}/>
            <UserHeader/>
            <Sidebar/>



            <div className ="table-head">
                <p className ="order-count">Orders | {orderCount}</p>
                <a href ="/createorder"> <button className="create-btn">Create</button></a>
                <img className="search-glass" src ={search} alt ="" />
                <input  type="search" id ="search-bar" />
            </div>
            <div className= 'history-table'>

                <table>
                    <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Order Date & Time</th>
                        <th>Store Location</th>
                        <th>City</th>
                        <th>Store Phone</th>
                        <th>Total Itema</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th>View</th>

                        </tr>
                    </thead>

                    <tbody>
                        {order.map(item => {
                            count += 1
                            if (count %2 !==0){
                                xx = 'odd'
                            }else{
                                xx = 'even'
                            }
                            return(
                            <tr key={item._id} className= {xx}>
                                <td>{item.orderId}</td>
                                <td>{item.orderDate}</td>
                                <td>{item.storeLocation}</td>
                                <td>{item.city}</td>
                                <td>{item.storePhone}</td>
                                <td>{item.totalItem}</td>
                                <td>{item.price}</td>
                                <td className={(item.status ==="Cancelled"?"cancel-red": "")}>{item.status}</td>
                                <td className='cancel-order'>{(item.status === "Cancelled"|| item.status !== "Ready to Pick")?"":
                                    <p className={CancelOrderBtn} onClick = {() =>handleStatusUpdate(item.orderId)}>Cancel Order</p>}</td>
                                <td><FaRegEye onClick={() => getOrdDetail(item._id)}  /></td>
                            </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
            </div>

            <CancelOrder  orderState = {pop} popTrigger ={setPop} orderI ={orderI} StetusChannge={setCancelOrderBtn} ></CancelOrder>
            <Footer />

        </div>

    )}
}

export default OrderHistory;