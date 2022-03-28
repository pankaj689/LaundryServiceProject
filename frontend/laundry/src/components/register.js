import Header from "./header";
import "../styles/register.css";
import Footer from './footer';
import About from "./aboutus";
import Refer from "./refer";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom"

// import axios from "axios"
const Register = () => {
  const navigate = useNavigate();
     const [user,setuser]= useState({ name:"", email:"" ,phone:"" ,state:"",district:"" ,address:""  ,pincode:"", password:""});

   let name,value;     
  const handleinput= (e)=>{
       console.log(e)
       name = e.target.name;
       value = e.target.value;
       setuser({...user,[name]:value});
  }
console.log("user",user)
  const PostData = async (e)=>{
    e.preventDefault();
     const {name, email,phone,state,district ,address  ,pincode, password} = user ;
    // const data = await axios.post("http://localhost:5000/api/register", user,
    //     {headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
    //     // body: JSON.stringify({
    //     //     "name":name,
    //     //     "email":email,
    //     //     "password": password
    //     // })
    // );
    // if (data.status === 400 || !data){
    //     window.alert("Invalid Registration");
    //     console.log("Inavlid Registraion")
    // }else{
    //     window.alert("Registraion sucessful");
    //     console.log("Regsitraion sucessfull")
    //     }

      //  const {name, email,phone,state,district ,address  ,pincode, password} = user ;

      const res = await  fetch("http://localhost:5000/api/register",{
        method:"POST", 
         headers: {
            "Content-Type": "application/json"
          }
          ,body:JSON.stringify({name, email,phone, state,district ,address  ,pincode, password})
      })

      const data = await res.json();
      if(data.status === 400  || !data ) {
        window.alert("Invalid Registration")
        console.log("Invalid Registration")
      } else {
        window.alert("Registration Succesfull")
        console.log(" Registration Succesfull")
      }
      navigate("/")
  }

  return (
    <>
    <Header />
      <section className="Register">
        <div className="asideLeft">
          <div className="asideLeftHeader">
            <h1>Laundry Service</h1>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="asideLeftFooter">
            <p>Already Have Account?</p>

            <a href ="/"><button className="signinButton">Sign In</button></a>

          </div>
        </div>
        <div className="registerForm">
          <div className="registerFormHeader">
            <h1>REGISTER</h1>
          </div>
          <div>

            <form className="registerFormContents" method="POST" >
                <input
                  required
                  type="text"
                  placeholder="Name" value={user.name} onChange={handleinput} autoComplete="off"
                  name="name"
                ></input>
                <input
                  required
                  type="email"
                  placeholder="Email"value={user.email} onChange={handleinput} autoComplete="off"
                  name="email"
                ></input>
                <input
                  required
                  type="phone"
                  placeholder="Phone"value={user.phone} onChange={handleinput} autoComplete="off"
                  name="phone"
                ></input>
                <select required name="state" id="state" value={user.state} onChange={handleinput} className="form-control">
                <option value="" disabled selected hidden>select</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <input
                  required
                  type="text"
                  name="district"
                  placeholder="District"value={user.district} onChange={handleinput} autoComplete="off"
                ></input>
                <input
                  required
                  type="text"
                  name="address"
                  placeholder="Address"value={user.address} onChange={handleinput} autoComplete="off"
                ></input>
                <input
                  required
                  type="number"
                  name="pincode"
                  placeholder="Pincode"value={user.pincode} onChange={handleinput} autoComplete="off"
                ></input>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"value={user.password} onChange={handleinput} autoComplete="off"
                ></input>
                <div className="checkbox">
                  <input type="checkbox" id="terms" name="T&C" required />
                  <span>
                    I agree to Terms & Condition receiving marketing and
                    promotional materials
                  </span>
                </div>
                <div className="submitFormButton">
                  <input type="submit" value="Register" onClick={PostData} />
                </div>
            </form>
          </div>
        </div>
      </section>
      <Refer />
      <About />
      <Footer />
    </>
  );
};
export default Register;
