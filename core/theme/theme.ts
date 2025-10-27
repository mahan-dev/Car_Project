import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    allVariants: {
      fontSize: "inherit",
    },
  },

  palette: {
    primary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "0.1rem 0.8rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            padding: "0.6rem 1rem",
          },
        },
      },
    },
  },
});

export default theme;
