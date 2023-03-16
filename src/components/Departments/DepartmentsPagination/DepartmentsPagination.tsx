import { LinearProgress, Pagination, Stack } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";

import { setPage } from "../../../redux/slices/departmentsSlice";

import { useAppDispatch } from "../../../hooks/reduxHooks";

import useMediaQuery from "@mui/material/useMediaQuery";

import * as Styled from "./DepartmentsPagination.styled";
import {
  departmentsDataSelector,
  departmentsLoadingSelector,
  pageSelector,
} from "../../../redux/selectors/departmentsSelectors";

const DepartmentsPagination: React.FC = () => {
  const dispatch = useAppDispatch();

  const isTablet = useMediaQuery("(min-width:768px)");

  const paginationSize = isTablet ? "large" : "small";

  // Get loading status
  const loading = useAppSelector(departmentsLoadingSelector);

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

  if (loading)
    return (
      <Stack sx={{ width: "100%", color: "grey.500", mb: "1rem" }} spacing={2}>
        <LinearProgress color="inherit" />
      </Stack>
    );

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
