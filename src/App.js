import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Book from "./components/Book";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
