
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext'
import Dropdown from 'react-bootstrap/Dropdown';
import './categoriesStyles.css'

const Categories = () => {
    const { state, dispatch } = useContext(UserContext);

    return (
        <div className='container d-flex justify-content-center align-items-center my-5'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Busca por categorias
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    {state?.categorias.map((categoria) => (
                        <Dropdown.Item key={categoria._id} href="#/action-1">{categoria.nombre}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Categories;