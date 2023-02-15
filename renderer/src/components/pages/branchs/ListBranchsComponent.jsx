import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import styles from "../../../styles/dashbaord.module.scss";
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt } from 'react-icons/fa';
import Utils from '../../../utils/Utils';
import { useRouter } from 'next/router';
import { useAppContext } from '../../../contexts/GlobalContext';

function ListBranchsComponent({ data }) {

    const form = useRef();
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const myContext = useAppContext()

    return (
        <React.Fragment>
            <div className='mb-3'>
                <Card className='w-100 shadow-sm'>
                    <Card.Header className={`text-capitalize text-center ${styles.bold700}`}>{data.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <span><FaPhoneAlt></FaPhoneAlt>&nbsp; {data.phone}</span>
                        </Card.Text>
                        <Card.Text>
                            <span className={`${styles.cutText_1_Line}`}> {data.description}</span>
                        </Card.Text>
                        <Button disabled={(Utils.getLocalStorage("currentbusiness") && Utils.getLocalStorage("currentbusiness").id == data.id) ? true : false} onClick={(e) => startBusiness(data)} size='sm' variant="primary" className='w-100'>
                            Manage Business
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default ListBranchsComponent;
