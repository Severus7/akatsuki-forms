import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import FormComponent from "../components/FormComponent";
import akatsuki from "../assets/akatsuki2.jpg";

const Home = () => {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${akatsuki})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
      }}
    >
      <Paper sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <Container>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
              marginRigth: "20px",
            }}
          >
            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item lg={6} md={6}>
                <Typography variant="h2" component="div" color="common.white">
                  Akatsuki
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  color="common.white"
                  sx={{ fontWeight: 100 }}
                >
                  Pain is the way to bring peace
                </Typography>
              </Grid>
              <Grid item lg={6} md={6}>
                <FormComponent />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Paper>
  );
};

export default Home;
