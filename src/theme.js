import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Colors (Clean and modern)

/*  const black = '#17252A',
 const green = '#2B7A78',
 const blueGreen = '#3AAFA9',
 const blue = '#DEF2F1',
 const white = '#FEFFFF' */
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3AAFA9',
    },
    secondary: {
      main: '#2B7A78',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FEFFFF',
    },
    tertiary: {
      main: '#DEF2F1'
    },
    dark: {
      main: '#17252A'
    }
  },
  
});

export default theme;
