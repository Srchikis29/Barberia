import LogoBarber from "../assets/LogoBarber .png";

function Logo() {
    return (
    <>
        <img
            src={LogoBarber}
            alt="Logo"
            className="mx-auto block h-40 sm:h-48 md:h-56 w-auto object-contain "
            />
    </>
    )
}

export default Logo