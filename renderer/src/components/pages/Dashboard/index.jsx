import React from 'react';
import { useAppContext } from '../../../contexts/GlobalContext';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from "../../../styles/dashbaord.module.scss";
import { useRouter } from 'next/router';
import { FaBuilding, FaPlusCircle } from 'react-icons/fa';

function IndexDashboardComponent() {

  const mycontext = useAppContext();
  const [loader, setLoader] = useState(false)
  const [userBusiness, setUserBusiness] = useState([])
//   const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))
  const router = useRouter()

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <div className=''>
        {/* Index Dashboard */}
        <div className={`border rounded shadow-sm bg-light col-md-11 mx-auto mt-3 position-relative py-1 px-2`}>
          <span>
            <h5 className={`${styles.bold700} ${styles.textPrimary} mx-3`}><FaBuilding></FaBuilding> Business Dashboard</h5>
          </span>
          <hr className={`${styles.hrColor}`} />


        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexDashboardComponent;

