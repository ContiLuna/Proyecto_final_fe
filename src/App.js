import { Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navigation/NavBar";
import Footer from './components/Footer/Footer';
import CrearProducto from './pages/CrearProducto'
import Registro from './components/formRegister';
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Usuarios from "./pages/Admin/Usuarios";
import Menu from "./pages/Admin/Menu";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/crearProducto' element={<CrearProducto />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Usuarios />} />
        <Route path='/admin/menus' element={<Menu />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
