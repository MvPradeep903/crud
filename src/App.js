import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
}

export default App;
