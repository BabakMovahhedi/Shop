import { Route,Routes,R } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CheckOut from "./pages/CheckOut";
import SignUp from './pages/SignUP';
import Login from './pages/SignUP';
import Cart from "./pages/Cart";


import './App.css';

function App() {
  return (   
       

      <Routes >       
        <Route path='/' element={<Homepage/> } />
        <Route path="Cart" element={<Cart/>}/>
        <Route path="checkout" element={<CheckOut/>}/> 
        <Route path='signup' element={<SignUp/> } />
        <Route path='login' element={<Login/> } />    
      </Routes>    
       
      
      
  );
}

export default App;
