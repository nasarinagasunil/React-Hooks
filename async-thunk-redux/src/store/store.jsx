import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../slices/postSlice.jsx'

export const store = configureStore({
  reducer: {
    post: postReducer
  },
})