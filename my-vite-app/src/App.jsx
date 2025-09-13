import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuid } from 'uuid';
import { useRef } from 'react';
import { useEffect } from 'react';
import axio from 'axios';
function App() {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const URL = `https://dummyjson.com/products/`;
      getData(URL);
  }, [count]);

  const getData = async (URL) => {
    try {
      const res = await axio.get(URL);
      setProducts(res.data.products);
      console.log(res.data.products);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase Count - {count}</button>
      <div className="card">
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>Price: ${product.price}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
