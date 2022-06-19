import { Link } from "react-router-dom";
import { useCart } from '../providers/CartProviders';
import { useAouth } from "../providers/AouthProvider";
import shopicon from '../assets/img_566102.png';
import carticon from '../assets/Cart.png';
import './Navigation.css';


const Navigation = () => {
    const cartnumber=useCart();  
    const loginData =useAouth();
    
    return (        
            
           <header className="Navigation">
            <nav>
                <ul>
                    <div>
                     <img style={{width:'50px',height:'50px'}} src={shopicon} alt="" />
                    </div>
                    <li>
                    <Link to='/'>Home </Link>
                    </li>
                </ul>
                <ul >
                    <li>
                       <Link to='/Cart' > Cart Page</Link> 
                    </li>
                    <li>
                       <Link to={loginData ? '/profile' : '/login'} >
                        {loginData ? 'Profile' : 'Login' }
                        </Link> 
                    </li>
                    <span><img style={{width:'25px',height:'25px'}} src={carticon} alt="" />{cartnumber.Cart.length} </span>
                </ul>
            </nav>
        </header> 
        
        
     );
}
 
export default Navigation;