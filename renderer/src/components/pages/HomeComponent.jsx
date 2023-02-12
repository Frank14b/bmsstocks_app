import React from 'react';
import { useEffect } from 'react';
import { useAppContext } from '../../contexts/GlobalContext';
import BusinessComponent from './BusinessComponent';
import Utils from '../../utils/Utils';
import styles from "../../styles/dashbaord.module.scss";
import { useRouter } from 'next/router';

function HomeComponent() {

  const mycontext = useAppContext();
  const router = useRouter();

  useEffect(() => {
    
  }, [])

  return (
    <React.Fragment>
      <div className='mt-5'>
        {
          (mycontext.currentPage == "dashboard") && (
            <BusinessComponent></BusinessComponent>
          )
        }
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
