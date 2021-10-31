import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

// import './Header.css'
const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <Navbar className="zIndex" collapseOnSelect expand="lg" bg="light" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img width="100%" src="https://i.ibb.co/cNV7Tqy/foody.png" alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/home">Home</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/orders">My Orders</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/manage">Manage All-Orders</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} className="m-2 nav-style" to="/foods">Add Food</NavLink>
    </Nav>
 {!user.email?<Nav className="ms-auto">
    <Link to="/login">
    <Button className="m-2">Login</Button>
    </Link>
  </Nav>
  :
  <div className="d-flex">
    <Button onClick={logOut}>Log out</Button>
    <h6 className="text-light m-1 p-1">{user.displayName}</h6>
  </div>}

  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;