import React from 'react';
import {Nav, Navbar, NavItem, Button, ButtonToolbar} from "react-bootstrap";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="MenuBackground">
                <Navbar>
                    <Nav>
                        <NavItem href="#home">Home</NavItem>
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#sign-up">Sign Up</NavItem>
                    </Nav>
                </Navbar>
            </div>
            );
    }
}
