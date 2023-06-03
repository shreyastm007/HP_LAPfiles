import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Carddetails from "./components/Carddetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Carddetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
