import React, { useContext, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { cambiarEstadoPedido } from "../../context/UserActions";
import UserContext from "../../context/UserContext";

const TablaPedidos = () => {
  const {state, dispatch} = useContext(UserContext);
    const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(state?.pedidos);

  useEffect(() => {
    setFiltered(state?.pedidos);
  }, [state?.pedidos]);

  const searchFilter = (search) => {
    setSearch(search);
    const filtered = state?.pedidos.filter((pedido) => {
      return pedido.usuario.nombre.toLowerCase().includes(search.toLowerCase());
    });
    setFiltered(filtered);
  };

  const columns = [
    {
      name: "Usuario",
      selector: (row) => row.usuario.nombre,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.usuario.email,
      sortable: true,
    },
    {
      name: "Fecha",
      selector: (row) => {
        const fecha = new Date(row.fecha);
        return fecha.toLocaleDateString() + " - " + fecha.toLocaleTimeString();
      },
      sortable: true,
    },
    // {
    //   name: "Menu",
    //   selector: (row) => row.menu,
    //   sortable: true,
    // },
    {
      name: "Estado",
      selector: (row) => row.estado,
      sortable: true,
    },
    {
      name: "Acciones",
      selector: (row) => row.acciones,
      sortable: true,
      cell: (row) => {
        return (
          <div>
            {row.estado === "pendiente" ? (
              <button onClick={() => cambiarEstadoPedido(row._id, "confirmado", dispatch)} className="btn btn-primary">Entregar</button>
            ) : (
              ""
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
          placeholder="buscar pedidos por usuario"
          value={search}
          onChange={(e) => searchFilter(e.target.value)}
        />
      </div>
      <DataTable
        title="Pedidos Realizados"
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

export default TablaPedidos