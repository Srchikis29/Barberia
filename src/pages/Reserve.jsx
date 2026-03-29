import React from "react";
import Inicio from "../components/navBar";
import HeroReserve from "../components/HeroReserve";
import ChooseCut from "../components/ChooseCut";
import ChooseBarber from "../components/ChooseBarber";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Logo from "../components/logo";

function Reserva() {
  return (
    <>
      <Inicio />
      <HeroReserve />
      <ChooseCut />
      <ChooseBarber />
      <h1 className="text-lg block  text-[#2e759e] font-semibold mb-2.5 pl-4 pt-2 pb-1">
        Selecciona tu horario
      </h1>

      <Calendar />
      <Logo />
      <Footer />
    </>
  );
}

export default Reserva;
