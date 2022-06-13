import { useCartAction } from '../providers/CartProviders';
import * as data from '../data';



const Homepage = () => {
    const dispatch=useCartAction()
    const addproductHandler =(product)=>{
        dispatch({type:'ADD_TO_CART',payload:product});
    };
    return ( 
        <main className="container">
           <section className="productlist">
            {data.products.map((product)=>{
                return(
                    <section className="product">
                   <div className="product_img">
                   <img src={product.image} alt={product.name} />
                   </div>
                    <div className="product_text">
                        <div>{product.name} </div>
                        <div> $ {product.price} </div>
                        <button onClick={()=>addproductHandler(product) } className='btn primary' >
                            Add to cart
                            
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