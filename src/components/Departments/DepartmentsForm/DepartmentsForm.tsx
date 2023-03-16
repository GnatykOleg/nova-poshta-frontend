import React, { useState } from "react";

import { setCity, setPage } from "../../../redux/slices/departmentsSlice";

import { useAppDispatch } from "../../../hooks/reduxHooks";

import {
  EventOnChange,
  EventOnSubmit,
} from "../../../types/tracking-components.types";

import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import * as Styled from "./DepartmentsForm.styled";

const CitiesSelect: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const onChange = (event: EventOnChange) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: EventOnSubmit) => {
    event.preventDefault();
    setValue("");
    dispatch(setPage(1));
    dispatch(setCity(value));
  };

  return (
    <Styled.MyBox>
      <Paper onSubmit={onSubmit} component="form" sx={Styled.PaperStyles}>
        <InputBase
          type="text"
          value={value}
          onChange={onChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Введiть місто"
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        >
          <SearchIcon sx={Styled.ButtonStyles} />
        </IconButton>
      </Paper>
    </Styled.MyBox>
  );
};

export default CitiesSelect;
