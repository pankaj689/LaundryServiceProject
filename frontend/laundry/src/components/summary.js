// import logo from './logo.svg';
import "../styles/summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <header className="summary-header">
        <div className="header-left">Summary</div>
        <div className="header-right button">
          <button type="button"> X </button>
        </div>
      </header>
      <div className="second-section">
        <div className="three-cols">
          <div className="col1">
            <div className="name">
              <p>Store Location</p>
            </div>
            <input type="text" placeholder="   Store location"></input>
          </div>
          <div className="col2">
            <p>
              <strong>Store Address:</strong>
            </p>
            <input type="text"></input>
          </div>
          <div className="col3">
            <p>
              <strong>Phone</strong>
            </p>
            <input type="number"></input>
          </div>
        </div>
      </div>
      <div className="third-section">
        <p> order details</p>
        <div>
          <ul>
            <li>productType1</li>
            <li>washType1</li>
            <li>price</li>
          </ul>
          <ul>
            <li>productType1</li>
            <li>washType1</li>
            <li>price</li>
          </ul>
          <ul>
            <li>productType1</li>
            <li>washType1</li>
            <li>price</li>
          </ul>
        </div>
        <div className="total-price"></div>
        <div className="address">
          <p>Address</p>
          <div className="address-box">
            <p>
              <strong>Home</strong>
            </p>
            <p>House no. 9 Phase-1 pocket-1 sector-10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
