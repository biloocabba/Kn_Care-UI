

import paginationFactory from 'react-bootstrap-table2-paginator'

export const pagination = paginationFactory({
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


  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file
  export const copyToClipboardAsTable = (el, showAlert) => {
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

    showAlert();

   // setAlert(alertComponent);
    // setAlert(
    //   <ReactBSAlert
    //     success
    //     style={{ display: 'block', marginTop: '-100px' }}
    //     title="Good job!"
    //     onConfirm={() => setAlert(null)}
    //     onCancel={() => setAlert(null)}
    //     confirmBtnBsStyle="info"
    //     btnSize=""
    //   >
    //     Copied to clipboard!
    //   </ReactBSAlert>
    // )
  }