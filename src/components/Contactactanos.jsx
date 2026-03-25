import { FaWhatsapp, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contactanos() {
    return (
        <div className="items-center justify-center p-6">
        <div className="max-w-sm">

            {/* ── CONTACTO ── */}
            <div className="grid grid-cols-3 gap-2.5 mb-2.5">
            {[
                { icon: <FaWhatsapp size={16} />, label: "WhatsApp", detail: "XXX-XXX-XXXX" },
                { icon: <FaEnvelope size={16} />, label: "E-Mail", detail: "xxxx@gmail.com" },
                { icon: <FaPhone size={16} />, label: "Teléfono", detail: "XXX-XXX-XXXX" },
            ].map(({ icon, label, detail }) => (
                <div
                key={label}
                className="bg-[#E7ECEF] rounded-2xl py-3.5 px-2 text-center border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 cursor-pointer"
                >
                <div className="bg-[#2f6097] text-[#abd1ef] w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    {icon}
                </div>
                <p className="text-blue-900 font-bold text-[11px] mb-0.5">{label}</p>
                <p className="text-slate-500 text-[10px]">{detail}</p>
                </div>
            ))}
            </div>

            {/* ── HORARIO ── */}
            <div className="bg-[#E7ECEF] rounded-2xl px-5 py-4 mb-2.5 border border-slate-200 shadow-sm flex items-center gap-6">
            {/* Título izquierda */}
            <h2 className="text-blue-900 font-Amarante font-bold text-base tracking-tight leading-tight min-w-max">
                Horario de<br />Atención
            </h2>

            {/* Divisor vertical */}
            <div className="w-px self-stretch bg-blue-200" />

            {/* Filas de horario */}
            <div className="flex flex-col gap-1.5 flex-1 text-left min-w-0">
                {[
                ["Lunes a Viernes", "10:00am – 10:00pm"],
                ["Sábado", "10:30am – 08:00pm"],
                ["Domingo", "11:00am – 07:00pm"],
                ].map(([day, hours]) => (
                <div key={day} className="flex items-center gap-2">
                    <span className="text-slate-600 text-[11px] font-medium text-right w-24 shrink-0">{day}</span>
                    <span className="w-px h-3.5 bg-blue-300 shrink-0" />
                    <span className="text-blue-900 text-[11px] font-bold whitespace-nowrap">{hours}</span>
                </div>
                ))}
            </div>
            </div>

            {/* ── MAPA + UBICACIÓN ── */}
            <div className="grid grid-cols-2 gap-2.5">
            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-44">
                <iframe
                title="mapa"
                src="https://www.google.com/maps?q=bogota&output=embed"
                className="w-full h-full border-none block"
                />
            </div>

            {/* Ubicación */}
            <div className="bg-[#E7ECEF] rounded-2xl p-3.5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                <h2 className="text-blue-900 font-extrabold text-sm mb-2 flex items-center gap-1.5">
                    <FaMapMarkerAlt size={12} className="text-blue-600" />
                    Ubicación
                </h2>
                <p className="text-blue-900 text-[11px] font-semibold mb-0.5">Calle XXX # 234 - 1231 Sur</p>
                <p className="text-slate-500 text-[10px] mb-3">Barrio: XXXXXXXX</p>
                </div>

                <div className="flex flex-col gap-1.5">
                <button className="bg-linear-to-r from-blue-900 to-blue-600 text-white text-[10px] font-bold rounded-lg py-1.5 px-2.5 flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity">
                    <FaCalendarAlt size={9} /> Agenda tu cita
                </button>
                <button className="bg-slate-100 text-blue-900 border border-slate-300 text-[10px] font-bold rounded-lg py-1.5 px-2.5 flex items-center gap-1.5 hover:bg-slate-200 transition-colors">
                    <FaMapMarkerAlt size={9} /> Cómo llegar
                </button>
                </div>
            </div>
            </div>

        </div>
        </div>
    );
    }