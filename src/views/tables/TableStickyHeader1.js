// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import styled from '@emotion/styled'

const columns = [
  { id: 'number', label: '#', minWidth: 50 },
  { id: 'name', label: 'TM Label', minWidth: 170 },
  { id: 'code', label: 'TM Ref No', minWidth: 100 },
  { id: 'order', label: 'Order Num', minWidth: 100 },
  { id: 'service', label: 'Service', minWidth: 100 },
  { id: 'country', label: 'Country', minWidth: 100 },
  { id: 'clas', label: 'Class', minWidth: 100 },
  {
    id: 'date',
    label: 'Created Date',
    minWidth: 170,
    align: 'left',
    format: value => value.toFixed(2)
  },
  {
    id: 'date1',
    label: 'Due Date',
    minWidth: 170,
    align: 'left',
    format: value => value.toFixed(2)
  },
  { id: 'status', label: 'TM Status', minWidth: 100 },
  { id: 'orderstatus', label: 'Status', minWidth: 100 }
]

const data = [
  { placeholder: '', display: 'none' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' },
  { placeholder: 'Search', display: '' }
]

function createData(number, name, code, order, service, country, clas, date, date1, status, orderstatus) {
  return { number, name, code, order, service, country, clas, date, date1, status, orderstatus }
}

const rows = [
  createData(
    1,
    'Corporate Stack',
    '1324171354',
    'TP-00407',
    'Publication',
    'Egypt',
    '9',
    '2023-03-15',
    '2023-03-26',
    'Publication fees settled, awaiting mark to be published',
    'Received'
  ),
  createData(
    2,
    'Chocolate Bash',
    '1403500365',
    'TP-00406',
    'Reg. filing',
    'Egypt',
    '30',
    '2023-03-14',
    '2023-03-26',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    3,
    'Chocolate Bash',
    '6048397334',
    'TP-00404',
    'Reg. filing',
    'Turkey',
    '43',
    '2023-03-14',
    '2023-03-22',
    'Filed',
    'In process'
  ),
  createData(
    4,
    'Chocolate Bash',
    '3271674343',
    'TP-00403',
    'Reg. filing',
    'Morocco',
    '43',
    '2023-03-07',
    '2023-03-19',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    5,
    'LADERACH',
    '3760210323',
    'TP-00401',
    'Reg. filing',
    'France',
    '43',
    '2023-03-07',
    '2023-03-11',
    'Rejected by TWO',
    'In process'
  ),
  createData(
    6,
    'LADERACH - SWITZERLAND',
    '2547540034',
    'TP-00397',
    'Reg. filing',
    'Switzerland',
    '43',
    '2023-03-01',
    '2023-03-04',
    'Filed',
    'In process'
  ),
  createData(
    7,
    'LADERACH - SWITZERLAND',
    '8301920089',
    'TP-00396',
    'Reg. filing',
    'Switzerland',
    '35',
    '2023-02-21',
    '2023-03-01',
    'Filed',
    'In process'
  ),
  createData(
    8,
    'LADERACH - SWITZERLAND',
    '4857000085',
    'TP-00395',
    'Reg. filing',
    'Switzerland',
    '9',
    '2023-02-19',
    '2023-02-27',
    'Filed',
    'In process'
  ),
  createData(
    9,
    'LADERACH - SWITZERLAND',
    '1265776911',
    'TP-00393',
    'Reg. filing',
    'Switzerland',
    '35',
    '2023-02-01',
    '2023-02-19',
    'Filed',
    'In process'
  ),
  createData(
    10,
    'Corporat Stack',
    '1263170000',
    'TP-00389',
    'Reg. filing',
    'France',
    '30',
    '2023-01-28',
    '2023-02-11',
    'Filed',
    'In process'
  ),
  createData(
    1,
    'Corporate Stack',
    '1324171354',
    'TP-00407',
    'Publication',
    'Egypt',
    '9',
    '2023-03-15',
    '2023-03-26',
    'Publication fees settled, awaiting mark to be published',
    'Received'
  ),
  createData(
    2,
    'Chocolate Bash',
    '1403500365',
    'TP-00406',
    'Reg. filing',
    'Egypt',
    '30',
    '2023-03-14',
    '2023-03-26',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    3,
    'Chocolate Bash',
    '6048397334',
    'TP-00404',
    'Reg. filing',
    'Turkey',
    '43',
    '2023-03-14',
    '2023-03-22',
    'Filed',
    'In process'
  ),
  createData(
    4,
    'Chocolate Bash',
    '3271674343',
    'TP-00403',
    'Reg. filing',
    'Morocco',
    '43',
    '2023-03-07',
    '2023-03-19',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    5,
    'LADERACH',
    '3760210323',
    'TP-00401',
    'Reg. filing',
    'France',
    '43',
    '2023-03-07',
    '2023-03-11',
    'Rejected by TWO',
    'In process'
  ),
  createData(
    6,
    'LADERACH - SWITZERLAND',
    '2547540034',
    'TP-00397',
    'Reg. filing',
    'Switzerland',
    '43',
    '2023-03-01',
    '2023-03-04',
    'Filed',
    'In process'
  ),
  createData(
    7,
    'LADERACH - SWITZERLAND',
    '8301920089',
    'TP-00396',
    'Reg. filing',
    'Switzerland',
    '35',
    '2023-02-21',
    '2023-03-01',
    'Filed',
    'In process'
  ),
  createData(
    8,
    'LADERACH - SWITZERLAND',
    '4857000085',
    'TP-00395',
    'Reg. filing',
    'Switzerland',
    '9',
    '2023-02-19',
    '2023-02-27',
    'Filed',
    'In process'
  ),
  createData(
    9,
    'LADERACH - SWITZERLAND',
    '1265776911',
    'TP-00393',
    'Reg. filing',
    'Switzerland',
    '35',
    '2023-02-01',
    '2023-02-19',
    'Filed',
    'In process'
  ),
  createData(
    10,
    'Corporat Stack',
    '1263170000',
    'TP-00389',
    'Reg. filing',
    'France',
    '30',
    '2023-01-28',
    '2023-02-11',
    'Filed',
    'In process'
  ),
  createData(
    1,
    'Corporate Stack',
    '1324171354',
    'TP-00407',
    'Publication',
    'Egypt',
    '9',
    '2023-03-15',
    '2023-03-26',
    'Publication fees settled, awaiting mark to be published',
    'Received'
  ),
  createData(
    2,
    'Chocolate Bash',
    '1403500365',
    'TP-00406',
    'Reg. filing',
    'Egypt',
    '30',
    '2023-03-14',
    '2023-03-26',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    3,
    'Chocolate Bash',
    '6048397334',
    'TP-00404',
    'Reg. filing',
    'Turkey',
    '43',
    '2023-03-14',
    '2023-03-22',
    'Filed',
    'In process'
  ),
  createData(
    4,
    'Chocolate Bash',
    '3271674343',
    'TP-00403',
    'Reg. filing',
    'Morocco',
    '43',
    '2023-03-07',
    '2023-03-19',
    'Instruction Received from Client - pending ET',
    'Received'
  ),
  createData(
    5,
    'LADERACH',
    '3760210323',
    'TP-00401',
    'Reg. filing',
    'France',
    '43',
    '2023-03-07',
    '2023-03-11',
    'Rejected by TWO',
    'In process'
  ),
  createData(
    6,
    'LADERACH - SWITZERLAND',
    '2547540034',
    'TP-00397',
    'Reg. filing',
    'Switzerland',
    '43',
    '2023-03-01',
    '2023-03-04',
    'Filed',
    'In process'
  ),
  createData(
    7,
    'LADERACH - SWITZERLAND',
    '8301920089',
    'TP-00396',
    'Reg. filing',
    'Switzerland',
    '35',
    '2023-02-21',
    '2023-03-01',
    'Filed',
    'In process'
  ),
  createData(
    8,
    'LADERACH - SWITZERLAND',
    '4857000085',
    'TP-00395',
    'Reg. filing',
    'Switzerland',
    '9',
    '2023-02-19',
    '2023-02-27',
    'Filed',
    'In process'
  )
]

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  height: 30px;
`

const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {data.map(dataa => (
                <TableCell>
                  <Input placeholder={`${dataa.placeholder}`} style={{ display: `${dataa.display}` }}></Input>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyHeader
