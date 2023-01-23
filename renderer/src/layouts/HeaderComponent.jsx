import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/header.module.scss";

function HeaderComponent() {
    return (
        <React.Fragment>
            <Head>
                <title>BMS (Business Management System)</title>
            </Head>
            <div>
                <Navbar expand="lg" className={`${styles.bgPrimary}`}>
                    <Container fluid>
                        <Navbar.Brand href="#home" className={`text-white ${styles.bold700}`}>BMS</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
                        {/* <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Dropdown"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse> */}
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    );
};

export default HeaderComponent;
