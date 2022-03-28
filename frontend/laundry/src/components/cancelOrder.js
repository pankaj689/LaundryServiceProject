import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/cancelOrder.css'
const CancelOrder = (props) =>{
    const navigate = useNavigate();
    const orderId = props.orderI

    const handleCancelConfirm = (e) =>{
        e.preventDefault();
        try{

        axios.post(`http://localhost:5000/api/update/${orderId}`);
        // navigate("/history")
        navigate("/createorder")
        console.log("you clicked me");
        // props.popTrigger(false);
        // props.StetusChannge("cls")
        props.StetusChannge("")

        axios.post("http://localhost:5000/api/update", {orderId: orderId});
        navigate("/createOrder")
        console.log("you clicked me");

        }catch(e){
          console.log(e.messsage);
        }
    }
    // props.popTrigger(false)
    return (props.orderState)?

     (<div className='mainpopcancelord'  >      
       <div className="popup-box">
        <div className="box">
            <div className="alert-close">
            <p className='alertTxt' >Alert</p>
            <b><span onClick={() => props.popTrigger(false)} className="close-icon" >X</span></b>
            </div>

    

            <div className="alert-desc">
            <span className="danger-symbol">&#9888;</span>
              <p>Are you sure you want to cancel the
                  order <b>No: {orderId}</b>
              </p>
            </div>
            <button onClick ={handleCancelConfirm} className="proceed-btn">Proceed</button>
        </div>

      </div>
      </div>): "";

}
export default CancelOrder;