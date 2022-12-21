import React from 'react'
import Carrusel from '../../components/Carrusel/Carrusel';
import Productos from '../../components/Productos/Productos';
import Sugerencias from '../../components/Sugerencias/Sugerencias';
import "./Home.css"

const productos = [
  {
    id: 1,
    path: "/bebidas",
    img: "https://918230.smushcdn.com/2283449/wp-content/uploads/2021/10/bebidas-alcoholicas-alimentos-colorantes.jpg?lossy=1&strip=1&webp=1",
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

const sug = [1,2,3,4,5,6,7,8]

const Home = () => {
  return (
    <div>
        <div className="home__carrusel" style={{height:"calc(100% - 60px)", marginBottom: "20px"}}>
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
            <h1>Nuestras Sugerencias</h1>
        </div>
        <div className="sugerencias">
            {
                sug.map((sug) => (
                    <Sugerencias key={sug} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Home