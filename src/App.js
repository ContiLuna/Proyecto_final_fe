import { Routes, Route, useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navigation/NavBar";
import Footer from './components/Footer/Footer';
import CrearProducto from './pages/CrearProducto'
import Registro from './components/formRegister';
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import PaginaError404 from "./pages/404/PaginaError404"; //Debe quedar al final para que se pueda renderizar, sino generará conflictos
import Admin from "./pages/Admin/Admin";
import Menu from "./pages/Admin/Menu";
import RutasPrivadas from "./Routes/Rutas";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import { getAllCategorias, getAllPedidos, getAllProducts, getAllUsers } from "./context/UserActions";
import Pedidos from "./pages/pedidos/Pedidos";

function App() {
  const location = useLocation();
  const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllProducts());
      dispatch(getAllPedidos());
      dispatch(getAllCategorias());
    }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/crearProducto' element={<CrearProducto />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route element={<RutasPrivadas />}>
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/menus' element={<Menu />} />
        </Route>
        <Route path='*' element={<PaginaError404 />} />
      </Routes>
      {
        location.pathname.includes('admin') ? null : <Footer />
      }
    </>
  );
}

export default App;
