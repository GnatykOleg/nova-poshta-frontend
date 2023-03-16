import { SelectValuesTypes } from "./departments-components.types";

export type ObjectData = [{ [key: string]: any }];

export interface IDataFromApi<T> {
  success: boolean;
  data: ObjectData | [];
  errors: Array<string> | [];
  translatedErrors: [];
  warnings: ObjectData | Array<string>;
  info: T;
  messageCodes: [];
  errorCodes: [];
  warningCodes: [];
  infoCodes: [];
}

export interface ITrackingSliceState {
  trackingData: IDataFromApi<[]>;
  loading: boolean;
  error: null | string;
}

export interface IBillOfLadingState {
  billOfLadingStory: Array<string>;
}

export interface IDepartmentsSliceState {
  departmentsData: IDataFromApi<{ totalCount: number }>;
  citiesData: IDataFromApi<{ totalCount: number }>;

  city: string;
  departmentsSelectValue: SelectValuesTypes;
  page: number;
  departmentRef: string | undefined;

  loading: boolean;
  error: null | string;
}

export interface IState {
  trackingState: ITrackingSliceState;
  billOfLadingState: IBillOfLadingState;
  departmentsState: IDepartmentsSliceState;
}
