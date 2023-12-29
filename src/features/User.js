import React ,{useEffect, useState} from 'react';
import {addTodo, deleteTodo, updateTodo} from './UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import { generateUserId } from './utils';
import {Notification} from './Notification';

export const User = () => {
    const [editUser, setEditUser] = useState(null);
    const [newTodo, setNewTodo] = useState('');
    const [valid, setValid] = useState(false);
    const [notification, setNotification] = useState(null);

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.UserTodo);
    const userId = generateUserId();

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
          setNotification(null);
        }, 4000);
      };

    // Add new user
    const handleAddUser = () =>{
        if(newTodo === ""){
            showNotification('Todo is emtpy!');
        }else{
            dispatch(addTodo({id: userId, text: newTodo}))
            setNewTodo('')
            showNotification('Todo added successfully!');
        }
    }

    // Edit User
    const handleEditUser = (id, text) =>{
      setNewTodo(text)
      setEditUser(id)
    }

    // Update user
    const handleUpdateUser = () =>{
        if(newTodo === ""){
            showNotification('Please add some text')
        }else{
            dispatch(updateTodo({id:editUser, text: newTodo}))
            setEditUser(null);
            setNewTodo('');
            showNotification('User updated successfully')
        }
    }

    // delete user
    const handleDeleteUser = (id) => {
        dispatch(deleteTodo(id))
        showNotification('User deleted successfully')
    }

  return (
    <div>
        <h3>User</h3>
        <div className='input-field'>
        {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
        <input type="text" 
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        />{
            editUser === null ?  
        <button onClick={handleAddUser}>Add</button>:
        <button onClick={handleUpdateUser}>Update</button>
        }
        </div>
        <div className='user-data'>
            {/* <ul> */}
                {
                 users && users.map((user, i)=>{
                        return<ul key={user.id}>
                            <li>{user.text}</li>
                            <li><button onClick={() => handleEditUser(user.id, user.text)}>Edit</button></li>
                            <li><button onClick={() => handleDeleteUser(user.id)}>Delete</button></li>
                            </ul>
                    })
                }
            {/* </ul> */}
        </div>
    </div>
  )
}
