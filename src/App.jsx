import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Reserva from "./pages/Reserve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Reserve" element={<Reserva />} />
    </Routes>
  );
}

export default App;
