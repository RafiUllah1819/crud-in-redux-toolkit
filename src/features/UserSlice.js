import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    UserTodo : [],
    index: null,
    editable: false,
}

const userSlice = createSlice({

    name: 'UserCrud',
    initialState,
    reducers: {
       addTodo : (state, actions) => {
        return {
            ...state,
            UserTodo: [...state.UserTodo, actions.payload]
        }
       },

       updateTodo: (state, actions) => {
        const {id, text} = actions.payload;
        let todoUpdated = state.UserTodo.find((todo,i)=> todo.id === id);
        todoUpdated.text = text;
       },

       deleteTodo : (state, actions) =>{
        return{
            ...state,
            UserTodo :state.UserTodo.filter((todo,i) => todo.id !== actions.payload)
        } 
       }
    }
})

export const {addTodo , updateTodo, deleteTodo} = userSlice.actions;
export default userSlice.reducer;