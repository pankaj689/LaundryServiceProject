import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import '../style/createordertable.css';
import "../style/stylebtn.css"
// import Summary from  "./summary"
// import Eachprodlist from "./Eachprodlist"
import { Cancel, Process } from "./button"
const sendOrder = {}

function Loop(props) {

    const navigate = useNavigate()
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

    const cancelOrder = () => {
        navigate("/history")
    }


    // const submitOrder = ()=>{
    //     navigate("/summary",sendOrder)

    // }

    //-----------------------------------------userstate-------------------------------------//
    const [usersh, setusersh] = useState({ quantity: 0, price: "" });

    //----------------------------------------- shirt------------------------------------------------------>   


    const [shirtprodtype, setshirtprodtype] = useState("")
    const [shirtquantity, setshirtquantity] = useState(0)
    const [shirtwashtype, setshirtwashtype] = useState([])
    const [shirtorderprice, setshirtorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [shirttotalprice, setshirttotalprice] = useState(0);
    const [shirtprodname, setshirtprodname] = useState("prodname");
    const [shirstylewash, setshirStylewash] = useState("washing");
    const [shirstyleiron, setshirStyleiron] = useState("ironong");
    const [shirstyletowel, setshirStyletowel] = useState("towel");
    const [shirstylebleach, setshirStylebleach] = useState("bleach");
    const [shirtdipprice, setshirtdipprice] = useState("--");
    const [shirresbtn, setshirresbtn] = useState("Resetbtn")
    let name, value;
    const productname1shirt = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setshirtprodname("prodname2")
        setshirtprodtype(value)
    }
    const productname2shirt = (e) => {
        name = e.target.name;
        value = e.target.value;
        setusersh({ ...usersh, [name]: value });
        setshirtquantity(value)
    }
    const changeStylewashshirt = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setshirttotalprice(shirttotalprice + 20)
        setshirtwashtype([...shirtwashtype, "wash"])

        setshirStylewash("washing2");
    };

    const changeStyleironshirt = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setshirtwashtype([...shirtwashtype, "press"])

        setshirttotalprice(shirttotalprice + 15);
        setshirStyleiron("ironong2");
    };
    const changeStyletowelshirt = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setshirtwashtype([...shirtwashtype, "fold"])

        setshirttotalprice(shirttotalprice + 10);
        setshirStyletowel("towel2");
    };

    const changeStylebleachshirt = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setshirtwashtype([...shirtwashtype, "pack"])
        setshirttotalprice(shirttotalprice + 25);
        setshirStylebleach("bleach2");
    };

    const pricefunshirtshirt = (e) => {
        name = e.target.name;
        value = shirttotalprice * usersh.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setshirtdipprice(`${usersh.quantity}x${shirttotalprice}=${value}`)
        setshirtorderprice(shirttotalprice * usersh.quantity)
        dumarray.push(shirtprodtype)
        dumarray.push(shirtquantity)
        dumarray.push(shirtwashtype)
        // dumarray.push(orderprice)
        dumarray.push(shirttotalprice * usersh.quantity)
        console.log("dumarray", dumarray)
        setshirttotalprice(0);
        // setshirtwashtype([])    
        setusersh({ ...usersh, [name]: value });
        sendOrder[shirtprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setshirresbtn("Resetbtn2");

    }

    const resFunshirt = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setshirttotalprice(shirttotalprice * 0);

        setusersh({ quantity: 0, price: "" })
        setshirStylewash("washing");
        setshirStyleiron("ironong");
        setshirStyletowel("towel");
        setshirStylebleach("bleach");
        setshirtprodname("prodname");
        setshirtdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setshirtprodtype("")
        setshirtquantity(0)
        setshirtwashtype([])
        setshirtorderprice("")
        setshirresbtn("Resetbtn");
    }


    //-----------------------------------------userstate-------------------------------------//
    const [userts, setuserts] = useState({ quantity: 0, price: "" });
    //----------------------------------------- T-shirts------------------------------------------------------>   


    const [Tshirtstsprodtype, setTshirtstsprodtype] = useState("")
    const [Tshirtstsquantity, setTshirtstsquantity] = useState(0)
    const [Tshirtstswashtype, setTshirtstswashtype] = useState([])
    const [Tshirtstorderprice, setTshirtstorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [Tshirtsttotalprice, setTshirtsttotalprice] = useState(0);
    const [Tshirtstprodname, setTshirtstprodname] = useState("prodname");
    const [Tshirtsstylewash, setTshirtsStylewash] = useState("washing");
    const [Tshirtsstyleiron, setTshirtsStyleiron] = useState("ironong");
    const [Tshirtsstyletowel, setTshirtsStyletowel] = useState("towel");
    const [Tshirtsstylebleach, setTshirtsStylebleach] = useState("bleach");
    const [Tshirtstdipprice, setTshirtstdipprice] = useState("--");
    const [Tshirtsresbtn, setTshirtsresbtn] = useState("Resetbtn")
    const productname1Tshirtst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setTshirtstprodname("prodname2")
        setTshirtstsprodtype(value)
    }
    const productname2Tshirtst = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserts({ ...userts, [name]: value });
        setTshirtstsquantity(value)
    }
    const changeStylewashTshirtst = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setTshirtsttotalprice(Tshirtsttotalprice + 20)
        setTshirtstswashtype([...Tshirtstswashtype, "wash"])
        console.log("Tshirtstswashtype", Tshirtstswashtype)
        setTshirtsStylewash("washing2");
    };

    const changeStyleironTshirtst = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setTshirtstswashtype([...Tshirtstswashtype, "press"])
        console.log("Tshirtstswashtype", Tshirtstswashtype)
        setTshirtsttotalprice(Tshirtsttotalprice + 15);
        setTshirtsStyleiron("ironong2");
    };
    const changeStyletowelTshirtst = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setTshirtstswashtype([...Tshirtstswashtype, "fold"])
        console.log("washtype", Tshirtstswashtype)
        setTshirtsttotalprice(Tshirtsttotalprice + 10);
        setTshirtsStyletowel("towel2");
    };

    const changeStylebleachTshirtst = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setTshirtstswashtype([...Tshirtstswashtype, "pack"])
        setTshirtsttotalprice(Tshirtsttotalprice + 25);
        setTshirtsStylebleach("bleach2");
    };

    const pricefunTshirtstTshirtst = (e) => {
        name = e.target.name;
        value = Tshirtsttotalprice * userts.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setTshirtstdipprice(`${userts.quantity}x${Tshirtsttotalprice}=${value}`)
        setTshirtstorderprice(Tshirtsttotalprice * userts.quantity)
        dumarray.push(Tshirtstsprodtype)
        dumarray.push(Tshirtstsquantity)
        dumarray.push(Tshirtstswashtype)
        // dumarray.push(orderprice)
        dumarray.push(Tshirtsttotalprice * userts.quantity)
        console.log("dumarray", dumarray)
        setTshirtsttotalprice(0);
        // setTshirtstwashtype([])    
        setuserts({ ...userts, [name]: value });
        sendOrder[Tshirtstsprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setTshirtsresbtn("Resetbtn2");

    }

    const resFunTshirtst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setTshirtsttotalprice(Tshirtsttotalprice * 0);

        setuserts({ quantity: 0, price: "" })
        setTshirtsStylewash("washing");
        setTshirtsStyleiron("ironong");
        setTshirtsStyletowel("towel");
        setTshirtsStylebleach("bleach");
        setTshirtstprodname("prodname");
        setTshirtstdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setTshirtstsprodtype("")
        setTshirtstsquantity(0)
        setTshirtstswashtype([])
        setTshirtstorderprice("")
        setTshirtsresbtn("Resetbtn");
    }


    //-----------------------------------------userstate-------------------------------------//
    const [userto, setuserto] = useState({ quantity: 0, price: "" });
    //----------------------------------------- Trot------------------------------------------------------>   


    const [Trotprodtype, setTrotprodtype] = useState("")
    const [Trotquantity, setTrotquantity] = useState(0)
    const [Trotwashtype, setTrotwashtype] = useState([])
    const [Trotorderprice, setTrotorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [Trottotalprice, setTrottotalprice] = useState(0);
    const [Trotprodname, setTrotprodname] = useState("prodname");
    const [Trostylewash, setTroStylewash] = useState("washing");
    const [Trostyleiron, setTroStyleiron] = useState("ironong");
    const [Trostyletowel, setTroStyletowel] = useState("towel");
    const [Trostylebleach, setTroStylebleach] = useState("bleach");
    const [Trotdipprice, setTrotdipprice] = useState("--");
    const [Troresbtn, setTroresbtn] = useState("Resetbtn")

    const productname1Trot = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setTrotprodname("prodname2")
        setTrotprodtype(value)
    }
    const productname2Trot = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserto({ ...userto, [name]: value });
        setTrotquantity(value)
    }
    const changeStylewashTrot = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setTrottotalprice(Trottotalprice + 20)
        setTrotwashtype([...Trotwashtype, "wash"])

        setTroStylewash("washing2");
    };

    const changeStyleironTrot = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setTrotwashtype([...Trotwashtype, "press"])

        setTrottotalprice(Trottotalprice + 15);
        setTroStyleiron("ironong2");
    };
    const changeStyletowelTrot = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setTrotwashtype([...Trotwashtype, "fold"])

        setTrottotalprice(Trottotalprice + 10);
        setTroStyletowel("towel2");
    };

    const changeStylebleachTrot = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setTrotwashtype([...Trotwashtype, "pack"])
        setTrottotalprice(Trottotalprice + 25);
        setTroStylebleach("bleach2");
    };

    const pricefunTrotTrot = (e) => {
        name = e.target.name;
        value = Trottotalprice * userto.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setTrotdipprice(`${userto.quantity}x${Trottotalprice}=${value}`)
        setTrotorderprice(Trottotalprice * userto.quantity)
        dumarray.push(Trotprodtype)
        dumarray.push(Trotquantity)
        dumarray.push(Trotwashtype)
        // dumarray.push(orderprice)
        dumarray.push(Trottotalprice * userto.quantity)
        console.log("dumarray", dumarray)
        setTrottotalprice(0);
        // setTrotwashtype([])    
        setuserto({ ...userto, [name]: value });
        sendOrder[Trotprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setTroresbtn("Resetbtn2");

    }

    const resFunTrot = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setTrottotalprice(Trottotalprice * 0);

        setuserto({ quantity: 0, price: "" })
        setTroStylewash("washing");
        setTroStyleiron("ironong");
        setTroStyletowel("towel");
        setTroStylebleach("bleach");
        setTrotprodname("prodname");
        setTrotdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setTrotprodtype("")
        setTrotquantity(0)
        setTrotwashtype([])
        setTrotorderprice("")
        setTroresbtn("Resetbtn");
    }


    //-----------------------------------------userstate-------------------------------------//
    const [userje, setuserje] = useState({ quantity: 0, price: "" });

    //----------------------------------------- Jeanst------------------------------------------------------>   


    const [Jeanstprodtype, setJeanstprodtype] = useState("")
    const [Jeanstquantity, setJeanstquantity] = useState(0)
    const [Jeanstwashtype, setJeanstwashtype] = useState([])
    const [Jeanstorderprice, setJeanstorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [Jeansttotalprice, setJeansttotalprice] = useState(0);
    const [Jeanstprodname, setJeanstprodname] = useState("prodname");
    const [Jeansstylewash, setJeansStylewash] = useState("washing");
    const [Jeansstyleiron, setJeansStyleiron] = useState("ironong");
    const [Jeansstyletowel, setJeansStyletowel] = useState("towel");
    const [Jeansstylebleach, setJeansStylebleach] = useState("bleach");
    const [Jeanstdipprice, setJeanstdipprice] = useState("--");
    const [Jeansresbtn, setJeansresbtn] = useState("Resetbtn")

    const productname1Jeanst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setJeanstprodname("prodname2")
        setJeanstprodtype(value)
    }
    const productname2Jeanst = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserje({ ...userje, [name]: value });
        setJeanstquantity(value)
    }
    const changeStylewashJeanst = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setJeansttotalprice(Jeansttotalprice + 20)
        setJeanstwashtype([...Jeanstwashtype, "wash"])
        setJeansStylewash("washing2");
    };

    const changeStyleironJeanst = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setJeanstwashtype([...Jeanstwashtype, "press"])
        setJeansttotalprice(Jeansttotalprice + 15);
        setJeansStyleiron("ironong2");
    };
    const changeStyletowelJeanst = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setJeanstwashtype([...Jeanstwashtype, "fold"])
        setJeansttotalprice(Jeansttotalprice + 10);
        setJeansStyletowel("towel2");
    };

    const changeStylebleachJeanst = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setJeanstwashtype([...Jeanstwashtype, "pack"])
        setJeansttotalprice(Jeansttotalprice + 25);
        setJeansStylebleach("bleach2");
    };

    const pricefunJeanstJeanst = (e) => {
        name = e.target.name;
        value = Jeansttotalprice * userje.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setJeanstdipprice(`${userje.quantity}x${Jeansttotalprice}=${value}`)
        setJeanstorderprice(Jeansttotalprice * userje.quantity)
        dumarray.push(Jeanstprodtype)
        dumarray.push(Jeanstquantity)
        dumarray.push(Jeanstwashtype)
        // dumarray.push(orderprice)
        dumarray.push(Jeansttotalprice * userje.quantity)
        console.log("dumarray", dumarray)
        setJeansttotalprice(0);
        // setJeanstwashtype([])    
        setuserje({ ...userje, [name]: value });
        sendOrder[Jeanstprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setJeansresbtn("Resetbtn2");

    }

    const resFunJeanst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setJeansttotalprice(Jeansttotalprice * 0);

        setuserje({ quantity: 0, price: "" })
        setJeansStylewash("washing");
        setJeansStyleiron("ironong");
        setJeansStyletowel("towel");
        setJeansStylebleach("bleach");
        setJeanstprodname("prodname");
        setJeanstdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setJeanstprodtype("")
        setJeanstquantity(0)
        setJeanstwashtype([])
        setJeanstorderprice("")
        setJeansresbtn("Resetbtn");
    }

    //-----------------------------------------userstate-------------------------------------//
    const [userbo, setuserbo] = useState({ quantity: 0, price: "" });
    //----------------------------------------- Boxsert------------------------------------------------------>   


    const [Boxsertprodtype, setBoxsertprodtype] = useState("")
    const [Boxsertquantity, setBoxsertquantity] = useState(0)
    const [Boxsertwashtype, setBoxsertwashtype] = useState([])
    const [Boxsertorderprice, setBoxsertorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [Boxserttotalprice, setBoxserttotalprice] = useState(0);
    const [Boxsertprodname, setBoxsertprodname] = useState("prodname");
    const [Boxserstylewash, setBoxserStylewash] = useState("washing");
    const [Boxserstyleiron, setBoxserStyleiron] = useState("ironong");
    const [Boxserstyletowel, setBoxserStyletowel] = useState("towel");
    const [Boxserstylebleach, setBoxserStylebleach] = useState("bleach");
    const [Boxsertdipprice, setBoxsertdipprice] = useState("--");
    const [Boxserresbtn, setBoxserresbtn] = useState("Resetbtn")

    const productname1Boxsert = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setBoxsertprodname("prodname2")
        setBoxsertprodtype(value)
    }
    const productname2Boxsert = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserbo({ ...userbo, [name]: value });
        setBoxsertquantity(value)
    }
    const changeStylewashBoxsert = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setBoxserttotalprice(Boxserttotalprice + 20)
        setBoxsertwashtype([...Boxsertwashtype, "wash"])
        setBoxserStylewash("washing2");
    };

    const changeStyleironBoxsert = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setBoxsertwashtype([...Boxsertwashtype, "press"])
        setBoxserttotalprice(Boxserttotalprice + 15);
        setBoxserStyleiron("ironong2");
    };
    const changeStyletowelBoxsert = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setBoxsertwashtype([...Boxsertwashtype, "fold"])
        setBoxserttotalprice(Boxserttotalprice + 10);
        setBoxserStyletowel("towel2");
    };

    const changeStylebleachBoxsert = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setBoxsertwashtype([...Boxsertwashtype, "pack"])
        setBoxserttotalprice(Boxserttotalprice + 25);
        setBoxserStylebleach("bleach2");
    };

    const pricefunBoxsertBoxsert = (e) => {
        name = e.target.name;
        value = Boxserttotalprice * userbo.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setBoxsertdipprice(`${userbo.quantity}x${Boxserttotalprice}=${value}`)
        setBoxsertorderprice(Boxserttotalprice * userbo.quantity)
        dumarray.push(Boxsertprodtype)
        dumarray.push(Boxsertquantity)
        dumarray.push(Boxsertwashtype)
        // dumarray.push(orderprice)
        dumarray.push(Boxserttotalprice * userbo.quantity)
        console.log("dumarray", dumarray)
        setBoxserttotalprice(0);
        // setBoxsertwashtype([])    
        setuserbo({ ...userbo, [name]: value });
        sendOrder[Boxsertprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setBoxserresbtn("Resetbtn2");

    }

    const resFunBoxsert = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setBoxserttotalprice(Boxserttotalprice * 0);

        setuserbo({ quantity: 0, price: "" })
        setBoxserStylewash("washing");
        setBoxserStyleiron("ironong");
        setBoxserStyletowel("towel");
        setBoxserStylebleach("bleach");
        setBoxsertprodname("prodname");
        setBoxsertdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setBoxsertprodtype("")
        setBoxsertquantity(0)
        setBoxsertwashtype([])
        setBoxsertorderprice("")
        setBoxserresbtn("Resetbtn");
    }

    //-----------------------------------------userstate-------------------------------------//
    const [userjo, setuserjo] = useState({ quantity: 0, price: "" });
    //----------------------------------------- Joggerst------------------------------------------------------>   


    const [Joggerstprodtype, setJoggerstprodtype] = useState("")
    const [Joggerstquantity, setJoggerstquantity] = useState(0)
    const [Joggerstwashtype, setJoggerstwashtype] = useState([])
    const [Joggerstorderprice, setJoggerstorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [Joggersttotalprice, setJoggersttotalprice] = useState(0);
    const [Joggerstprodname, setJoggerstprodname] = useState("prodname");
    const [Joggersstylewash, setJoggersStylewash] = useState("washing");
    const [Joggersstyleiron, setJoggersStyleiron] = useState("ironong");
    const [Joggersstyletowel, setJoggersStyletowel] = useState("towel");
    const [Joggersstylebleach, setJoggersStylebleach] = useState("bleach");
    const [Joggerstdipprice, setJoggerstdipprice] = useState("--");
    const [Joggersresbtn, setJoggersresbtn] = useState("Resetbtn")

    const productname1Joggerst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setJoggerstprodname("prodname2")
        setJoggerstprodtype(value)
    }
    const productname2Joggerst = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserjo({ ...userjo, [name]: value });
        setJoggerstquantity(value)
    }
    const changeStylewashJoggerst = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setJoggersttotalprice(Joggersttotalprice + 20)
        setJoggerstwashtype([...Joggerstwashtype, "wash"])
        setJoggersStylewash("washing2");
    };

    const changeStyleironJoggerst = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setJoggerstwashtype([...Joggerstwashtype, "press"])
        setJoggersttotalprice(Joggersttotalprice + 15);
        setJoggersStyleiron("ironong2");
    };
    const changeStyletowelJoggerst = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setJoggerstwashtype([...Joggerstwashtype, "fold"])
        setJoggersttotalprice(Joggersttotalprice + 10);
        setJoggersStyletowel("towel2");
    };

    const changeStylebleachJoggerst = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setJoggerstwashtype([...Joggerstwashtype, "pack"])
        setJoggersttotalprice(Joggersttotalprice + 25);
        setJoggersStylebleach("bleach2");
    };

    const pricefunJoggerstJoggerst = (e) => {
        name = e.target.name;
        value = Joggersttotalprice * userjo.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setJoggerstdipprice(`${userjo.quantity}x${Joggersttotalprice}=${value}`)
        setJoggerstorderprice(Joggersttotalprice * userjo.quantity)
        dumarray.push(Joggerstprodtype)
        dumarray.push(Joggerstquantity)
        dumarray.push(Joggerstwashtype)
        // dumarray.push(orderprice)
        dumarray.push(Joggersttotalprice * userjo.quantity)
        console.log("dumarray", dumarray)
        setJoggersttotalprice(0);
        // setJoggerstwashtype([])    
        setuserjo({ ...userjo, [name]: value });
        sendOrder[Joggerstprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setJoggersresbtn("Resetbtn2");

    }

    const resFunJoggerst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setJoggersttotalprice(Joggersttotalprice * 0);

        setuserjo({ quantity: 0, price: "" })
        setJoggersStylewash("washing");
        setJoggersStyleiron("ironong");
        setJoggersStyletowel("towel");
        setJoggersStylebleach("bleach");
        setJoggerstprodname("prodname");
        setJoggerstdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setJoggerstprodtype("")
        setJoggerstquantity(0)
        setJoggerstwashtype([])
        setJoggerstorderprice("")
        setJoggersresbtn("Resetbtn");
    }
    //-----------------------------------------userstate-------------------------------------//
    const [userot, setuserot] = useState({ quantity: 0, price: "" });

    //----------------------------------------- otherst------------------------------------------------------>   


    const [otherstprodtype, setotherstprodtype] = useState("")
    const [otherstquantity, setotherstquantity] = useState(0)
    const [otherstwashtype, setotherstwashtype] = useState([])
    const [otherstorderprice, setotherstorderprice] = useState()
    // const [product, setProduct] = useState([])
    const [othersttotalprice, setothersttotalprice] = useState(0);
    const [otherstprodname, setotherstprodname] = useState("prodname");
    const [othersstylewash, setothersStylewash] = useState("washing");
    const [othersstyleiron, setothersStyleiron] = useState("ironong");
    const [othersstyletowel, setothersStyletowel] = useState("towel");
    const [othersstylebleach, setothersStylebleach] = useState("bleach");
    const [otherstdipprice, setotherstdipprice] = useState("--");
    const [othersresbtn, setothersresbtn] = useState("Resetbtn")

    const productname1otherst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        var id = e.target.getAttribute('id')
        // e.target.className= "prodname2"
        setotherstprodname("prodname2")
        setotherstprodtype(value)
    }
    const productname2otherst = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserot({ ...userot, [name]: value });
        setotherstquantity(value)
    }
    const changeStylewashotherst = (e) => {
        name = e.target.name;
        value = "wash";
        // e.target.className = "washing2"
        setothersttotalprice(othersttotalprice + 20)
        setotherstwashtype([...otherstwashtype, "wash"])
        setothersStylewash("washing2");
    };

    const changeStyleironotherst = (e) => {
        name = e.target.name;
        value = "press";
        // e.target.className = "ironong2"
        setotherstwashtype([...otherstwashtype, "press"])
        setothersttotalprice(othersttotalprice + 15);
        setothersStyleiron("ironong2");
    };
    const changeStyletowelotherst = (e) => {
        name = e.target.name;
        value = "fold";
        // e.target.className = "towel2"
        setotherstwashtype([...otherstwashtype, "fold"])
        setothersttotalprice(othersttotalprice + 10);
        setothersStyletowel("towel2");
    };

    const changeStylebleachotherst = (e) => {
        name = e.target.name;
        value = "pack";
        // e.target.className = "bleach2"
        setotherstwashtype([...otherstwashtype, "pack"])
        setothersttotalprice(othersttotalprice + 25);
        setothersStylebleach("bleach2");
    };

    const pricefunotherstotherst = (e) => {
        name = e.target.name;
        value = othersttotalprice * userot.quantity;
        // e.target.className= "bleach2"
        var dumarray = []
        setotherstdipprice(`${userot.quantity}x${othersttotalprice}=${value}`)
        setotherstorderprice(othersttotalprice * userot.quantity)
        dumarray.push(otherstprodtype)
        dumarray.push(otherstquantity)
        dumarray.push(otherstwashtype)
        // dumarray.push(orderprice)
        dumarray.push(othersttotalprice * userot.quantity)
        console.log("dumarray", dumarray)
        setothersttotalprice(0);
        // setotherstwashtype([])    
        setuserot({ ...userot, [name]: value });
        sendOrder[otherstprodtype] = dumarray
        console.log("sendOrder", sendOrder)
        setothersresbtn("Resetbtn2");

    }

    const resFunotherst = (e) => {
        var name = e.target.getAttribute('name')
        var value = e.target.getAttribute('value')
        console.log("item  name to reset", name)
        console.log(" item value to reset", value)
        setothersttotalprice(othersttotalprice * 0);

        setuserot({ quantity: 0, price: "" })
        setothersStylewash("washing");
        setothersStyleiron("ironong");
        setothersStyletowel("towel");
        setothersStylebleach("bleach");
        setotherstprodname("prodname");
        setotherstdipprice("--")
        delete sendOrder[value];
        // setProduct(list.filter(item => item.value!== value));
        console.log("sendOrderinreset", sendOrder)
        setotherstprodtype("")
        setotherstquantity(0)
        setotherstwashtype([])
        setotherstorderprice("")
        setothersresbtn("Resetbtn");
    }


    return (

        <div className="product-Container">
            <table className='maindiv' >
                <thead className='tablehead' >
                    <th className='prodtype' >Product Types</th>
                    <th className='quntity' >Qunatity</th>
                    <th className='washtype' >Wash</th>
                    <th className='price' >Price</th>
                </thead>
                <tbody>
                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={shirtprodname} value="Shirts" onClick={productname1shirt} type="Number" name="prodType">Shirts</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={usersh.quantity} onChange={productname2shirt} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={shirstylewash} id={`Shirtswash`} onClick={changeStylewashshirt} type="washing" name="wash"></div>
                            <div className={shirstyleiron} id={`Shirtspress`} onClick={changeStyleironshirt} type="ironong" name="press" ></div>
                            <div className={shirstyletowel} id={`Shirtsfold`} onClick={changeStyletowelshirt} type="fold" name="fold"></div>
                            <div className={shirstylebleach} id={`Shirtspack`} onClick={changeStylebleachshirt} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`Shirtsprice`} value="0" onClick={pricefunshirtshirt} type="Number" name="price">{shirtdipprice}</p>
                            <button className={shirresbtn} name="prodType" id={`ShirtsReset`} value="Shirts" onClick={resFunshirt} >Reset</button>
                        </td>
                    </tr>
                    <tr className='tablerow' id={`T-shirtswashpress`} >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={Tshirtstprodname} id="T-shirts" value="Tshirts" onClick={productname1Tshirtst} type="Number" name="prodType">Tshirts</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' id={`T-shirtsquantity`} value={userts.quantity} onChange={productname2Tshirtst} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={Tshirtsstylewash} id={`T-shirtswash`} onClick={changeStylewashTshirtst} type="washing" name="wash"></div>
                            <div className={Tshirtsstyleiron} id={`T-shirtspress`} onClick={changeStyleironTshirtst} type="ironong" name="press" ></div>
                            <div className={Tshirtsstyletowel} id={`T-shirtsfold`} onClick={changeStyletowelTshirtst} type="fold" name="fold"></div>
                            <div className={Tshirtsstylebleach} id={`T-shirtspack`} onClick={changeStylebleachTshirtst} type="pack" name="pack"></div>
                        </td>
                        <td className='res' > <p className='initialprice' id={`T-shirtsprice`} value="0" onClick={pricefunTshirtstTshirtst} type="Number" name="price"  >{Tshirtstdipprice}</p>
                            <button className={Tshirtsresbtn} name="prodType" id={`T-shirtsReset`} value="T-shirts" onClick={resFunTshirtst} >Reset</button>
                        </td>
                    </tr>
                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={Trotprodname} value="Trousers" onClick={productname1Trot} type="Number" name="prodType">Trousers</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={userto.quantity} onChange={productname2Trot} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={Trostylewash} id={`Trotswash`} onClick={changeStylewashTrot} type="washing" name="wash"></div>
                            <div className={Trostyleiron} id={`Trotspress`} onClick={changeStyleironTrot} type="ironong" name="press" ></div>
                            <div className={Trostyletowel} id={`Trotsfold`} onClick={changeStyletowelTrot} type="fold" name="fold"></div>
                            <div className={Trostylebleach} id={`Trotspack`} onClick={changeStylebleachTrot} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`Trotsprice`} value="0" onClick={pricefunTrotTrot} type="Number" name="price">{Trotdipprice}</p>
                            <button className={Troresbtn} name="prodType" id={`TrotsReset`} value="Trots" onClick={resFunTrot} >Reset</button>
                        </td>
                    </tr>

                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={Jeanstprodname} value="Jeans" onClick={productname1Jeanst} type="Number" name="prodType">Jeans</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={userje.quantity} onChange={productname2Jeanst} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={Jeansstylewash} id={`Jeanstswash`} onClick={changeStylewashJeanst} type="washing" name="wash"></div>
                            <div className={Jeansstyleiron} id={`Jeanstspress`} onClick={changeStyleironJeanst} type="ironong" name="press" ></div>
                            <div className={Jeansstyletowel} id={`Jeanstsfold`} onClick={changeStyletowelJeanst} type="fold" name="fold"></div>
                            <div className={Jeansstylebleach} id={`Jeanstspack`} onClick={changeStylebleachJeanst} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`Jeanstsprice`} value="0" onClick={pricefunJeanstJeanst} type="Number" name="price">{Jeanstdipprice}</p>
                            <button className={Jeansresbtn} name="prodType" id={`JeanstsReset`} value="Jeansts" onClick={resFunJeanst} >Reset</button>
                        </td>
                    </tr>

                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={Boxsertprodname} value="Boxers" onClick={productname1Boxsert} type="Number" name="prodType">Boxers</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={userbo.quantity} onChange={productname2Boxsert} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={Boxserstylewash} id={`Boxsertswash`} onClick={changeStylewashBoxsert} type="washing" name="wash"></div>
                            <div className={Boxserstyleiron} id={`Boxsertspress`} onClick={changeStyleironBoxsert} type="ironong" name="press" ></div>
                            <div className={Boxserstyletowel} id={`Boxsertsfold`} onClick={changeStyletowelBoxsert} type="fold" name="fold"></div>
                            <div className={Boxserstylebleach} id={`Boxsertspack`} onClick={changeStylebleachBoxsert} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`Boxsertsprice`} value="0" onClick={pricefunBoxsertBoxsert} type="Number" name="price">{Boxsertdipprice}</p>
                            <button className={Boxserresbtn} name="prodType" id={`BoxsertsReset`} value="Boxserts" onClick={resFunBoxsert} >Reset</button>
                        </td>
                    </tr>
                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={Joggerstprodname} value="Joggers" onClick={productname1Joggerst} type="Number" name="prodType">Joggers</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={userjo.quantity} onChange={productname2Joggerst} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={Joggersstylewash} id={`Joggerstswash`} onClick={changeStylewashJoggerst} type="washing" name="wash"></div>
                            <div className={Joggersstyleiron} id={`Joggerstspress`} onClick={changeStyleironJoggerst} type="ironong" name="press" ></div>
                            <div className={Joggersstyletowel} id={`Joggerstsfold`} onClick={changeStyletowelJoggerst} type="fold" name="fold"></div>
                            <div className={Joggersstylebleach} id={`Joggerstspack`} onClick={changeStylebleachJoggerst} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`Joggerstsprice`} value="0" onClick={pricefunJoggerstJoggerst} type="Number" name="price">{Joggerstdipprice}</p>
                            <button className={Joggersresbtn} name="prodType" id={`JoggerstsReset`} value="Joggersts" onClick={resFunJoggerst} >Reset</button>
                        </td>
                    </tr>
                    <tr className='tablerow'  >
                        <td className='prodinfo'  >
                            <div>
                                <img className='prodimage' alt="prodimage" src="https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg" />
                            </div>
                            <div className='namedex'>
                                <h1 className={otherstprodname} value="Others" onClick={productname1otherst} type="Number" name="prodType">Others</h1>
                                <p className='des' >Lorem Ipsum is simply dummy text of the</p>
                            </div>
                        </td>
                        <td className='inputdiv' > <input className='intinput' value={userot.quantity} onChange={productname2otherst} type="number" name="quantity" ></input></td>
                        <td className='opretionimg' >
                            <div className={othersstylewash} id={`otherstswash`} onClick={changeStylewashotherst} type="washing" name="wash"></div>
                            <div className={othersstyleiron} id={`otherstspress`} onClick={changeStyleironotherst} type="ironong" name="press" ></div>
                            <div className={othersstyletowel} id={`otherstsfold`} onClick={changeStyletowelotherst} type="fold" name="fold"></div>
                            <div className={othersstylebleach} id={`otherstspack`} onClick={changeStylebleachotherst} type="pack" name="pack"></div>
                        </td>
                        <td className='res'> <p className='initialprice' id={`otherstsprice`} value="0" onClick={pricefunotherstotherst} type="Number" name="price">{otherstdipprice}</p>
                            <button className={othersresbtn} name="prodType" id={`otherstsReset`} value="othersts" onClick={resFunotherst} >Reset</button>
                        </td>
                    </tr>
                    

                </tbody>
            </table>
            <div className='orderbtn'>
                <div className='cle' onClick={cancelOrder} ><Cancel /></div>
                <Link to="/summary" state={sendOrder}> <div className='cle' ><Process /></div> </Link>
            </div>

            
        </div>

    )
}

export default Loop

