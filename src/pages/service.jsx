import Footer from "../components/Footer";
import HeroSolo from "../components/HeroSolo";
import Inicio from "../components/navBar";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <>
      <Inicio />
      <div className="border-t-4 border-[#274C77]"></div>
      <HeroSolo />
      <ServiceCard />
      <Footer />
    </>
  );
};

export default Service;
