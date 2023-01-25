import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../contexts/GlobalContext';
import { useState } from 'react';
import Utils from '../../utils/Utils';
import ApiCalls from '../../utils/apiCalls';
import { useEffect } from 'react';

function DashboardComponent() {

  const mycontext = useAppContext();
  const [loader, setLoader] = useState(false)
  const [userBusiness, setUserBusiness] = useState([])
  const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))

  useEffect(() => {
    getUserBusiness()
  }, [])

  const getUserBusiness = (e) => {
    e.preventDefault();

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
      setLoader(false)
    })
  }

  return (
    <React.Fragment>
      <div className={`text-center`}>
        <h5 className={`text-uppercase my-3`}>Welcome back to BMS - {userdata.username}</h5>
      </div>
    </React.Fragment>
  );
};

export default DashboardComponent;
