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
import React, { useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { Button, Card, CardHeader, Container, Row } from 'reactstrap'
import GradientEmptyHeader from 'components/Headers/GradientEmptyHeader.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  searchEmployees,
  deleteUser,
} from "../../../actions/employee";

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

function Employees(props) {
  const [searchInternationalName, setSearchInternationalName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCompanyCode, setSearchCompanyCode] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState("");

  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const onChangeSearchInternationalName = e => {
    const searchInternationalName = e.target.value;
    setSearchInternationalName(searchInternationalName);
  };

  const onChangeSearchBusinessUnit = e => {
    const searchBusinessUnit = e.target.value;
    setSearchBusinessUnit(searchBusinessUnit);
  };

  const onChangeSearchCompanyCode = e => {
    const searchCompanyCode = e.target.value;
    setSearchCompanyCode(searchCompanyCode);
  };

  const onChangeSearchCountry = e => {
    const searchCountry = e.target.value;
    setSearchCountry(searchCountry);
  };

  const onChangeSearchHiringDate = e => {
    const searchHiringDate = e.target.value;
    setSearchHiringDate(searchHiringDate);
  };

  const findByAllParameters = () => {
    let filters ={
      internationalName:searchInternationalName,
      businessUnitId: searchBusinessUnit,
      nationalityId:searchCountry,
      companyCode:searchCompanyCode,
      hiringDate:searchHiringDate
    }
    dispatch(searchEmployees(filters));
  }

  const employeeDetails = (e) => {
    var { id } = e.target
    props.history.push('/admin/users/employee-details/' + id)
  }

  const employeeRemove = (e) => {
    var { id } = e.target
    console.log(id)
    dispatch(deleteUser(id))
  }

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={employeeDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={employeeRemove}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    )
  }

  return (
    <>
      {alert}
      <GradientEmptyHeader name="Employees" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Employees</h3>
                <p className="text-sm mb-0">Kn Employees from PDM</p>
              </CardHeader>
              <ToolkitProvider
                data={employees}
                keyField="firstName"
                columns={[
                  {
                    dataField: 'firstName',
                    text: 'First Name',
                    hidden: true,
                  },
                  {
                    dataField: 'lastName',
                    text: 'lastName',
                    hidden: true,
                  },
                  {
                    dataField: 'internationalName',
                    text: 'int Name',
                    sort: true,
                  },
                  {
                    dataField: 'title',
                    text: 'title',
                    sort: true,
                    style: { width: '50px' },
                  },
                  {
                    dataField: 'businessUnit',
                    text: 'bUnit',
                    sort: true,
                    style: { width: '50px' },
                  },
                  {
                    dataField: 'companyCode',
                    text: 'companyCode',
                    sort: true,
                    style: { width: '50px' },
                  },
                  {
                    dataField: 'costCenter',
                    text: 'costCenter',
                    sort: true,
                  },
                  {
                    dataField: 'country',
                    text: 'country',
                    sort: true,
                  },
                  {
                    dataField: "hiringDate",
                    text: "hiringDate",
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
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="International Name"
                          value={searchInternationalName}
                          onChange={onChangeSearchInternationalName}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Business Unit"
                          value={searchBusinessUnit}
                          onChange={onChangeSearchBusinessUnit}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="CompanyCode"
                          value={searchCompanyCode}
                          onChange={onChangeSearchCompanyCode}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Country"
                          value={searchCountry}
                          onChange={onChangeSearchCountry}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Hiring Date"
                          value={searchHiringDate}
                          onChange={onChangeSearchHiringDate}
                        />
                      </label>
                    </div>
                    <div className="input-group-append">
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
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
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Employees
