import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search } from './components/Search/search'
import { useCallback } from 'react'

const allBrands = [
    { id: 1, brandName: 'Nike' },
    { id: 2, brandName: 'Adidas' },
    { id: 3, brandName: 'Puma' },
    { id: 4, brandName: 'Reebok' },
    { id: 5, brandName: 'New Balance' },
  ]

function App() {
  
  const [brands, setBrands] = useState(allBrands)

  const handleChange = useCallback((value) => {
    console.log(brands[0])
    const updatedBrands = value ?.length >0 ? brands.filter((brand) => brand.brandName.includes(value)) : allBrands
    setBrands(updatedBrands)
  },[brands])


  // const addTwo = (a, b) =>{
  //   return ()=>{
  //     return a+b;
  //   }
  // }

  // const first=addTwo(1,2);
  // const second=addTwo(1,2);
  // console.log(first === second); returns "false", because on everytime u call addTwo function, it creates new function object

  const handleSort = () => {
    const sortedBrands = [...allBrands].sort((a, b) => {
      const nameA = a.brandName.toUpperCase()
      const nameB = b.brandName.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    setBrands(sortedBrands)
  }

  return (
    <>
      <div className='flex'>
        <div>
          <button onClick={handleSort}>Sort Brands</button>
          {
            brands.map((brand) => (
              <p key={brand.id}>{brand.brandName}</p>
            ))
          }
        </div>
        <Search handleChange={handleChange} />

      </div>
    </>
  )
}

export default App
