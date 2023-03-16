interface IDepartments {
  CityDescription: string;
  CityRef: string;
  Description: string;
  Number: string;
  Phone: string;
  Ref: string;
  Schedule: {
    Вівторок: string;
    Неділя: string;
    "П'ятниця": string;
    Понеділок: string;
    Середа: string;
    Субота: string;
    Четвер: string;
  };
}

export interface IGetDepartmentsForCityData {
  CityName: string;
  CityRef: string;
  Departments: Array<IDepartments>;
  Page: string;
  TotalCountForCity: number;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

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

export interface IDepartmentsSliceState {
  departmentsForCityData: IGetDepartmentsForCityData | null;

  city: string;
  page: number;

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
