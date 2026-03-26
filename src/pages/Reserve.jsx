import React from 'react'
import Inicio from '../components/navBar'
import HeroReserve from '../components/HeroReserve'
import ChooseCut from '../components/ChooseCut'
import ChooseBarber from '../components/ChooseBarber'
import Footer from '../components/Footer'
import ButtonConfirmar from '../components/BotonConfirmReserve'


function Reserva() {
return (
    <>
        <Inicio />   
        <HeroReserve />
        <ChooseCut />
        <ChooseBarber />
        <ButtonConfirmar to="/Reserve/confirmReserve" />
        <Footer />

        
    </>
)
}

export default Reserva