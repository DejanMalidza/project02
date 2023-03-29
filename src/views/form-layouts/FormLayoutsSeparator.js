// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import styled from '@emotion/styled'
import MenuDown from '../../../public/images/avatars/download.png'
import Image from 'next/image'
import Link from 'next/link'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const Back = styled.button`
  position: absolute;
  right: 0;
  padding: 5px;
  width: 70px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #1d3394;
  margin-right: 45px;
  margin-top: -40px;
`

const Button1 = styled.button`
  width: 310px;
  height: 50px;
  border: none;
  color: white;
  background-color: #63c6d7;
  font-weight: 600;
  cursor: pointer;
`

const Button2 = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  color: white;
  background-color: #1d3394;
  font-weight: 600;
  cursor: pointer;
`

const Button3 = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  color: white;
  background-color: #1d3394;
  font-weight: 600;
  cursor: pointer;
`

const Button4 = styled.button`
  width: 50px;
  height: 40px;
  border: none;
  color: white;
  background-color: white;
  border: 1px solid grey;
  font-weight: 600;
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
`

const Button5 = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  color: black;
  border-radius: 10px;
  background-color: #63c6d770;
`

const ImageBox = styled(Image)``

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Order Details' titleTypographyProps={{ variant: 'h6' }} />
      <Link href='/current'>
        <Back>Back</Back>
      </Link>
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Button1>Uploade TM Response Documents</Button1>
            </Grid>
            <Grid item xs={12}>
              <Button2>Export Excel File</Button2>
            </Grid>
            <Grid item xs={12}>
              <Button3>View TM Image</Button3>
              <Button4>
                <ImageBox src={MenuDown.src} height='25px' width='25px' />
              </Button4>
            </Grid>
            <Grid item xs={12}>
              <Button5>
                <p style={{ fontSize: '16px' }}>Registration</p>
              </Button5>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Username' placeholder='carterLeonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-separator-password'
                  onChange={handlePasswordChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                <OutlinedInput
                  value={values.password2}
                  label='Confirm Password'
                  id='form-layouts-separator-password-2'
                  onChange={handleConfirmChange('password2')}
                  type={values.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                2. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='First Name' placeholder='Leonard' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Last Name' placeholder='Carter' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={date => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '40px' }}>
            <Button5>
              <p style={{ fontSize: '16px' }}>Publication</p>
            </Button5>
          </Grid>
          <Grid item xs={12} style={{ marginTop: '40px' }}>
            <Button5>
              <p style={{ fontSize: '16px' }}>Final Registration</p>
            </Button5>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
