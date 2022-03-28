import "../style/sidebarorderHis.css"
import more from '../assests/more.svg';
import homerun from '../assests/home-run.svg';
import list from '../assests/list.svg';

const Sidebar = () =>{
    return (<div className ="sidebarOrderhis">
        <div className ="homeOrderhis"><a href ="/"><img className="home-btnOrderhis" src ={homerun} alt ="" /></a></div>
        <div className ="moreOrderhis"><a href ="/createorder"><img className="more-btnOrderhis" src ={more} alt ="" /></a></div>
        <div className ="listOrderhis"><a href ="/history"><img className="list-btnOrderhis" src ={list} alt ="" /></a></div>
    </div>
    )
}

export default Sidebar;