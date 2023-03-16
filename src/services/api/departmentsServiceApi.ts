import axios, { AxiosResponse } from "axios";
import { IDataFromApi } from "../../types/redux.types";

const { REACT_APP_NP_API_KEY, REACT_APP_NP_BASE_URL = "" } = process.env;

export const departmentsCitiesServiceApi = async (): Promise<
  AxiosResponse<IDataFromApi<{ totalCount: number }>>
> => {
  const response = await axios.post(REACT_APP_NP_BASE_URL, {
    apiKey: REACT_APP_NP_API_KEY,
    modelName: "Address",
    calledMethod: "getCities",
    methodProperties: {},
  });

  return response;
};

export const departmentsServiceApi = async ({
  city,
  page,
}: {
  city: string;
  page: number;
}): Promise<AxiosResponse<IDataFromApi<{ totalCount: number }>>> => {
  const response = await axios.post(REACT_APP_NP_BASE_URL, {
    apiKey: REACT_APP_NP_API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: city,
      Page: page,
      Limit: "12",
    },
  });

  return response;
};
