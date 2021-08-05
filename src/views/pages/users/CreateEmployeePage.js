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
import React, { useState } from 'react'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap'
// core components
import { useDispatch } from 'react-redux'
import { createUser } from '../../../actions/users'

function CreateEmployeePage() {
  const initialState = {
    id: 3,
    firstName: '',
    lastName: '',
    internationalName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    title: '',
    companyPhone: '',
    companyCode: '',
    buisnessUnit: '',
    costCenter: '',
    managementGroup: '',
  }

  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const saveUser = () => {
    dispatch(createUser(user))
  }

  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: '100px',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
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
                    <h3 className="mb-0">Create User</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="10">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            First Name
                          </label>
                          <Input
                            value={user.firstName}
                            name="firstName"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                            onChange={handleChange}
                          />
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Last Name
                          </label>
                          <Input
                            value={user.lastName}
                            name="lastName"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                            onChange={handleChange}
                          />
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            International Name
                          </label>
                          <Input
                            value={user.internationalName}
                            name="internationalName"
                            id="input-international-name"
                            placeholder="International name"
                            type="text"
                            onChange={handleChange}
                          />
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Email
                          </label>
                          <Input
                            value={user.email}
                            name="email"
                            id="input--email"
                            placeholder="Email"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="10">
                        <FormGroup></FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">Address</h6>
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
                            name="address"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                            onChange={handleChange}
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
                            name="city"
                            id="input-city"
                            placeholder="City"
                            type="text"
                            onChange={handleChange}
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
                            name="country"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                            onChange={handleChange}
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
                            name="postalCode"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Company Phone
                          </label>
                          <Input
                            value={user.companyPhone}
                            name="companyPhone"
                            id="input-company-phone"
                            placeholder="company phone"
                            type="text"
                            onChange={handleChange}
                          />
                          <label
                            className="form-control-label"
                            htmlFor="input-group-name"
                          >
                            Company Code
                          </label>
                          <Input
                            value={user.companyCode}
                            name="companyCode"
                            id="input-company-code"
                            placeholder="company code"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <label
                          className="form-control-label"
                          htmlFor="input-group-name"
                        >
                          Buisness Unit
                        </label>
                        <Input
                          value={user.buisnessUnit}
                          name="buisnessUnit"
                          id="input-buisness-unit"
                          placeholder="buisness Unit"
                          type="text"
                          onChange={handleChange}
                        />

                        <label
                          className="form-control-label"
                          htmlFor="input-group-name"
                        >
                          Cost center
                        </label>
                        <Input
                          value={user.costCenter}
                          name="costCenter"
                          id="input-cost-center"
                          placeholder="cost center"
                          type="text"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col lg="4">
                        <label
                          className="form-control-label"
                          htmlFor="input-group-name"
                        >
                          Management Group
                        </label>
                        <Input
                          value={user.managementGroup}
                          name="managementGroup"
                          id="input-management-group"
                          placeholder="management group"
                          type="text"
                          onChange={handleChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Button color="primary" type="button" onClick={saveUser}>
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

export default CreateEmployeePage
