import React, { useState } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/header.module.scss";
import { FaBuilding, FaUserAlt } from 'react-icons/fa';
import Utils from '../utils/Utils';

function HeaderComponent() {

    const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))

    return (
        <React.Fragment>
            <Head>
                <title>BMS (Business Management System)</title>
            </Head>
            <div>
                <Navbar expand="lg" className={`${styles.bgPrimary}`}>
                    <Container fluid className='px-4'>
                        <Navbar.Brand href="#home" className={`text-white ${styles.bold700}`}>BMS</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
                        <div className={``}>
                            {/* <span className={`mx-3 ${styles.cursorP}`}><FaUserAlt className={`${styles.menuIcon}`}></FaUserAlt></span> */}
                            <span className={`mx-3 ${styles.cursorP}`}><FaBuilding className={`${styles.menuIcon}`}></FaBuilding></span>
                            <span title={userdata.username} className={`mx-3 ${styles.cursorP}`}><FaUserAlt className={`${styles.menuIcon}`}></FaUserAlt></span>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </React.Fragment>
    );
};

export default HeaderComponent;
