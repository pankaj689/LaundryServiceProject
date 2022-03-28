import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/cancelOrder.css'
const CancelOrder = (props) =>{
    const navigate = useNavigate();
    const orderId = props.orderI
    console.log(orderId);
    const handleCancelConfirm = (e) =>{
        e.preventDefault();
        try{
        axios.post(`http://localhost:5000/api/update/${orderId}`);
        navigate("/createorder")
        console.log("you clicked me");
        }catch(e){
          console.log(e.messsage);
        }
    }
    // props.popTrigger(false)
    return (props.orderState)?
      <div className="popup-box">
        <div className="box">
            <div className="cancel-alert">
            <p>Alert</p><b><span onClick={() => props.popTrigger(false)} className="close-icon" >X</span></b>
            </div>
            <div className="alert-desc">
            <span className="danger-symbol">&#9888;</span>
              <p>Are you sure you want to cancel the
                  order <b>No: {orderId}</b>
              </p>
            </div>
            <button onClick ={handleCancelConfirm} className="pcd-btn">Proceed</button>
        </div>
      </div>: "";
}
export default CancelOrder;