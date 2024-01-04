import About from "./Components/About";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Services from "./Components/Services";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Login from "./Components/Login";




function App() {
  return (
    <>


      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service"  element = {< Services/>}/>
          <Route path="/Review"  element = {<Reviews/>}/>
          <Route path="/login" element ={<Login/>} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
