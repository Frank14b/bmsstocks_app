import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from "../../src/styles/dashbaord.module.scss";
import { useRouter } from 'next/router';
import { FaBuilding, FaUserFriends } from 'react-icons/fa';
import { useAppContext } from '../../src/contexts/GlobalContext';
import NavBarComponent from '../../src/layouts/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from '../../src/layouts/HeaderComponent';

function IndexUsersComponent() {

    const mycontext = useAppContext();
    const [loader, setLoader] = useState(false)
    const [userBusiness, setUserBusiness] = useState([])
    //   const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <React.Fragment>

            <HeaderComponent></HeaderComponent>

            <NavBarComponent></NavBarComponent>

            <div className={`p-2 mt-5 pt-5 ${styles.mainSection}`}>
                {/* Index Dashboard */}
                <div className={`border rounded shadow-sm bg-light col-md-11 mx-auto mt-3 position-relative py-1 px-2`}>
                    <span>
                        <h5 className={`${styles.bold700} ${styles.textPrimary} mx-3`}><FaUserFriends></FaUserFriends> Users</h5>
                    </span>
                    <hr className={`${styles.hrColor}`} />

                </div>
            </div>
        </React.Fragment>
    );
};

export default IndexUsersComponent;

