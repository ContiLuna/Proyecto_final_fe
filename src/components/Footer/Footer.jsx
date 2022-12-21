import React from 'react'
import './Footer.css'

const Footer = () => {

    return(
        <div className='main-footer'>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-sm-4">
                        <img src="https://i.ibb.co/XpJsgPK/Ok-eslogan-191919.png" 
                        target='_blank' alt="Logo Team" width={'150px'} 
                        className='d-flex justify-content-center mx-auto mt-2'/>
                    </div>
                    <div className="col-md-4 col-sm-4 mt-2">
                        <h4 className='text-center'>Contacto</h4>
                        <ul className='list-unstyled'>
                            <li className='text-center'>Hotmail</li>
                            <li className='text-center'>Num Cel</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h4 className='text-center mt-2'>Seguinos en nuestras redes</h4>
                        <ul className='list-unstyled d-flex justify-content-between m-4'>
                            <a href="https://facebook.com" target='_blank' role="button" class="btn btn-primary text-center"><i class="bi bi-facebook"></i></a>
                            <a href="https://instagram.com" target='_blank' role="button" class="btn btn-danger text-center"><i class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target='_blank' role="button" class="btn btn-primary text-center"><i class="bi bi-twitter"></i></a>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className='text-center mt-2'>
                        Copyright &copy;{new Date().getFullYear()} Dolphin Code | Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer