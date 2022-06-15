import Navigation from "../components/Navigation";
import CartProviders from "../providers/CartProviders";
import { useCart } from '../providers/CartProviders';


const Layout = ({children}) => {
    const name =useCart();
    
    return ( 
            <CartProviders>
            <Navigation />
        <div>
            {children}
        </div>
            </CartProviders>
     );
}
 
export default Layout;
