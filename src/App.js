import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Buscador from "./components/Buscador";

function App() {
  return (
    <div className="App">
      <Buscador />
      <Routes>
        <Route path="/" element={<h1>trabajen pues</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
