import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import {
  citySelector,
  departmentsDataSelector,
  pageSelector,
} from "../../redux/selectors/departmentsSelectors";

import { getDepartmentsForCity } from "../../redux/operations/departmentsOperations";

import {
  DepartmentsForm,
  DepartmentsList,
  DepartmentsPagination,
} from "../../components/Departments";

import { Header } from "../../components/Common";

import { Container, Typography } from "@mui/material";

const PageDepartments: FC = () => {
  const dispatch = useAppDispatch();

  // Get page for fecth data
  const page = useAppSelector(pageSelector);

  // Get city for fecth data
  const city = useAppSelector(citySelector);

  // Get all departments for city
  const departments = useAppSelector(departmentsDataSelector);

  // If city or page change, fetch data
  useEffect(() => {
    if (city) dispatch(getDepartmentsForCity({ city, page }));
  }, [dispatch, city, page]);

  return (
    <>
      <Header />
      <section>
        <Typography
          aria-label="Заголовок секцiiСписок вiддiлень"
          variant="h1"
          component={"h2"}
          sx={{ display: "none" }}
        >
          Список вiддiлень
        </Typography>
        <Container sx={{ pt: "3rem", pb: "3rem" }}>
          <DepartmentsForm />

          {departments && (
            <>
              <DepartmentsPagination />
              <DepartmentsList />
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default PageDepartments;
