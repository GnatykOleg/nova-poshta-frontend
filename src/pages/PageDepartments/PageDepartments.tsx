import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import {
  departmentsDataSelector,
  departmentsPageSelector,
  departmentsDepartmentRefSelector,
  departmentsCitySelector,
} from "../../redux/selectors/departmentsSelectors";

import { getDepartments } from "../../redux/operations/departmentsOperations";

import {
  CitiesSelect,
  DepartmentsList,
  DepartmentsPagination,
  DepartmentsSelect,
} from "../../components/Departments";

import { Header } from "../../components/Common";

import { Container, Typography } from "@mui/material";

const PageDepartments: FC = () => {
  const dispatch = useAppDispatch();

  const departments = useAppSelector(departmentsDataSelector);
  const page = useAppSelector(departmentsPageSelector);
  const departmentRef = useAppSelector(departmentsDepartmentRefSelector);
  const city = useAppSelector(departmentsCitySelector);

  useEffect(() => {
    if (city) dispatch(getDepartments({ city, page }));
  }, [dispatch, city, page]);

  const filteredDepartments = departments.filter(
    ({ Ref }) => Ref === departmentRef
  );

  const departmentsData = departmentRef ? filteredDepartments : departments;

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
          <CitiesSelect />
          <DepartmentsSelect />
          {departments.length > 0 && <DepartmentsPagination />}
          {city && <DepartmentsList departmentsData={departmentsData} />}
        </Container>
      </section>
    </>
  );
};

export default PageDepartments;
