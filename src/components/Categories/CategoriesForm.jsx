
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext'
import Dropdown from 'react-bootstrap/Dropdown';
import './categoriesStyles.css'

const Categories = ({onSelectCategory, onDeselectCategory}) => {
    const { state, dispatch } = useContext(UserContext);

    return (
        <div className='container d-flex justify-content-center align-items-center my-5'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Busca por categorias
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item onClick={onDeselectCategory}>Todas los menu</Dropdown.Item>
                    {state?.categorias.map((categoria) => (
                        <Dropdown.Item key={categoria._id} onClick={() => onSelectCategory(categoria.nombre)}>{categoria.nombre}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Categories;