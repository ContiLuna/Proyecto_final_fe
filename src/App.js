import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navigation/NavBar";
import Footer from './components/Footer/Footer';
import CrearProducto from './pages/CrearProducto'
import Registro from './components/formRegister';
import Login from "./pages/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/crearProducto' element={<CrearProducto />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
