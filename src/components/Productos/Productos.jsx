import React from 'react'
import { Link } from 'react-router-dom'
import "./Productos.css"

const Productos = ({producto}) => {
  return (
    <div 
    className='producto__card'
    style={{background:`url(${producto.img}) no-repeat center center/cover`}}
    >
        <div className='card__btn'>
            <Link className='btn__route' to={producto.path}>{producto.title}</Link>
        </div>
    </div>
  )
}

export default Productos