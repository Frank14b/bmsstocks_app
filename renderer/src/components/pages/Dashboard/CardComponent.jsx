import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../../../styles/dashbaord.module.scss";
import Card from 'react-bootstrap/Card';
import Utils from '../../../utils/Utils';
import { useRouter } from 'next/router';
import { useAppContext } from '../../../contexts/GlobalContext';

function CardDashboardComponent({ data }) {

    const form = useRef();
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const myContext = useAppContext()

    return (
        <React.Fragment>
            <div className='mb-3'>
                <Card className='w-100 shadow-sm'>
                    <Card.Header className={`text-capitalize text-center ${styles.bold700}`}>Branchs</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <span>Branchs</span>
                        </Card.Text>
                        <Card.Text>
                            <span className={``}>0</span>
                        </Card.Text>
                        <Button size='sm' variant="primary" className='w-75 mx-auto'>
                            Manage Business
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default CardDashboardComponent;
