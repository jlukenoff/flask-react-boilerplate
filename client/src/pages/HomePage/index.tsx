import React from "react";
import { Grid } from "@mui/material";
import AppTile, { AppTileData } from "../../components/AppTile";
import "./HomePage.scss"

const HomePage = () => {
  const mockData: AppTileData[] = [
    {
      icon: "faHome", // Font Awesome home icon
      link: "/app1",
      title: "App 1",
      color: "#f44336", // Material UI red
      description: "Lorem ipsum dolor amet"
    },
    {
      icon: "faCalendar", // Font Awesome calendar icon
      link: "/app2",
      title: "App 2",
      color: "#4caf50", // Material UI green
      description: "Lorem ipsum dolor amet"
    },
    {
      icon: "faEnvelope", // Font Awesome envelope icon
      link: "/app3",
      title: "App 3",
      color: "#2196f3", // Material UI blue
      description: "Lorem ipsum dolor amet"
    },
    {
      icon: "faUser", // Font Awesome user icon
      link: "/app4",
      title: "App 4",
      color: "#9c27b0", // Material UI purple
      description: "Lorem ipsum dolor amet"
    },
  ];

  return (
    <div className="container">
      <Grid container spacing={2} className="app-grid">
        {mockData.map((app) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={app.link}>
            <AppTile app={app} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
