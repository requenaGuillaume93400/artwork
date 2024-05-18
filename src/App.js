import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drawing from "./pages/Drawing";
import Hook from "./pages/Hook";
import CrossStitch from "./pages/CrossStitch";
import Other from "./pages/Other";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <h1>Artwork</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dessin" element={<Drawing />} />
        <Route path="/crochet" element={<Hook />} />
        <Route path="/point-de-croix" element={<CrossStitch />} />
        <Route path="/autre" element={<Other />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
