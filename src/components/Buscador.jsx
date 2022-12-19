import React, { useState } from "react";
import "./buscadorStyle.css";

const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = () => {
    let resultadosBusqueda = tablaProducts.filter((elemente) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadosBusqueda);
  };

  return (
    <div className="containerInput">
      <form className="d-flex form-buscador">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
          onChange={handleChange}
          value={busqueda}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
