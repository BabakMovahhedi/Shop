
import { useCart,useCartAction } from "../providers/CartProviders";
import './cart.css';

const Cart = () => {
    const cartState =useCart();
    const cartAction=useCartAction();

    if(!cartState.Cart.length)
         return(<main> <h2>cart is empty!</h2> </main> )
    
    
     const addHandler=(item)=>{
            cartAction({type:'ADD_TO_CART',payload:item});
         } ;  
     const removeHandler=(item)=>{
            cartAction({type:'REMOVE_TO_CART',payload:item});
         } ;  
           
    return (        
        <div className="cart_item_list ">
           <section className="cart_item">
            {cartState.Cart.map(
                (item)=>
                <div key={item.id} className="cart_item_product">

                    <div className="cart_item_img">
                    <img src={item.image}></img>
                    </div>                   
                   <div className="cart_item-title">
                   <p>{item.name} </p>
                    <p>{item.price * item.quantity} </p>
                   </div>
                    <div className="cart_btn">
                    <button onClick={()=>addHandler(item) } >Add</button>
                    <button>number: {item.quantity} </button>
                    <button onClick={()=> removeHandler(item) }>Remove</button>
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
