    import React, { useState } from "react";

    function FormConfirmReserve({ onFormChange }) {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        email: ""
    });

    const handleChange = (e) => {
        const newForm = { ...form, [e.target.name]: e.target.value };
        setForm(newForm);
        onFormChange(newForm); // enviamos datos al padre
    };

    return (
        <div className="font-Amarante px-3 mb-2 text-[#31639b]">
        <h2 className="text-3xl mb-4">Confirma Tus Datos</h2>

        <input
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            className="w-full p-1 border border-[#31639b] mb-4"
        />

        <input
            name="telefono"
            placeholder="Teléfono"
            onChange={handleChange}
            className="w-full p-1 border border-[#31639b] mb-4"
        />

        <input
            name="email"
            placeholder="Correo Electrónico"
            onChange={handleChange}
            className="w-full p-1 border border-[#31639b] mb-4"
        />
        </div>
    );
    }

    export default FormConfirmReserve;