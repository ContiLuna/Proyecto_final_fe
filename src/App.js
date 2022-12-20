import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';


function App() {
  return (
   <Routes> 
    <Route path='/' element={<h1>trabajen pues</h1>}/>
    <Route path='/registro' element={ <Registro />} />
   </Routes>
  );
}

export default App;
