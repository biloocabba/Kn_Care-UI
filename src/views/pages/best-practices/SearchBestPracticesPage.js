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
import { useDispatch, useSelector } from "react-redux";
import { RETRIEVE_BEST_PRACTICES, UPDATE_BEST_PRACTICE, DELETE_BEST_PRACTICE } from "../../../redux/actions/bestPractices/types";
// react plugin that prints a given react component
import ReactToPrint from "react-to-print";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Container,
  Modal,
  Row,
  Col,
  UncontrolledTooltip,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormGroup,
  Label
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import { dataTable } from "variables/general";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

function ReactBSTables() {
  const bestPractices = useSelector(state => state.bestPractices);
  const dispatch = useDispatch();

  const defaultPost = {id:"", content:""};
  const [localBestPractice, setLocalBestPractice] = useState(defaultPost);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const removeBestPractice = id => {
    dispatch({
      type: DELETE_BEST_PRACTICE,
      payload: { id }
    });
  }
  const handleSaveClick = () => {
    dispatch({
      type: UPDATE_BEST_PRACTICE,
      payload: localBestPractice
    });
    toggle();
  }

  const handleEditClick = bestPractice => {
    setLocalBestPractice(bestPractice);
    toggle();
  }

  const renderModal = () => {
      return(
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit post</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="id">Id</Label>
                <Input type="text" disabled id="id" value={localBestPractice.id}/>
              </FormGroup>
              <FormGroup>
                <Label for="content">Post</Label>
                <Input type="textarea" id="content" value={localBestPractice.content}
                onChange={e => setLocalBestPractice({...localBestPractice, content: e.target.value})}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleSaveClick()}>Save Changes</Button>
            <Button onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      );
  }

  return(
    <>
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {bestPractices.map(bestPractice => {
            return(
              <tr key={bestPractice.id}>
                <td>{bestPractice.id}</td>
                <td>{bestPractice.content}</td>
                <td>
                  <ButtonGroup>
                    <Button onClick={() => handleEditClick(bestPractice)}>Edit</Button>
                    <Button
                    classname="badge badge-danger mr-2" onClick={() => removeBestPractice(bestPractice.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {renderModal()}
    </>);
}
/*

                    <Button
                      block
                      color="default"
                      onClick={() => setformModal(true)}
                    >
                      Form
                    </Button>
                    <Modal
                      className="modal-dialog-centered"
                      size="sm"
                      isOpen={formModal}
                      toggle={() => setformModal(false)}
                    >
                      <div className="modal-body p-0">
                        <Card className="bg-secondary border-0 mb-0">
                          <CardHeader className="bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-3">
                              <small>Sign in with</small>
                            </div>
                            <div className="btn-wrapper text-center">
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/github.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Github</span>
                              </Button>
                              <Button
                                className="btn-neutral btn-icon"
                                color="default"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <span className="btn-inner--icon mr-1">
                                  <img
                                    alt="..."
                                    src={
                                      require("assets/img/icons/common/google.svg")
                                        .default
                                    }
                                  />
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </Button>
                            </div>
                          </CardHeader>
                          <CardBody className="px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign in with credentials</small>
                            </div>
                            <Form role="form">
                              <FormGroup
                                className={classnames("mb-3", {
                                  focused: focusedEmail,
                                })}
                              >
                                <InputGroup className="input-group-merge input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Email"
                                    type="email"
                                    onFocus={() => setFocusedEmail(true)}
                                    onBlur={() => setFocusedEmail(false)}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup
                                className={classnames({
                                  focused: focusedPassword,
                                })}
                              >
                                <InputGroup className="input-group-merge input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Password"
                                    type="password"
                                    onFocus={() => setFocusedPassword(true)}
                                    onBlur={() => setFocusedPassword(false)}
                                  />
                                </InputGroup>
                              </FormGroup>
                              <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id=" customCheckLogin"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor=" customCheckLogin"
                                >
                                  <span className="text-muted">
                                    Remember me
                                  </span>
                                </label>
                              </div>
                              <div className="text-center">
                                <Button
                                  className="my-4"
                                  color="primary"
                                  type="button"
                                >
                                  Sign in
                                </Button>
                              </div>
                            </Form>
                          </CardBody>
                        </Card>
                      </div>
                    </Modal>
 */



/*function ReactBSTables() {
  const [alert, setAlert] = React.useState(null);
  const componentRef = React.useRef(null);
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
      document.execCommand("copy");
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
      range.execCommand("Copy");
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <SimpleHeader name="React Tables" parentName="Tables" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">React Bootstrap Table 2</h3>
                <p className="text-sm mb-0">
                  This is an exmaple of data table using the well known
                  react-bootstrap-table2 plugin. This is a minimal setup in
                  order to get started fast.
                </p>
              </CardHeader>
              <ToolkitProvider
                data={dataTable}
                keyField="name"
                columns={[
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "position",
                    text: "Position",
                    sort: true,
                  },
                  {
                    dataField: "office",
                    text: "Office",
                    sort: true,
                  },
                  {
                    dataField: "age",
                    text: "Age",
                    sort: true,
                  },
                  {
                    dataField: "start_date",
                    text: "Start date",
                    sort: true,
                  },
                  {
                    dataField: "salary",
                    text: "Salary",
                    sort: true,
                  },
                ]}
                search
              >
                {(props) => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Action buttons</h3>
                <p className="text-sm mb-0">
                  This is an exmaple of data table using the well known
                  react-bootstrap-table2 plugin. This is a minimal setup in
                  order to get started fast.
                </p>
              </CardHeader>
              <ToolkitProvider
                data={dataTable}
                keyField="name"
                columns={[
                  {
                    dataField: "name",
                    text: "Name",
                    sort: true,
                  },
                  {
                    dataField: "position",
                    text: "Position",
                    sort: true,
                  },
                  {
                    dataField: "office",
                    text: "Office",
                    sort: true,
                  },
                  {
                    dataField: "age",
                    text: "Age",
                    sort: true,
                  },
                  {
                    dataField: "start_date",
                    text: "Start date",
                    sort: true,
                  },
                  {
                    dataField: "salary",
                    text: "Salary",
                    sort: true,
                  },
                ]}
                search
              >
                {(props) => (
                  <div className="py-4 table-responsive">
                    <Container fluid>
                      <Row>
                        <Col xs={12} sm={6}>
                          <ButtonGroup>
                            <Button
                              className="buttons-copy buttons-html5"
                              color="default"
                              size="sm"
                              id="copy-tooltip"
                              onClick={() =>
                                copyToClipboardAsTable(
                                  document.getElementById("react-bs-table")
                                )
                              }
                            >
                              <span>Copy</span>
                            </Button>
                            <ReactToPrint
                              trigger={() => (
                                <Button
                                  color="default"
                                  size="sm"
                                  className="buttons-copy buttons-html5"
                                  id="print-tooltip"
                                >
                                  Print
                                </Button>
                              )}
                              content={() => componentRef.current}
                            />
                          </ButtonGroup>
                          <UncontrolledTooltip
                            placement="top"
                            target="print-tooltip"
                          >
                            This will open a print page with the visible rows of
                            the table.
                          </UncontrolledTooltip>
                          <UncontrolledTooltip
                            placement="top"
                            target="copy-tooltip"
                          >
                            This will copy to your clipboard the visible rows of
                            the table.
                          </UncontrolledTooltip>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div
                            id="datatable-basic_filter"
                            className="dataTables_filter px-4 pb-1 float-right"
                          >
                            <label>
                              Search:
                              <SearchBar
                                className="form-control-sm"
                                placeholder=""
                                {...props.searchProps}
                              />
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    <BootstrapTable
                      ref={componentRef}
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      id="react-bs-table"
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}*/

export default ReactBSTables;
