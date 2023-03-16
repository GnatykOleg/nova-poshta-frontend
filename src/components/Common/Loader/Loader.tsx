import React from "react";
import { CircularProgress } from "@mui/material";
import * as Styled from "./Loader.styled";

const Loader: React.FC = () => (
  <Styled.LoaderContainer>
    <CircularProgress />
  </Styled.LoaderContainer>
);
export default Loader;
