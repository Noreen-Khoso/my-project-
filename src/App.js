import About from "./Components/About";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import EventServiceProducts from "./Components/EventServiceProducts";
import GardenServicesProducts from "./Components/GardenServicesProducts";
import CustomServicesProducts from "./Components/CustomServicesProducts";




function App() {
  return (
    <>


      <BrowserRouter>
       
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Product/>} />
          <Route path="/event" element={<EventServiceProducts/>} />
          <Route path="/garden" element={<GardenServicesProducts/>} />
          <Route path="/custom" element={<CustomServicesProducts/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
          
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
