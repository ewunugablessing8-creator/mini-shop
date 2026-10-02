import { useState } from 'react'
import products from '../data/products'
import { Link } from 'react-router-dom'
import './Shop.css'

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <main className="shop">
      <section className="shop-header">
        <p className="eyebrow">New arrivals</p>

        <h1>Everyday things, thoughtfully chosen.</h1>

        <p className="shop-description">
          Discover uncomplicated essentials for your day-to-day life.
        </p>
      </section>

      <section className="shop-layout">
        <aside className="filters">
          <h2>Filters</h2>

          <div className="filter-group">
            <label htmlFor="category">Category</label>

            <select
              id="category"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
            >
              <option>All Products</option>
              <option>Apparel</option>
              <option>Accessories</option>
              <option>Home</option>
              <option>Footwear</option>
            </select>
          </div>
        </aside>

        <section className="products-section">
          <p className="product-count">
            {filteredProducts.length} Products
          </p>

          <div className="product-grid">
            {filteredProducts.map((product) => (
  <Link
    to={`/product/${product.id}`}
    className="product-card"
    key={product.id}
  >
    <div className="product-image">
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

    <p className="product-category">{product.category}</p>
    <h2>{product.name}</h2>
    <p className="product-color">{product.color}</p>
    <p className="product-price">${product.price}</p>
  </Link>
))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default Shop