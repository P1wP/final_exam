// NEEDED IMPORT FOR MENU
import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import ProtectedRoute from "../../context/ProtectedRoute";

//PAGES  GOES HERE
import Home from "../visitor/home/Home";
import Contact from "../visitor/contact/Contact";
import Admin from "../admin/Admin";
import Dashboard from "../admin/dashboard/Dashboard";
import Details from "../visitor/hotels/details/Details";
import EstablishmentDetails from "../admin/dashboard/dashboardItems/establishments/EstablishmentsDetails";




// MENU
function Layout(){

    const { login, logout } = useContext( AuthContext );
    

    return (
        <>
        <Router>
            <Navbar className="Navbar navbar-dark" expand="lg">
                {!login ? (
                    <NavLink to="/" exact className="nav-link navbar__logo">
                    <Navbar.Brand className="navbar__logo--img"  title="Holidaze Logo"></Navbar.Brand>
                    </NavLink>
                ) : (
                    <h1 className="nav-link navbar__admin">
                        ADMIN
                    </h1>
                ) }
                    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbar__btn">
                        {!login ? (
                            <>
                              <NavLink to="/" exact className="nav-link navbar__btn--link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" exact className="nav-link navbar__btn--link">
                            Contact
                        </NavLink>
                        <NavLink to="/admin" className="nav-link navbar__btn--link">
                            Admin
                        </NavLink>
                            </>
                        ) : (
                        <NavLink to="/admin" className="nav-link" onClick={logout}>
                            <Button>Sign Out</Button>
                        </NavLink>
                        )}
                      
                     
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>
                <Switch>
                    <Route basename={"/"} path="/" exact component={Home} />
                    <Route basename={"/contact"} path="/contact" exact component={Contact} />
                    <Route basename={"/admin"} path="/admin" exact component={Admin} />
                    <Route path="/hotel/:id" component={Details} />
                    <ProtectedRoute basename={"/dashboard"} path="/dashboard" exact component={Dashboard} />
                </Switch>
            </div>
        </Router>
       
        </>
    );
};


export default Layout;