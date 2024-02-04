import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const storedAuthTokens = localStorage.getItem('authTokens');
const initialAuthTokens = storedAuthTokens ? JSON.parse(storedAuthTokens) : null;
const initialUser = initialAuthTokens ? jwtDecode(initialAuthTokens.access) : null;


  let [authTokens, setAuthTokens] = useState(initialAuthTokens);
  let [user, setUser] = useState(initialUser);

    const navigate= useNavigate()

    let loginUser = async(e) => {
        e.preventDefault()
        console.log('form submitted')
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers:{
                'Content-Type':'application/Json'
          },
          body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        console.log(data)
        if(response.status === 200){
            setAuthTokens(data)
            const decodedUser = jwtDecode(data.access);
            setUser(decodedUser);
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/');
        }else{
            alert('Something went wrong')
        }
    }
  let contextData = {
    user: user,
    loginUser: loginUser
    
  }
    return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};
