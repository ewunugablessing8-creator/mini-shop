import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your cart is empty</h1>
        <p>Find something you love and add it to your cart.</p>
        <Link to="/" className="continue-shopping">
          Continue shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <h1>Your cart</h1>

      <section className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <p className="cart-category">{item.category}</p>
                <h2>{item.name}</h2>
                <p>{item.color}</p>
                <p className="cart-item-price">${item.price}</p>

                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

              <strong className="line-total">
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </article>
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order summary</h2>

          <div>
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <hr />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <Link to="/checkout" className="checkout-button">
            Checkout
          </Link>
        </aside>
      </section>
    </main>
  )
}

export default Cart