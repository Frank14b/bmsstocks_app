import React from 'react';
import HeaderComponent from '../src/layouts/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardComponent from '../src/components/pages/DashboardComponent';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Utils from '../src/utils/Utils';
import LoadingComponent from '../src/layouts/LoadingComponent';

function Dashboard() {

  const router = useRouter()
  const [isConected, setIsConected] = useState(false)

  useEffect(() => {
    // 
    if (Utils.getLocalStorage("token")) {
      setIsConected(true)
    } else {
      setIsConected(false)
      router.push("/login")
    }
  }, [])

  return (
    <React.Fragment>
      {
        (isConected) ? (
          <>
            <HeaderComponent></HeaderComponent>
            <DashboardComponent></DashboardComponent>
          </>
        ) : (
          <>
            <LoadingComponent></LoadingComponent>
          </>
        )
      }
    </React.Fragment>
  );
};

export default Dashboard;