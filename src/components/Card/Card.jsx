import React, { useState } from 'react'
import ModalReact, {
  ModalBodyReact,
  ModalHeaderReact,
} from "../../components/Modal/ModalReact";
import "./card.scss"
import FormPedido from "../../components/FormPedido/FormAddPedido";

const Card = (props) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src={props.img} className="card__img" alt="" />
          <div className="card__body">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__description">{props.description}</p>
            <h3 className="card__price">{props.price}</h3>
            <button
              className="button__createMenu"
              onClick={() => setShowModal(!showModal)}
            >
              Agregar Pedido
            </button>
          </div>
        </div>
      </div>
      <ModalReact show={showModal} setShow={setShowModal}>
        <ModalBodyReact>
          <FormPedido 
          title={props.title}
          description={props.description}
          price={props.price}
          img={props.img}
          menuId={props.menuId}
          />
        </ModalBodyReact>
      </ModalReact>
    </>
  )
}

export default Card