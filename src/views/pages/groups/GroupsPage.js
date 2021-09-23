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
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import ReactBSAlert from 'react-bootstrap-sweetalert'


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
// core components
import GradientEmptyHeader from 'components/Headers/GradientEmptyHeader.js'

import { retrieveGroups } from '../../../actions/groups'

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{' '}
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
        }{' '}
        entries.
      </label>
    </div>
  ),
})

const { SearchBar } = Search

const statusBadge = (status) => {
  return status ? <button> Yes </button> : <button> No</button>
}

function GroupsPage(props) {
  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={groupDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
      </>
    )
  }

  const groupDetails = (e) => {
    var { id } = e.target
    props.history.push('/admin/group-member-details/' + id)
  }

  const groups = useSelector(state => state.groups);

  const [alert, setAlert] = React.useState(null)
  const componentRef = React.useRef(null)
   const dispatch = useDispatch()


  //this goes in a different story
  // useEffect(() => {
  //   dispatch(retrieveGroups());
  // }, []);

  return (
    <>
      {alert}
      <GradientEmptyHeader name="Groups" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
             <Card>
              <CardHeader>
                <h3 className="mb-0">Groups</h3>
                <p className="text-sm mb-0">
                  Groups available
                </p>
              </CardHeader>
              <ToolkitProvider
                data={groups}
                keyField="group"
                columns={[
                  {
                    dataField: 'id',
                    text: 'ID',
                    sort: true,
                  },
                  {
                    dataField: 'name',
                    text: 'Group Name',
                    sort: true,
                  },
                  {
                    dataField: 'active',
                    text: 'Active',
                    sort: true,
                  },
                  {
                    dataField: 'action',
                    text: '',
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {(props) => (
                  <div className="py-4 table-responsive">
                    <Container fluid>
                      <Row>
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
  )
}

export default GroupsPage
