import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {products} from './db/products'
import { Navbar } from './components/navbar/navbar'
import { Product } from './components/products/products_card'
import { useCart } from './context/cart-context'
import { Route, Routes } from 'react-router-dom'
import { ProductsView } from './pages/productsView/products_view'
import { SingleProductDetails } from './pages/singleProductDetails/singleProductDetails'
function App() {
  const { cart } = useCart();
  console.log("cart", cart);

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductsView />} />
        <Route path='/productDetails/:productId' element={<SingleProductDetails />} />
      </Routes>
    </>
  )
}

export default App
