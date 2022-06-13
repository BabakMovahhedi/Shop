import { useCart } from "../providers/CartProviders";


const Cart = () => {
    const cartState =useCart();
    console.log(cartState.Cart);
    return ( 
       
        <div>
            <main>{cartState.Cart.length ? cartState.Cart.map((item)=>             
             <div key={item.id}><p>{item.name}</p></div> )
               : <p>No ITEm Add</p>}  </main>
        </div>
     );
}
 
export default Cart;
