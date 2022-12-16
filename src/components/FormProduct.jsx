import React, { useState } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import "../styles/crearProducto.css";

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
  };

  return (
    <div className="form">
      <Form className="form-product" onSubmit={handleSubmit}>
        <FormGroup className='form-container'>
          <Label for="exampleEmail">Nombre</Label>
          <Input
            name="nombre"
            placeholder="Agregue un nombre"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Estado</Label>
          <Input
            name="estado"
            type="select"
            onChange={handleChange}
          >
            <option>Seleccione un estado</option>
            <option value="disponible">Disponible</option>
            <option value="no disponible">No disponible</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Precio</Label>
          <Input
            name="precio"
            placeholder="Ingrese precio"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Detalle</Label>
          <Input
            name="detalle"
            placeholder="Ingrese descripcion del menú"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Foto del menú</Label>
          <Input
            name="imagen"
            type="file"
            onChange={handleFiles}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Categoria</Label>
          <Input
            name="categoria"
            type="select"
            onChange={handleChange}
          >
            <option>Seleccione una categoria</option>
            <option value="marvel">Hamburguesas</option>
            <option value="dc">Pizzas</option>
          </Input>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default FormProducto;
