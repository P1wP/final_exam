// NEEDED IMPORT FOR MENU
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

//PAGES  GOES HERE
import Home from "../visitor/home/Home";
import Contact from "../visitor/contact/Contact";
import Admin from "../admin/Admin";
import Dashboard from "../admin/Dashboard";

// MENU
function Layout(){
    return (
        <>
        <Router>
            <Navbar  expand="lg">
                    <NavLink to="/" exact className="nav-link homeLink">
                        <Navbar.Brand>LOGO</Navbar.Brand>
                    </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link homeLink">
                            Home
                        </NavLink>
                        <NavLink to="/contact" exact className="nav-link">
                            Contact
                        </NavLink>
                        <NavLink to="/admin" className="nav-link">
                            Admin
                        </NavLink>
                     
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Switch>
                    <Route basename={"/"} path="/" exact component={Home} />
                    <Route basename={"/contact"} path="/contact" exact component={Contact} />
                    <Route basename={"/admin"} path="/admin" exact component={Admin} />
                    <Route basename={"/dashboard"} path="/dashboard" exact component={Dashboard} />
                </Switch>
            </div>
        </Router>
       
        </>
    );
};

// <Route path="/game/:id" component={GameDetails} />
export default Layout;