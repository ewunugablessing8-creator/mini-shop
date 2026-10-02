import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetails.css'

function ProductDetails() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const product = products.find((product) => product.id === id)

  if (!product) {
    return (
      <main className="product-details">
        <h1>Product not found</h1>
        <Link to="/">Back to shop</Link>
      </main>
    )
  }

  return (
    <main className="product-details">
      <Link to="/" className="back-link">
        ← Back to shop
      </Link>

      <section className="product-details-layout">
        <div className="details-image">
          {product.tag && (
            <span className="product-tag">{product.tag}</span>
          )}

          <img
  src={product.image}
  alt={product.name}
  onError={(event) => {
    event.currentTarget.src =
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85'
  }}
/>
        </div>

        <div className="details-info">
          <p className="details-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="details-price">${product.price}</p>

          <p className="details-description">
            {product.description}
          </p>

          <div className="color-section">
            <p>Color</p>
            <strong>{product.color}</strong>
          </div>

          <div className="quantity-section">
            <p>Quantity</p>

            <div className="quantity-control">
             <button
    type="button"
    onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
  >
    −
  </button>

  <span>{quantity}</span>

  <button
    type="button"
    onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
  >
    +
  </button>
            </div>
          </div>
        <button
  type="button"
  className="add-to-cart"
  onClick={() => addToCart(product, quantity)}
>
  Add {quantity} to cart
  
</button>
        </div>
      </section>
    </main>

  )
}

export default ProductDetails