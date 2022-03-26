import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "./sidebar";
import Header from "./header";
import '../styles/orderHistory.css';
import search from '../assests/search.svg'
import NoOrder from "./NoOrder";
import Footer from "./footer";

const OrderHistory = () => {
    const [order, setOrders] = useState([])
    const token = localStorage.getItem('token');
    useEffect(() =>{
        axios.get("http://localhost:5000/api/Createorder", {
            headers: {
              "Authorization": 'test ' + token
            }
          }).then(res => setOrders(res.data.orders));
   
    }
    ,[])
    let orderCount = 0
    let xx = 'even'
    orderCount = order.length > 0 ? order.length: orderCount;
    console.log(order)
    let count = 0
    if (orderCount === 0){
        return (
        <div>
        <Header/>
        <Sidebar />
        <NoOrder />
        <Footer />
        </div>);
    }else{
    return (
        <div>
            <Header />
            <Sidebar />
            <div className ="table-head">
                <p className ="order-count">Orders | {orderCount}</p>
                <button className="create-btn">Create</button>
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
                        }
                        return(
                           <tr className= {xx}>
                            <td>{item.orderId}</td>
                            <td>{item.orderDate}</td>
                            <td>{item.storeLocation}</td>
                            <td>{item.city}</td>
                            <td>{item.storePhone}</td>
                            <td>{item.totalItem}</td>
                            <td>{item.price}</td>
                            <td>{item.status}</td>
                            <td></td>
                            <td>view</td>
                        </tr>
                        )
                    })}
                   
                </tbody>
            </table>
            </div>
        </div>
    )}
}

export default OrderHistory;