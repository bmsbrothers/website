import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import BottomNavbar from "./components/BottomNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router basename="/repository-name">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect any unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
