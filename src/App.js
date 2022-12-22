import { Routes, Route, useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navigation/NavBar";
import Footer from './components/Footer/Footer';
import CrearProducto from './pages/CrearProducto'
import Registro from './components/formRegister';
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Usuarios from "./pages/Admin/Usuarios";
import Menu from "./pages/Admin/Menu";
import RutasPrivadas from "./Routes/Rutas";
import Admin from "./pages/Admin/Admin";


function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/crearProducto' element={<CrearProducto />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route element={<RutasPrivadas />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/menus' element={<Menu />} />
        </Route>
      </Routes>
      {
        location.pathname.includes('admin') ? null : <Footer />
      }
    </>
  );
}

export default App;
