import {Route, Redirect, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  let {user} = useContext(AuthContext)
    
  
    return user ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: window.location.pathname }} />
    );
  };

export default PrivateRoute