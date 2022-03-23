// <<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Login from "./components/login.js";
import AboutUS from "./components/aboutus";
// =======
// >>>>>>> 925014e8d72c22a3d4dababc70661653a7e145b0

import "./App.css";
import OrderHistory from "./components/orderHistory";

// import logo from "./logo.svg";
import "./App.css";
// import Login from "./components/login";

// import {Ragister,Ragisteruser,SigninReg,Signinhome,Create,Cancel,Process,Reset,Confirm,Go_To_Orders,Cancel_Order} from "./components/button"
import Refer from "./components/refer";
import Register from "./components/register";
function App() {
  return (
    <div className="App">
      {/* <<<<<<< HEAD */}
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Login />
      </section>
      <footer>
        <Refer />
        <AboutUS />
        <Footer />
      </footer>
      {/* <Ragister/>
      <Ragisteruser/>
      <SigninReg/>
      <Signinhome/>
      <Create/>
      <Cancel/>
      <Process/>
      <Reset/>
      <Confirm/>
      <Go_To_Orders/>
      <Cancel_Order/> */}
      {/* >>>>>>> 925014e8d72c22a3d4dababc706616545b03a7e1 */}
    </div>
  );
}

export default App;
