import React from 'react'
import Inicio from '../components/navBar'
import HeroConfirm from '../components/HeroConfirm'
import FormConfirmReserve from '../components/ConfirmReserve'
import Logo from '../components/logo'
import ConfirmService from '../components/ConfirmService'
import Footer from '../components/Footer'
import BotonAgendar from '../components/BotonAgendar'


function Agendar() {
    return (
        <>
            <Inicio />
            <HeroConfirm />
            <FormConfirmReserve />  
            <div className="font-Amarante  px-3 text-[#31639b]">
                <h2 className="text-3xl ">Confirmanos Tu Servicio</h2>
            </div>               
            <ConfirmService />

            <div className="flex justify-center mt-6">
                <BotonAgendar />
            </div>

            <Logo />
            <Footer />    
        </>
    )
}

export default Agendar