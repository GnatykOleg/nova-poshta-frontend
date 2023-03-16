import React from "react";

import { IPrimaryButtonProps } from "../../../types/common-components.types";

import * as Styled from "./PrimaryButton.styled";

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  text,
  type,
  onClick,
}: IPrimaryButtonProps) => {
  return (
    <Styled.MyButton onClick={onClick} type={type} variant="outlined">
      {text}
    </Styled.MyButton>
  );
};

export default PrimaryButton;
