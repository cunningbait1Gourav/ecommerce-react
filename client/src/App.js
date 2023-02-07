import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Pay from "./pages/Pay"
import Success from "./pages/Success";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products/:category" element={<ProductList/>}></Route>
          <Route path="/product/:id" element={<Product/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/pay" element={<Pay/>}></Route>
          <Route path="/success" element={<Success/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
