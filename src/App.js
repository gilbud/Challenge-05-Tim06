import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./pages/Homee";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
