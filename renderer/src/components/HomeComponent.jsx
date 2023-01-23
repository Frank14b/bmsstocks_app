import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useAppContext } from '../contexts/GlobalContext';
import DashboardComponent from './pages/DashboardComponent';
import ProfileComponent from './pages/ProfileComponent';

function HomeComponent() {

  const mycontext = useAppContext();

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <div>
        {
          (mycontext.currentPage == "dashboard") && (
            <DashboardComponent></DashboardComponent>
          )
        }
        {
          (mycontext.currentPage == "profile") && (
            <ProfileComponent></ProfileComponent>
          )
        }
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
