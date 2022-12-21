import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { menus } from "../../dataUsuarios";

const TablaMenu = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(menus);

  const searchFilter = (search) => {
    setSearch(search);
    const filtered = menus.filter((user) => {
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
          <div>
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
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
