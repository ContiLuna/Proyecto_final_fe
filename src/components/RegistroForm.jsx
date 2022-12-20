import React, {} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./RegistroStyle.css"

const RegistroForm = () => {
  return (
    <div className="container-form-registro bg-dark">
        <form className="formulario-registro ">
            <h2 className="create-account">Registrarse</h2>
            <div className="form-floating mb-3">
                <input type="text" name="name" className="form-control" placeholder="Nombre" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" name="username" className="form-control" placeholder="Email" />
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" name="password" className="form-control" placeholder="Contraseña" />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <span className="error-registro"></span>
            <button type="submit" className="btn btn-success">Crear cuenta</button>
        </form>
    </div>
  )
}

export default RegistroForm