import React, { FC } from "react";

import { Link, useLocation } from "react-router-dom";

import { Button, Menu, MenuItem } from "@mui/material";

import { ActiveLink, notActiveLink, LinkHover } from "../Header.styles";

const MobileNavigation: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { pathname } = useLocation();

  const homeLinkBorder = pathname === "/" ? ActiveLink : notActiveLink;

  const departmentsLinkBorder =
    pathname === "/departments" ? ActiveLink : notActiveLink;

  return (
    <li>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Меню
      </Button>
      <Menu
        sx={{
          "&.MuiPopover-root": {
            zIndex: 999999,
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Button
            onClick={handleClose}
            component={Link}
            to="/"
            sx={{
              ...homeLinkBorder,
              ...LinkHover,
            }}
          >
            Перевірити ТТН
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={handleClose}
            component={Link}
            to="/departments"
            sx={{
              ...departmentsLinkBorder,
              ...LinkHover,
            }}
          >
            Всi вiддiлення
          </Button>
        </MenuItem>
      </Menu>
    </li>
  );
};

export default MobileNavigation;
