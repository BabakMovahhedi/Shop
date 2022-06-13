import { Link } from "react-router-dom";
import './Navigation.css';
const Navigation = () => {
    return ( 
        <header className="Navigation">
            <nav>
                <ul>
                    <li>
                    <Link to='/'>Home </Link>
                    </li>
                    <li>
                       <Link to='/Cart' > Cart</Link> 
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;