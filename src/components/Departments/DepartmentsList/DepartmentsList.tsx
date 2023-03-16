import React from "react";

import {
  IDepartmentsListProps,
  IDaySchedule,
} from "../../../types/departments-components.types";

import { useAppSelector } from "../../../hooks/reduxHooks";
import { departmentsLoadingSelector } from "../../../redux/selectors/departmentsSelectors";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import { Loader } from "../../Common";

const DepartmentsList: React.FC<IDepartmentsListProps> = ({
  departmentsData,
}: IDepartmentsListProps) => {
  // Get loading status
  const loading = useAppSelector(departmentsLoadingSelector);

  const dayNames: IDaySchedule = {
    Monday: "Понеділок",
    Tuesday: "Вівторок",
    Wednesday: "Середа",
    Thursday: "Четвер",
    Friday: "П'ятниця",
    Saturday: "Субота",
    Sunday: "Неділя",
  };

  if (loading) return <Loader />;
  return (
    <Grid container spacing={2}>
      {departmentsData.map(
        ({ Description, CityDescription, Schedule, Phone }) => (
          <Grid item key={nanoid()} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" component="p" gutterBottom>
                  {`${Description}, ${CityDescription}`}
                </Typography>

                {Phone && (
                  <Typography sx={{ fontSize: 16 }} component="p" gutterBottom>
                    {`Телефон: +${Phone}`}
                  </Typography>
                )}

                <Typography
                  sx={{ fontSize: 18, color: "#1976d2" }}
                  component="p"
                  gutterBottom
                >
                  Графiк роботи:
                </Typography>
                {Object.entries(Schedule).map(([day, time]) => (
                  <Typography
                    component="p"
                    gutterBottom
                    variant="body2"
                    key={nanoid()}
                  >
                    {`${dayNames[day as keyof IDaySchedule]}: ${time}`}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default DepartmentsList;
