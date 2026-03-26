import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="flex justify-center mt-4 mb-5">

        {/* 🎨 ESTILOS INLINE */}
        <style>
            {`
            .tailwind-calendar {
            font-family: 'Amarante', sans-serif;
            }

            /* GRID PERFECTO */
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

            /* HEADER */
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

            /* DÍA NORMAL */
            .react-datepicker__day {
            border-radius: 9999px;
            transition: all 0.2s;
            }

            /* HOVER AZUL SUAVE */
            .react-datepicker__day:hover {
            background: rgba(147, 197, 253, 0.3);
            }

            /* SELECCIONADO (AZUL SUAVE PREMIUM) */
            .react-datepicker__day--selected,
            .react-datepicker__day--keyboard-selected {
            background: #93c5fd !important;
            color: #1e3a5f !important;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
            border-radius: 9999px !important;
            }

            /* HOY */
            .react-datepicker__day--today {
            border: 2px solid #60a5fa;
            }

            /* DESHABILITADO */
            .react-datepicker__day--disabled {
            color: #d1d5db !important;
            cursor: not-allowed;
            }
            `}
        </style>

        <div>
            <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            minDate={today}
            calendarClassName="tailwind-calendar"

            /* 🎯 CONTROL TOTAL DE ESTILO */
            dayClassName={(date) => {
                const isToday =
                date.toDateString() === today.toDateString();

                const isPast = date < today;

                const isSelected =
                selectedDate &&
                date.toDateString() === selectedDate.toDateString();

                return [
                "flex items-center justify-center w-10 h-10 mx-auto rounded-full transition-all duration-200",

                isPast
                    ? "text-gray-300 cursor-not-allowed"
                    : "cursor-pointer hover:bg-blue-100",

                isToday
                    ? "border-2 border-blue-400 font-bold"
                    : "",

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
                    disabled={
                    monthDate.getMonth() === today.getMonth() &&
                    monthDate.getFullYear() === today.getFullYear()
                    }
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
        </div>
    );
}

export default Calendar;