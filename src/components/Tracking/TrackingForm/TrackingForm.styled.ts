import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const Form = styled("form")({
  marginBottom: "3rem",
  width: "100%",
  maxWidth: "468px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Input = styled(TextField)({
  width: "100%",
  maxWidth: "400px",

  "@media screen and (min-width:1100px)": {
    maxWidth: "600px",
  },

  "&.MuiTextField-root": {
    "@media screen and (max-width:767px)": {
      marginBottom: "1rem",
    },
  },
});
