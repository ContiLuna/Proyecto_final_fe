import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>trabajen pues</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
