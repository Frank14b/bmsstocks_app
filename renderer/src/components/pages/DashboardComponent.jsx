import React from 'react';
import { useAppContext } from '../../contexts/GlobalContext';
import { useState } from 'react';
import Utils from '../../utils/Utils';
import ApiCalls from '../../utils/apiCalls';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../../styles/dashbaord.module.scss";
import { useRouter } from 'next/router';
import { FaBuilding, FaPhoneAlt, FaPlusCircle } from 'react-icons/fa';
import AddBusinessComponent from './Business/AddBusinessComponent';
import Card from 'react-bootstrap/Card';

function DashboardComponent() {

  const mycontext = useAppContext();
  const [loader, setLoader] = useState(false)
  const [userBusiness, setUserBusiness] = useState([])
  const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))
  const router = useRouter()
  const [showModalBusiness, setShowModalBusiness] = useState(false)

  useEffect(() => {
    getUserBusiness()
  }, [])

  const getUserBusiness = (e) => {
    if (e) {
      e.preventDefault();
    }
    setLoader(true)

    let datas = {
      "user_id": JSON.parse(Utils.getLocalStorage("userData")).id,
      "status": 1
    }

    var body = datas;

    ApiCalls.user_request(body, "business/getall").then((response) => {
      if (response.data.status) {
        // e.reset()
        setLoader(true)
        setUserBusiness(response.data.data)
      } else {
        setLoader(false)
      }
    }).catch((err) => {
      console.log("err", err)
      setLoader(false)
    })
  }

  return (
    <React.Fragment>
      <div className='p-2'>
        {/* owner business */}
        <div className={`border rounded shadow-sm bg-light col-md-11 mx-auto mt-5 position-relative py-1 px-2 pb-4`}>
          <span>
            <h5 className={`${styles.bold700} ${styles.textPrimary} mx-3`}><FaBuilding></FaBuilding> My Business
              <Button size={`sm ${styles.pullRight}`} onClick={(e) => setShowModalBusiness(true)}>Create New &nbsp;<FaPlusCircle className={`${styles.pullRight} mt-1`}></FaPlusCircle></Button>
            </h5>
          </span>
          <hr className={`${styles.hrColor}`} />

          <div className='col-md-12'>
            <div className='row'>
              {
                (userBusiness && userBusiness.length > 0) ? (
                  userBusiness.map((data, index) => (
                    <div className='col-md-3' key={index}>
                      <Card className='w-100'>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                          <Card.Title className='text-capitalize'>{data.name}</Card.Title>
                          <Card.Text>
                            <p><FaPhoneAlt></FaPhoneAlt>&nbsp; {data.phone}</p>
                          </Card.Text>
                          <Button variant="primary" className='w-100'>Manage Business</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                ) : (
                  <></>
                )
              }
            </div>
          </div>

          {
            (showModalBusiness) && (
              <AddBusinessComponent
                getBusiness={getUserBusiness}
                showModal={showModalBusiness}
                setShowModalBusiness={setShowModalBusiness}>
              </AddBusinessComponent>
            )
          }
        </div>

        {/* joined business */}
        <div className={`border rounded shadow-sm bg-light col-md-11 mx-auto mt-5 position-relative py-1 px-2`}>
          <span>
            <h5 className={`${styles.bold700} ${styles.textPrimary} mx-3`}><FaBuilding></FaBuilding> Joined Business</h5>
          </span>
          <hr className={`${styles.hrColor}`} />

        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardComponent;

