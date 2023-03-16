import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Box } from "@mui/material";

import { ActiveLink, notActiveLink, LinkHover } from "../Header.styles";

const FullNavigation: FC = () => {
  const { pathname } = useLocation();

  const homeLinkBorder = pathname === "/" ? ActiveLink : notActiveLink;

  const departmentsLinkBorder =
    pathname === "/departments" ? ActiveLink : notActiveLink;

  return (
    <li style={{ display: "flex" }}>
      <Box>
        <Button
          component={Link}
          to="/"
          sx={{
            ...homeLinkBorder,
            ...LinkHover,
          }}
        >
          Перевірити ТТН
        </Button>
      </Box>
      <Box sx={{ ml: "1rem" }}>
        <Button
          component={Link}
          to="/departments"
          sx={{
            ...departmentsLinkBorder,
            ...LinkHover,
          }}
        >
          Всi вiддiлення
        </Button>
      </Box>
    </li>
  );
};

export default FullNavigation;
