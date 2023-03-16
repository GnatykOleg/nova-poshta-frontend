import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getDepartmentsCities } from "../../../redux/operations/departmentsOperations";
import {
  departmentsCitiesDataSelector,
  departmentsCitySelector,
  departmentsLoadingSelector,
} from "../../../redux/selectors/departmentsSelectors";
import {
  setDepartmentsSelectValue,
  setFindDepartmentByRef,
  setPage,
  setCity,
} from "../../../redux/slices/departmentsSlice";

import { SelectOnChangeEventType } from "../../../types/departments-components.types";

import Select from "react-select";
import * as Styled from "./CitiesSelect.styled";
import { Loader } from "../../Common";

const CitiesSelect: React.FC<any> = (): JSX.Element => {
  // Filter for filtration cities
  const [filter, setFilter] = useState<string>("");

  // Get city
  const city = useAppSelector(departmentsCitySelector);

  // Get laoding status
  const loading = useAppSelector(departmentsLoadingSelector);

  const dispatch = useAppDispatch();

  // Fetch all cities
  useEffect(() => {
    dispatch(getDepartmentsCities());
  }, [dispatch]);

  // Hadler cities on Change
  const citiesOnChange = (event: SelectOnChangeEventType) => {
    if (event) {
      // Send city for get all departments
      dispatch(setCity(event.value));

      // Reset Ref for render one card by Ref, for each change city
      dispatch(setFindDepartmentByRef(""));

      // Reset page for each change city
      dispatch(setPage(1));

      // Resest departments initial select values, for each change city
      dispatch(
        setDepartmentsSelectValue({
          value: `Відділення для поточної сторiнки`,
          label: `Відділення для поточної сторiнки`,
        })
      );
    }
  };

  // Set select input value to filter state
  const citiesInputChange = (value: string) => {
    setFilter(value);
  };

  // Get all cities from redux state
  const cities = useAppSelector(departmentsCitiesDataSelector);

  // If filter is active => Filtered all cities in select
  const filteredCitiesOptions =
    filter &&
    cities
      .filter(({ Description }) =>
        Description.toLowerCase().startsWith(filter.toLowerCase())
      )

      // Transform filtered cities to options array values for select
      .map(({ Description }) => ({
        value: Description,
        label: Description,
      }));

  if (loading) return <Loader />;

  return (
    <Styled.MyBox>
      <Select
        isSearchable
        styles={Styled.selectStyles}
        onInputChange={citiesInputChange}
        onChange={(event: SelectOnChangeEventType) => citiesOnChange(event)}
        name="cities"
        required
        placeholder="Почнiть вводити мicто.."
        noOptionsMessage={() => "Немає такого міста"}
        options={filteredCitiesOptions || [{ value: city, label: city }]}
        maxMenuHeight={200}
      />
    </Styled.MyBox>
  );
};

export default CitiesSelect;
