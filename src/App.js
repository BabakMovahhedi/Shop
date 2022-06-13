import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import './App.css';
import Layout from "./Layout/Layout";
import CartProviders from "./providers/CartProviders";

function App() {
  return (
      <Layout>
    <CartProviders>
      <Routes >       
        <Route path='/' element={<Homepage/> } />
        <Route path="Cart" element={<Cart/>}/>    
      </Routes>
    </CartProviders>
   </Layout>
   
  );
}

export default App;
