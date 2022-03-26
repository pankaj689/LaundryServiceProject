import React , { useState}  from "react";
import { Cancel, Process } from "./button";
import '../style/createordertable.css';
import "../style/stylebtn.css"

function Eachprodlist (props, index) {
  const [user, setuser] = useState({ prodType: "", quantity: 0, wash: "", press: "", fold: "", pack: "", price: "" });
  // const [prodarry, setprodarry] = useState([]);
  const [totalprice, settotalprice] = useState(0);
  const [prodname, setprodname] = useState("prodname");
  const [dipprice, setdipprice] = useState("--");
  const [eachitemdetails, seteachitemdetails] = useState([]);
  const [blarry, setblarry] = useState([]);
  let name, value;
  
  const productname = (e) => {
    console.log("e.target.name",e.target.name)
    name = e.target.name;
    // console.log("e.target.value",e.target.value)
    value = e.target.value;
    seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    setuser({ ...user, [name]: value });
    setprodname("prodname2")
  }

  const [stylewash, setStylewash] = useState("washing");
  // var blarr = []
  const changeStylewash = (e) => {
    // console.log("you just clicked");

    console.log("eeewashing2",e)
    name = e.target.name;
    value = "wash";

    //  setprodarry(prodarry => [...prodarry, value]);
    settotalprice(totalprice + 20);
    // blarr.push(value)
    setblarry(blarry=>[...blarry,value])

    setuser({ ...user, [name]: value });
    setStylewash("washing2");
  };



  const [styleiron, setStyleiron] = useState("ironong");

  const changeStyleiron = (e) => {
    // console.log("you just clicked");

    console.log("eeeironong2",e)
    name = e.target.name;
    value = "press";
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    setblarry(blarry=>[...blarry,value])
    settotalprice(totalprice + 15);
    setuser({ ...user, [name]: value });
    setStyleiron("ironong2");
  };
  const [styletowel, setStyletowel] = useState("towel");

  const changeStyletowel = (e) => {
    // console.log("you just clicked");
    console.log("eeetowel2",e)
    name = e.target.name;
    value ="fold";
    // setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    setblarry(blarry=>[...blarry,value])
    settotalprice(totalprice + 10);
    setuser({ ...user, [name]: value });

    setStyletowel("towel2");
  };
  const [stylebleach, setStylebleach] = useState("bleach");

  const changeStylebleach = (e) => {
    // console.log("you just clicked");

    console.log("eeebleach2",e)
    name = e.target.name;
    value = "pack";
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    setblarry(blarry=>[...blarry,value])
    settotalprice(totalprice + 25);
    setuser({ ...user, [name]: value });
    setStylebleach("bleach2");
  };

  const [resbtn, setresbtn] = useState("Resetbtn")

  const pricefun = (e) => {

    seteachitemdetails(eachitemdetails=>[...eachitemdetails,blarry])
    console.log("eeeResetbtn2",e)
    name = e.target.name;
    value = totalprice * user.quantity;
console.log("user.quantity",user.quantity)
console.log("totalprice",totalprice)
console.log(" value",value)
console.log("blarray in side pricefun",blarry)

    // document.getElementsByClassName("initialprice").innerText = `${user.quantity}x${totalprice}=${value}`
    setdipprice(`${user.quantity}x${totalprice}=${value}`)
    seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    setuser({ ...user, [name]: value });
    console.log("user",user)
    console.log("eachitemdetails",eachitemdetails)
    setresbtn("Resetbtn2");

  }

  const resFun = () => {
    // setprodarry([]);
    settotalprice(totalprice * 0);
    // blarr = []
    setuser({ name: "", quantity: 0, wash: "", press: "", fold: "", pack: "", price: "" });
    setStylewash("washing");
    setStyleiron("ironong");
    setStyletowel("towel");
    setStylebleach("bleach");
    setprodname("prodname");
    setdipprice("--")
    console.log("blarr", blarry)
    seteachitemdetails([])
    // setuser({ name: "", quantity: 0, blarr, price: "" });
  }
  console.log(user);

  
    return (
      <div className='tablerow' key={index}>
        <div className='prodinfo '>
          <div>
            <img className='prodimage' alt="prodimage" src={props.prodImg} />
          </div>
          <div className='namedex'>
            <h1 className={prodname}  value={props.prodType} onClick={productname} type="Number" name="prodType"   >{props.prodType}</h1>
            <p className='des' >{props.prodDesc}</p>
          </div>
        </div>
        <div className='inputdiv' ><input className='intinput' value={user.quantity} onChange={productname} type="Number" name="quantity" /></div>
        <div className='opretionimg' >
          <div className={stylewash}  onClick={changeStylewash} type="washing" name="wash"></div>
          <div className={styleiron}  onClick={changeStyleiron} type="ironong" name="press" ></div>
          <div className={styletowel}  onClick={changeStyletowel} type="fold" name="fold"></div>
          <div className={stylebleach}  onClick={changeStylebleach} type="pack" name="pack"></div>
        </div>
        <div className='res'><p className='initialprice' value="0" onClick={pricefun} type="Number" name="price"  >{dipprice}</p>
          <button className={resbtn} onClick={resFun} >Reset</button>
        </div>
      </div>

    )
  }

export default Eachprodlist