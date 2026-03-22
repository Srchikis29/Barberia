import Footer from "../components/Footer";
import Inicio from "../components/navBar";
import Hero from "../components/Hero";
import Button from "../components/Boton";

const Home = () => {
  return (
    <>
      <Inicio />
      <Hero />
      <Button text="Agenda tu cita ahora" />
      <Footer />
    </>
  );
};

export default Home;
