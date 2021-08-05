/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";

function CreateEmailPage() {
  const initialEmailState = {
    id:"",
    subject:"",
    content:"",
    attachments:null,
    createdBy:null,
    recipients:[],
    recipientGroups:[]
  };

  const [emailState, setEmailState] = useState(initialEmailState);

  return (
    <>
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Mail</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <ButtonGroup>
                      <Button
                        color="danger"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Discard
                      </Button>
                      <Button
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Save as Draft
                      </Button>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Send
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Recipient
                          </label>
                          <Input
                            id="input-email"
                            placeholder="jesse1@example.com;jesse2@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-recipient-group"
                          >
                          Recipient Group
                          </label>
                          <Input
                            id="input-recipient-group"
                            placeholder="Sample Care Group"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                    <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="email-subject"
                          >
                          Subject
                          </label>
                          <Input
                            id="email-subject"
                            type="text"
                            onChange={e => setEmailState({...emailState, subject:e.target.value})}
                          />
                    </FormGroup>
                    <ReactQuill value={emailState.content} onChange={e=>setEmailState({...emailState, content:e})}/>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateEmailPage;
