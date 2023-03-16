import { styled } from "@mui/system";
import { AppBar } from "@mui/material";

import { COLORS } from "../../../services/consts/theme/colors.conts";

export const MyHeader = styled(AppBar)({
  "&.MuiPaper-root": {
    background: `${COLORS.white}`,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  },
});

export const LinkHover = {
  "&.MuiButton-root:hover": {
    color: `${COLORS.accentColor}`,
    border: `1px solid ${COLORS.accentColor}`,
  },
};

export const ActiveLink = {
  border: `1px solid ${COLORS.accentColor}`,
  color: `${COLORS.accentColor}`,
  textAlign: "center",
};

export const notActiveLink = {
  border: `1px solid ${COLORS.primaryColor}`,
  color: `${COLORS.primaryColor}`,
  textAlign: "center",
};
