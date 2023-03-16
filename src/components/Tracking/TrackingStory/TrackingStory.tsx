import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { clearTBillOfLadingStory } from "../../../redux/slices/billOfLadingSlice";
import { billOfLadingDataSelector } from "../../../redux/selectors/billOfLadingSelectors";

import { ITrackingStoryProps } from "../../../types/tracking-components.types";

import { Typography, Button, Divider, IconButton } from "@mui/material";

import PrimaryButton from "../../Common/PrimaryButton/PrimaryButton";

import * as Styled from "./TrackingStory.styled";

const TrackingStory: React.FC<ITrackingStoryProps> = ({
  getBillOfLadingStatusFromTrackingStory,
  deleteBillOfLadingFromTrackingStory,
  sidebarHandler,
  isSideBarOpen,
}: ITrackingStoryProps) => {
  const dispatch = useAppDispatch();

  const story = useAppSelector(billOfLadingDataSelector);

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
            onClick={() => dispatch(clearTBillOfLadingStory())}
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

        {story.map((billOfLading: string) => (
          <Styled.MyStoryWrapper key={nanoid()}>
            <Button
              onClick={() =>
                getBillOfLadingStatusFromTrackingStory(billOfLading)
              }
            >
              <Typography variant="body1">ТТН : {billOfLading}</Typography>
            </Button>
            <PrimaryButton
              type="button"
              text="Видалити"
              onClick={() => deleteBillOfLadingFromTrackingStory(billOfLading)}
            />
          </Styled.MyStoryWrapper>
        ))}

        <Divider />
      </Styled.MyCardContent>
    </Styled.MyDrawer>
  );
};

export default TrackingStory;
