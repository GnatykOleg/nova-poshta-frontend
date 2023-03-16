import React from "react";
import { ITrackingFormProps } from "../../../types/tracking-components.types";
import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";
import * as Styled from "./TrackingForm.styled";

const TrackingForm: React.FC<ITrackingFormProps> = ({
  onChange,
  billOfLading,
  submitForm,
  sidebarHandler,
}: ITrackingFormProps): JSX.Element => {
  return (
    <Styled.Form onSubmit={(event) => submitForm(event)}>
      <Styled.Input
        variant="outlined"
        label="Введiть ТТН"
        type="number"
        value={billOfLading}
        onChange={(event) => onChange(event)}
      />

      <PrimaryButton text="Отримати статус ТТН" type="submit" />

      <PrimaryButton
        text="Iсторія введенних ТТН"
        type="button"
        onClick={() => sidebarHandler()}
      />
    </Styled.Form>
  );
};

export default TrackingForm;
