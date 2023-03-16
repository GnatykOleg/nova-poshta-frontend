import React from "react";

import { Link } from "react-router-dom";

import MobileNavigation from "./Navigation/MobileNavigation";
import FullNavigation from "./Navigation/FullNavigation";
import { MyHeader } from "./Header.styles";

import { Toolbar, useMediaQuery } from "@mui/material";

import logo from "../../../assets/np-logo-full.png";

const Header: React.FC = () => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <MyHeader position="relative">
      <nav>
        <Toolbar
          component={"ul"}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" width={"100px"} />
            </Link>
          </li>

          {isTablet ? <FullNavigation /> : <MobileNavigation />}
        </Toolbar>
      </nav>
    </MyHeader>
  );
};

export default Header;
