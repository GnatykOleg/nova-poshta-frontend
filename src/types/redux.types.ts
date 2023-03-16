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

// New and update
export interface IGetTrackingStatusData {
  _id: string;
  CityRecipient: string;
  CitySender: string;
  Number: string;
  Status: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface ITrackingSliceState {
  trackingData: IGetTrackingStatusData | null;
  loading: boolean;
  error: null | string;
}

export interface ITrackingNumbersStoryState {
  trackingNumbersStory: Array<string>;
}

export interface IState {
  trackingState: ITrackingSliceState;
  trackingNumbersState: ITrackingNumbersStoryState;
  departmentsState: IDepartmentsSliceState;
}
