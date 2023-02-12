import React from 'react';
import { useAppContext } from '../../contexts/GlobalContext';
import { useState } from 'react';
import Utils from '../../utils/Utils';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ProfileComponent from './ProfileComponent';
import styles from "../../styles/dashbaord.module.scss";
import Head from 'next/head';
import IndexDashboardComponent from './Dashboard';
import NavBarComponent from '../../layouts/NavBarComponent';

function DashboardComponent() {

    const mycontext = useAppContext();
    const [loader, setLoader] = useState(false)
    // const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>BMS (Business Management System) - {(mycontext.currentBusiness && mycontext.currentBusiness.name) && mycontext.currentBusiness.name}</title>
            </Head>

            <NavBarComponent></NavBarComponent>

            <div className={`p-2 mt-5 pt-5 ${styles.mainSection}`}>
                {/* {
                    (mycontext.currentPage == "profile") && (
                        <ProfileComponent></ProfileComponent>
                    )
                } */}

                {
                    (mycontext.currentPage == "dashboard") && (
                        <IndexDashboardComponent></IndexDashboardComponent>
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default DashboardComponent;

