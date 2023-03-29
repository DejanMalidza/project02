// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'
import styled from '@emotion/styled'
import DatePicker from 'react-datepicker'
import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import MenuDown from '../../../public/images/avatars/down.png'
import Image from 'next/image'

const WrapperDate = styled.div`
  padding: 15px 0 15px 0;
  display: inline-flex;
`

const DatePicker1 = styled(DatePicker)`
  width: 130px;
  margin-right: 10px;
  padding: 3px;
  }
`
const Button = styled.button`
  border-radius: 5px;
  padding: 7px;
`
const First = styled.div`
  display: inline-flex;
`
const Input = styled.input`
  width: 80px;
  height: 35px;
  margin-left: 5px;
  margin-right: 5px;
`
const Image1 = styled(Image)``
const WrapperImage1 = styled.div`
  width: 15px;
  height: 15px;
  padding-top: 8px;
  margin-left: -25px;
  margin-right: 8px;
`

const MUITable = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' style={{ borderBottom: '1px solid black' }}>
          <Link href='https://mui.com/components/tables/' target='_blank' style={{ color: 'black' }}>
            Trademarks List
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ borderBottom: '1px solid black' }}>
          <WrapperDate>
            <p style={{ margin: '0', marginRight: '5px', color: 'black' }}>From:</p>
            <DatePicker1 selected={startDate} onChange={date => setStartDate(date)} />
            <p style={{ margin: '0', marginRight: '5px', color: 'black' }}>To:</p>
            <DatePicker1 selected={startDate} onChange={date => setStartDate(date)} />
          </WrapperDate>
          <Button>filter by date</Button>
        </div>
      </Grid>
      <Grid item xs={12} style={{ color: 'black' }}>
        <First>
          <p style={{ margin: 'auto', marginRight: '5px', color: 'black' }}>Show</p>
          <Input placeholder='10'></Input>
          <WrapperImage1>
            <Image1 src={MenuDown.src} width='15px' height='15px' />
          </WrapperImage1>
          <p style={{ margin: 'auto', marginLeft: '5px', color: 'black' }}>entries</p>
        </First>
        <div></div>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableBasic />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Dense Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableDense />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sticky Header' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCollapsible />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Spanning Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableSpanning />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Customized Table' titleTypographyProps={{ variant: 'h6' }} />
          <TableCustomized />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
