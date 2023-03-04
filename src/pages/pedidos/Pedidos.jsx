import React, { useState, useEffect, useContext } from "react";
import { crearPedido, getAllUserPedidos } from "../../context/UserActions"
import { UserContext } from "../../context/UserContext"
import { Form, Alert, Pagination, PaginationItem, PaginationLink } from "reactstrap";

import Swal from 'sweetalert2';
import { BsFillTrashFill } from "react-icons/bs";
import './pedidosStyle.css'
import SpinnerEdit from "../../components/Spinner/SpinnerEdit";


function Pedidos() {
	const [isLoading, setIsLoading] = useState(true);
	const [reloadComponent, setReloadComponent] = useState(false);

	const { state, dispatch } = useContext(UserContext);
	const pedidoDeLS = JSON.parse(localStorage.getItem('prePedido'));

	let menu, usuario, monto, ids;
	if (pedidoDeLS) {
		menu = pedidoDeLS.menu;
		usuario = pedidoDeLS.usuario;
		monto = pedidoDeLS.monto;
		ids = menu.map(item => item.id);
	} else {
		menu = [];
		usuario = '';
		monto = 0;
		ids = [];
	}

	const pedido = {
		menu: ids,
		usuario: usuario,
		monto: monto
	}

	const [menuItems, setMenuItems] = useState(menu);
	const [pedidosAnteriores, setPedidos] = useState([]);

	useEffect(() => {
		fetchPedidos();
	}, []);

	const fetchPedidos = async () => {
		const userLogueado = JSON.parse(localStorage.getItem('user'));
		const response = await getAllUserPedidos(userLogueado._id);
		setPedidos(response.payload);
		setIsLoading(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		crearPedido(pedido);
		localStorage.removeItem('prePedido');
		setReloadComponent(!reloadComponent);
	}

	const eliminarMenu = (index) => {
		const nuevoMenu = [...menu];
		nuevoMenu.splice(index, 1);
		localStorage.setItem('prePedido', JSON.stringify({ menu: nuevoMenu, usuario }));
		setReloadComponent(!reloadComponent);
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
					'El menu ha sido eliminado',
					'success'
				)
			}
		})
	};

	const handleEliminarPedido = () => {
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
				localStorage.removeItem('prePedido');
				setReloadComponent(!reloadComponent);
				Swal.fire(
					'Eliminado!',
					'El pedido ha sido eliminado.',
					'success'
				)
			}
		})
	}

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = pedidosAnteriores.slice(startIndex, endIndex);

	const totalPages = Math.ceil(pedidosAnteriores.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<div className="container mb-5">
				<h1 className="mt-5">TU PEDIDO ACTUAL</h1>
				{
					pedidoDeLS ? (
						<div className="pedido-actual my-5">
							<div className="d-flex justify-content-end">
								<button className="btn btn-eliminar-pedido" onClick={() => handleEliminarPedido()}></button>
							</div>
							<div className="pedido-actual-interior">
								{menu.map(item => (
									<div className="row my-3" key={item.id}>
										<div className="col-11 row">
											<div className="col-md-5">
												<h5><span style={{ color: 'purple' }}>-</span> {item.nombre}</h5>
											</div>
											<div className="col-md-3">
												<p>Cantidad: {item.cantidad}</p>
											</div>
											<div className="col-md-4">
												<p>Precio por unidad: <span className="precio-resaltado">$ {item.precio}</span></p>
											</div>
										</div>
										<div className="col-1 d-flex justify-content-end align-items-center">
											<button className="btn btn-danger delete-item" onClick={() => handleEliminarItem(item)}><BsFillTrashFill></BsFillTrashFill></button>
										</div>
										<hr className="my-3 d-block d-md-none" />
									</div>
								))}
								<div className="d -flex">
									<div className="total-pedido d-flex justify-content-around mt-4 w-50">
										<h3>TOTAL</h3>
										<h3>$ {monto}</h3>
									</div>
								</div>
							</div>
							<Form onSubmit={handleSubmit}>
								<div className="d-flex">
									<button className="btn btn-enviar-pedido">Enviar pedido</button>
								</div>
							</Form>
						</div>
					) : (
						<div className="my-5">
							<Alert variant="primary">
								No tienes ningun pedido pendiente
							</Alert>
						</div>
					)
				}
				<hr />
				<h1 className="my-5">TUS PEDIDOS ANTERIORES</h1>
				{
					pedidosAnteriores.length === 0 ? (
						<div className="my-5">
							<Alert variant="primary">
								No tienes pedidos realizados
							</Alert>
						</div>
					) : (
						<div>
							{isLoading && (
								<SpinnerEdit/>
							)}
							<ul>
								{currentItems.map((pedido) => (
									<div className="pedidos-anteriores my-5">
										<h2>
											Pedido <span style={{ borderBottom: '3px solid purple', width: '60%' }}>#{pedido._id}</span>
										</h2><br /><br />
										<li key={pedido._id} className="list-pedido my-4 my-md-3">
											<ul>
												{pedido.menu.map((menu) => (
													<li key={menu._id}>
														<h3><span style={{ color: 'purple' }}>-</span>{menu.nombre}</h3>
														<p>Precio: ${menu.precio}</p>
														<p>Cantidad: {menu.cantidad}</p>
													</li>
												))}
											</ul>
										</li>
										<p>Estado: {
											pedido.estado === 'pendiente' ? (
												<span className="text-warning">{pedido.estado}</span>
											) : (
												pedido.estado === 'confirmado' ? (
													<span className="text-success">{pedido.estado}</span>
												) : (
													<span className="text-warning">{pedido.estado}</span>
												)
											)
										}</p>
										<h4 className="text-center total-pedido">Monto: ${pedido.monto}</h4>
									</div>
								))}
							</ul>
							<Pagination className="my-5 d-flex justify-content-center">
								<PaginationItem disabled={currentPage === 1}>
									<PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
								</PaginationItem>

								{[...Array(totalPages)].map((page, index) =>
									<PaginationItem active={index + 1 === currentPage} key={index}>
										<PaginationLink onClick={() => handlePageChange(index + 1)}>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								)}

								<PaginationItem disabled={currentPage === totalPages}>
									<PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
								</PaginationItem>
							</Pagination>
						</div>
					)
				}

			</div>
		</>
	);
}

export default Pedidos;

