import '../sidebar.css';
import more from '../assests/more.svg';
import homerun from '../assests/home-run.svg';
import list from '../assests/list.svg';


const Sidebar = () =>{
    return (<div className ="sidebar">
        <div className ="home"><a href ="/"><img className="home-btn" src ={homerun} alt ="" /></a></div>
        <div className ="more"><a href ="/"><img className="more-btn" src ={more} alt ="" /></a></div>
        <div className ="list"><a href ="/"><img className="list-btn" src ={list} alt ="" /></a></div>
    </div>
    )
}

export default Sidebar;