import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPost } from './slices/postSlice.jsx'


function App() {
  const dispatch = useDispatch();
  const {posts, status} = useSelector((state) => state.post);

  useEffect(() => {
    if(status === "idle")
      dispatch(loadPost());
  }, []);

  return (
    <>
      <h1>Async Thunk Redux</h1>
    </>
  )
}

export default App
