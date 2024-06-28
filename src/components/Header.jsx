import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <h5>  <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Flipkart
          </Navbar.Brand>
        </Container>
      </Navbar></h5>

    </div>
  )
}

export default Header
