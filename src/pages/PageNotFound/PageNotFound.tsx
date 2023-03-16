import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Button } from "@mui/material";

import image from "../../assets/page-not-found.png";

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        alt="Page Not Found"
        width={800}
        style={{ paddingTop: 40, marginBottom: 40 }}
      />

      <Button onClick={() => navigate("/")} variant="contained">
        Go to Home Page
      </Button>
    </Container>
  );
};

export default PageNotFound;
