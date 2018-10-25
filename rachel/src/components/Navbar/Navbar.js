import React, { Component } from 'react';
import { Navbar, Nav, /*NavItem,*/ NavDropdown, MenuItem } from 'react-bootstrap';

export default class TopNavbar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">RS</a>
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
                    <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>About me</MenuItem>
                            <MenuItem eventKey={1.2}>Gallery</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Contact</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}