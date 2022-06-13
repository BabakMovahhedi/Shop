import { useCart } from "../providers/CartProviders";
import './cart.css';

const Cart = () => {
    const cartState =useCart();
    if(!cartState.Cart)
         return(<main>
            <h2>cart is empty!</h2>
         </main> )
    return (        
        <div className="cart_item_list ">
           <section className="cart_item">
            {cartState.Cart.map(
                (item)=>
                <div className="cart_item_product">

                    <div className="cart_item_img">
                    <img src={item.image}></img>
                    </div>                   
                   <div className="cart_item-title">
                   <p>{item.name} </p>
                    <p>{item.price * item.quantity} </p>
                   </div>
                    <div className="cart_btn">
                    <button >Add</button>
                    <button>number: {item.quantity} </button>
                    <button>Remove</button>
                   </div>
                    
                </div>
            )}
           </section>
           <section className="cart_item_summery">
            <h2>cart sumery</h2>
           </section>
        </div>
     );
}
 
export default Cart;
