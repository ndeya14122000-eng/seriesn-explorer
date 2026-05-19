import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SerieDetails from "./pages/SerieDetails";
import Favoris from "./pages/Favoris";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serie/:id" element={<SerieDetails />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
