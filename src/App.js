import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import './App.css';
import Layout from "./Layout/Layout";

function App() {
  return (
   <Layout>

   <Routes >       
    <Route path='/' element={<Homepage/> } />
    <Route path="cart" element={<Cart/>}/>    
   </Routes>
   </Layout>
   
  );
}

export default App;
