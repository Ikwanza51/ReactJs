import { Register } from "./pages/register";
import { Login } from './pages/login'
import { Home } from './pages/home'
import './style.scss';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
