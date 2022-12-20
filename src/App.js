import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
   <Routes> 
    <Route path='/' element={<Footer/>}/>
   </Routes>
  );
}

export default App;
