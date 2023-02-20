import React, { useState } from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import "./FormPedido.css";

const FormProducto = (props) => {
    const [dataForm, setDataForm] = useState({});

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("cantidad", dataForm.cantidad);
    };

    return (
        <div className="form">

            <Form className="form-product" onSubmit={handleSubmit}>
                <div className="h2-contenedor">
                    <h2>{props.title}</h2>
                </div>
                <div className="text-left my-3">
                    <p>{props.description}</p>
                </div>
                <div className="my-3">
                    <img src={props.img} className="card__img" alt="{props.title}" />
                </div>
                <div className="my-3">
                    <h3>Precio: ${props.price}</h3>
                </div>
                <div className="form-container">

                    <FormGroup className="form-group">
                        <Input
                            className="form-input"
                            name="cantidad"
                            type="select"
                            onChange={handleChange}
                            required
                        >
                            <option>Seleccione la cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2">3</option>
                            <option value="2">4</option>
                            <option value="2">5</option>
                        </Input>
                    </FormGroup>

                    <button className="d-flex justify-content-around align-items-center btn-pedido">
                        <div>2</div>
                        <p className="btn-solid">Agregar pedido</p>
                        <div>$1500</div>
                    </button>

                </div>
            </Form>

        </div>
    );
};

export default FormProducto;
