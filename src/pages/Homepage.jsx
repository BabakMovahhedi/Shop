import { useCart, useCartAction } from '../providers/CartProviders';
import * as data from '../data';
import { checkInCart } from '../utils/checkInCart';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Homepage = () => {
    const {Cart}=useCart();
    const dispatch=useCartAction()
    const addproductHandler =(product)=>{
        toast.success(`${product.name} add to cart`,{
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        dispatch({type:'ADD_TO_CART',payload:product});
    };
    return ( 
        <main className="container">
           <section className="productlist">
            {data.products.map((product)=>{
                return(
                    <section key={product.id} className="product">
                   <div className="product_img">
                   <img src={product.image} alt={product.name} />
                   </div>
                    <div className="product_text">
                        <div>{product.name} </div>
                        <div> $ {product.price} </div>
                        <button onClick={()=>addproductHandler(product) } className='btn primary' >
                            {checkInCart(Cart,product) ? 'in cart' : "Add to cart"}
                            
                        </button>
                    </div>
                    </section>
                )
            })}
           </section>
        </main>        
     );
}
 
export default Homepage;