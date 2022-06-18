import Navigation from "../components/Navigation";
import { useCart } from '../providers/CartProviders';

const Layout = ({children}) => {
    const name =useCart();
    
    return ( 
            
            <>
         <Navigation />
        <div>
            {children}
        </div>
            </>
        
            
     );
}
 
export default Layout;
