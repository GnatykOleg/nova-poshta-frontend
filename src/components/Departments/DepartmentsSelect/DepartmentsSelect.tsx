import React from "react";
import Select from "react-select";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  departmentsDataSelector,
  departmentsSelectValueSelector,
} from "../../../redux/selectors/departmentsSelectors";

import {
  setDepartmentsSelectValue,
  setFindDepartmentByRef,
} from "../../../redux/slices/departmentsSlice";

import { SelectOnChangeEventType } from "../../../types/departments-components.types";

import * as Styled from "./DepartmentsSelect.styled";

const DepartmentsSelect: React.FC = () => {
  const dispatch = useAppDispatch();

  // Get departments from redux store for city
  // With pagination 12 dept for 1 page
  const departments = useAppSelector(departmentsDataSelector);

  // Get departments select value
  const departmentsSelectValue = useAppSelector(departmentsSelectValueSelector);

  // If departments true Transform departments to options array values for select
  // With primary value
  const departmentsOptions = departments.length > 0 && [
    {
      value: `Відділення для поточної сторiнки`,
      label: `Відділення для поточної сторiнки`,
    },

    ...departments.map(({ Description, Ref }) => ({
      value: Description,
      label: Description,
      Ref,
    })),
  ];

  // Handler for rendering one card for Ref
  // In DepartmentsList if DepartmentRef true, user get one card with dpt by ref
  // If DepartmentRef false user get all cards with dpt
  const departmentsOnChange = (event: SelectOnChangeEventType) => {
    if (event) {
      dispatch(setFindDepartmentByRef(event.Ref));
      dispatch(
        setDepartmentsSelectValue({
          value: event.value,
          label: event.value,
          Ref: event.Ref,
        })
      );
    }
  };

  return (
    <Styled.MyBox>
      <Select
        onChange={(newValue: SelectOnChangeEventType) =>
          departmentsOnChange(newValue)
        }
        styles={Styled.selectStyles}
        name="departments"
        required
        isDisabled={departments.length < 1}
        value={departmentsSelectValue}
        noOptionsMessage={() => "Не обрано мiсто"}
        options={departmentsOptions || [{ value: "", label: "" }]}
        maxMenuHeight={200}
      />
    </Styled.MyBox>
  );
};

export default DepartmentsSelect;
