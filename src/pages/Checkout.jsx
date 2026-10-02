import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

function Checkout() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
  })

  const [errors, setErrors] = useState({})

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required.'
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      navigate('/confirmation')
    }
  }

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page empty-checkout">
        <h1>Your cart is empty</h1>
        <Link to="/">Return to shop</Link>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Contact</h2>

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}

          <h2>Delivery address</h2>

          <div className="two-column-fields">
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="form-error">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="form-error">{errors.lastName}</p>
              )}
            </div>
          </div>

          <label htmlFor="address">Street address</label>
          <input
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="form-error">{errors.address}</p>}

          <div className="two-column-fields">
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <p className="form-error">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="postalCode">Postal code</label>
              <input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
              {errors.postalCode && (
                <p className="form-error">{errors.postalCode}</p>
              )}
            </div>
          </div>

          <button type="submit" className="place-order-button">
            Place order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Your order</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <strong>Total</strong>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Checkout