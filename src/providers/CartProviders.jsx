import{Context,useReducer,createContext, useContext} from 'react';
import CartReducer from './CartReducer';


const CartContext=createContext();
const CartContextDispacher=createContext();
const initialState={
    Cart:[],
    total:0,
}
const CartProviders = ({children}) => {
    const[Cart,dipacher] = useReducer(CartReducer,initialState);
    return (  
        <CartContext.Provider value={Cart} >
            <CartContextDispacher.Provider value={dipacher} >
                {children}
            </CartContextDispacher.Provider>
        </CartContext.Provider>
    );
}
 
export default CartProviders;

export const useCart=()=>useContext(CartContext);

export const useCartAction=()=>useContext(CartContextDispacher)