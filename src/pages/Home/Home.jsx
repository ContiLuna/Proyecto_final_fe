import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Carrusel from "../../components/Carrusel/Carrusel";
import Categories from "../../components/Categories/CategoriesForm";
import Productos from "../../components/Productos/Productos";
// import Sugerencias from "../../components/Sugerencias/Sugerencias";
import UserContext from "../../context/UserContext";
// import { menus } from "../../dataUsuarios";
import "./Home.css";

const productos = [
  {
    id: 1,
    path: "/bebidas",
    img: "https://www.recetas-puertorico.com/base/stock/Recipe/148-image/148-image_web.jpg",
    title: "Bebidas",
  },
  {
    id: 2,
    path: "/comida",
    img: "https://www.clarin.com/img/2020/02/25/sl7YH0U1_1200x630__1.jpg",
    title: "Comida",
  },
  {
    id: 3,
    path: "/postres",
    img: "https://www.clara.es/medio/2021/11/28/postres-navidenos_3f462fd7_1280x1115.jpg",
    title: "Postres",
  },
];


const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <div
        className="home__carrusel"
        style={{ height: "calc(100% - 60px)", marginBottom: "20px" }}
      >
        <Carrusel />
      </div>
      <div className="home__producto">
        <div className="home__producto__title">
          <h1>Consulta nuestros Productos</h1>
        </div>
        <div className="home__cards">
          {productos.map((producto) => (
            <Productos key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
      <div>
        <div className="home__producto__title">
          <h1>Mira nuestros menus</h1>
        </div>
        <Categories></Categories>
        <div className="sugerencias">
          {state?.productos?.map((menu) => (
            <Card
              menuId={menu._id}
              key={menu._id}
              title={menu.nombre}
              description={menu.detalle}
              price={menu.precio}
              img={menu.imagen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
