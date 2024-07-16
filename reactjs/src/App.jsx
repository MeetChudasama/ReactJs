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


function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
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
      {/* <ListRendering/> */}
      {/* <ProductsList/> */}
      <Employee empid="01" ename="Dhairya" basic="49000" hra="500" da="1200"/>
    </div>
  );
}

export default App;
