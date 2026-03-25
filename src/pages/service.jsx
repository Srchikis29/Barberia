import Footer from "../components/Footer";
import HeroSolo from "../components/HeroSolo";
import Inicio from "../components/navBar";
import ServiceCard from "../components/ServiceCard";
import CardPremium from "../components/cardPremium";

const Service = () => {
  return (
    <>
      <Inicio />
      <div className="border-t-4 border-[#274C77]"></div>
      <HeroSolo />
      <ServiceCard />
      <h2 className="text-center text-5xl md:text-5xl font-Amarante text-[#DBB42C] mt-10 mb-6">
        Paquete Premium
      </h2>
      <CardPremium />
      <Footer />
    </>
  );
};

export default Service;
