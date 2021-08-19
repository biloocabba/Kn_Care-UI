import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import SimpleReactValidator from 'simple-react-validator';

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
  content: ""
};

function CreateBestPracticePage() {
  const simpleValidator = useRef(new SimpleReactValidator());

  const [created, setCreated] = useState(false);
  const dispatch = useDispatch();
  const [, forceUpdate] = useState();


  const [content, setContent] = useState(initialState);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
    simpleValidator.current.showMessageFor(name);
  }

  const saveBestPractice = () => {
    const formValid = simpleValidator.current.allValid()
    if (formValid) {
      dispatch(createBestPractice(content.title, content.description));
      setCreated(true);
    }
    else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  }

  return (
    <>
      {created === true ? <Redirect to={"/admin/search-best-practices"} /> : null}
      <GradientEmptyHeader name="Best Practices" />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1">
            <FormGroup>
              <label className="form-control-label">Title</label>
              {simpleValidator.current.message('title', content.title, 'required|min:3|max:50')}
              <Input
                type="text"
                name="title"
                onChange={handleInputChange}
                onBlur={() => simpleValidator.current.showMessageFor('title')}
              />
            </FormGroup>
          </Col>
        </Row><Row>
          <Col className="order-xl-1">
            <FormGroup>
              <label className="form-control-label">Description</label>
              {simpleValidator.current.message('description', content.description, 'required|max:1000')}
              <Input
                name="description"
                type="textarea"
                rows="5"
                onChange={handleInputChange} 
                />
                <p className="float-right">{content.description.length} / 1000</p>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="submit" onClick={saveBestPractice}>
            Create
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default CreateBestPracticePage;
