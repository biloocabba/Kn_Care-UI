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

const createRole = () => {
    const initialRoleState = {
        id: null,
        name: "",
        rankedBefore: "",
        rankedAfter: "",
        active: true,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        rank: ""
    };

    const [role, setRole] = useState(initialRoleState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRole({ ...role, [name]: value });
    };
}