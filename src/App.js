import "./styles/App.css"
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import Bags from "./pages/Bags";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/bags" element={<Bags />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
