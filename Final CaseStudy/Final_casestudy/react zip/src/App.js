
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ShipComp from "./components/ShipComp";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Login/>}/>
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ShipComp" element={<ShipComp />} />
      </Routes>
    </Router>
  );
}

export default App;
