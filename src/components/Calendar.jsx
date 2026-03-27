import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ButtonConfirmar from "./BotonConfirmReserve";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 🧠 Horarios base
  const allHours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // 🔒 Horas ocupadas por fecha
  const bookedHours = {
    "2026-03-27": ["10:00", "15:00"],
    "2026-03-29": ["09:00", "11:00"],
  };

  // 🛠 Formato fecha
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // 🧠 Obtener horas disponibles
  const getAvailableHours = () => {
    const dateKey = formatDate(selectedDate);
    const occupied = bookedHours[dateKey] || [];

    return allHours.filter((hour) => !occupied.includes(hour));
  };

  return (
    <div className="flex flex-col items-center mt-4 mb-5">
      {/* 🔵 TU CALENDARIO (SIN CAMBIOS VISUALES) */}
      <div className="flex justify-center">
        <style>
          {`
            .tailwind-calendar {
                font-family: 'Amarante', sans-serif;
            }

            .react-datepicker__week {
                display: grid !important;
                grid-template-columns: repeat(7, 1fr);
            }

            .react-datepicker__day-names {
                display: grid !important;
                grid-template-columns: repeat(7, 1fr);
            }

            .react-datepicker__day-name,
            .react-datepicker__day {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                margin: 0 auto;
            }

            .react-datepicker__header {
                background: white;
                border-bottom: none;
            }

            .react-datepicker__current-month {
                font-size: 1.1rem;
                color: #1e3a5f;
                font-weight: 600;
            }

            .react-datepicker__day-name {
                color: #94a3b8;
                font-size: 0.9rem;
            }

            .react-datepicker__day {
                border-radius: 9999px;
                transition: all 0.2s;
            }

            .react-datepicker__day:hover {
                background: rgba(147, 197, 253, 0.3);
            }

            .react-datepicker__day--selected,
            .react-datepicker__day--keyboard-selected {
                background: #93c5fd !important;
                color: #1e3a5f !important;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
                border-radius: 9999px !important;
            }

            .react-datepicker__day--today {
                border: 2px solid #60a5fa;
            }

            .react-datepicker__day--disabled {
                color: #d1d5db !important;
                cursor: not-allowed;
            }
            `}
        </style>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            setSelectedHour(null); // reset hora
          }}
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

              isPast
                ? "text-gray-300 cursor-not-allowed"
                : "cursor-pointer hover:bg-blue-100",

              isToday ? "border-2 border-blue-400 font-bold" : "",

              isSelected
                ? "bg-[#93c5fd] text-[#1e3a5f] font-semibold shadow-md"
                : "",
            ].join(" ");
          }}
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
            <div className="flex items-center justify-between mb-4 px-2">
              <button
                onClick={decreaseMonth}
                className="text-gray-700 hover:text-blue-500 px-2 py-1 rounded transition disabled:opacity-30"
              >
                ←
              </button>

              <span className="text-lg font-semibold capitalize text-[#1e3a5f]">
                {monthDate.toLocaleString("es-ES", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <button
                onClick={increaseMonth}
                className="text-gray-700 hover:text-blue-500 px-2 py-1 rounded transition"
              >
                →
              </button>
            </div>
          )}
        />
      </div>

      {/* ⏰ HORARIOS (NUEVO) */}
      <div className="mt-6 w-full max-w-sm">
        <h3 className="text-center font-semibold text-[#1e3a5f] mb-3">
          Horarios disponibles
        </h3>

        <div className="grid grid-cols-3 gap-2">
          {getAvailableHours().map((hour) => (
            <button
              key={hour}
              onClick={() => setSelectedHour(hour)}
              className={`p-2 rounded-lg border transition text-sm
                    ${
                      selectedHour === hour
                        ? "bg-[#93c5fd] text-[#1e3a5f] font-semibold shadow"
                        : "bg-white hover:bg-blue-100"
                    }`}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>

      {/* 🔘 BOTÓN CONFIRMAR */}
      <ButtonConfirmar
        text="Confirmar Reserva"
        to="/Reserve/confirmReserve"
        disabled={!selectedHour}
        className="mt-6"
      />
    </div>
  );
}

export default Calendar;
