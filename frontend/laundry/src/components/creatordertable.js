import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/createordertable.css';
import "../style/stylebtn.css"
import Eachprodlist from "./Eachprodlist"
import { Cancel, Process } from "./button"
function Loop() {
  const [dt, setdt] = useState([])

  // // function Item (element, index) {
  // const [user, setuser] = useState({ name: "", quntity: 0, wash: "", press: "", fold: "", pack: "", price: "" });
  // // const [prodarry, setprodarry] = useState([]);
  // const [totalprice, settotalprice] = useState(0);

  // let name, value;
  // const productname = (e) => {
  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;

  //   setuser({ ...user, [name]: value });
  // }

  // const [stylewash, setStylewash] = useState("washing");
  // var blarr = []
  // const changeStylewash = (e) => {
  //   // console.log("you just clicked");

  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;

  //   //  setprodarry(prodarry => [...prodarry, value]);
  //   settotalprice(totalprice + 20);
  //   blarr.push(value)

  //   setuser({ ...user, [name]: value });
  //   setStylewash("washing2");
  // };

  // const [styleiron, setStyleiron] = useState("ironong");

  // const changeStyleiron = (e) => {
  //   // console.log("you just clicked");

  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;
  //   //  setprodarry(prodarry => [...prodarry, value]);
  //   blarr.push(value)
  //   settotalprice(totalprice + 15);
  //   setuser({ ...user, [name]: value });
  //   setStyleiron("ironong2");
  // };
  // const [styletowel, setStyletowel] = useState("towel");

  // const changeStyletowel = (e) => {
  //   // console.log("you just clicked");
  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;
  //   // setprodarry(prodarry => [...prodarry, value]);
  //   blarr.push(value)
  //   settotalprice(totalprice + 10);
  //   setuser({ ...user, [name]: value });

  //   setStyletowel("towel2");
  // };
  // const [stylebleach, setStylebleach] = useState("bleach");

  // const changeStylebleach = (e) => {
  //   // console.log("you just clicked");

  //   console.log(e)
  //   name = e.target.name;
  //   value = e.target.value;
  //   //  setprodarry(prodarry => [...prodarry, value]);
  //   blarr.push(value)
  //   settotalprice(totalprice + 25);
  //   setuser({ ...user, [name]: value });
  //   setStylebleach("bleach2");
  // };

  // const [resbtn, setresbtn] = useState("Resetbtn")

  // const pricefun = (e) => {


  //   console.log(e)
  //   name = e.target.name;
  //   value = totalprice * e.target.value;

  //   setuser({ ...user, [name]: value });
  //   setresbtn("Resetbtn2");

  // }

  // const resFun = () => {
  //   // setprodarry([]);
  //   settotalprice(totalprice * 0);
  //   blarr = []
  //   setuser({ name: "", quntity: 0, wash: "", press: "", fold: "", pack: "", price: "" });
  //   setStylewash("washing");
  //   setStyleiron("ironong");
  //   setStyletowel("towel");
  //   setStylebleach("bleach");
  //   console.log("blarr", blarr)
  // }
  // function Item(element, index) {

  //   return (
  //     <div className='tablerow' key={index}>
  //       <div className='prodinfo '>
  //         <div>
  //           <img className='prodimage' alt="prodimage" src={element.prodImg} />
  //         </div>
  //         <div className='namedex'>
  //           <h1 className='prodname' value={element.prodType} onClick={productname} type="Number" name="name"   >{element.prodType}</h1>
  //           <p className='des' >{element.prodDesc}</p>
  //         </div>
  //       </div>
  //       <div className='inputdiv' ><input className='intinput' value={user.quntity} onChange={productname} type="Number" name="quntity" /></div>
  //       <div className='opretionimg' >
  //         <div className={stylewash} value="wash" onClick={changeStylewash} type="washing" name="wash"></div>
  //         <div className={styleiron} value="press" onClick={changeStyleiron} type="ironong" name="press" ></div>
  //         <div className={styletowel} value="fold" onClick={changeStyletowel} type="fold" name="fold"></div>
  //         <div className={stylebleach} value="pack" onClick={changeStylebleach} type="pack" name="pack"></div>
  //       </div>
  //       <div className='res'><p className='initialprice' value="" onClick={pricefun} type="Number" name="price"  >—</p>
  //         <button className={resbtn} onClick={resFun} >Reset</button>
  //       </div>
  //     </div>
  //   )
  // }


  useEffect(() => {
    axios.get("http://localhost:5000/api/prodlist")
      .then(res => {
        setdt(res.data.resultArray)
      }).catch(err => {
        console.log(`${err} in data fetching`)
      })
  }, [])
  console.log("dt", dt)



  return (
    <div className='maindiv'>
      <div className='itemtable'>
        <div className='tablehead'>
          <div className='prodtype'>Produt Types</div>
          <div className='quntity'>Quantity</div>
          <div className='washtype'>Wash Type</div>
          <div className='price'>Price</div>
        </div>
        {dt.map((item)=>{
          return <Eachprodlist  {...item} />
        })}
      </div>
      <div className='orderbtn' >
        <div className='cle'  ><Cancel /></div>
        <div className='cle'><Process /></div>
      </div>
    </div>
  )
}

export default Loop

