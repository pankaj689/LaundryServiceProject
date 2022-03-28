import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Protected from './components/protected';
import UserAccountPage from './components/useraccount';
import OrderHistory from './components/orderHistory';
import CancelOrder from './components/cancelOrder';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>

        <Route  path ="/" index element ={<Login/>}></Route>
        <Route path ="/register" element ={<Register />} ></Route>
        <Route path ="/createorder" element = {<Protected Cmp = {UserAccountPage}/>}></Route>
        <Route path ="/history" element ={<Protected Cmp ={OrderHistory} />}> </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
