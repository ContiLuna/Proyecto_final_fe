import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import "./Sugerencias.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalReact, {
  ModalBodyReact,
  ModalHeaderReact,
} from "../../components/Modal/ModalReact";
import FormPedido from '../FormPedido/FormAddPedido'

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength).concat("...");
  } else {
    return text;
  }
}

const Sugerencias = (props) => {

  const MAX_LENGTH = 100; // Máxima longitud del texto a mostrar
  const truncatedDescription = truncateText(props.description, MAX_LENGTH);

  const [showModal, setShowModal] = useState(false);

  const { state, dispatch } = useContext(UserContext);
  return (
    <>
      <Card className="card-sugerencia">
        <Card.Img variant="top" src={props.img} className="img_sugerencia" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {truncatedDescription}
          </Card.Text>
          <Button className="button__createMenu"
            onClick={() => setShowModal(!showModal)}>Pedir!</Button>
        </Card.Body>
      </Card>
      <ModalReact show={showModal} setShow={setShowModal}>
        <ModalBodyReact>
          <FormPedido
            setShow={setShowModal}
            title={props.title}
            description={props.description}
            price={props.price}
            img={props.img}
            menuId={props.menuId}
          />
        </ModalBodyReact>
      </ModalReact>
    </>
  );
};

export default Sugerencias;
