import { Link } from "react-router-dom";
import { useCart } from '../providers/CartProviders';
import './Navigation.css';


const Navigation = () => {
    const cartnumber=useCart(); 
    
    
    return (        
            
           <header className="Navigation">
            <nav>
                <ul>
                    <li>
                    <Link to='/'>Home </Link>
                    </li>
                    <li>
                       <Link to='/Cart' > Cart Page</Link> 
                    </li>
                    <div> Cart Number :{cartnumber.Cart.length} </div>
                </ul>
            </nav>
        </header> 
        
        
     );
}
 
export default Navigation;