import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { crearPedido } from "../../context/UserActions"
import { Form, Button, FormGroup, Input, Label } from "reactstrap";
import "./FormPedido.css";

const FormProducto = (props) => {
    const [dataForm, setDataForm] = useState({ 
        cantidad: 0, 
        id: props.menuId
    });

    const { state, dispatch } = useContext(UserContext);

    const handleChange = (e, updateData) => {
        setDataForm(prevData => ({
            ...prevData,
            cantidad: e.target.value,
            ...updateData,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("cantidad", dataForm.cantidad);
        formData.append("id", dataForm.id);

        console.log(dataForm);
        dispatch(crearPedido(formData));
    };

    const precio = dataForm.cantidad * props.price;

    return (
        <div className="form-pedidos">
            <Form className="form-product" onSubmit={handleSubmit}>
                <div className="h2-contenedor">
                    <h2>{props.title}</h2>
                </div>
                <div className="text-left my-3">
                    <p>{props.description}</p>
                </div>
                <div className="my-3">
                    <img src={props.img} className="card__img" alt={props.title} />
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
                            onChange={(e) => handleChange(e, { id: props.menuId })}
                            required
                            value={dataForm.cantidad}
                        >
                            <option value="0">Seleccione la cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Input>
                    </FormGroup>
                    <button className="d-flex justify-content-around align-items-center btn-pedido">
                        <div>{dataForm.cantidad}</div>
                        <p className="btn-solid">Agregar pedido</p>
                        <div>${precio}</div>
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default FormProducto;