import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product, quantity) {
    setCartItems((currentItems) => {
      const productAlreadyExists = currentItems.find(
        (item) => item.id === product.id
      )

      if (productAlreadyExists) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...currentItems, { ...product, quantity }]
    })
  }

  function updateQuantity(productId, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId)
    return
  }

  setCartItems((currentItems) =>
    currentItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
        : item
    )
  )
}

function removeFromCart(productId) {
  setCartItems((currentItems) =>
    currentItems.filter((item) => item.id !== productId)
  )
}

 return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
    }}
  >
    {children}
  </CartContext.Provider>
)
}

export function useCart() {
  return useContext(CartContext)
}