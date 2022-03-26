const UserHeader = () => {
    return (<header>
        <h4>LAUNDRY</h4>
        <nav>
          <ul>
            <li>Pricing</li>
            <li>Carrer</li>
            <div className='userAcc' >
                {/* <img className='userImage' alt="user Image"  src='img/Ellipse 645.png'/> */}
                <div className='userImage'></div>
                <p className='userName' >User Name</p>
            </div>
          </ul>
        </nav>
      </header>)
}

export default UserHeader;

