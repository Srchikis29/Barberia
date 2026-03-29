import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop"; // 👈 IMPORTANTE

import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Reserva from "./pages/Reserve";
import NotFound from "./pages/NotFound";
import Agendar from "./pages/Agendar";

function App() {
  return (
    <>
      <ScrollToTop /> {/* 👈 AQUÍ VA */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Reserve" element={<Reserva />} />
        <Route path="/confirmReserve" element={<Agendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;