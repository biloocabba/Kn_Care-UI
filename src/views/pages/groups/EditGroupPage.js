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

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Collapse,
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
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import {useParams} from "react-router-dom";
import {DEACTIVATE_GROUP, UPDATE_GROUP} from "actions/types"




function EditGroupPage(props) {

    const handleInputChange = event => {
    event.preventDefault()
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const dispatch = useDispatch();

  useEffect(()=>{
    setGroup({...group});
  },[]);

  const groups = useSelector(state => state.groups);

  let { id } = useParams(); //see in routes path: "/users/employee-details/:id",
  
  let currentGroup = groups.filter(grp=> grp.id==id)[0];

  const deactivateGroup = () => {
    dispatch({
      type: DEACTIVATE_GROUP,
      payload: group
    });
    setGroup(prev => ({...group, active:!prev.active })) ;
  }


  const handleSaveClick = () => {
    dispatch({
      type: UPDATE_GROUP,
      payload: group
    });
    backToSearch();
  }


  const backToSearch = () => {

    props.history.push('/admin/search-groups')

  }


  const toggle = () => setCollapse(!collapse);
  

  const [group, setGroup] = useState(currentGroup)
  const [collapse, setCollapse] = useState(false);

  let numOfMembers = group.members.length;
  return (
    <>
      <GradientEmptyHeader name="Groups"  />
      <Container className="mt--6" fluid>    
        <Row>     
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Group Details</h3>
                  </Col>                
                </Row>
                <Row className="align-items-center py-4">              
                  <Col lg="12" xs="7" className="text-right">

                    {group.active ? <Button
                          type="button"
                          color="danger"
                          onClick={deactivateGroup}                  
                        >
                          Deactivate Group
                        </Button> : <Button
                          type="button"
                          color="success"
                          onClick={deactivateGroup}                  
                        >
                          Activate Group
                        </Button> 
}
                      

                        <Button
                          type="button"
                          color="info"
                          onClick={backToSearch}                  
                        >
                          Back to Search
                        </Button>                     
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <Form>
              <h6 className="heading-small text-muted mb-4">
                    Care Member information
                  </h6>
                  <div className="pl-lg-4">                    
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Group ID
                          </label>
                          <Input                            
                            id="input-first-name"
                            value={group.id}
                            disabled = {true}       
                            type="text"                            
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Group Name
                          </label>
                          <Input                           
                            id="input-last-name"
                            value={group.name}
                            name="groupName"
                            onChange={handleInputChange}                           
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    
                    <Row>
                      <Col >
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Group Description
                          </label>
                          <Input                           
                            id="input-last-name"
                            value={group.description}
                            name="groupDesc"
                            onChange={handleInputChange}
                            rows="4"     
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                   
                    </Row>
                   

                  </div>
                
                  <hr className="my-4" />

                

                  <Row className="d-flex justify-content-between mx-2">

                  <h6 className="heading-small text-muted mb-4">
                    MEMBERS
                  </h6> 


                  <ButtonGroup className="d-flex">
                  <Button onClick={toggle} disabled={numOfMembers === 0} >
                        {collapse ?"Hide members":  "Show members"} ({numOfMembers} members)
                  </Button>


                  </ButtonGroup>

                  

                    
                  </Row>

                

                      
                 
                  
                  <div className="pl-lg-4">
                  <Row>

               
                      
                  </Row>

                    <Row>
                    {/* <MembersTableComps data={group.members} /> */}
                    <Collapse isOpen={collapse}>
                        <ListGroup>
                          <ListGroupItem>Cras justo odio</ListGroupItem>
                          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                          <ListGroupItem>Morbi leo risus</ListGroupItem>
                          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
       
                      </Collapse>
                    </Row>
                   
      
                  </div>

                  <hr className="my-4" />

                  <div className="pl-lg-4">

                  <Row>
                    <Button color="primary" onClick={() => handleSaveClick()}> Save</Button>
                    <Button color="danger" onClick={() => handleSaveClick()}> Delete group</Button>

                 </Row>


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


export default EditGroupPage;
