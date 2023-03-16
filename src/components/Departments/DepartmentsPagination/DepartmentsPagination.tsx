import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";

import { setPage } from "../../../redux/slices/departmentsSlice";

import { useAppDispatch } from "../../../hooks/reduxHooks";

import useMediaQuery from "@mui/material/useMediaQuery";

import * as Styled from "./DepartmentsPagination.styled";
import {
  departmentsDataSelector,
  pageSelector,
} from "../../../redux/selectors/departmentsSelectors";

const DepartmentsPagination: React.FC = () => {
  const dispatch = useAppDispatch();

  const isTablet = useMediaQuery("(min-width:768px)");

  const paginationSize = isTablet ? "large" : "small";

  // Get all departments for city
  const departments = useAppSelector(departmentsDataSelector);
  const { TotalCountForCity } = departments!!;

  // Genereta total count
  const totalCount = Math.ceil(TotalCountForCity / 12);

  // Get page value from redux store
  const page = useAppSelector(pageSelector);

  const paginationOnChange = (value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Styled.MyBox>
      <Stack spacing={2}>
        <Pagination
          size={paginationSize}
          onChange={(_, value: number) => paginationOnChange(value)}
          count={totalCount}
          page={page}
          shape="rounded"
        />
      </Stack>
    </Styled.MyBox>
  );
};

export default DepartmentsPagination;
