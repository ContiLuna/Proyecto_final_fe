import React, { useContext, useState } from "react";
import Card from "../../components/Card/Card";
import Carrusel from "../../components/Carrusel/Carrusel";
import Categories from "../../components/Categories/CategoriesForm";
import Sugerencias from "../../components/Sugerencias/Sugerencias";
import UserContext from "../../context/UserContext";
import Carousel from 'react-bootstrap/Carousel';
// import { menus } from "../../dataUsuarios";
import "./Home.css";


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoriaId) => {
    setSelectedCategory(categoriaId);
  };

  const handleCategoryDeselect = () => {
    setSelectedCategory(null);
  }

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

      </div>
      <div>
        <div className="sugerencias1 my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="texto-sugerencias px-4 py-5">
                  <h1 className="mb-5 text-center">Nuestras sugerencias!</h1>
                  <h4 className="mt-5 text-center">Ok food tiene las siguientes recomendaciones para el dia de hoy, son nuestros platos y productos sugeridos de hoy. Pedilos y Disfrutalos!! ;)</h4>
                </div>
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <Carousel indicators={false}>
                  {
                    state?.productos
                      .filter((menu) => menu.sugerido === true)
                      .map((menu) => (
                        <Carousel.Item key={menu._id}>
                          <div className="d-flex justify-content-center">
                            <Sugerencias
                              menuId={menu._id}
                              key={menu._id}
                              title={menu.nombre}
                              description={menu.detalle}
                              price={menu.precio}
                              img={menu.imagen}
                            />
                          </div>
                        </Carousel.Item>
                      ))
                  }
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="home__producto__title">
          <h1>Mira nuestros menus</h1>
        </div>
        <Categories
          onSelectCategory={handleCategorySelect}
          onDeselectCategory={handleCategoryDeselect} />
        <div className="sugerencias">
          {state?.productos
            .filter((menu) => selectedCategory === null || menu.categoria === selectedCategory)
            .filter((menu) => menu.estado === true)
            .map((menu) => (
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
