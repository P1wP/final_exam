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
import Details from "../visitor/hotels/details/Details";




// MENU
function Layout(){

    return (
        <>
        <Router>
            <Navbar className="Navbar navbar-dark" expand="lg">
                    <NavLink to="/" exact className="nav-link navbar__logo">
                    <Navbar.Brand className="navbar__logo--img"  title="Holidaze Logo"></Navbar.Brand>
                    </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbar__btn">
                        <NavLink to="/" exact className="nav-link navbar__btn--link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" exact className="nav-link navbar__btn--link">
                            Contact
                        </NavLink>
                        <NavLink to="/admin" className="nav-link navbar__btn--link">
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
                    <Route path="/hotel/:id" component={Details} />
                </Switch>
            </div>
        </Router>
       
        </>
    );
};


export default Layout;