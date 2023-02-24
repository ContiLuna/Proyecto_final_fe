import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import Swal from 'sweetalert2';
import "./FormPedido.css";

const FormProducto = (props) => {
    const [dataForm, setDataForm] = useState({
        cantidad: 0,
        menu: {
            id: props.menuId,
            nombre: props.title,
            cantidad: 0,
            precio: props.price
        }
    });

    const user = JSON.parse(localStorage.getItem('user'));


    const handleChange = (e) => {
        setDataForm(prevData => ({
            ...prevData,
            menu: {
                ...prevData.menu,
            },
            cantidad: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = user._id;

        // Obtiene los datos existentes del local storage
        const prePedido = JSON.parse(localStorage.getItem("prePedido")) || { menu: [] };

        const pedido = {
            usuario: userId,
            menu: [...prePedido.menu, dataForm.menu], // Agrega el nuevo menú al arreglo de menús existente
            cantidad: dataForm.cantidad,
            precio: precio
        };

        if (dataForm.cantidad < 1) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Debes seleccionar una cantidad!!',
                showConfirmButton: true,
            })
        } else {
            props.setShow(false);

            // Guarda los datos actualizados en localStorage
            localStorage.setItem("prePedido", JSON.stringify(pedido));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se guardó el menu en tu pedido',
                showConfirmButton: false,
                timer: 2500
            })
        }
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