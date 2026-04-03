import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inicio from "../components/navBar";
import HeroReserve from "../components/HeroReserve";
import ChooseCut from "../components/ChooseCut";
import ChooseBarber from "../components/ChooseBarber";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import Logo from "../components/logo";

function Reserva() {
  const navigate = useNavigate();

  const [selectedCut, setSelectedCut] = useState("");
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const allSelected =
    selectedCut !== null &&
    selectedBarber !== null &&
    selectedDate !== null &&
    selectedHour !== null;

  const handleConfirm = () => {
    if (!allSelected) return;
    navigate("/confirmReserve", {
      state: {
        servicio: selectedCut,
        barbero: selectedBarber,
        fecha: selectedDate,
        hora: selectedHour,
      },
    });
  };

  return (
    <>
      <Inicio />
      <HeroReserve />

      <ChooseCut onSelect={setSelectedCut} />

      <ChooseBarber onSelect={setSelectedBarber} />

      <h1 className="text-lg block text-[#2e759e] font-semibold mb-2.5 pl-4 pt-2 pb-1">
        Selecciona tu horario
      </h1>

      <Calendar
        onDateChange={setSelectedDate}
        onHourChange={setSelectedHour}
        onConfirm={handleConfirm}
        allSelected={allSelected}
      />

      <Logo />
      <Footer />
    </>
  );
}

export default Reserva;