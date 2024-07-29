import "./App.css";
import Funcomp from "./components/Funcomp";
import Classcomp from "./components/Classcomp";
import Header from "./components/Header";
import Props from "./components/Props";
import Events from "./components/Events";
import State from "./components/State";
import Textbox from "./components/Textbox";
import ConditionalRender from "./components/ConditionalRender";
import { useState } from "react";
import RegisterFormC from "./components/RegisterFormC";
import RegisterFormF from "./components/RegisterFormF";
import ListRendering from "./components/ListRendering"
import ProductsList from "./components/ProductList/ProductsList";
import Employee from "./components/Employee";
import Pictureupload from "./components/Pictureupload";
import FormValidation from "./components/FormValidation";
import ReactHookForm from "./components/ReactHookForm";
import Container from "react-bootstrap/esm/Container";
import { Route, Routes } from "react-router-dom";
import Home from './components/Routing/Home'
import About from "./components/Routing/About";
import PageNotFound from "./components/Routing/PageNotFound";
import ProductDetails from "./components/ProductList/ProductDetails";

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} /> {/* In there '/' means it's like Main page http://localhost:3000 (Root Url where our project runs on browser) */}
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormValidation/>}/>
          <Route path="/useform" element={<ReactHookForm/>}/>
          <Route path="/products" element={<ProductsList/>}/>
          <Route path="/products/details/:productname/:id" element={<ProductDetails/>}/> {/* we call this a dynamic routing we are showing product name by clicking whichever view button */}
          <Route path="/employee" element={<Employee empid="01" ename="Dhairya" basic="49000" hra="500" da="1200"/>}/> {/* we call this a dynamic routing we are showing product name by clicking whichever view button */}
  
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>

      <div className="container">
        {/* <h1>Majon Don</h1>
      <hr />
      <Funcomp/>
      <hr />
      <Classcomp/>
      <Header/> */}
        {/* <Props fname="Meet" lname="Chudasama" age="20" /> */}
        {/* <Events/> */}
        {/* <State/> */}
        {/* <Textbox/> */}
        {/* <button
        type="button"
        className="mt-3 btn btn-primary"
        onClick={() => setisLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "LogOut" : "Login"}
      </button> */}

        {/* <ConditionalRender isLoggedIn={isLoggedIn} /> */}
        {/* <RegisterFormC/> */}
        {/* <RegisterFormF/> */}
        {/* <ListRendering/>*/}
        {/* <ProductsList/> */}
        {/* <Employee empid="01" ename="Dhairya" basic="49000" hra="500" da="1200"/> */}
        {/* <Pictureupload/> */}
        {/* <FormValidation/> */}
        {/* <ReactHookForm/> */}
      </div>
    </>
  );
}

export default App;
