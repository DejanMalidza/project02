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
import Link from 'next/link'

const columns = [
  { id: 'number', label: '#', minWidth: 50 },
  { id: 'name', label: 'TM Reference', minWidth: 170 },
  { id: 'code', label: 'TM Label', minWidth: 100 },
  {
    id: 'population',
    label: 'Client Name',
    minWidth: 100,
    align: 'left',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'size',
    label: 'Client Email',
    minWidth: 100,
    align: 'left',
    format: value => value.toLocaleString('en-US')
  },
  {
    id: 'density',
    label: 'Created Date',
    minWidth: 170,
    align: 'left',
    format: value => value.toFixed(2)
  }
]

const data = [
  { placeholder: '', display: 'none' },
  { placeholder: 'Search TM Reference', display: '' },
  { placeholder: 'Search TM Label', display: '' },
  { placeholder: 'Search Client Name', display: '' },
  { placeholder: 'Search Client Email', display: '' },
  { placeholder: 'Search Created Date', display: '' }
]

function createData(number, name, code, population, size, density) {
  return { number, name, code, population, size, density }
}

const rows = [
  createData(1, '1324171354', 'MarkStock', 'Nada', 'nada@trademark.com', '2023-03-26'),
  createData(2, '1403500365', 'InProperty', 'Rita', 'rita@trademark.com', '2023-03-26'),
  createData(3, '6048397334', 'InProperty', 'Rita', 'rita@trademark.com', '2023-03-25'),
  createData(4, '3271674343', 'Corporate Stack', 'Dejan', 'dejan1234@trademark.com', '2023-03-18'),
  createData(5, '3760210323', 'LADERACH', 'John', 'john89@trademark.com', '2023-03-18'),
  createData(6, '2547540034', 'LADERACH - SWITZERLAND', 'JohnN', 'john89@trademark.com', '2023-03-01'),
  createData(7, '8301920089', 'LADERACH - SWITZERLAND', 'JohnN', 'john89@trademark.com', '2023-03-01'),
  createData(8, '4857000085', 'LADERACH - SWITZERLAND', 'JohnN', 'john89@trademark.com', '2023-03-01'),
  createData(9, '1265776911', 'LADERACH - SWITZERLAND', 'JohnN', 'john89@trademark.com', '2023-03-01'),
  createData(10, '1263170000', 'Corporate Stack', 'Claus', 'claus0090@trademark.com', '2023-02-25'),
  createData(11, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@trademark.com', '2023-02-06'),
  createData(12, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@trademark.com', '2023-02-06'),
  createData(13, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@trademark.com', '2023-02-06'),
  createData(14, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(15, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(16, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(17, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(18, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(19, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(20, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(21, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(22, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(23, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(24, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(25, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(26, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(27, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(28, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(29, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(30, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(21, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(22, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(23, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(24, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(25, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(26, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(27, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(28, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(29, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(30, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(21, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(22, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(23, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(24, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(25, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(26, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(27, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(28, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(29, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(30, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(21, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(22, '6754575723', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(23, '1467937446', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06'),
  createData(24, '2009624173', 'Test 5', 'Rita', 'ritaaboumhaya@gmail.com', '2023-02-05'),
  createData(25, '2101471259', 'LADERACH', 'John', 'john89@gmail.com', '2023-02-01'),
  createData(26, '6702200055', 'Chocolate Bash', 'Michael', 'projectproperty@gmail.com', '2023-02-06')
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
                      <Link href='/order-detail'>
                        <TableCell key={column.id} align={column.align} style={{ cursor: 'pointer' }}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      </Link>
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
