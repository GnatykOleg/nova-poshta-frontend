import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { COLORS } from "../../../services/consts/theme/colors.conts";

export const MyBox = styled(Box)({
  marginBottom: "3rem",
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const PaperStyles = {
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 600,
};

export const ButtonStyles = {
  color: `${COLORS.primaryColor}`,
  transition: "all 250ms linear",
  "&:hover": {
    color: `${COLORS.accentColor}`,
  },
};
