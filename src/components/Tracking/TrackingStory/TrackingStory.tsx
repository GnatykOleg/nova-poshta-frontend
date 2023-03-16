import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { clearTrackingNumbersStory } from "../../../redux/slices/trackingNumbersSlice";
import { trackingNumbersDataSelector } from "../../../redux/selectors/trackingNumbersSelectors";

import { ITrackingStoryProps } from "../../../types/tracking-components.types";

import { Typography, Button, Divider, IconButton } from "@mui/material";

import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";

import * as Styled from "./TrackingStory.styled";

const TrackingStory: React.FC<ITrackingStoryProps> = ({
  getTrackingStatusFromStory,
  deleteTrackingNumberFromStory,
  sidebarHandler,
  isSideBarOpen,
}: ITrackingStoryProps) => {
  const dispatch = useAppDispatch();

  const story = useAppSelector(trackingNumbersDataSelector);

  return (
    <Styled.MyDrawer anchor="right" open={isSideBarOpen} variant="temporary">
      <Styled.MyCardContent>
        <Styled.ActionsWrapper>
          <IconButton onClick={() => sidebarHandler()} aria-label="hide">
            <Styled.MyIconArrowBackSidebar />
          </IconButton>

          <PrimaryButton
            text="Очистити iсторію ТТН"
            type="button"
            // Clear strort in local storage
            onClick={() => dispatch(clearTrackingNumbersStory())}
          />
        </Styled.ActionsWrapper>

        <Typography variant="h5" component="p" gutterBottom>
          Історія:
        </Typography>
        {story.length > 0 && (
          <Typography color={"darkgray"} component="p" sx={{ mb: "2rem" }}>
            * натисніть на ТТН, щоб отримати інформацію
          </Typography>
        )}

        {story.map((trackignNumber: string) => (
          <Styled.MyStoryWrapper key={nanoid()}>
            <Button onClick={() => getTrackingStatusFromStory(trackignNumber)}>
              <Typography variant="body1">ТТН : {trackignNumber}</Typography>
            </Button>
            <PrimaryButton
              type="button"
              text="Видалити"
              onClick={() => deleteTrackingNumberFromStory(trackignNumber)}
            />
          </Styled.MyStoryWrapper>
        ))}

        <Divider />
      </Styled.MyCardContent>
    </Styled.MyDrawer>
  );
};

export default TrackingStory;
