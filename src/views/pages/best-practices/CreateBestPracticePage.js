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
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";

import {
  createBestPractice,
} from "../../../redux/actions/bestPractices/bestPractice";

//only for development purposes!!!
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id: null,
  title: "",
  description: "",
  content:""
};

function CreateBestPracticePage() {
  const [created, setCreated] = useState(false);
  const dispatch = useDispatch();
  
  const [content, setContent] = useState(initialState);


  const saveBestPractice = () => {
    dispatch(createBestPractice(content.title, content.description));
    setContent({id:uuidv4(), content:""}); /* Only for development purposes
    we need to generate a new UUID for a new post */
    setCreated(true);
  }

  return (
    <>
      {created === true ? <Redirect to={"/admin/search-best-practices"} /> : null}
       <GradientEmptyHeader name="Best Practices"  />
       <Container className="mt--6" fluid>    
       <Row>
          <Col className="order-xl-1">
            <FormGroup>
              <label className="form-control-label">Title</label>
              <Input type="text" onChange={e => setContent({...content, title: e.target.value})}/>
            </FormGroup>
          </Col>
        </Row><Row>
          <Col className="order-xl-1">
            <FormGroup>
              <label className="form-control-label">Description</label>
              <Input type="text" onChange={e => setContent({...content, description: e.target.value})}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>     
          <Col className="order-xl-1" xl="12">
          <FormGroup>
            <label className="form-control-label">Best Practice</label>
            <Input
                  id="input-postal-code" 
                  type="textarea"
                  rows="20"
                  onChange={e => setContent({...content, content: e.target.value})}
                />
            </FormGroup>
          </Col>         
        </Row>
        <Row>
          <Button color="primary" type="submit" onClick={saveBestPractice}>
            Save
          </Button>
        </Row>
        </Container>
    </>
  );
}

export default CreateBestPracticePage;
