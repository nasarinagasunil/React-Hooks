import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice.jsx';


export const store = configureStore({
  reducer: {
    todos: todoReducer
  },

});