import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'inter',
    button: {
      textTransform: 'none'
    }
  }
});

export default responsiveFontSizes(theme, { factor: 2.5 });