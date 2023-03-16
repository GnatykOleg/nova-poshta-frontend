import React, { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { getTrackingStatus } from "../../redux/operations/trackingOperations";

import { trackingDataSelector } from "../../redux/selectors/trackingSelectors";

import {
  EventOnChange,
  EventOnSubmit,
} from "../../types/tracking-components.types";

import {
  TrackingForm,
  TrackingData,
  TrackingStory,
} from "../../components/Tracking";

import { Header } from "../../components/Common";

import * as Styled from "./PageCheckBillOfLading.styles";

import { Typography } from "@mui/material";

import { toast } from "react-toastify";
import {
  deleteTrackingNumberFromPersist,
  setTrackingNumberToStory,
} from "../../redux/slices/trackingNumbersSlice";

const PageCheckBillOfLading: FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showTrackingData, setShowTrackingData] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  const trackingData = useAppSelector(trackingDataSelector);

  const onChange = (event: EventOnChange) => {
    setTrackingNumber(event.currentTarget.value);
  };

  const submitForm = (event: EventOnSubmit) => {
    event.preventDefault();
    const regex = /^\d{14}$/;

    if (!regex.test(trackingNumber))
      return toast.warn("ТТН повинен складатися з 14 цифр");

    // Reset the value of the TTN number
    setTrackingNumber("");

    // Show information card
    setShowTrackingData(true);

    // Send a request via TTN to the backend
    dispatch(getTrackingStatus(trackingNumber));

    // Write TTN in local storage only if the date is true
    trackingData && dispatch(setTrackingNumberToStory(trackingNumber));
  };

  const getTrackingStatusFromStory = (trackingNumber: string) => {
    // Set the value of TTN in the input of the form
    setTrackingNumber(trackingNumber);

    // Show information card
    setShowTrackingData(true);

    // Send a request via TTN to the backend
    dispatch(getTrackingStatus(trackingNumber));
  };

  const deleteTrackingNumberFromStory = (trackingNumber: string) => {
    // Remove the information card
    setShowTrackingData(false);

    // Reset the value of the TTN number
    setTrackingNumber("");

    // Send an action to filter and resave the history of ttn in local strage
    dispatch(deleteTrackingNumberFromPersist(trackingNumber));
  };

  // Sidebar toggle for TTN history
  const sidebarHandler = () => {
    setIsSideBarOpen((state) => !state);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <Typography
            aria-label="Заголовок секцii перевірити ТТН"
            variant="h1"
            component={"h1"}
            sx={{ display: "none" }}
          >
            Перевірити ТТН
          </Typography>

          <TrackingStory
            getTrackingStatusFromStory={getTrackingStatusFromStory}
            deleteTrackingNumberFromStory={deleteTrackingNumberFromStory}
            sidebarHandler={sidebarHandler}
            isSideBarOpen={isSideBarOpen}
          />

          <Styled.MyContainer>
            <TrackingForm
              trackingNumber={trackingNumber}
              onChange={onChange}
              submitForm={submitForm}
              sidebarHandler={sidebarHandler}
            />

            {/* I show a card with information only if the Data is not null and the flag show the card is true */}

            {trackingData && showTrackingData && (
              <TrackingData setShowTrackingData={setShowTrackingData} />
            )}
          </Styled.MyContainer>
        </section>
      </main>
    </>
  );
};

export default PageCheckBillOfLading;
