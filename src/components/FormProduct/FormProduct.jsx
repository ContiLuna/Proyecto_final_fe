import React, { useState } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import "./crearProducto.css";
import { createProducts } from "../../context/UserActions";

const FormProducto = () => {
  const [dataForm, setDataForm] = useState({});
  const [imgFile, setImgFile] = useState([]);

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleFiles = (e) => {
    setImgFile([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("nombre", dataForm.nombre);
    formData.append("estado", dataForm.estado);
    formData.append("precio", dataForm.precio);
    formData.append("detalle", dataForm.detalle);
    formData.append("imagen", imgFile[0]);
    formData.append("categoria", dataForm.categoria);
    createProducts(formData);
  };

  return (
    <div className="form">
      <Form className="form-product" onSubmit={handleSubmit}>
        <div className="h2-contenedor">
          <h2>Crear un producto&#160;<span className="h2-span">&#160;</span></h2>
        </div>
        <div className="form-container">
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="nombre"
              placeholder=" "
              type="text"
              onChange={handleChange}
              required
            />
            <Label className="form-label" for="nombre">
              Nombre
            </Label>
            <span className="form-line"></span>
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="estado"
              type="select"
              onChange={handleChange}
              required
            >
              <option>Seleccione un estado</option>
              <option value="true">Disponible</option>
              <option value="false">No disponible</option>
            </Input>
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="precio"
              placeholder=" "
              type="number"
              onChange={handleChange}
              required
            />
            <Label className="form-label" for="precio">
              Precio
            </Label>
            <span className="form-line"></span>
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="detalle"
              placeholder=" "
              type="text"
              onChange={handleChange}
              required
            />
            <Label className="form-label" for="detalle">
              Detalle
            </Label>
            <span className="form-line"></span>
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="imagen"
              type="file"
              onChange={handleFiles}
              required
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              className="form-input"
              name="categoria"
              type="select"
              onChange={handleChange}
              required
            >
              <option>Seleccione una categoria</option>
              <option value="hamburguesas">Hamburguesas</option>
              <option value="pizzas">Pizzas</option>
            </Input>
          </FormGroup>

          <button class="custom-btn btn-13">Enviar</button>
        </div>
      </Form>
    </div>
  );
};

export default FormProducto;
