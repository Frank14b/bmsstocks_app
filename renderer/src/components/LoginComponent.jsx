import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../styles/login.module.scss";
import { FaFacebook, FaGoogle, FaHandPointRight, FaUserAlt, FaUserLock } from 'react-icons/fa';
import { useRouter } from 'next/router'
import axios from 'axios';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import Utils from '../utils/Utils';

function LoginComponent() {

    const router = useRouter()
    const [loader, setLoader] = useState(false)

    const loginUser = (e) => {
        e.preventDefault();

        setLoader(true)

        let datas = {
            "email": e.target[0].value,
            "password": e.target[1].value
        }
        var body = datas;

        axios({
            method: 'post',
            url: process.env.BMSUSERS_API_LINK + 'users/signin',
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            if (response.data.status == true) {
                // e.reset()
                setLoader(true)
                Utils.saveLocalStorage("token", response.data.token)
                Utils.saveLocalStorage("userData", JSON.stringify(response.data.data))
                Utils.showAlertToast("Successfull Login")
                router.push("/home")
            } else {
                Utils.showAlertToast(response.data.message, "warning", 5000)
                setLoader(false)
            }
        }).catch((err) => {
            Utils.showAlertToast("An error occured! please retry later", "error")
            setLoader(false)
        })
    }

    return (
        <React.Fragment>
            <Head>
                <title>BMS (Business Management System) - Login</title>
            </Head>

            <div className={`row ${styles.h100} ${styles.bgContent}`}>
                <div className={`col-md-8 col-lg-5 col-sm-10 col-xs-12 bg-transparent mx-auto p-3  align-self-center`}>
                    <div className={`col-md-12 bg-white border p-3 ${styles.borderRadius} shadow`}>
                        <Form method='post' onSubmit={(e) => loginUser(e)}>
                            <div className='col-md-12 text-center'>
                                <Image src={"/images/logo.jpg"} width={140} height={140} objectFit={"cover"} objectPosition={"center"} />
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><FaUserAlt></FaUserAlt> Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FaUserLock></FaUserLock> Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button disabled={loader} variant="primary" type="submit" className={`${styles.bgPrimary} w-100`}>

                                {
                                    (loader) ? (
                                        <ReactLoading type={"bars"} className={`mx-auto`} color={"#fff"} width={"5%"} height={'20px'} />
                                    ) : (
                                        <>Submit <FaHandPointRight></FaHandPointRight></>
                                    )
                                }
                            </Button>

                            <div className='col-md-12 text-center py-4'>
                                <span className=''>OR</span>
                            </div>

                            <div className='col-md-12 pb-4'>
                                <div className={`row text-center`}>
                                    <div className='col-md-12'>
                                        <Button variant="primary" type="button" className={`mx-2`}>
                                            <span className='mx-2'>Sign In With</span> <FaFacebook></FaFacebook>
                                        </Button>
                                        <Button variant="danger" type="button" className={`mx-2`}>
                                            <span className='mx-2'>Sign In With</span> <FaGoogle></FaGoogle>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>

                    <div className={`my-4 text-center col-md-11 py-3 mx-auto`}>
                        <p className={`text-white`}>New User?
                            <span onClick={(e) => { router.push("/register") }} className={`${styles.bold600} ${styles.cursorP}`}> Create An Account Here <FaHandPointRight></FaHandPointRight> </span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginComponent;
