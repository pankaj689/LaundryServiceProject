import Sidebar from "./sidebar";
import Header from "./header";
import '../styles/orderHistory.css';
import search from '../assests/search.svg'

const OrderHistory = () => {
    // const [count, setCount] = useState(0)
    const count = 0;
    return (
        <div>
            <Header />
            <Sidebar />
            <div className ="table-head">
                <p className ="order-count">Orders | {count}</p>
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default OrderHistory;