import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registro from './pages/Register';


function App() {
  return (
   <Routes> 
    <Route path='/' element={<Registro />} />
   </Routes>
  );
}

export default App;
