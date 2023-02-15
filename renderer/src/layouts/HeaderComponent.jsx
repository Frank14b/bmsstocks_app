import React, { useState } from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../styles/header.module.scss";
import { FaBuilding, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import Utils from '../utils/Utils';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from '../contexts/GlobalContext';

function HeaderComponent() {

    const router = useRouter()
    const mycontext = useAppContext()

    // Router.onRouteChangeStart = () => {
    //     checkTheTokenValidity()
    // }

    // Router.onRouteChangeComplete = () => {
    // }

    // Router.onRouteChangeError = () => {
    // }

    const logOutUser = (e) => {
        Utils.clearLocalStorage()
        mycontext.setCurrentBusiness(null)
        mycontext.setChooseDashboardMenu(null)
        router.push("/login")
    }

    useEffect(() => {
        checkTheTokenValidity()
    }, [])

    const checkTheTokenValidity = () => {
        if (!Utils.checkTokenValidity()) {
            Utils.showAlertToast("Session expired. Please Login again", "warning")
            logOutUser()
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>BMS (Business Management System)</title>
            </Head>
            <div className={`${styles.headerBlock}`}>
                <Navbar expand="lg" className={`${styles.bgPrimary}`}>
                    <Container fluid className='px-4' style={{ width: "100%" }}>
                        <Navbar.Brand href="#home" className={`text-white ${styles.bold700}`}>BMS</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
                        <div className={``}>
                            <span onClick={(e) => router.push("/home")} className={`mx-3 ${styles.cursorP}`}><FaBuilding className={`${styles.menuIcon} shadow`}></FaBuilding></span>
                            <span className={`mx-3 ${styles.cursorP}`}><FaUserAlt className={`${styles.menuIcon} shadow`}></FaUserAlt></span> &nbsp;&nbsp;
                            <span onClick={(e) => logOutUser(e)} title={"Power Off"} className={`mx-1 ${styles.cursorP} shadow`}><FaPowerOff className={`${styles.menuIcon} bg-danger text-white`}></FaPowerOff></span>
                        </div>
                    </Container>
                </Navbar>

                {
                    (mycontext.currentBusiness && mycontext.currentBusiness.name) && (
                        <div onClick={(e) => router.push("/dashboard")} className={`w-100 bg-success ${styles.cursorP}`}>
                            <h5 className={`${styles.bold700} ${styles.t14} text-center text-white text-capitalize p-2`}>Business : {mycontext.currentBusiness.name}</h5>
                        </div>
                    )
                }

            </div>
        </React.Fragment>
    );
};

export default HeaderComponent;
