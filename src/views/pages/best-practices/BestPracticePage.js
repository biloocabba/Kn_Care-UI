import React, { useEffect, useSelector, useState } from "react";
import initialState from "redux/initialState";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardHeader, Container, Row } from "reactstrap";
import SimpleHeader from "components/Headers/SimpleHeader.js";
import {
    Button,
    ButtonGroup,
    Modal,
    Col,
    UncontrolledTooltip,
    Table,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    FormGroup,
    Label
} from "reactstrap";

import {
    updateBestPractice,
    deleteBestPractice
} from "../../../redux/actions/bestPractices/bestPractice";
import BestPracticeService from "services/BestPracticeService";


const BestPracticePage = (props) => {

    const [currentBestPractice, setCurrentBestPractice] = useState(initialState);
    const [disableEdit, setDisableEdit] = useState(true);

    console.log(currentBestPractice);
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
        console.log(name + "  " + value);
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
        dispatch(deleteBestPractice(currentBestPractice.id))
            .then(() => {
                props.history.push("/admin/search-best-practices");
            })
            .catch(e => {
                console.log(e);
            });
    };





    return (
        <>
            <SimpleHeader name={currentBestPractice.title} parentName="Best Practices" />
            <Container className="mt-6 ml-6 container-sm" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Title</label>
                            <Input name="title" value={currentBestPractice.title} disabled={disableEdit} onChange={handleInputChange} />
                        </FormGroup>
                    </Col>
                </Row><Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Description</label>
                            <Input name="description" value={currentBestPractice.description} disabled={disableEdit} onChange={handleInputChange} />
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