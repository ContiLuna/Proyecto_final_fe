import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    return(
        <div className='main-footer'>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-sm-4">
                        <img src="https://i.ibb.co/XpJsgPK/Ok-eslogan-191919.png" 
                       alt="Logo Team" width={'150px'} 
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
                            <Link rel="noreferrer noopener" href="https://facebook.com" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-facebook"></i></Link>
                            <Link rel="noreferrer noopener" href="https://instagram.com" target='_blank' role="button" className="btn btn-danger text-center"><i className="bi bi-instagram"></i></Link>
                            <Link rel="noreferrer noopener" href="https://twitter.com" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-twitter"></i></Link>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className='text-center m-0'>
                        Copyright &copy;{new Date().getFullYear()} Dolphin Code | Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer