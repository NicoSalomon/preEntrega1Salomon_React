import './navbar.css'
import Cartwidget from '../cartwidget/cartwidget'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
    return (
        <div className='contain'>
            <h1 className='titulo'>Your Padel World</h1>
            <nav>      
                <ul className='lista'>
                    <li><Button className='li_button' variant="danger">Productos</Button></li>
                    <li><Button className='li_button' variant="danger">Contacto</Button></li>
                    <li><Button className='li_button' variant="danger">Quienes Somos</Button></li>
                    <li><Button className='li_button' variant="danger">Sedes</Button></li>
                    <li><Cartwidget /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar