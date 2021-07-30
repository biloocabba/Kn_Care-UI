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
import { useDispatch } from "react-redux";

// reactstrap components
import {
  Button,
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
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";

import {
    CREATE_BEST_PRACTICE
} from "../../../redux/actions/bestPractices/types";

//only for development purposes!!!
import { v4 as uuidv4 } from "uuid";

function CreateBestPracticePage() {
  const dispatch = useDispatch();
  const initialState = {
    id: null,
    content:""
  };
  const [content, setContent] = useState(initialState);

  useEffect(()=>{
    setContent({...content, id: uuidv4()});
  },[]);//the array should stay as is. We want this effect to only run once on purpose
  //ToDo: find a way to suppress this warning

  const saveBestPractice = () => {
    //console.log("button click!");
    dispatch({
      type: CREATE_BEST_PRACTICE,
      payload: content
    });
    setContent({id:uuidv4(), content:""}); /* Only for development purposes
    we need to generate a new UUID for a new post */
  }

  return (
    <>
       <GradientEmptyHeader name="Best Practices"  />
       <Container className="mt--6" fluid>    
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
          <Button color="primary" type="button" onClick={saveBestPractice}>
            Save
          </Button>
        </Row>
        </Container>
    </>
  );
}

export default CreateBestPracticePage;
