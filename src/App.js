import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registro from './pages/register';


function App() {
  return (
   <Routes> 
    <Route path='/' element={<h1>trabajen pues</h1>}/>
    <Route path='/register' element={<Registro />} />
   </Routes>
  );
}

export default App;
