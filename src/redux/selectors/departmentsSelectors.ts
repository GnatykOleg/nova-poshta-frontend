import { IState } from "../../types/redux.types";

// Get city for fetch data with pagination, and for this city
export const citySelector = (state: IState): string =>
  state.departmentsState.city;

// Get page for fetch data with pagination, and for this city
export const pageSelector = (state: IState): number =>
  state.departmentsState.page;

// Get departments for city
export const departmentsDataSelector = (state: IState) =>
  state.departmentsState.departmentsForCityData;

// Loading status
export const departmentsLoadingSelector = (state: IState): boolean =>
  state.departmentsState.loading;
