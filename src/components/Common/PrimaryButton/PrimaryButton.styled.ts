import { styled } from "@mui/system";
import { Button } from "@mui/material";

import { COLORS } from "../../../services/consts/theme/colors.conts";

export const MyButton = styled(Button)({
  "&.MuiButton-root": {
    border: `1px solid ${COLORS.primaryColor}`,
    color: `${COLORS.primaryColor}`,
    "&:hover": {
      color: `${COLORS.accentColor}`,
      border: `1px solid ${COLORS.accentColor}`,
    },
  },
});
