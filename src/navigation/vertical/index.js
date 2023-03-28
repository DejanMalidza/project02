// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import Check from 'mdi-material-ui/Check'
import TM from 'mdi-material-ui/Trademark'
import Unpaid from 'mdi-material-ui/Alert'
import Current from 'mdi-material-ui/NoteMultipleOutline'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Bell from 'mdi-material-ui/Bell'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Profile',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Trademarks List',
      icon: TM,
      path: '/trademarks'
    },
    {
      title: 'Current Orders',
      icon: Current,
      path: '/current'
    },
    {
      title: 'Unpaid Orders',
      icon: Unpaid,
      path: '/unpaid'
    },
    {
      title: 'Completed Orders',
      icon: Check,
      path: '/completed'
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    {
      icon: Bell,
      title: 'Clients Email Reminder',
      path: '/form-layouts'
    },
    {
      title: 'Import Renewals',
      icon: Bell,
      path: '/cards'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title: 'Logout',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    }
  ]
}

export default navigation
