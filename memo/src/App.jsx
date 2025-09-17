import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Greeting=memo(function Greeting({ name }) {
  console.log('Greeting render')
  return <h1>Hello, {name}!</h1>
}) 

function App() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name...'/>
      </div>
      <div>
        <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='City...'/>
      </div>
      <Greeting name={name} />

    </>
  )
}

export default App
