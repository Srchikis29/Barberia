import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Reserva from "./pages/Reserve";
import ConfirmReserve from "./pages/confirmReserve";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Reserve" element={<Reserva />} />
      <Route path="/Reserve/confirmReserve" element={<ConfirmReserve />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
