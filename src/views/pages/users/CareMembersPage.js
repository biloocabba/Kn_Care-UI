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
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//import ReactBSAlert from "react-bootstrap-sweetalert";
import {
  searchCareMembers
} from "../../../actions/careMembers";
import {
  //Button,
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { useDispatch, useSelector } from  "react-redux";

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

function CareMembersPage(props) {
  const [searchInternationalName, setSearchInternationalName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCompanyCode, setSearchCompanyCode] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchOnBoardDate, setSearchOnBoardDate] = useState("");

  const careMembers = useSelector(state => state.careMembers);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(retrieveCareMembers())
  // }, [dispatch])

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

  const onChangeSearchOnBoardDate = e => {
    const searchOnboardingDate = e.target.value;
    setSearchOnBoardDate(searchOnboardingDate);
  };

  /*
  const findByInternationalName = () => {
    if (searchCompanyCode !== null) {
      dispatch(findCareMembersByInternationalName(searchInternationalName));
    }
  };

  const findByBusinessUnit = () => {
    if (searchBusinessUnit !== null) {
      dispatch(findCareMembersByBusinessUnit(searchBusinessUnit));
    }  
  };

  const findByCompanyCode = () => {
    if (searchCompanyCode !== null) {
      dispatch(findCareMembersByCompanyCode(searchCompanyCode));
    }
  };

  const findByCountry = () => {
    if (searchCountry !== null) {
      dispatch(findCareMembersByCountry(searchCountry));
    }
  };

  const findByOnBoardDate = () => {
    if (searchBusinessUnit !== null) {
      dispatch(findCareMembersByOnBoardDate(searchOnBoardDate));
    }
  };
*/
  const findByAllParameters = () => {

      let filters ={
      internationalName:searchInternationalName,
      businessUnitId: searchBusinessUnit,
      nationalityId:searchCountry
     
    }

    dispatch(searchCareMembers(filters));
    /*
    findByInternationalName();
    findByBusinessUnit();
    findByCompanyCode();
    findByCountry();
    findByOnBoardDate();
    */
  }

  // const rowDataDetails = (e)=> {   
  //   //console.log(e.target);
  //   var { id} = e.target;
  //   console.log("See Details for Id: "+id);
  //   //props.history.push('/admin/users/care-member-details/'+id);
  //   props.history.push('/admin/users/care-member-details/1');
  // }

  
  // const formatActionButtonCell =(cell, row)=>{  
        
  //   return (  <>
  //   <Button className="btn-icon btn-2" type="button" color="info" onClick={rowDataDetails}>
  //                       <span className="btn-inner--icon">
  //                         <i className="ni ni-badge" />
  //                       </span>
  //                     </Button>
  //                     <Button className="btn-icon btn-2" color="danger" type="button" onClick={rowDataDetails}>
  //                       <span className="btn-inner--icon">
  //                         <i className="ni ni-fat-remove" />
  //                       </span>
  //                     </Button>
  //                     </>);
        
  
  // }

  //const [alert, setAlert] = React.useState(null);
  //const componentRef = React.useRef(null);

  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  // const copyToClipboardAsTable = (el) => {
  //   var body = document.body,
  //     range,
  //     sel;
  //   if (document.createRange && window.getSelection) {
  //     range = document.createRange();
  //     sel = window.getSelection();
  //     sel.removeAllRanges();
  //     try {
  //       range.selectNodeContents(el);
  //       sel.addRange(range);
  //     } catch (e) {
  //       range.selectNode(el);
  //       sel.addRange(range);
  //     }
  //     document.execCommand("copy");
  //   } else if (body.createTextRange) {
  //     range = body.createTextRange();
  //     range.moveToElementText(el);
  //     range.select();
  //     range.execCommand("Copy");
  //   }
  //   setAlert(
  //     <ReactBSAlert
  //       success
  //       style={{ display: "block", marginTop: "-100px" }}
  //       title="Good job!"
  //       onConfirm={() => setAlert(null)}
  //       onCancel={() => setAlert(null)}
  //       confirmBtnBsStyle="info"
  //       btnSize=""
  //     >
  //       Copied to clipboard!
  //     </ReactBSAlert>
  //   );
  // };

  return (
    <>
      {alert}
      <GradientEmptyHeader name="Employees"  />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Care Members</h3>
                <p className="text-sm mb-0">
                  Care Members visible according to current user's role
                </p>
              </CardHeader>
              <ToolkitProvider
                data={careMembers}
                keyField="firstName"
                columns={[
                  {
                    dataField: "employee.firstName",
                    text: "First Name",
                    hidden : true,
                  },
                  {
                    dataField: "employee.lastName",
                    text: "lastName",
                    hidden : true,
                  },
                  {
                    dataField: "employee.internationalName",
                    text: "int Name",
                    sort: true                    
                  },
                  {
                    dataField: "employee.title",
                    text: "title",
                    sort: true ,
                    style: { width:'50px' }                   
                  },
                  {
                    dataField: "employee.businessUnit",
                    text: "bUnit",
                    sort: true,
                    style: { width:'50px' }
                  },
                  {
                    dataField: "employee.companyCode",
                    text: "companyCode",
                    sort: true,
                    style: { width:'50px' }
                  },
                  {
                    dataField: "employee.costCenter",
                    text: "costCenter",
                    sort: true,
                  },
                  {
                    dataField: "employee.office.country",
                    text: "country",
                    sort: true,
                  },
                  {
                    dataField: "onBoardDate",
                    text: "onBoardDate",
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
                          placeholder="Onboarding Date"
                          value={searchOnBoardDate}
                          onChange={onChangeSearchOnBoardDate}
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
  );
}

export default CareMembersPage;
