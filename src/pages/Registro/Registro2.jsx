import React from 'react'
import FormularioRegistro from '../../components/Registro/FormularioRegistro'
import "./registro2.css"
import Logo from '../../assets/Ok-food.png'

const Registro2 = () => {
  return (
    <div className='registro__container'>
        <div className='lado_uno'>
            <img className='img__logo_registro' src={Logo} alt="" />
            <h1>Vivi una experiencia innolvidable</h1>
        </div>
        <div className='lado_dos'>
        <FormularioRegistro />
        </div>
    </div>
  )
}

export default Registro2