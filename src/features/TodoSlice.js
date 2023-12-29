import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {value: 0, data : []}

const todoSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers: {
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) =>{
            state.value -= 1;
        }
    }
})

export const {increment , decrement} = todoSlice.actions;

export default todoSlice.reducer;