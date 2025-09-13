import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {products} from './db/products'
import { filtersReducer } from './reducer/filterReducer'


function App() {
  const initialState = {
    price:'',
    discount:'',
    rating:''
  }
  const [{price,discount,rating}, filtersDispatch] = useReducer(filtersReducer, initialState);

  const priceDispatch = (e) => {
    filtersDispatch({type:'price', payload:e.target.value})
  }
  const discountDispatch = (e) => {
    filtersDispatch({type:'discount', payload:e.target.value})
  }
  const ratingDispatch = (e) => {
    filtersDispatch({type:'rating', payload:e.target.value})
  }

  const filterByPrice = price>0 ? products.filter(product => product.newPrice <= price) : products
  const filterByDiscount = discount>0 ? filterByPrice.filter(product => product.discount <= discount) : filterByPrice
  const filterByRating = rating>0 ? filterByDiscount.filter(product => product.rating >= rating) : filterByDiscount

  return (
    <>
      <h1>Product Details</h1>
      <div className='flex gap-20px'>
        <span>Filters</span>
        <input onChange={priceDispatch} type="text" placeholder="Filter by Price..." />
        <input onChange={discountDispatch} type="text" placeholder="Filter by discount..." />
        <input onChange={ratingDispatch} type="text" placeholder="Filter by rating..." />
      </div>
      <div className='flexProducts'>
        {
          filterByRating?.length>0 && filterByRating.map((product)=>(
            <div className='flex-col border'>
              <div>
                <p>{product.name}</p>
              </div>
              <div className='flex'>
                <p>Price - {product.newPrice} ||</p>
                <p>Discount - {product.discount} ||</p>
                <p>Rating - {product.rating}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
