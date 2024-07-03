import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    
        <Link to={'/'} style={{textDecoration:'none'}}  > 

         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           E-cart
          </Navbar.Brand>
        </Container>
      </Navbar>

      </Link>
    </div>
  )
}

export default Header
