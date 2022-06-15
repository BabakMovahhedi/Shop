import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart,useCartAction } from "../providers/CartProviders";
import {Link} from 'react-router-dom';
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
        toast.warning(`${item.name} Delete from cart`,{
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
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
                    <p>{item.price * item.quantity} $</p>
                    <p> discunt:{item.price-item.offPrice} $</p>                    
                   </div>
                    <div className="cart_btn">
                    <button onClick={()=>addHandler(item) } >Add</button>
                    <button>number: {item.quantity} </button>
                    <button onClick={()=> removeHandler(item) }>Remove</button>
                   </div>
                    
                </div>
            )}
           </section>
           <CartSummery  />
        </div>
     );
}
 
export default Cart;

const CartSummery=()=>{
    const {Cart,total}=useCart();
    const originalPrice= (Cart.length ? Cart.reduce((acc,cuu)=> acc+cuu.quantity*cuu.price ,0) : 0)
   return(
    <section className="cart_summery">
    <h2 style={{marginBottom:'25px'}}>cart sumery</h2>

        <div className='cart_summery_item'> 
            <p>cart total</p>
            <p>{originalPrice}</p>
        </div >
        <div className='cart_summery_item'> 
            <p>cart discunt</p>
            <p>{originalPrice-total}</p>
        </div>
        <div className='cart_summery_item'>
            <p>total net</p>
            <p>{total} </p>
        </div>
        <Link to='/checkout' >
        <button className='btn primary'  >CheckOut</button>
        </Link>

    </section>
   )
} 