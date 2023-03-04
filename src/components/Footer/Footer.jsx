import React from 'react'
// import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    return(
        <div className='main-footer'>
            <div className="container-foo">
                <div className="row ">
                    <div className="col-md-4 col-sm-4">
                        <img src="https://i.ibb.co/XpJsgPK/Ok-eslogan-191919.png" 
                       alt="Logo Team" width={'150px'} 
                        className='d-flex justify-content-center mx-auto mt-2'/>
                    </div>
                    <div className="col-md-4 col-sm-4 mt-2">
                        <h4 className='text-center'>Contacto</h4>
                        <ul className='list-unstyled'>
                            <li className='text-center '><a rel="noreferrer noopener" target="_blank" href="https://outlook.live.com/owa/">food_ok@hotmail.com</a></li>
                            <li className='text-center'>3813123456</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <h4 className='text-center mt-2'>Seguinos en nuestras redes</h4>
                        <ul className='list-unstyled d-flex justify-content-between m-4'>
                            <a rel="noreferrer noopener" href="https://www.facebook.com/" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-facebook"></i></a>
                            {/* <Link rel="noreferrer noopener" href="https://www.facebook.com/" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-facebook"></i></Link> */}
                            <a rel="noreferrer noopener" href="https://www.instagram.com" target='_blank' role="button" className="btn btn-danger text-center"><i className="bi bi-instagram"></i></a>
                            {/* <Link rel="noreferrer noopener" href="https://www.instagram.com" target='_blank' role="button" className="btn btn-danger text-center"><i className="bi bi-instagram"></i></Link> */}
                            <a rel="noreferrer noopener" href="https://www.twitter.com" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-twitter"></i></a>
                            {/* <Link rel="noreferrer noopener" href="https://www.twitter.com" target='_blank' role="button" className="btn btn-primary text-center"><i className="bi bi-twitter"></i></Link> */}
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p className='text-center m-0'>
                        Copyright &copy;{new Date().getFullYear()} <span className='footer-dolp'>Dolphin Code</span> | Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer