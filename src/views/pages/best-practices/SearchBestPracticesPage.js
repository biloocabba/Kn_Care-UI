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

import {
  retrieveBestPractices,
} from "../../../redux/actions/bestPractices/bestPractice";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

//import { dataTable } from "variables/general";

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

/*function ReactBSTables() {
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
                <td>{bestPractice.title}</td>
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
}*/




function ReactBSTables(props) {
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

  const bestPractices = useSelector(state => state.bestPractices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBestPractices());
}, [dispatch]);


  const removeBestPractice = id => {
    dispatch({
      type: DELETE_BEST_PRACTICE,
      payload: { id }
    });
  }
  // const handleSaveClick = () => {
  //   dispatch({
  //     type: UPDATE_BEST_PRACTICE,
  //     payload: localBestPractice
  //   });
  //   toggle();
  // }

  // const handleEditClick = bestPractice => {
  //   setLocalBestPractice(bestPractice);
  //   toggle();
  // }

  // const renderModal = () => {
  //     return(
  //       <Modal isOpen={modal} toggle={toggle}>
  //         <ModalHeader toggle={toggle}>Edit post</ModalHeader>
  //         <ModalBody>
  //           <Form>
  //             <FormGroup>
  //               <Label for="id">Id</Label>
  //               <Input type="text" disabled id="id" value={localBestPractice.id}/>
  //             </FormGroup>
  //             <FormGroup>
  //               <Label for="title">Title</Label>
  //               <Input type="text" id="title" value={localBestPractice.title}
  //               onChange={e => setLocalBestPractice({...localBestPractice, title: e.target.value})}/>
  //             </FormGroup>
  //             <FormGroup>
  //               <Label for="content">Post</Label>
  //               <Input type="textarea" id="content" value={localBestPractice.content}
  //               onChange={e => setLocalBestPractice({...localBestPractice, content: e.target.value})}/>
  //             </FormGroup>
  //           </Form>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button onClick={() => handleSaveClick()}>Save Changes</Button>
  //           <Button onClick={toggle}>Cancel</Button>
  //         </ModalFooter>
  //       </Modal>
  //     );
  // }

  const ViewBestPractice = e => {
    var {id} = e.target;
    props.history.push("/admin/best-practice/" + id);
  }

  const formatActionButtonCell =(cell, row)=>{  
    console.log(`row ${row.id}`);
    return (
      <>
        <Button id={row.id} className="btn-icon btn-2" type="button" onClick={e => ViewBestPractice(e)}>
          View
        </Button>
        <Button id={row.id} className="btn-icon btn-2" type="button" color="info" onClick={()=>console.log("Details page is not yet implemented!")}>
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>                        
        </Button>
        <Button id={row.id} className="btn-icon btn-2" color="danger" type="button" onClick={()=>removeBestPractice(row.id)}>
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
        </>);
        
  
  }

  return (
    <>
      {alert}
      <SimpleHeader name="React Tables" parentName="Tables" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
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
                data={bestPractices}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "Id",
                    sort: true,
                  },
                  {
                    dataField: "title",
                    text: "Title",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text:"",
                    formatter: formatActionButtonCell
                  }
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
                      hover
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
}

export default ReactBSTables;
