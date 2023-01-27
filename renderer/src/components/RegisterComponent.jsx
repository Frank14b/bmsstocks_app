import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../styles/register.module.scss";
import { FaFacebook, FaGoogle, FaHandPointRight, FaUserAlt, FaUserLock } from 'react-icons/fa';
import { useRouter } from 'next/router'
import axios from 'axios';
import ReactLoading from 'react-loading';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

function RegisterComponent() {

    const router = useRouter()
    const [loader, setLoader] = useState(false)
    const { t } = useTranslation('common');
    // router.locale

    const registerUser = (e) => {
        e.preventDefault();

        setLoader(true)

        let datas = {
            "email": e.target[0].value,
            "username": e.target[1].value,
            "firstname": e.target[2].value,
            "password": e.target[3].value
        }
        var body = datas;

        axios({
            method: 'post',
            url: process.env.BMSUSERS_API_LINK + 'users/signup',
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            if(response.data.status == true) {
                // e.reset()
                setLoader(true)
                Utils.showAlertToast("Account created! Please Login Now")
                router.push("/login")
            }else{
                Utils.showAlertToast("Unable to Register", "warning")
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
                <title>BMS (Business Management System) - Registration</title>
            </Head>

            <div className={`row ${styles.h100} ${styles.bgContent}`}>
                <div className={`col-md-8 col-lg-5 col-sm-10 col-xs-12 bg-transparent mx-auto p-3  align-self-center`}>
                    <div className={`col-md-12 bg-white border p-3 ${styles.borderRadius} shadow`}>
                        <Form method='post' onSubmit={(e) => registerUser(e)}>
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

                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3" controlId="formBasicUserName">
                                        <Form.Label><FaUserAlt></FaUserAlt> Username</Form.Label>
                                        <Form.Control required type="text" placeholder="Enter username" />
                                    </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label><FaUserAlt></FaUserAlt> First Name</Form.Label>
                                        <Form.Control required type="txt" placeholder="First Name" />
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><FaUserLock></FaUserLock> Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I Read Accept Terms & Conditions" />
                            </Form.Group>
                            <Button disabled={loader} variant="primary" type="submit" className={`${styles.bgPrimary} w-100`}>
                                Submit <FaHandPointRight></FaHandPointRight>
                                {
                                    (loader) && (
                                        <ReactLoading type={"bars"} className={`mx-auto`} color={"#fff"} width={"5%"} height={'20px'}/>
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
                        <p className={`text-white`}>Have Account Already?
                            <span onClick={(e) => { router.push("/login") }} className={`${styles.bold600} ${styles.cursorP}`}> Login Here <FaHandPointRight></FaHandPointRight> </span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RegisterComponent;
