import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReactLoading from 'react-loading';
import { FaSave, FaTimesCircle } from 'react-icons/fa';
import styles from "../../../styles/dashbaord.module.scss";
import Utils from '../../../utils/Utils';
import ApiCalls from '../../../utils/apiCalls';

function AddBusinessComponent({ getBusiness, showModal = false, setShowModalBusiness }) {

    const form = useRef();
    const [loader, setLoader] = useState(false)

    const submitBusiness = (e) => {
        e.preventDefault()

        setLoader(true)

        let datas = {
            "name": e.target[0].value,
            "phone": e.target[1].value,
            "description": e.target[2].value,
            "user_id": JSON.parse(Utils.getLocalStorage("userData")).id,
            "status": 1
        }

        var body = datas;

        ApiCalls.user_request(body, "business/add").then((response) => {
            if (response.data.status == true) {
                // e.reset()
                getBusiness()
                setLoader(true)
                setShowModalBusiness(false)
                Utils.showAlertToast("Creation Completed")
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
            <div>
                <Modal
                    size='lg'
                    backdrop={"static"}
                    centered
                    show={showModal}
                    onHide={(e) => setShowModalBusiness(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Business</Modal.Title>
                    </Modal.Header>
                    <Form ref={form} method='post' onSubmit={(e) => submitBusiness(e)}>
                        <Modal.Body>
                            <div className={`col-md-12`}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Business Name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" required placeholder="Enter Name" />
                                    <Form.Text className="text-muted">
                                        {/* We'll never share your email with anyone else. */}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Business Phone <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" required placeholder="+971582208358" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Business Short Description</Form.Label>
                                    <Form.Control type="textarea" placeholder="Business Description" />
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button disabled={loader} size='md' variant="danger" onClick={(e) => setShowModalBusiness(false)}>
                                Close &nbsp;<FaTimesCircle className={`${styles.pullRight} mt-1`}></FaTimesCircle>
                            </Button>
                            <Button disabled={loader} size='md' type='submit' variant="primary">
                                {
                                    (loader) ? (
                                        <> <ReactLoading type={"bars"} className={`mx-auto `} color={"#fff"} width={"30px"} height={'25px'} /></>
                                    ) : (
                                        <>Save Business &nbsp;<FaSave className={`${styles.pullRight} mt-1`}></FaSave></>
                                    )
                                }
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </React.Fragment>
    );
};

export default AddBusinessComponent;
