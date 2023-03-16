import React, { FC, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import {
  setTBillOfLadingStory,
  deleteTBillOfLadingStory,
} from "../../redux/slices/billOfLadingSlice";

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

const PageCheckBillOfLading: FC = () => {
  const [billOfLading, setBillOfLading] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showBillOfLadingStatus, setShowBillOfLadingStatus] =
    useState<boolean>(true);

  const dispatch = useAppDispatch();

  const trackingData = useAppSelector(trackingDataSelector);

  const onChange = (event: EventOnChange) => {
    setBillOfLading(event.currentTarget.value);
  };

  const submitForm = (event: EventOnSubmit) => {
    event.preventDefault();
    const regex = /^\d{14}$/;

    if (!regex.test(billOfLading))
      return toast.warn("ТТН повинен складатися з 14 цифр");

    setBillOfLading("");
    setShowBillOfLadingStatus(true);
    dispatch(setTBillOfLadingStory(billOfLading));
    dispatch(getTrackingStatus(billOfLading));
  };

  const getBillOfLadingStatusFromTrackingStory = (billOfLading: string) => {
    setBillOfLading(billOfLading);
    setShowBillOfLadingStatus(true);
    dispatch(getTrackingStatus(billOfLading));
  };

  const deleteBillOfLadingFromTrackingStory = (billOfLading: string) => {
    dispatch(deleteTBillOfLadingStory(billOfLading));
    setShowBillOfLadingStatus(false);
    setBillOfLading("");
  };

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
            getBillOfLadingStatusFromTrackingStory={
              getBillOfLadingStatusFromTrackingStory
            }
            deleteBillOfLadingFromTrackingStory={
              deleteBillOfLadingFromTrackingStory
            }
            sidebarHandler={sidebarHandler}
            isSideBarOpen={isSideBarOpen}
          />

          <Styled.MyContainer>
            <TrackingForm
              billOfLading={billOfLading}
              onChange={onChange}
              submitForm={submitForm}
              sidebarHandler={sidebarHandler}
            />
            {trackingData.length > 0 && showBillOfLadingStatus && (
              <TrackingData
                setShowBillOfLadingStatus={setShowBillOfLadingStatus}
              />
            )}
          </Styled.MyContainer>
        </section>
      </main>
    </>
  );
};

export default PageCheckBillOfLading;
