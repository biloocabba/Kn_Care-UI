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
import { reterieveBestPractices } from 'actions/bestPractices'
import Select2 from 'react-select2-wrapper'

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
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [selectedRate, setSelctedRate] = useState('')
  const [selectedTitle, setSelctedTitle] = useState('')

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
          <div className="col">
            <Card className="my-3 p-3">
              <h5>Filter</h5>
              <div class="d-flex justify-content-start">
                <Select2
                  className="form-control"
                  options={{
                    placeholder: 'Search Time',
                  }}
                  onChange={(event) => setSelectedTime(event.target.value)}
                  value={selectedTime}
                  data={[
                    { id: '1', text: 'Time' },
                    { id: '2', text: 'Time' },
                    { id: '3', text: 'Time' },
                    { id: '4', text: 'Time' },
                    { id: '5', text: 'Time' },
                    { id: '6', text: 'Time' },
                  ]}
                />

                <Select2
                  className="form-control"
                  options={{
                    placeholder: 'Search Author',
                  }}
                  onChange={(event) => setSelectedAuthor(event.target.value)}
                  value={selectedAuthor}
                  data={[
                    { id: '1', text: 'Author' },
                    { id: '2', text: 'Author' },
                    { id: '3', text: 'Author' },
                    { id: '4', text: 'Author' },
                    { id: '5', text: 'Author' },
                    { id: '6', text: 'Author' },
                  ]}
                />

                <Select2
                  className="form-control"
                  options={{
                    placeholder: 'Search Tag',
                  }}
                  onChange={(event) => setSelectedTag(event.target.value)}
                  value={selectedTag}
                  data={[
                    { id: '1', text: 'Tag' },
                    { id: '2', text: 'Tag' },
                    { id: '3', text: 'Tag' },
                    { id: '4', text: 'Tag' },
                    { id: '5', text: 'Tag' },
                    { id: '6', text: 'Tag' },
                  ]}
                />
                <Select2
                  className="form-control"
                  options={{
                    placeholder: 'Search Rate',
                  }}
                  onChange={(event) => setSelctedRate(event.target.value)}
                  value={selectedRate}
                  data={[
                    { id: '1', text: 'Rate' },
                    { id: '2', text: 'Rate' },
                    { id: '3', text: 'Rate' },
                    { id: '4', text: 'Rate' },
                    { id: '5', text: 'Rate' },
                    { id: '6', text: 'Rate' },
                  ]}
                />

                <Select2
                  className="form-control"
                  options={{
                    placeholder: 'Search Title',
                  }}
                  onChange={(event) => setSelctedTitle(event.target.value)}
                  value={selectedTitle}
                  data={[
                    { id: '1', text: 'Title' },
                    { id: '2', text: 'Title' },
                    { id: '3', text: 'Title' },
                    { id: '4', text: 'Title' },
                    { id: '5', text: 'Title' },
                    { id: '6', text: 'Title' },
                  ]}
                />
              </div>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Best Practices</h3>
                <p className="text-sm mb-0"></p>
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
  )
}

export default SearchBestPracticePage
