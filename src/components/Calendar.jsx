import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonConfirmar from "./BotonConfirmReserve";

const API_URL = "http://localhost:8000";

const ALL_HOURS = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00",
];

const formatDate = (date) => date.toISOString().split("T")[0];

function Calendar({ 
  onDateChange, 
  onHourChange, 
  onConfirm, 
  allSelected,
  selectedBarber,
  selectedService
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [bookedHours, setBookedHours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Reportar fecha inicial al padre
  useEffect(() => {
    if (onDateChange) onDateChange(formatDate(new Date()));
  }, []);

  useEffect(() => {
    const fetchHoras = async () => {
      setLoading(true);
      setError(null);
      setSelectedHour(null);
      if (onHourChange) onHourChange(null); // resetea hora en el padre
      try {
        const res = await fetch(
          `${API_URL}/citas/ocupadas?fecha=${formatDate(selectedDate)}`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        setBookedHours(data.horas_ocupadas);
      } catch {
        setError("No se pudieron cargar los horarios.");
        setBookedHours([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHoras();
  }, [selectedDate]);

  const availableHours = ALL_HOURS.filter((h) => !bookedHours.includes(h));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) onDateChange(formatDate(date));
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
    if (onHourChange) onHourChange(hour); // reporta hora al padre
  };

  const handleConfirm = () => {
  if (!allSelected) {
    setError("Debes seleccionar barbero, servicio, fecha y hora.");
    return;
  }

  // 🔥 Guardamos la reserva temporal
  const reservaTemp = {
    barbero: selectedBarber,
    servicio: selectedService,
    fecha: formatDate(selectedDate),
    hora: selectedHour,
  };

  localStorage.setItem("reservaTemp", JSON.stringify(reservaTemp));

  // 👉 Ir a pantalla final
  onConfirm();
};

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-center">
        <style>
          {`
            .tailwind-calendar { font-family: 'Amarante', sans-serif; }
            .react-datepicker__week { display: grid !important; grid-template-columns: repeat(7, 1fr); }
            .react-datepicker__day-names { display: grid !important; grid-template-columns: repeat(7, 1fr); }
            .react-datepicker__day-name, .react-datepicker__day { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; margin: 0 auto; }
            .react-datepicker__header { background: white; border-bottom: none; }
            .react-datepicker__current-month { font-size: 1.1rem; color: #1e3a5f; font-weight: 600; }
            .react-datepicker__day-name { color: #94a3b8; font-size: 0.9rem; }
            .react-datepicker__day { border-radius: 9999px; transition: all 0.2s; }
            .react-datepicker__day:hover { background: rgba(147, 197, 253, 0.3); }
            .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected { background: #93c5fd !important; color: #1e3a5f !important; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35); border-radius: 9999px !important; }
            .react-datepicker__day--today { border: 2px solid #60a5fa; }
            .react-datepicker__day--disabled { color: #d1d5db !important; cursor: not-allowed; }
          `}
        </style>

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          minDate={today}
          calendarClassName="tailwind-calendar"
          dayClassName={(date) => {
            const isToday = date.toDateString() === today.toDateString();
            const isPast = date < today;
            const isSelected =
              selectedDate &&
              date.toDateString() === selectedDate.toDateString();
            return [
              "flex items-center justify-center w-10 h-10 mx-auto rounded-full transition-all duration-200",
              isPast ? "text-gray-300 cursor-not-allowed" : "cursor-pointer hover:bg-blue-100",
              isToday ? "border-2 border-blue-400 font-bold" : "",
              isSelected ? "bg-[#93c5fd] text-[#1e3a5f] font-semibold shadow-md" : "",
            ].join(" ");
          }}
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
            <div className="flex items-center justify-between mb-4 px-2">
              <button
                onClick={decreaseMonth}
                className="text-gray-700 hover:text-blue-500 px-2 py-1 rounded transition disabled:opacity-30"
              >←</button>
              <span className="text-lg font-semibold capitalize text-[#1e3a5f]">
                {monthDate.toLocaleString("es-ES", { month: "long", year: "numeric" })}
              </span>
              <button
                onClick={increaseMonth}
                className="text-gray-700 hover:text-blue-500 px-2 py-1 rounded transition"
              >→</button>
            </div>
          )}
        />
      </div>

      <div className="mt-6 w-full max-w-sm">
        <h3 className="text-center font-semibold text-[#1e3a5f] mb-3">
          Horarios disponibles
        </h3>

        {loading ? (
          <p className="text-center text-gray-400 text-sm">Cargando horarios...</p>
        ) : availableHours.length === 0 ? (
          <p className="text-center text-gray-400 text-sm">
            No hay horarios disponibles para este día.
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {availableHours.map((hour) => (
              <button
                key={hour}
                onClick={() => handleHourSelect(hour)}
                className={`p-2 rounded-lg border transition text-sm
                  ${selectedHour === hour
                    ? "bg-[#93c5fd] text-[#1e3a5f] font-semibold shadow"
                    : "bg-white hover:bg-blue-100"
                  }`}
              >
                {hour}
              </button>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-red-400 text-sm mt-2">{error}</p>
        )}

        {/* Indicador si falta algo */}
        {!allSelected && selectedHour && (
          <p className="text-center text-amber-400 text-sm mt-3">
            Selecciona también un servicio y un barbero para continuar.
          </p>
        )}
      </div>

      <ButtonConfirmar
        text="Confirmar Reserva"
        onClick={handleConfirm}
        disabled={!allSelected}
        className="mt-6"
      />
    </div>
  );
}

export default Calendar;