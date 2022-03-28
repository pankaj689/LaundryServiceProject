import React, { useState ,useEffect} from "react";
import axios from "axios";
import Header from './header';
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import About from "./aboutus";
import Refer from '../components/refer';
import Footer from "./footer";


export default function Login() {
  const navigate = useNavigate();
    useEffect(() => {
     if(localStorage.getItem('token')){
       navigate("/createorder")
     }
    }, [])

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  // const [token, setToken] = useState("")
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }


  const signIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/login", user,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(res => localStorage.setItem('token', res.data.token))

      // console.log("e.response.status",e.response.status)
      window.alert("logged in sucessfully")
      navigate("/createorder")
    } catch (e) {
      if (e.response.status === 404) {
        window.alert("user doesn't exist")
        navigate("/")
      } else {
        window.alert("Invalid credentials")
        navigate("/")
      }
    }
  }


  return (
    <>
      <Header />
      <div className="container">
        <div className="asideLeft">
          <div className="asideLeftHeader">
            <h1>Laundry Service</h1>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="asideLeftFooter">
            <p>Don’t Have An Account?</p>
            <Link to="/register">
              <button className="submit-btn">Register</button></Link>
          </div>
        </div>

        <aside className="right-box">
          <h1>SIGN IN</h1>
          <form className="login-form">
            <input
              onChange={handleInput}
              type="text"
              name="email"
              placeholder="Mobile/Email"
              // value = {user.email}
              required
            />
            <br />
            <input
              onChange={handleInput}
              type="password"
              name="password"
              // value = {user.password}
              placeholder="Password"
              required
            />
            <br />
            <span>Forget Password?</span> <br />
            <input onClick={signIn} className="submit-btn" type="submit" value="Sign In" />
          </form>
        </aside>
      </div>
      <Refer />
      <About />
      <Footer />
    </>
  );
}


