import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Home from "./components/home";
import Sheet from "./components/Sheet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/:dsName" element={<Sheet />} />
    </Routes>
  );
}

export default App;
