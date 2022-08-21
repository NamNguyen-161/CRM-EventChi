import { createTheme } from "@mui/material";
import "./_font.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ea5284",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "rgba(17, 17, 17, 0.05) !important",
          borderRadius: "4px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
