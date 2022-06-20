import { useAouth } from "../providers/AouthProvider";
import {useCart} from '../providers/CartProviders';
import '../pages/checkout.css'




const CheckOut = () => {
    const Aouth=useAouth();
    
    const {Cart}=useCart();
    console.log(Cart);
   
    return ( 
     <div className="checkout">
    
    <section className="section">
          <h2>
            <p>Name:{Aouth.name} </p>
            <p>Email:{Aouth.email} </p>
            <p>PhoneNumber:{Aouth.phoneNumber}</p>
        </h2>
      </section>
    
      
      <section className="section">
        {Cart.map((c)=>{
            return (<div  key={c.id}>
                <p>Name:{c.name} </p>
                <p>price:{c.price} </p>
                <p>OffPrice:{c.offPrice} </p>
            </div>)
        }) }    
      </section>
      
     </div>
     );
}
 
export default CheckOut;
