import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Routes> 
    <Route path='/' element={<h1>trabajen pues</h1>}/>
   </Routes>
  );
}

export default App;
