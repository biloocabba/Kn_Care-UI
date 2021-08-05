import React, {useState} from 'react'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// core components
import GradientEmptyHeader from 'components/Headers/GradientEmptyHeader.js'

// react plugin used to create DropdownMenu for selecting items
import Select2 from 'react-select2-wrapper'
import { createCareMember } from 'actions/users'

const CreateCareMemberPage = (props) => {

    let { id } = useParams()

  const users = useSelector((state) => state.users)
  let user = users.find((user) => user.id === parseInt(id))

  const date = new Date()
  const onBoardDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  const offBoardDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() + 1}`//OffBoard Date is 1 year from on Board date

  const initialState = {
    id: 3,
    firstName: user.firstName,
    lastName: user.lastName,
    internationalName: user.internationalName,
    email: user.email,
    address: user.address,
    city: user.city,
    country: user.country,
    postalCode: user.postalCode,
    title: user.title,
    companyPhone: user.companyPhone,
    companyCode: user.companyCode,
    buisnessUnit: user.buisnessUnit,
    costCenter: user.costCenter,
    managementGroup: user.managementGroup,
    onBoardDate: onBoardDate,
    offBoardDate: offBoardDate,
    careRole: 'care Advocate'
  }

  //Local state to hold the Current careMember before calling a dispatch to the store
  const [careMember, setCareMember] = useState(initialState)
  const dispatch = useDispatch()

  const saveCareMember = () => {

      setCareMember({ ...initialState })
      console.log(careMember)
      dispatch(createCareMember(careMember))
  }
  return (
    <>
      <GradientEmptyHeader name="users" />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Care Member</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      type="button"
                      color="info"
                      href="#pablo"
                      onClick={(e) => props.history.push('/admin/employees')}
                    >
                      Back to Employees
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
                            Onboard Date
                          </label>
                          <Input
                            id="input-first-name"
                            value={onBoardDate}
                            disabled={true}
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
                            Auto Offboard Date
                          </label>
                          <Input
                            id="input-last-name"
                            value={offBoardDate}
                            onChange={(e) => e.preventDefault}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-care-role"
                          >
                            Care Role
                          </label>
                          <Select2
                            className="form-control"
                            defaultValue="1"
                            options={{
                              placeholder: 'Select',
                            }}
                            data={[
                              { id: '1', text: 'Care Advocate' },
                              { id: '2', text: 'Care Role' },
                              { id: '3', text: 'Care Role' },
                              { id: '4', text: 'Care Role' },
                              { id: '5', text: 'Care Role' },
                              { id: '6', text: 'Care Role' },
                            ]}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Country
                          </label>
                          <Input
                            id="input-email"
                            value={user.country}
                            onChange={(e) => e.preventDefault}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={user.firstName}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={user.lastName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            International Name
                          </label>
                          <Input
                            id="input-username"
                            value={user.internationalName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            id="input-email"
                            value={user.email}
                            disabled={true}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            value={user.address}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            value={user.city}
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            value={user.country}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            value={user.postalCode}
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company Data
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">Title</label>
                          <Input
                            id="title"
                            value={user.title}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Phone
                          </label>
                          <Input
                            id="companyPhone"
                            value="+372 77645322"
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Code
                          </label>
                          <Input
                            id="input-postal-code"
                            value={user.companyCode}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Business Unit
                          </label>
                          <Input
                            id="input-postal-code"
                            value={user.businessUnit}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Cost Center
                          </label>
                          <Input
                            id="input-postal-code"
                            value={user.costCenter}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Management Group
                          </label>
                          <Input
                            id="input-postal-code"
                            value={user.managementGroup}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Button
                        color="primary"
                        type="button"
                        onClick={saveCareMember}
                      >
                        Save
                      </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CreateCareMemberPage
