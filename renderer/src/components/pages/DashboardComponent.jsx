import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../contexts/GlobalContext';
import { useState } from 'react';
import Utils from '../../utils/Utils';

function DashboardComponent() {

  const mycontext = useAppContext();
  const [userdata, setUserdata] = useState(JSON.parse(Utils.getLocalStorage("userData")))

  return (
    <React.Fragment>
      <div className={`text-center`}>
        <h5 className={`text-uppercase my-3`}>Welcome back to BMS - {userdata.username}</h5>
      </div>
    </React.Fragment>
  );
};

export default DashboardComponent;
