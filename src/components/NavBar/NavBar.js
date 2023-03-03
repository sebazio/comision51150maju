import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h1>Ecommerce</h1>
            <div>
                <button className='btn btn-dark'>Celulares</button>
                <button>Tablet</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar