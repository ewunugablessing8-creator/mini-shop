import { Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-icon">✓</div>

      <p className="confirmation-label">Order confirmed</p>

      <h1>Thank you for your order. 
      </h1>

      <p className="confirmation-message">
        
          Your order has been placed successfully.
         </p>

      <Link to="/" className="return-to-shop">
        Continue shopping
      </Link>
    </main>
  )
}

export default Confirmation