import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    allVariants: {
      fontSize: "inherit",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:{
            input: {
                padding: "0.6rem 1rem"
            }
        }
      }
    },
  },
});

export default theme;
