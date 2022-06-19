import { Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CheckOut from "./pages/CheckOut";
import SignUp from './pages/SignUP';
import { ToastContainer } from 'react-toastify';
import CartProviders from "./providers/CartProviders";
import Layout from "./Layout/Layout";
import Login from './pages/Login';
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AouthProviders from "./providers/AouthProvider";
import './App.css';



function App() {
  return (   
       <CartProviders>
        <AouthProviders>
        <Layout>
        <ToastContainer/>
        <Routes >       
        <Route path='/' element={<Homepage/> } />
        <Route path="Cart" element={<Cart/>}/>
        <Route path="checkout" element={<CheckOut/>}/> 
        <Route path='signup' element={<SignUp/> } />
        <Route path='login' element={<Login/> } /> 
        <Route path='profile' element={<Profile/> } />    
      </Routes>
    </Layout>
        </AouthProviders>
       </CartProviders>
    
  

        
       
      
      
  );
}

export default App;
