import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
