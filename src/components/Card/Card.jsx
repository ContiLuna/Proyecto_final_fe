import React from 'react'
import "./card.scss"

const Card = (props) => {
  return (
    <div className="wrapper">
        <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn">Agregar Pedido</button>
      </div>
    </div>
    </div>
  )
}

export default Card