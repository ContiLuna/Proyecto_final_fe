import React, { useState, useContext, useEffect } from "react";
import FormCreateClient from "../../components/FormCreateClient/FormCreateClient";
import ModalReact, {
  ModalBodyReact,
  ModalHeaderReact,
} from "../../components/Modal/ModalReact";
import TablaPedidos from "../../components/Tablas/TablaPedidos";
import TablaUsuarios from "../../components/Tablas/TablaUsuarios";
import {
  getAllCategorias,
  getAllPedidos,
  getAllProducts,
  getAllUsers,
} from "../../context/UserActions";
import UserContext from "../../context/UserContext";

const Usuarios = ({usuarios}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="container__button__createMenu">
        <button
          className="button__createMenu"
          onClick={() => setShowModal(!showModal)}
        >
          Crear Usuario
        </button>
      </div>
      <div>
        <TablaUsuarios usuarios={usuarios} />

        <TablaPedidos />
      </div>
      <ModalReact show={showModal} setShow={setShowModal}>
        <ModalHeaderReact>Crear Usuario</ModalHeaderReact>
        <ModalBodyReact>
          <FormCreateClient />
        </ModalBodyReact>
      </ModalReact>
    </div>
  );
};

export default Usuarios;
