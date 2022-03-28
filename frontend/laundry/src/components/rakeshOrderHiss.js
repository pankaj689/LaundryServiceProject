import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "./sidebar";
import UserHeader from './userHeader'
import '../styles/orderHistory.css';
import search from '../assests/search.svg'
import NoOrder from "./NoOrder";
import Footer from "./footer";
import CancelOrder from './cancelOrder';
import OrderSummary from './odersumpop';
import { FaRegEye } from 'react-icons/fa';

const OrderHistory = () => {
    const [order, setOrders] = useState([])
    const [cls, setCls] = useState("")
    const [orderI, setOrderI] = useState("")
    const [viewId, setviewId] = useState("")
    const [pop, setPop] = useState(false)
    const [sumstate, setsumState] = useState(false)
    const [details, setDetails] = useState({})
    const token = localStorage.getItem('token');
    useEffect(() => {
        axios.get("http://localhost:5000/api/Createorder", {
            headers: {
                "Authorization": 'test ' + token
            }
        }).then(res => setOrders(res.data.orders));
    }
        , [])
    const getOrdDetail = async (idx) => {
        setviewId(idx);
        try {
            console.log(viewId);
            await axios.get(`http://localhost:5000/api/summary/${idx}`).then(res => setDetails(res.data.summaryData))
            setsumState(true)
        } catch (e) {
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
    orderCount = order.length > 0 ? order.length : orderCount;
    // console.log(order)
    let count = 0
    if (orderCount === 0) {
        return (
            <div>
                <UserHeader />
                <Sidebar />
                <NoOrder />
                <Footer />
            </div>);
    } else {
        return (
            <div className={cls}>
                {console.log(details)}
                <OrderSummary details={details} smstate={sumstate} setsmState={setsumState} />
                <UserHeader />
                <Sidebar />
                <div className="table-head">
                    <p className="order-count">Orders | {orderCount}</p>
                    <a href="/createorder"><button className="create-btn">Create</button></a>
                    <img className="search-glass" src={search} alt="" />
                    <input type="search" id="search-bar" />
                </div>
                <div className='history-table'>
                    <div className='table-content'>
                        <div className='table-att'>
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
                        </div>
                        {order.map(item => {
                            count += 1
                            if (count % 2 !== 0) {
                                xx = 'odd'
                            } else {
                                xx = 'even'
                            }
                            return (
                                <div key={item._id} className={xx}>
                                    <td>{item.orderId}</td>
                                    <td>{item.orderDate}</td>
                                    <td>{item.storeLocation}</td>
                                    <td>{item.city}</td>
                                    <td>{item.storePhone}</td>
                                    <td>{item.totalItem}</td>
                                    <td>{item.price}</td>
                                    <td className={(item.status === "Cancelled" ? "cancel-red" : "")}>{item.status}</td>
                                    <td className='cancel-order'>{(item.status === "Cancelled") ? "" :
                                        <p onClick={() => handleStatusUpdate(item.orderId)}>Cancel Order</p>}</td>
                                    <td ><FaRegEye onClick={() => getOrdDetail(item.orderId)} /></td>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <CancelOrder orderState={pop} popTrigger={setPop} orderI={orderI}></CancelOrder>
                <Footer />
            </div>
        )
    }
}
export default OrderHistory;