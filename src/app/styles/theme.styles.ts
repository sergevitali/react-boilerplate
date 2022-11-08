import { createTheme } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[700]
    },
    secondary: {
      main: green[500]
    }
  }
})