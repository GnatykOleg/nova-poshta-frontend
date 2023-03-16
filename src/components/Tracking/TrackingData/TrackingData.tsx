import React from "react";
import { Box, Button, CardActions, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";
import {
  trackingDataSelector,
  trackingLoadingSelector,
} from "../../../redux/selectors/trackingSelectors";
import { ITrackindDataProps } from "../../../types/tracking-components.types";

import DescriptionIcon from "@mui/icons-material/Description";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import PinDropIcon from "@mui/icons-material/PinDrop";
import NumbersIcon from "@mui/icons-material/Numbers";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import * as Styled from "./TrackingData.styled";
import { Loader } from "../../Common";

const TrackingData: React.FC<ITrackindDataProps> = ({
  setShowTrackingData,
}: ITrackindDataProps) => {
  const trackingData = useAppSelector(trackingDataSelector);

  const loading = useAppSelector(trackingLoadingSelector);

  const {
    CityRecipient,
    CitySender,
    Number,
    Status,
    WarehouseRecipient,
    WarehouseSender,
  } = trackingData!!;

  if (loading) return <Loader />;

  return (
    <Styled.MyCard>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => setShowTrackingData(false)}
          endIcon={<VisibilityOffIcon />}
        >
          Приховати
        </Button>
      </CardActions>
      <Styled.MyCardContent>
        {/* trackingNumber */}

        <Styled.MyTextWrapper>
          <Styled.MyTitle>
            <NumbersIcon sx={{ mr: "10px" }} /> ТТН:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {Number}
          </Typography>
        </Styled.MyTextWrapper>

        {/* Delivery Status */}
        <Styled.MyTextWrapper>
          <Styled.MyTitle>
            <DescriptionIcon sx={{ mr: "10px" }} /> Статус доставки:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {Status}
          </Typography>
        </Styled.MyTextWrapper>

        {/* Sender */}
        <Styled.MyTextWrapper>
          <Styled.MyTitle>
            <SystemUpdateAltIcon sx={{ mr: "10px" }} /> Відправник:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {`${WarehouseSender}, ${CitySender}`}
          </Typography>
        </Styled.MyTextWrapper>

        {/* Recipient */}
        <Box>
          <Styled.MyTitle>
            <PinDropIcon sx={{ mr: "10px" }} /> Одержувач:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {`${WarehouseRecipient}, ${CityRecipient}`}
          </Typography>
        </Box>
      </Styled.MyCardContent>
    </Styled.MyCard>
  );
};

export default TrackingData;
