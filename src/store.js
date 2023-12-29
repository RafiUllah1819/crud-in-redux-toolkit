import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './features/TodoSlice';
import userReducer from './features/UserSlice'

export const store = configureStore({
    reducer : {
       todos: todoReducer,
       users: userReducer
    }
})
