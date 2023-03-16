import { SelectValuesTypes } from "../../types/departments-components.types";
import { IState } from "../../types/redux.types";
import { ObjectData } from "../../types/redux.types";

// All cities
export const departmentsCitiesDataSelector = (state: IState): [] | ObjectData =>
  state.departmentsState.citiesData.data;

// Get departments for city
export const departmentsDataSelector = (state: IState): [] | ObjectData =>
  state.departmentsState.departmentsData.data;

// Total count for pagination
export const departmentsTotalCountSelector = (
  state: IState
): {
  totalCount: number;
} => state.departmentsState.departmentsData.info;

// Loading status
export const departmentsLoadingSelector = (state: IState): boolean =>
  state.departmentsState.loading;

// Page value
export const departmentsPageSelector = (state: IState): number =>
  state.departmentsState.page;

// Ref value for find and render one card with dpt
export const departmentsDepartmentRefSelector = (
  state: IState
): string | undefined => state.departmentsState.departmentRef;

// Dpt select value, need for refetching, and choosing value
export const departmentsSelectValueSelector = (
  state: IState
): SelectValuesTypes => state.departmentsState.departmentsSelectValue;

// Get city for fetch data with pagination, and for this city
export const departmentsCitySelector = (state: IState): string =>
  state.departmentsState.city;
