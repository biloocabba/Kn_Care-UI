import React, { useEffect } from "react";
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


const BestPracticePage = () => {

    const temporaryFakePractice = {
        id: "fake-id",
        title: "Fake Title",
        description: "Fake Description",
        content: "Fake content."
    }
    const currentPractice = temporaryFakePractice;


    return (
        <>
            <SimpleHeader name={currentPractice.title} parentName="Best Practices" />
            <Container className="mt-6 ml-6" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Title</label>
                            <p>Test</p>
                        </FormGroup>
                    </Col>
                </Row><Row>
                    <Col className="order-xl-1">
                        <FormGroup>
                            <label className="form-control-label">Description</label>
                            <p>Test</p>
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