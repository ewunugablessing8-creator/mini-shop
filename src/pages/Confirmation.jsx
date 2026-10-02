import { Link } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-icon">✓</div>

      <p className="confirmation-label">Order confirmed</p>

      <h1>Thank you for your order.
          Your order has been placed successfully.
          THANK YOU MR EMMAUNEL 
      </h1>

      <p className="confirmation-message">
         for the sharing your knowledge and for the opportunity to learn from you. I am grateful for your 
          guidance and support. Your mentorship has been invaluable, and I appreciate the time and
           effort you have invested in helping me grow. Thank you for being an amazing mentor 
          and for inspiring me to reach my full potential.
        
         
      </p>

      <Link to="/" className="return-to-shop">
        Continue shopping
      </Link>
    </main>
  )
}

export default Confirmation