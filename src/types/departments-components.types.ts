import { SingleValue } from "react-select";

export type SelectValuesTypes = {
  value: string;
  label: string;
  Ref?: string;
};

export type SelectOnChangeEventType = SingleValue<SelectValuesTypes>;

export interface IDepartmentsListProps {
  departmentsData: {
    [key: string]: any;
  }[];
}

export interface IDaySchedule {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}
