import React, { useState, useEffect } from "react";
import { crearPedido } from "../../context/UserActions"
import { Form, } from "reactstrap";
import Swal from 'sweetalert2';
import { BsFillTrashFill } from "react-icons/bs";
import './pedidosStyle.css'

function Pedidos() {
	const pedidoDeLS = JSON.parse(localStorage.getItem('prePedido'));

	const { cantidad, menu, usuario } = pedidoDeLS;
	const ids = menu.map(item => item.id);

	const pedido = {
		menu: ids,
		cantidad: cantidad,
		usuario: usuario
	}

	const [menuItems, setMenuItems] = useState(menu);

	useEffect(() => {
		setMenuItems(menu);
	}, [menu]);


	const handleSubmit = (e) => {
		e.preventDefault();

		crearPedido(pedido);
		//localStorage.removeItem('prePedido');
	}

	const eliminarMenu = (index) => {
		const nuevoMenu = [...menu]; // crea una copia del arreglo menu
		nuevoMenu.splice(index, 1); // elimina el elemento del arreglo
		localStorage.setItem('prePedido', JSON.stringify({ cantidad, menu: nuevoMenu, usuario })); // actualiza el localStorage con el nuevo arreglo
	};

	const handleEliminarItem = (item) => {
		const index = menu.findIndex(menuItem => menuItem.id === item.id);
		Swal.fire({
			title: '¿Estás seguro?',
			text: "No podrás revertir esto",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
				eliminarMenu(index);
				setMenuItems(menu)
				Swal.fire(
					'Eliminado!',
					'El elemento ha sido eliminado.',
					'success'
				)
			}
		})
	};

	return (
		<>
			<div className="container">
				<h1 className="mt-5">TU PEDIDO ACTUAL</h1>
				<div className="pedido-actual my-5">
					<div className="pedido-actual-interior">
						{menu.map(item => (
							<div className="row mt-2" key={item.id}>
								<div className="col-5">
									<p>{item.nombre}</p>
								</div>
								<div className="col-2">
									<p>Cantidad: {item.cantidad}</p>
								</div>
								<div className="col-4">
									<p>Precio por unidad: <span className="precio-resaltado">$ {item.precio}</span></p>
								</div>
								<div className="col-1 d-flex justify-content-end">
									<button className="btn btn-danger delete-item" onClick={() => handleEliminarItem(item)}><BsFillTrashFill></BsFillTrashFill></button>
								</div>
							</div>
						))}
					</div>
					<Form onSubmit={handleSubmit}>
						<button className="btn btn-enviar-pedido">Enviar pedido</button>
					</Form>
				</div>
				<h1 className="my-5">TUS PEDIDOS ANTERIORES</h1>
				<div className="pedidos-anteriores">

				</div>
			</div>
		</>
	);
}

export default Pedidos;

