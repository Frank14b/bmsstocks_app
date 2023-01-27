import React from 'react';
import HeaderComponent from '../src/layouts/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from '../src/components/HomeComponent';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Utils from '../src/utils/Utils';
import { AppWrapper } from '../src/contexts/GlobalContext';
import LoadingComponent from '../src/layouts/LoadingComponent';

function Home() {

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
          <AppWrapper>
            <HeaderComponent></HeaderComponent>
            <HomeComponent></HomeComponent>
          </AppWrapper>
        ) : (
          <>
            <LoadingComponent></LoadingComponent>
          </>
        )
      }
    </React.Fragment>
  );
};

export default Home;