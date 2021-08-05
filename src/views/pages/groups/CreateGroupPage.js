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
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from  "react-redux";
import {createGroup} from "actions/groups"

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
import GroupHeader from "components/Headers/GroupHeader.js";

function CreateGroupPage() {

  const [selectedOption, setSelectedOption] = useState(null); //to add members
  const dispatch = useDispatch();
  const initialGroupState = {
    id: null,
    name: "",
    description: "",
    members: []
  }

  const [group, setGroup] = useState(initialGroupState)
  const [submitted, setSubmitted] = useState(false);



  const handleInputChange = event => {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const saveGroup = () => {
    const {name, description} = group;
    dispatch(createGroup(name, description))
      .then(data => {
        setGroup({
          id: Math.floor(Math.random() * 10000),
          name: data.name,
          description: data.description,
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  

  }

  const newGroup = () => {
    setGroup(initialGroupState);
    setSubmitted(false);
  };

  

  return (
    <>
      
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "100px",        
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />

      </div>

      <Container className="mt--6" fluid>
        <Row>
     
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Group</h3>
                  </Col>                
                </Row>
              </CardHeader>
              <CardBody>
              {submitted ? (
                 <div>
                 <h4>You submitted successfully!</h4>
                 <button className="btn btn-success" onClick={newGroup}>
                   Add
                 </button>
               </div>
             ) : (
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Group information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                       <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Group Name
                          </label>
                          <Input
                            name="name"
                            defaultValue=""
                            value={group.name}
                            required
                            id="input-group-name"
                            placeholder="Group name"
                            type="text"
                            onChange={handleInputChange}  
                          />
                        </FormGroup>
                      </Col>                    
                    </Row>
                  
                    <Row>
                       <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="description"
                          >
                            Group Description (optional)
                          </label>
                          <Input
                          name="description"
                            id="description"
                            placeholder="A few words about the group"
                            rows="4"
                            type="textarea" 
                            name="description"
                            onChange={handleInputChange}  
                            value={group.description}                          
                          />
                        </FormGroup>
                      </Col>                    
                    </Row>


                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Add Employees
                  </h6>
                 
                  <div className="pl-lg-4">
                   
                   <button onClick={saveGroup} className="btn btn-success">
           Submit
         </button>
                 </div>
                </Form>

             )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateGroupPage;
