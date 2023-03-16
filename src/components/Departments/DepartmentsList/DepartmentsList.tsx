import React from "react";

import { useAppSelector } from "../../../hooks/reduxHooks";

import {
  departmentsDataSelector,
  departmentsLoadingSelector,
} from "../../../redux/selectors/departmentsSelectors";

import { nanoid } from "@reduxjs/toolkit";

import { Grid, Card, CardContent, Typography } from "@mui/material";

import { Loader } from "../../Common";

const DepartmentsList: React.FC = () => {
  // Get loading status
  const loading = useAppSelector(departmentsLoadingSelector);

  // Get all departments for city
  const departments = useAppSelector(departmentsDataSelector);

  if (loading) return <Loader />;
  return (
    <Grid container spacing={2}>
      {departments?.Departments.map(
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
                    {`${[day]}: ${time}`}
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
