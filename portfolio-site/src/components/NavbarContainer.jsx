import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import "../css/NavbarContainer.scss";
import * as $ from 'jquery';
import Home from './Home.jsx';
import Projects from './Projects.jsx';
import Blog from './Blog.jsx';

const NavbarContainer = () => {
    const [toggled, setToggled] = useState(false);
    const handleTogglePress = (e) => {
        setToggled(!toggled);
        toggled ? $('#registerbtn').css("display", "inline-block") : $('#registerbtn').css("display", "none");
    }
    return (
        <>
            <Navbar className="dark" expand="md" collapseOnSelect={true}>
                {/* <Navbar.Brand href="/" className="mr-auto logo-nav">
                    <img
                        alt=""
                        src={logo}
                        width="118"
                        height="42"
                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand> */}
                <Navbar.Toggle className="ml-auto mr-0" onClick={e => handleTogglePress(e)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className="text-light" eventKey={2} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className="text-light" eventKey={3} as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link className="text-light" eventKey={4} as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blog" component={Blog} />
            </Switch>
        </>
    );
}

export default NavbarContainer;