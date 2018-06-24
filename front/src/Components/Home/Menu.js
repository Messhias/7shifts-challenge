import React from 'react';
import {
  Container,
  Nav
} from 'reactstrap';
import { NavLink } from 'react-router-dom'


export default Menu => (
    <Container
      className='mg-tp-60'
    >
      <Nav
        className='center'
      >
        <NavLink
          to="/"
          className="links-spaces"
        >
          Home
        </NavLink>
        <NavLink
          className="links-spaces"
          to="/users"
        >
          Users
        </NavLink>
      </Nav>
    </Container>
);
