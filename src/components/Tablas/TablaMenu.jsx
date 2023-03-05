import React, { useContext, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { menus } from "../../dataUsuarios";
import { FaRegEdit, FaRegTrashAlt, FaChevronDown, FaChevronUp, FaBurn, FaRegWindowClose } from "react-icons/fa";
import UserContext from "../../context/UserContext";
import { cambiarEstadoProducto, deleteMenu, cambiarSugerido } from "../../context/UserActions";
import ModalReact, { ModalBodyReact, ModalHeaderReact } from "../Modal/ModalReact";
import EditMenu from "../EditMenu/EditMenu";


const TablaMenu = () => {
  const {state, dispatch} = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(state?.productos);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    setFiltered(state?.productos);
  }, [state?.productos]);

  const searchFilter = (search) => {
    setSearch(search);
    const filtered = state?.productos?.filter((user) => {
      return user.nombre.toLowerCase().includes(search.toLowerCase());
    });
    setFiltered(filtered);
  };
  const selectedProduct = (row) => {
    setSelectedRow(row);
    setShowModal(!showModal);
  };
  const columns = [
    {
      name: "Imagen",
      selector: (row) => row.imagen,
      sortable: true,
      cell: (row) => {
        return <img src={row.imagen} alt="imagen" style={{ width: "100px" }} />;
      },
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      sortable: true,
    },
    {
      name: "Descripcion",
      selector: (row) => row.detalle,
      sortable: true,
    },
    {
      name: "Categoria",
      selector: (row) => row.categoria,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (row.estado ? "Activo" : "Inactivo"),
      sortable: true,
    },
    {
      name: "Sugerido",
      selector: (row) => (row.sugerido ? "Sugerido" : "No sugerido"),
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      cell: (row) => {
        return (
          <div style={{width:"200px", display:"flex", justifyContent: "space-between"}}>
            <button onClick={() => selectedProduct(row)} className="btn btn-primary"><FaRegEdit /></button>
            <button onClick={() => deleteMenu(row._id, dispatch)} className="btn btn-danger"><FaRegTrashAlt /></button>
            {
              row.estado ? (
                <button onClick={() => cambiarEstadoProducto(row._id, false, dispatch)} className="btn btn-warning"><FaChevronDown /></button>
              ) : (
                <button onClick={() => cambiarEstadoProducto(row._id, true, dispatch)} className="btn btn-success"><FaChevronUp /></button>
              )
            }
            {
              row.sugerido ? (
                <button onClick={() => cambiarSugerido(row._id, false, dispatch)} className="btn btn-secondary"><FaRegWindowClose /></button>
              ) : (
                <button onClick={() => cambiarSugerido(row._id, true, dispatch)} className="btn btn-secondary"><FaBurn /></button>
              )
            }
            
          </div>
        );
      },
    },
  ];
  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <input
          className="search__input"
          type="text"
          placeholder="buscar producto por nombre"
          value={search}
          onChange={(e) => searchFilter(e.target.value)}
        />
      </div>
      <DataTable
        title="Productos"
        data={filtered}
        columns={columns}
        responsive={true}
        striped
        pagination
        paginationComponentOptions={paginationOptions}
        highlightOnHover
      />
      <ModalReact show={showModal} setShow={setShowModal}>
        <ModalHeaderReact>
          Editar Menu
        </ModalHeaderReact>
        <ModalBodyReact>
          {/* <FormProducto /> */}
          <EditMenu menu={selectedRow} setShowModal={setShowModal} />
        </ModalBodyReact>
      </ModalReact>
    </div>
  );
};

export default TablaMenu;
