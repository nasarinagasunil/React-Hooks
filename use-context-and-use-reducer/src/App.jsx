import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {products} from './db/products'
import { Navbar } from './components/navbar/navbar'
import { Product } from './components/products/products_card'
import { useCart } from './context/cart-context'
function App() {
  const { cart } = useCart();
  console.log("cart", cart);

  return (
    <>
      <Navbar />
      <div className="flex gap-16px flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="flex-col border">
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
