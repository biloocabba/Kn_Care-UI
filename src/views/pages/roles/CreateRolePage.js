import React, {useState} from 'react'
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

import {createRole} from '../../../actions/roles';

import {useDispatch} from "react-redux";

function CreateRolePage() {
    const initialState = {
        id: null,
        name: '',
        rankedBefore: '',
        rankedAfter: '',
        active: true,
        createdAt: '',
        updatedAt: '',
        rank: null
    };

    const [role, setRole] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [selectedRankedBefore, setSelectedRankedBefore] = useState('')
    const [selectedRankedAfter, setSelectedRankedAfter] = useState('')
    const createdAt = Date.now();
    const updatedAt = Date.now();

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRole({ ...role, [name]: value });
    };

    const saveRole = () => {
        const roleInfo = {
            id: null,
            name: '',
            rankedBefore: selectedRankedBefore,
            rankedAfter: selectedRankedAfter,
            active: true,
            createdAt: createdAt,
            updatedAt: updatedAt,
            rank: null
        }

        dispatch(createRole(roleInfo))
            .then(data => {
                    setRole({
                        id: null,
                        name: data.name,
                        rankedBefore: data.rankedBefore,
                        rankedAfter: data.rankedAfter,
                        active: data.active,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt,
                        rank: data.rank
                    })
                setSubmitted(true);
                }

            )
            .catch(e => {
                console.log(e);
            });
    }

    const newRole = () => {
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
                                        <h3 className="mb-0">Create Role</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                {submitted ? (
                                    <div>
                                        <h4>You submitted successfully!</h4>
                                        <button className="btn btn-success" onClick={newRole}>
                                            Add
                                        </button>
                                    </div>
                                ) : (
                                    <Form>
                                        <h6 className="heading-small text-muted mb-4">
                                            Role Information
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="10">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-role-name"
                                                        >
                                                            Role Name
                                                        </label>
                                                        <Input
                                                            name="name"
                                                            value={role.name}
                                                            required
                                                            id="input-role-name"
                                                            placeholder="Role name"
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
                                                            htmlFor="input-ranked-before"
                                                        >
                                                            Ranked Before
                                                        </label>
                                                        <Input
                                                            name="rankedBefore"
                                                            value={role.rankedBefore}
                                                            required
                                                            id="input-ranked-before"
                                                            placeholder="Ranked Before"
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
                                                            htmlFor="input-ranked-after"
                                                        >
                                                            Ranked After
                                                        </label>
                                                        <Input
                                                            name="rankedAfter"
                                                            value={role.rankedAfter}
                                                            required
                                                            id="input-ranked-after"
                                                            placeholder="Ranked After"
                                                            type="text"
                                                            onChange={handleInputChange}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>


                                        </div>
                                        <hr className="my-4" />

                                        <h6 className="heading-small text-muted mb-4">
                                            Add Role
                                        </h6>

                                        <div className="pl-lg-4">

                                            <button onClick={saveRole} className="btn btn-success"> Submit </button>
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

export default CreateRolePage;