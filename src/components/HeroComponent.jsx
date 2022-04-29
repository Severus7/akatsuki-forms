import React from "react";
import { Grid, Paper } from "@mui/material";
import akatsuki from "../assets/akatsuki.jpg";

const HeroComponent = (props) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -100,
      }}
    >
      <Paper
        component="img"
        src={akatsuki}
        sx={{
          height: "100vh",
          //   backgroundImage: `url(${akatsuki})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
};

export default HeroComponent;
