import React from 'react';
import styles from "../styles/loading.module.scss";
import ReactLoading from 'react-loading';

function LoadingComponent() {
    return (
        <React.Fragment>
            <div className={`col-md-12 ${styles.loadingDiv}`}>
                <div className={`${styles.loadingElement}`}>
                    <ReactLoading type={"bars"} className={`mx-auto`} color={"#fff"} />
                    <h6 className={`text-white py-3`}>Loading...</h6>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoadingComponent;
