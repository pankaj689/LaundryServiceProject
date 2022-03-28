import { useNavigate } from "react-router-dom";
const UserHeader = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <header>
      <h4>LAUNDRY</h4>
      <nav>
        <ul>
          <li>Pricing</li>
          <li>Carrer</li>
          <li className="logoutButn" stylesheet="width:80px;">
            <a href="/" onClick={Logout}>
              Logout
            </a>
          </li>
          <div className="userAcc">
            {/* <img className='userImage' alt="user Image"  src='img/Ellipse 645.png'/> */}
            <div className="userImage"></div>
            <p className="userName">User Name</p>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default UserHeader;