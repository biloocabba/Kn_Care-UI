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
import React, {useEffect} from "react";
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
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import { useSelector, useDispatch} from 'react-redux';
import { reterieveBestPractices } from "actions/bestPractices";

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

function SearchBestPracticePage() {

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

  const bestPractices = useSelector((state) => state.bestPractices)
  const dispatch = useDispatch()


  // this should happen on click after selecting the filters
  // useEffect(() => {
  //   dispatch(reterieveBestPractices())
  // }, [dispatch])

  
  return (
    <>
      {alert}
      <SimpleHeader name="Best Practices" parentName="Tables" />
      <Container className="mt--6" fluid>

      <Row>  
        <Col className="order-xl-1" xl="12">
          <Card>
            <CardHeader>
              <h3 className="mb-0">Search Best Practices </h3>
              <p className="text-sm mb-0">                 
              </p>
            </CardHeader>
            {/* Filters to search Best practices go here:

              (time from - to) (author) (tag) (rate) (title) 
              
              */}
            </Card>
          </Col>
        </Row>
        
        <Row>       
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Best Practices</h3>
                <p className="text-sm mb-0">                 
                </p>
              </CardHeader>
              <ToolkitProvider
                data={bestPractices}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden : true,
                  },
                  {
                    dataField: "title",
                    text: "Title",
                    sort: true,
                  },
                  {
                    dataField: "content",
                    text: "Content",
                    sort: true,
                  },
                  {
                    dataField: "description",
                    text: "Description",
                    sort: true,
                  }
                  
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
          </div>
        </Row>
      </Container>
    </>
  );
}

export default SearchBestPracticePage;
