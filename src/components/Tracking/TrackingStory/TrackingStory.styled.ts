import { styled } from "@mui/system";
import { CardContent, Box, Drawer } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { COLORS } from "../../../services/consts/theme/colors.conts";

export const MyCardContent = styled(CardContent)({
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "column",

  overflowY: "auto",
  overflowX: "hidden",

  width: "100%",
  minWidth: "320px",
});

export const ActionsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
});

export const MyIconArrowBackSidebar = styled(ArrowForwardIosIcon)({
  color: `${COLORS.primaryColor}`,
  transition: "all 250ms linear",
  "&:hover": {
    color: `${COLORS.accentColor}`,
  },
});

export const MyDrawer = styled(Drawer)({
  "&.MuiDrawer-root": {
    zIndex: 9999999,
  },
});

export const MyStoryWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  "&:not(last-child)": {
    marginBottom: "1rem",
  },
});
