import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Inicio from "../components/navBar";
import HeroConfirm from "../components/HeroConfirm";
import FormConfirmReserve from "../components/ConfirmReserve";
import Logo from "../components/logo";
import ConfirmService from "../components/ConfirmService";
import Footer from "../components/Footer";
import BotonAgendar from "../components/BotonAgendar";

function Agendar() {
    const location = useLocation();
    const servicio = location.state?.servicio;
    const barbero = location.state?.barbero;
    const fecha = location.state?.fecha;
    const hora = location.state?.hora;

    const [formData, setFormData] = useState({});

    if (!servicio || !barbero || !fecha || !hora) {
    return (
        <div style={{ padding: 40 }}>
        <h1>Error ⚠️</h1>
        <p>No hay datos de reserva. Debes volver a la página anterior.</p>
        </div>
    );
}

    const handleAgendar = async () => {
    if (!formData.nombre || !formData.telefono || !formData.email) {
        alert("Debes completar tus datos");
        return;
    }

    const reserva = {
        nombre: formData.nombre,
        telefono: formData.telefono,
        email: formData.email,
        fecha: fecha,      // viene de la página anterior
        hora: hora,        // 👈 SIN ":00"
        barbero: barbero,  // viene de la página anterior
        servicio: servicio // viene de la página anterior
    };

    console.log("Reserva FINAL enviada:", reserva);

    try {
        const res = await fetch("http://localhost:8000/reservas/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reserva),
        });

        if (!res.ok) {
        const errorData = await res.json();
        console.error("Error backend:", errorData);
        alert("Error al guardar reserva");
        return;
        }

        const data = await res.json();
        console.log("Respuesta backend:", data);

        alert("Reserva creada con éxito 🎉");
    } catch (error) {
        console.error("Error fetch:", error);
        alert("Error de conexión con el servidor");
    }
    };

    return (
        <>
        <Inicio />
        <HeroConfirm />

        <FormConfirmReserve onFormChange={setFormData} />
        <ConfirmService />

        <div className="flex justify-center mt-6">
            <BotonAgendar onClick={handleAgendar} />
        </div>

        <Logo />
        <Footer />
        </>
    );
}

export default Agendar;