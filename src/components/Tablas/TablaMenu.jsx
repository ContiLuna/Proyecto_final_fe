import React, { useContext, useState } from "react";
import DataTable from "react-data-table-component";
import { menus } from "../../dataUsuarios";
import { FaRegEdit, FaRegTrashAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import UserContext from "../../context/UserContext";

const TablaMenu = () => {
  const {state, dispatch} = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(state?.productos);

  const searchFilter = (search) => {
    setSearch(search);
    const filtered = state?.productos?.filter((user) => {
      return user.nombre.toLowerCase().includes(search.toLowerCase());
    });
    setFiltered(filtered);
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
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      cell: (row) => {
        return (
          <div style={{width:"200px", display:"flex", justifyContent: "space-between"}}>
            <button className="btn btn-primary"><FaRegEdit /></button>
            <button className="btn btn-danger"><FaRegTrashAlt /></button>
            {
              row.estado ? (
                <button className="btn btn-warning"><FaChevronDown /></button>
              ) : (
                <button className="btn btn-success"><FaChevronUp /></button>
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
    </div>
  );
};

export default TablaMenu;
