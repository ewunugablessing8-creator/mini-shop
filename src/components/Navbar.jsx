import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

function Navbar() {
  const { cartItems } = useCart()

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        BlissSHOP
      </Link>

      <nav className="nav-links">
        <Link to="/">Shop</Link>

        <Link to="/cart" className="cart-button">
          Cart ({cartQuantity})
        </Link>
      </nav>
    </header>
  )
}

export default Navbar