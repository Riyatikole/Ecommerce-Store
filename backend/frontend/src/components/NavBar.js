import React from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import '../css/navbar.css';

function NavBar() {
  return (
    <AppBar position="static" >
      <Container className="container" maxWidth="xxl">
    <div>
        <Link to="/">
        Home
        </Link>
        <Link to="/login">
        Login
        </Link>
      
    </div>
    
    </Container>
    </AppBar>
  )
}

export default NavBar
