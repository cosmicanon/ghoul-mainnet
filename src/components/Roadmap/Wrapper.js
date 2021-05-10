import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { Font } from "..";
import { roadMapImg } from "../../images";
import { Tabs } from "./Tabs";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 26,
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 26,
    },
  },
  title: {
    fontSize: Font.l,
    fontWeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  title2: {
    fontSize: Font.l,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  roadMapImg: {
    width: 150,
    display: "block",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const Wrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className="road-map-container">
        <Grid container style={{ alignItems: "center" }}>
          <Grid item md={8} sm={12} xs={12}>
            <Typography className={classes.title}>
              Roadmap <span className={classes.title2}>2021</span>
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img
              src={roadMapImg}
              alt="Roadmap"
              className={classes.roadMapImg}
            />
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Tabs />
        </Grid>
      </div>
    </div>
  );
};
