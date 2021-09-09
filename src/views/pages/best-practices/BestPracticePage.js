import React, { useEffect, useState } from "react";
import initialState from "../../../initialStates/BestPracticeInitialState";
import { useDispatch } from "react-redux";
import { Container, Row } from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader.js";
import {
    Button,
    Col,
    Input,
    FormGroup,
} from "reactstrap";

import {
    updateBestPractice,
    deleteBestPractice
} from "../../../actions/bestPractice";
import BestPracticeService from "../../../services/bestPracticeService";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';



const BestPracticePage = (props) => {

    const [currentBestPractice, setCurrentBestPractice] = useState(initialState);
    const [disableEdit, setDisableEdit] = useState(true);

    const dispatch = useDispatch();

    const getBestPractice = id => {
        BestPracticeService.get(id)
            .then(response => {
                setCurrentBestPractice(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBestPractice(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentBestPractice({ ...currentBestPractice, [name]: value });
    };


    const updateContent = () => {
        dispatch(updateBestPractice(currentBestPractice.id, currentBestPractice))
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        setDisableEdit(!disableEdit);
    };

    const removeBestPractice = () => {
        confirmAlert({
            title: "Confirmation",
            message: "Are you sure you want to remove this best practice?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        dispatch(deleteBestPractice(currentBestPractice.id))
                            .then(() => {
                                props.history.push("/admin/search-best-practices");
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    };





    return (
        <>
            <SimpleHeader name={currentBestPractice.title || ""} parentName="Best Practices" />
            <Container className="mt-6 ml-6 container-sm" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Title</label>
                            <Input name="title" value={currentBestPractice.title || ""} disabled={disableEdit} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row><Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Description</label>
                            <Input name="description" value={currentBestPractice.description || ""} disabled={disableEdit} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <FormGroup>
                            <label className="form-control-label">Attachment</label>
                            <p>coming soon ...</p>
                        </FormGroup>
                    </Col>
                </Row>
                <Button id="edit" className="btn btn-info" type="button" onClick={() => setDisableEdit(!disableEdit)}>
                    <span className="btn-inner--icon">
                        Edit
                    </span>
                </Button>
                <Button id="remove" className="btn-icon btn-2" color="danger" type="button" onClick={removeBestPractice}>
                    <span className="btn-inner--icon">
                        <i className="ni ni-fat-remove" />
                    </span>
                </Button>
                <Button id="update" className="btn btn-success float-right" type="button" hidden={disableEdit} onClick={updateContent}>
                    Save
                </Button>
            </Container>

        </>
    );
}

export default BestPracticePage;