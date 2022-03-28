import '../styles/ordersumpop.css';
const OrderSummary = (props) => {
    const { smstate, details, setsmState } = props
    console.log("detail", details)
    console.log("props", props)

    return (smstate) ? <div className="order-sum-pop">
        <div className="sumhead">
            <h3>Summary</h3>
            <h3 onClick={() => setsmState(false)}>X</h3>
        </div>
        <div className='storeD'>
            <div className="col11">
                <p className='namepara1234' >Store Location</p>
                <h6>{details.storeLocation}</h6>
            </div>
            <div className="col22">
                <p>
                    <strong>Store Address:</strong>
                </p>
                <h6>{details.storeaddress}</h6>
            </div>
            <div className="col33">
                <p>
                    <strong>Phone</strong>
                </p>
                <h6>{details.storePhone}</h6>
            </div>
        </div>
        <div className="store-info">
            <div><input className='st-rad' type="radio" checked /><label>Picked on</label></div>
            <div><input className='st-rad' type="radio" checked /><label>Wash</label></div>
            <div><input className='st-rad' type="radio" /><label></label></div>
            <div><input className='st-rad' type="radio" /><label></label></div>
        </div>
        <p className='ord-det'>order details</p>

        <div className='ord-sumfetched'>
            {details.prodType.map(item => {
                return (
                    <div className='prowp'>
                        <h6 className='Pro'>{item[0]}</h6>
                        <h6 className='wash-str'>{item[2].join()}</h6>
                        <h6 className='eachprice'>{item[3]}</h6>
                    </div>
                )
            })}
            <div className='charge-inc'>
                <p className='sub-total'>subtotal {details.subTotal}Rs</p><br />
                <p className='sub-total'>pickup charge {details.pickupcharges}Rs</p>
            </div>
        </div>

        <div className='totalGrid'>
            Total <b>Rs {details.price}</b>
        </div>

        <div>
            <address className="address-sum">
                <h6>Adrress</h6>
                {details.address}
            </address>
        </div>

    </div> : "";
}
export default OrderSummary;




