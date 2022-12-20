import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navigation/NavBar";
import Footer from './components/Footer/Footer';
import CrearProducto from './pages/CrearProducto'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path='/crearProducto' element={<CrearProducto />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
