import React from "react";
import { Box, Button, CardActions, Typography } from "@mui/material";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { trackingDataSelector } from "../../../redux/selectors/trackingSelectors";
import DescriptionIcon from "@mui/icons-material/Description";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import PinDropIcon from "@mui/icons-material/PinDrop";
import NumbersIcon from "@mui/icons-material/Numbers";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import * as Styled from "./TrackingData.styled";

const TrackingData: React.FC<any> = ({ setShowBillOfLadingStatus }: any) => {
  const trackingData = useAppSelector(trackingDataSelector);

  const { WarehouseSender, Status, WarehouseRecipient, StatusCode, Number } =
    trackingData[0] || {};

  const deliveryStatus =
    StatusCode === "3" ? `ТТН: ${Number} Не знайдений у базi...` : ` ${Status}`;

  return (
    <Styled.MyCard>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => setShowBillOfLadingStatus(false)}
          endIcon={<VisibilityOffIcon />}
        >
          Приховати
        </Button>
      </CardActions>
      <Styled.MyCardContent>
        {/* BillOFLading */}
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
            {deliveryStatus}
          </Typography>
        </Styled.MyTextWrapper>

        {/* Sender */}
        <Styled.MyTextWrapper>
          <Styled.MyTitle>
            <SystemUpdateAltIcon sx={{ mr: "10px" }} /> Відправник:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {WarehouseSender || "Інформація відсутня..."}
          </Typography>
        </Styled.MyTextWrapper>

        {/* Recipient */}
        <Box>
          <Styled.MyTitle>
            <PinDropIcon sx={{ mr: "10px" }} /> Одержувач:
          </Styled.MyTitle>
          <Typography variant="h6" component={"p"}>
            {WarehouseRecipient || "Інформація відсутня..."}
          </Typography>
        </Box>
      </Styled.MyCardContent>
    </Styled.MyCard>
  );
};

export default TrackingData;
