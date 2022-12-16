import './App.css';
import { Routes, Route } from 'react-router-dom';
import CrearProducto from './pages/CrearProducto'


function App() {
  return (
   <Routes> 
    <Route path='/' element={<h1>trabajen pues</h1>}/>
    <Route path='/crearProducto' element={<CrearProducto />} />
   </Routes>
  );
}

export default App;
