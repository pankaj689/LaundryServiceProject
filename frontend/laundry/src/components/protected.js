import { useNavigate } from 'react-router-dom';

const Protected = (props) =>{
    const navigate = useNavigate();
    let Cmp = props.Cmp
    if (localStorage.getItem('token')){
        return <div>
        <Cmp />
    </div>
    }else{
       return navigate("/")
    }
}
export default Protected