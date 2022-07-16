import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from './features/user';

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(login({name: 'priya',age: 45, email: 'priya@gmail.com'}))}>Login</button>
        <button onClick={()=> dispatch(logout({name: '',age: 0, email: ''}))}>Login</button>

    </div>
  )
}

export default Login