import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import UserAccountPage from './components/useraccount';
import OrderHistory from './components/orderHistory';
import CancelOrder from './components/cancelOrder';
import OrderTable from './components/createOrder1';
import Summary from './components/summary';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path ="/" index element ={<Login />} />
        <Route path ="/register" element ={<Register />} />
        <Route path ="/createorder" element ={<UserAccountPage />} />
        <Route path ="/history" element ={<OrderHistory />} />
        <Route path ="/cancel" element ={<CancelOrder />} />
        <Route path ="/order" element ={<OrderTable />} />
        <Route path ="/summary" element = {<Summary />} />

      </Routes>
    </div>
  );
}

export default App;
