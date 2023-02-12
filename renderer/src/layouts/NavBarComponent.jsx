import React from 'react';
import { useAppContext } from '../contexts/GlobalContext';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from "../styles/dashbaord.module.scss";
import { useRouter } from 'next/router';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaBuilding, FaCloud, FaCogs, FaHome, FaSnapchat, FaUserFriends } from 'react-icons/fa';
import Utils from '../utils/Utils';

function NavBarComponent() {

  const mycontext = useAppContext();
  //   const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))
  const router = useRouter()

  useEffect(() => {

  }, [])

  const changeDashboardMenu = (menu) => {
    let current  = mycontext.chooseDashboardMenu
    mycontext.setChooseDashboardMenu(menu)

    if (current != menu) {
      router.push(`/${menu}`)
    }
  }

  return (
    <React.Fragment>
      <div className={`py-0 ${styles.navbarMenu} bg-light text-center`}>
        {/* Navbar Dashboard */}
        <div className='w-100 menuItems'>
          <ListGroup variant="flush" defaultActiveKey={`#${mycontext.chooseDashboardMenu}`}>

            <ListGroup.Item action href="#dashboard" onClick={(e) => changeDashboardMenu("dashboard")}>
              <FaHome></FaHome>
              <br />
              <span className={`${styles.t12}`}>Dashboard</span>
            </ListGroup.Item>

            <ListGroup.Item action href="#users" onClick={(e) => changeDashboardMenu("users")}>
              <FaUserFriends></FaUserFriends>
              <br />
              <span className={`${styles.t12}`}>Users</span>
            </ListGroup.Item>

            <ListGroup.Item action href="#branchs" onClick={(e) => changeDashboardMenu("branchs")}>
              <FaBuilding></FaBuilding>
              <br />
              <span className={`${styles.t12}`}>Branchs</span>
            </ListGroup.Item>

            <ListGroup.Item action href="#cloud" onClick={(e) => changeDashboardMenu("cloud")}>
              <FaCloud></FaCloud>
              <br />
              <span className={`${styles.t12}`}>Cloud</span>
            </ListGroup.Item>

            <ListGroup.Item action href="#chat" onClick={(e) => changeDashboardMenu("chat")}>
              <FaSnapchat></FaSnapchat>
              <br />
              <span className={`${styles.t12}`}>Chat</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBarComponent;

