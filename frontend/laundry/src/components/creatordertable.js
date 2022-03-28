import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/createordertable.css';
import "../style/stylebtn.css"

import Eachprodlist from "./Eachprodlist"
import { Cancel, Process } from "./button"
const sendOrder = {}

function Loop(props) {
  const token = localStorage.getItem('token');
  console.log(token);
  
  const [dt, setdt] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/prodlist")
      .then(res => {
        setdt(res.data.resultArray)
      }).catch(err => {
        console.log(`${err} in data fetching`)
      })
  }, [])
  console.log("dt", dt)


  const [user, setuser] = useState({ quantity: 0, price: "" });
  // const [prodarry, setprodarry] = useState([]);

  // const dumarray = []
 
  const [prodtype, setprodtype] = useState("")
  const [quantity, setquantity] = useState(0)
  const [washtype, setwashtype] = useState([])
  const [orderprice, setorderprice] = useState()
  const [product, setProduct] = useState([])


  const [totalprice, settotalprice] = useState(0);
  const [prodname, setprodname] = useState("prodname");
  const [dipprice, setdipprice] = useState("--");
  // const [eachitemdetails, seteachitemdetails] = useState([]);
  // const [blarry, setblarry] = useState([]);
  let name, value;
  const productname1 = (e) => {
    var name = e.target.getAttribute('name')
    var value = e.target.getAttribute('value')
    var id = e.target.getAttribute('id')
    // e.target.className= "prodname2"
    // setprodname("prodname2")
    e.target.className= "prodname2"

    // e.target.setAttribute("className","prodname2")

    // setuser({ ...user, [name]: value });

    // setproduct([...product,prodtype])

    setprodtype(value)

    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])

    // setprodname("prodname2")
  }
  const productname2 = (e) => {
    name = e.target.name;
    value = e.target.value;
    e.target.className= "prodname2"
    setuser({ ...user, [name]: value });


    setquantity(value)
    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])

    // setprodname("prodname2")
  }

  const [stylewash, setStylewash] = useState("washing");
  // var blarr = []
  const changeStylewash = (e) => {
    name = e.target.name;
    value = "wash";
    e.target.className= "washing2"
    //  setprodarry(prodarry => [...prodarry, value]);
    settotalprice(totalprice + 20);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])

    setwashtype([...washtype, "wash"])
    console.log("washtype", washtype)
    // setuser({ ...user, [name]: value });
    // setStylewash("washing2");
  };

  const [styleiron, setStyleiron] = useState("ironong");

  const changeStyleiron = (e) => {
    name = e.target.name;
    value = "press";
    e.target.className= "ironong2"
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])
   
    setwashtype([...washtype, "press"])
    console.log("washtype", washtype)
    settotalprice(totalprice + 15);
    // setuser({ ...user, [name]: value });
    // setStyleiron("ironong2");
  };
  const [styletowel, setStyletowel] = useState("towel");

  const changeStyletowel = (e) => {

    name = e.target.name;
    value = "fold";
    e.target.className= "towel2"
    // setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])
    setwashtype([...washtype, "fold"])
    console.log("washtype", washtype)
    settotalprice(totalprice + 10);
    // setuser({ ...user, [name]: value });

    // setStyletowel("towel2");
  };
  const [stylebleach, setStylebleach] = useState("bleach");

  const changeStylebleach = (e) => {
    console.log("eeebleach2", e)
    name = e.target.name;
    value = "pack";
    e.target.className= "bleach2"
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])
    setwashtype([...washtype, "pack"])
    console.log("washtype", washtype)
    settotalprice(totalprice + 25);
    // setuser({ ...user, [name]: value });
    // setStylebleach("bleach2");
  };

  const [resbtn, setresbtn] = useState("Resetbtn")

  const pricefun = (e) => {
    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,blarry])
    name = e.target.name;
    value = totalprice * user.quantity;
    // e.target.className= "bleach2"
    console.log("user.quantity", e.target.name)
    console.log("totalprice", totalprice)
    console.log(" value", value)
    // console.log("blarray in side pricefun",blarry)
    
    var dumarray = []
   
    setdipprice(`${user.quantity}x${totalprice}=${value}`)
    
    
    setorderprice(totalprice * user.quantity)
    console.log("totalprice * user.quantity", totalprice * user.quantity)
    // s
    dumarray.push(prodtype)
    dumarray.push(quantity)

    dumarray.push(washtype)
    // dumarray.push(orderprice)
    dumarray.push(totalprice * user.quantity)
    console.log("orderprice", orderprice)
    console.log("dumarray", dumarray)
    settotalprice(0);
    setwashtype([])
    // setproduct([...product,prodtype])
    // setproduct([...product,quantity])
    // setproduct([...product,washtype])
    // setproduct([...product,orderprice])

    // setProduct(dumarray)
    setProduct([...product, dumarray])
    sendOrder[prodtype]=dumarray     //  {shirt:[shirt, 5 ,[wash],500]}
    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    setuser({ ...user, [name]: value });
    // console.log("user",user)
    // console.log("eachitemdetails",eachitemdetails)
    console.log("orderprice", orderprice)
    console.log("sendOrder", sendOrder)
    console.log("washtype", washtype)
    console.log("product", product)
    setresbtn("Resetbtn2");

  }

  const resFun = (e) => {
    var name = e.target.getAttribute('name')
    var value = e.target.getAttribute('value')
    console.log("item  name to reset",name)
    console.log(" item value to reset",value)
    // setprodarry([]);
    settotalprice(totalprice * 0);
    setuser({ quantity: 0, price: "" })
    setStylewash("washing");
    setStyleiron("ironong");
    setStyletowel("towel");
    setStylebleach("bleach");
    setprodname("prodname");
    setdipprice("--")
    delete sendOrder[value];
    // setProduct(list.filter(item => item.value!== value));
    // console.log("blarr", blarry)
    console.log("sendOrderinreset", sendOrder)
    // seteachitemdetails([])

    setprodtype("")
    setquantity(0)
    setwashtype([])
    setorderprice("")
    setProduct([])


  }

  return (
    

    <div className="product-Container">
      <table className='maindiv' >
        <thead className='tablehead' >
          <th className='prodtype' >Product Types</th>
          <th className='quntity' >Qunatity</th>
          <th className='washtype'   >Wash</th>
          <th className='price' >Price</th>
        </thead>
        <tbody>
          {dt.map((Item)=> {
            
            return (

              <tr className='tablerow' id={`${Item.prodType}washpress`} >
                <td className='prodinfo'  >
                  <div>
                    <img className='prodimage' alt="prodimage" src={Item.prodImg} />
                  </div>
                  <div className='namedex'>
                    <h1 className={prodname}  id={Item.prodType} value={Item.prodType} onClick={productname1} type="Number" name="prodType"   >{Item.prodType}</h1>
                    <p className='des' >{Item.prodDesc}</p>
                  </div>  
                </td>
                <td className='inputdiv' > <input className='intinput'  id={`${Item.prodType}quantity`}   value={user.quantity}  name="quantity" onChange={productname2} type="number"  ></input></td>
                <td className='opretionimg' >

                  <div className={stylewash} id={`${Item.prodType}wash`}  onClick={changeStylewash} type="washing" name="wash"></div>
                  <div className={styleiron} id={`${Item.prodType}press`} onClick={changeStyleiron} type="ironong" name="press" ></div>
                  <div className={styletowel} id={`${Item.prodType}fold`} onClick={changeStyletowel} type="fold" name="fold"></div>
                  <div className={stylebleach} id={`${Item.prodType}pack`}  onClick={changeStylebleach} type="pack" name="pack"></div>
                </td>
                <td className='res' > <p className='initialprice' id={`${Item.prodType}price`}  value="0" onClick={pricefun} type="Number" name="price"  >{dipprice}</p>
                  <button className={resbtn} name="prodType"  id={`${Item.prodType}Reset`}  value={Item.prodType}  onClick={resFun} >Reset</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='orderbtn'>
        <div className='cle'><Cancel /></div>
        <div className='cle' onClick={console.log("processbtn",sendOrder)}><Process /></div>


  

 

    </div>
    </>


  )
}

export default Loop

