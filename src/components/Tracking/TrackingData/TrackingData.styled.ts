import { styled } from "@mui/system";
import { CardContent, Card, Box, Typography } from "@mui/material";

import { COLORS } from "../../../services/consts/theme/colors.conts";

export const MyCard = styled(Card)({
  width: "100%",
  minHeight: "312px",
  maxWidth: "468px",
});

export const MyCardContent = styled(CardContent)({
  "& :not(:last-child)": {
    marginBottom: "0.8rem",
  },
});

export const MyTextWrapper = styled(Box)({
  borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
  paddingBottom: "5px",
});

export const MyTitle = styled(Typography)({
  color: `${COLORS.accentColor}`,
  display: "flex",
  alignItems: "center",

  "&.MuiTypography-root": {
    fontSize: "20px",
  },
});
