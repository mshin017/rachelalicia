import React, { Component } from 'react';
import { Navbar, Nav, /*NavItem,*/ NavDropdown, MenuItem } from 'react-bootstrap';
// import 'Navbar.css'
import {Link} from 'react-router-dom';

export default class TopNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">RS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {/* <Nav>
                        <NavItem eventKey={1} href="#">
                            Gallery
                          </NavItem>
                        <NavItem eventKey={2} href="#">
                            about me
                        </NavItem>
                        
                    </Nav> */}
                    <Nav pullRight>
                    <NavDropdown eventKey={1}  id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1} componentClass={Link} href='/' to='/about'>About me</MenuItem>
                            <MenuItem eventKey={1.2} componentClass={Link} href='/' to='/gallery'>Gallery</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3} componentClass={Link} href='/' to='/Contact'>Contact</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}