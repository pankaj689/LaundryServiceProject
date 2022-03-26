import React , { useState}  from "react"
import '../style/createordertable.css';
import "../style/stylebtn.css"

function Eachprodlist (props,index) {
console.log("props",props)
console.log("props.prodType",props.prodType)

  // const [user, setuser] = useState({ prodType: "", quantity:0, wash: "", press: "", fold: "", pack: "", price: "" });

  const [user, setuser] = useState({ quantity:0 ,price: "" });
  // const [prodarry, setprodarry] = useState([]);

// const dumarray = []

  const [prodtype,setprodtype] = useState("")
  const [quantity, setquantity] = useState(0)
  const [washtype , setwashtype] = useState([])
  const [orderprice , setorderprice] = useState()
  const [product , setProduct] = useState([])


  const [totalprice, settotalprice] = useState(0);
  const [prodname, setprodname] = useState("prodname");
  const [dipprice, setdipprice] = useState("--");
  // const [eachitemdetails, seteachitemdetails] = useState([]);
  // const [blarry, setblarry] = useState([]);
  let name, value;
  const productname1 = (e) => {
    console.log("eg",e)
    console.log("e.target",e.target)
    console.log("e.target.name",e.target.name)
    console.log("e.target.value",e.target.value)
    name = e.target.name;
    value = props.prodType;
    setuser({...user,[name]:value});
    
    // setproduct([...product,prodtype])
    
    setprodtype(props.prodType)

    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    
    setprodname("prodname2")
  }
  const productname2 = (e) => {
    console.log("e",e)
    console.log("e.target",e.target)
    console.log("e.target.name",e.target.name)
    console.log("e.target.value",e.target.value)
    name = e.target.name;
    value = e.target.value;
    setuser({...user,[name]:value});
 

    setquantity(value)
    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    
    setprodname("prodname2")
  }

  const [stylewash, setStylewash] = useState("washing");
  // var blarr = []
  const changeStylewash = (e) => {
    name = e.target.name;
    value = "wash";

    //  setprodarry(prodarry => [...prodarry, value]);
    settotalprice(totalprice + 20);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])

    setwashtype([...washtype,"wash"])
    console.log("washtype",washtype)
    // setuser({ ...user, [name]: value });
    setStylewash("washing2");
  };

  const [styleiron, setStyleiron] = useState("ironong");

  const changeStyleiron = (e) => {
    name = e.target.name;
    value = "press";
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])

    setwashtype([...washtype,"press"])
    console.log("washtype",washtype)
    settotalprice(totalprice + 15);
    // setuser({ ...user, [name]: value });
    setStyleiron("ironong2");
  };
  const [styletowel, setStyletowel] = useState("towel");

  const changeStyletowel = (e) => {
  
    name = e.target.name;
    value ="fold";
    // setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])
    setwashtype( [...washtype,"fold"])
    console.log("washtype",washtype)
    settotalprice(totalprice + 10);
    // setuser({ ...user, [name]: value });

    setStyletowel("towel2");
  };
  const [stylebleach, setStylebleach] = useState("bleach");

  const changeStylebleach = (e) => {
    console.log("eeebleach2",e)
    name = e.target.name;
    value = "pack";
    //  setprodarry(prodarry => [...prodarry, value]);
    // blarr.push(value)
    // setblarry(blarry=>[...blarry,value])
    setwashtype([...washtype,"pack"])
    console.log("washtype",washtype)
    settotalprice(totalprice + 25);
    // setuser({ ...user, [name]: value });
    setStylebleach("bleach2");
  };

  const [resbtn, setresbtn] = useState("Resetbtn")

  const pricefun = (e) => {
    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,blarry])
    name = e.target.name;
    value = totalprice * user.quantity;
console.log("user.quantity",e.target.name)
console.log("totalprice",totalprice)
console.log(" value",value)
// console.log("blarray in side pricefun",blarry)
    
    let dumarray = []
    setdipprice(`${user.quantity}x${totalprice}=${value}`)

    setorderprice(totalprice * user.quantity)
    console.log("totalprice * user.quantity",totalprice * user.quantity)
    dumarray = [...product]
    dumarray.push(prodtype)
    dumarray.push(quantity)
    dumarray.push(washtype)
    // dumarray.push(orderprice)
    dumarray.push(totalprice * user.quantity)
    console.log("orderprice",orderprice)
    console.log("dumarray",dumarray)
    // setproduct([...product,prodtype])
    // setproduct([...product,quantity])
    // setproduct([...product,washtype])
    // setproduct([...product,orderprice])
    
    // setProduct(dumarray)
    setProduct([...product ,dumarray])
    

    // seteachitemdetails(eachitemdetails=>[...eachitemdetails,value])
    setuser({ ...user, [name]: value });
    // console.log("user",user)
    // console.log("eachitemdetails",eachitemdetails)
    console.log("orderprice",orderprice)
    console.log("washtype",washtype)
    console.log("product",product)
    setresbtn("Resetbtn2");

  }

  const resFun = () => {
    // setprodarry([]);
    settotalprice(totalprice * 0);
    // blarr = []
    // setuser({ name: "", quantity: 0, wash: "", press: "", fold: "", pack: "", price: "" });
    setuser({ quantity: 0,  price: "" })
    setStylewash("washing");
    setStyleiron("ironong");
    setStyletowel("towel");
    setStylebleach("bleach");
    setprodname("prodname");
    setdipprice("--")
    // console.log("blarr", blarry)
    // seteachitemdetails([])
    
    setprodtype("")
    setquantity(0)
    setwashtype([])
    setorderprice("")
    setProduct([])



    // setuser({ name: "", quantity: 0, blarr, price: "" });
  }

  
    return (
      <div className='tablerow' key={index}>
        <div className='prodinfo '>
          <div>
            <img className='prodimage' alt="prodimage" src={props.prodImg} />
          </div>
          <div className='namedex'>
            <h1 className={prodname}  onClick={productname1} type="Number" name ="prodType"   >{props.prodType}</h1>
            <p className='des' >{props.prodDesc}</p>
          </div>
        </div>
        <div className='inputdiv' ><input className='intinput' value={user.quantity} onChange={productname2} type="number" name="quantity" ></input></div>
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