import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
  return (
   <Routes> 
    <Route path='/' element={<NavBar/>} />
   </Routes>
  );
}

export default App;
