import LogoBarber from "../assets/LogoBarber .png";
import { NavLink } from "react-router-dom";

function Inicio() {
    const linkBase = "relative pb-2 whitespace-nowrap transition-all duration-300";

    const linkActive =
        "text-lg text-[#274C77] font-Amarante " +
        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:block " +
        "after:w-full after:h-[4px] after:bg-[#274C77] after:rounded-full ";

    const linkInactive =
        "text-sm text-gray-400 hover:text-[#274C77] font-Amarante";

    return (
        <nav className="bg-white shadow-md px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

        <div className="flex items-center gap-3">
            <img
                src={LogoBarber}
                alt="Logo"
                className="h-16 sm:h-16 md:h-18 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
        </div>

        <div className="flex-1 flex gap-0 justify-around items-center">

        <NavLink
            to="/"
            className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
        }
        >
    
        Inicio
        </NavLink>

        <NavLink
            to="/service"
            className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
        >
            Servicios
        </NavLink>

        <NavLink
            to="/contact"
            className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
        >
            Contacto
        </NavLink>


        </div>
        </div>
        </nav>
    );
}

export default Inicio;