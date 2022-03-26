import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import UserAccountPage from './components/useraccount';
import OrderHistory from './components/orderHistory';
import CancelOrder from './components/cancelOrder';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path ="/" index element ={<Login />} />
        <Route path ="/register" element ={<Register />} />
        <Route path ="/createorder" element ={<UserAccountPage />} />
        <Route path ="/history" element ={<OrderHistory />} />
      </Routes>
    </div>
  );
}

export default App;
