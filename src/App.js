import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact"; // Mengimpor halaman Contact
import BottomNavbar from "./components/BottomNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Mengganti rute ticket menjadi contact */}
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
