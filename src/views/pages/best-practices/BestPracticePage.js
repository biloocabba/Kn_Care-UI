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
    retrieveSingleBestPractice,
  } from "../../../redux/actions/bestPractices/bestPractice";
import BestPracticeService from "services/BestPracticeService";


const BestPracticePage = (props) => {

    const [currentBestPractice, setCurrentBestPractice] = useState(initialState);
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

    
    
    


    return (
        <>
            <SimpleHeader name={currentBestPractice.title} parentName="Best Practices" />
            <Container className="mt-6 ml-6" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Title</label>
                            <p>{currentBestPractice.title}</p>
                        </FormGroup>
                    </Col>
                </Row><Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Description</label>
                            <p>{currentBestPractice.description}</p>
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
                <Button id="details" className="btn-icon btn-2" type="button" color="info" onClick={() => console.log("Details page is not yet implemented!")}>
                    <span className="btn-inner--icon">
                        <i className="ni ni-badge" />
                    </span>
                </Button>
                <Button id="remove" className="btn-icon btn-2" color="danger" type="button">
                    <span className="btn-inner--icon">
                        <i className="ni ni-fat-remove" />
                    </span>
                </Button>
            </Container>

        </>
    );
}

export default BestPracticePage;