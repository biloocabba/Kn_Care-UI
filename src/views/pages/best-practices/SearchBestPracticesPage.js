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
import React, { useEffect, useState } from 'react'
// react plugin that prints a given react component
import ReactToPrint from 'react-to-print'
// react component for creating dynamic tables
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
// react component used to create sweet alerts
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
import SimpleHeader from 'components/Headers/SimpleHeader.js'
import { useSelector, useDispatch } from 'react-redux'
import Select2 from 'react-select2-wrapper'
import { searchBestPractices } from 'actions/bestPractices'

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

function SearchBestPracticePage() {
  const [alert, setAlert] = React.useState(null)
  const componentRef = React.useRef(null)
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  const copyToClipboardAsTable = (el) => {
    var body = document.body,
      range,
      sel
    if (document.createRange && window.getSelection) {
      range = document.createRange()
      sel = window.getSelection()
      sel.removeAllRanges()
      try {
        range.selectNodeContents(el)
        sel.addRange(range)
      } catch (e) {
        range.selectNode(el)
        sel.addRange(range)
      }
      document.execCommand('copy')
    } else if (body.createTextRange) {
      range = body.createTextRange()
      range.moveToElementText(el)
      range.select()
      range.execCommand('Copy')
    }
    setAlert(
      <ReactBSAlert
        success
        style={{ display: 'block', marginTop: '-100px' }}
        title="Good job!"
        onConfirm={() => setAlert(null)}
        onCancel={() => setAlert(null)}
        confirmBtnBsStyle="info"
        btnSize=""
      >
        Copied to clipboard!
      </ReactBSAlert>
    )
  }

  const bestPractices = useSelector((state) => state.bestPractices)
  const dispatch = useDispatch()
  const [searchTime, setSearchTime] = useState('')
  const [searchAuthor, setSearchAuthor] = useState('')
  const [searchTag, setSearchTag] = useState('')
  const [searchRate, setSearchRate] = useState('')
  const [searchTitle, setSearchTitle] = useState('')

  
  // //this should happen on click after selecting the filters
  // useEffect(() => {
  //   dispatch(reterieveBestPractices())
  // }, [dispatch])

  const searchFilters = {
    searchTime: searchTime,
    searchAuthor: searchAuthor,
    searchTag: searchTag,
    searchRate: searchRate,
    searchTitle: searchTitle,
  }

  const makeSearch = () => {
    // console.log(searchTime)
    console.log(searchFilters)
  }

  return (
    <>
      {alert}
      <SimpleHeader name="Best Practices" parentName="Tables" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Best Practices</h3>
                <p className="text-sm mb-0">Add Filters</p>
              </CardHeader>
              <ToolkitProvider
                data={bestPractices}
                keyField="id"
                columns={[
                  {
                    dataField: 'id',
                    text: 'id',
                    hidden: true,
                  },
                  {
                    dataField: 'title',
                    text: 'Title',
                    sort: true,
                  },
                  {
                    dataField: 'content',
                    text: 'Content',
                    sort: true,
                  },
                  {
                    dataField: 'description',
                    text: 'Description',
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
                      <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-3 pb-1"
                >
                  <label>
                    <SearchBar
                      className="form-control-sm"
                      placeholder="Time"
                      onChange={(e) => setSearchTime(e.target.value)}
                      value={searchTime}
                    />
                  </label>
                </div>
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-3 pb-1"
                >
                  <label>
                    <SearchBar
                      className="form-control-sm"
                      placeholder="Author"
                      onChange={(e) => setSearchAuthor(e.target.value)}
                      value={searchAuthor}
                    />
                  </label>
                </div>
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-3 pb-1"
                >
                  <label>
                    <SearchBar
                      className="form-control-sm"
                      placeholder="Tag"
                      onChange={(e) => setSearchTag(e.target.value)}
                      value={searchTag}
                    />
                  </label>
                </div>
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-3 pb-1"
                >
                  <label>
                    <SearchBar
                      className="form-control-sm"
                      placeholder="Rate"
                      onChange={(e) => setSearchRate(e.target.value)}
                      value={searchRate}
                    />
                  </label>
                </div>
                <div
                  id="datatable-basic_filter"
                  className="dataTables_filter px-3 pb-1"
                >
                  <label>
                    <SearchBar
                      className="form-control-sm"
                      placeholder="Title"
                      onChange={(e) => setSearchTitle(e.target.value)}
                      value={searchTitle}
                    />
                  </label>
                </div>
                <Button
                  type="button"
                  color="info"
                  href="#pablo"
                  onClick={makeSearch}
                >
                  Search
                </Button>
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

export default SearchBestPracticePage
