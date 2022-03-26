import '../styles/sucessnote.css';

const SucessNote = (props) =>{
    return (props.trigger)?(
    <div className="successContainer">
        <div className='success-content'>
            <div className="check-logo">
                <span>&#10003;</span>
            </div>
            <div className="success-desc">
                <h>Your order is Successfull</h>
            </div>
            <p>You can track the delivery in "Orders" section. </p>
            <a href ="/history"><button>Go to orders</button></a>
        </div>

    </div>) :"";
}

export default SucessNote;