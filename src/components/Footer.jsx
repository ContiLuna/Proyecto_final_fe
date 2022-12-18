import React from 'react'

const Footer = () => {

    return(
        <div className='main-footer text-white bg-dark'>
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 col-sm-3">
                        <h3 className='text-center'>Algo</h3>
                        <ul className='list-unstyled'>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h3 className='text-center'>Algo2</h3>
                        <ul className='list-unstyled'>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <h3 className='text-center'>Algo3</h3>
                        <ul className='list-unstyled'>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                            <li className='text-center'>Alguna info</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className='text-center'>
                        &copy;{new Date().getFullYear()} Creado por
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer