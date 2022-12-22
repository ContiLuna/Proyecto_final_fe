import React, { useContext, useState } from "react";
import DataTable from "react-data-table-component";
import UserContext from "../../context/UserContext";

const TablaUsuarios = () => {
  const {state, dispatch} = useContext(UserContext);
    const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(state?.users);

  const searchFilter = (search) => {
    setSearch(search);
    const filtered = state?.users?.filter((user) => {
      return user.email.toLowerCase().includes(search.toLowerCase());
    });
    setFiltered(filtered);
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (row.estado ? "Activo" : "Inactivo"),
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      cell: (row) => {
        return (
          <div>
            {row.estado === false ? (
              <button className="btn btn-primary">Activar</button>
            ) : (
              <button className="btn btn-danger">Inhabilitar</button>
            )}
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
        placeholder="buscar usuario por email"
        value={search}
        onChange={(e) => searchFilter(e.target.value)}
      />
    </div>
    <DataTable
      title="Usuarios"
      data={filtered}
      columns={columns}
      responsive={true}
      striped
      pagination
      paginationComponentOptions={paginationOptions}
      highlightOnHover
    />
  </div>
  )
}

export default TablaUsuarios