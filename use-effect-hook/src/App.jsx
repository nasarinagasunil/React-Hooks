import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const addresses = [
    { pincode: 110001, city: 'New Delhi',isDefault:true },
    { pincode: 400001, city: 'Mumbai',isDefault:false },
    { pincode: 600001, city: 'Chennai',isDefault:false },
    { pincode: 700001, city: 'Kolkata',isDefault:false },
    { pincode: 560001, city: 'Bangalore',isDefault:false }
  ]

  const [pincode, setPincode] = useState("");
  const [defaultAddress, setDefaultAddress] = useState(addresses.find(address => address.isDefault));

  const onSetAsDefaultClick = () => {
    const address = addresses.find(address => address.pincode === Number(pincode));
    if(address){
      setDefaultAddress(address);
      // console.log("Default address set to: ", address);
    } else {
      console.log("Address not found for pincode: ", pincode);
    }
  }

  useEffect(() => {
    console.log("Default address changed: ", defaultAddress);
  },[defaultAddress.pincode]);

  return (
    <>
      <div>
        <p>Common Mistakes using useEffect hook</p>
      </div>
      <div>
        <input onChange={(e) => setPincode(e.target.value)} type="text" placeholder='Enter the pincode...' />
      </div>
      <div>
        <button onClick={onSetAsDefaultClick}>Set as Default</button>
      </div>
      
    </>
  )
}

export default App
