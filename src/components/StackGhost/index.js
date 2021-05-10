import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { StackLeftSide } from "./StackLeftSide";
import { StackRightSide } from "./StackRightSide";
import { stakeGhostBg } from "../../images";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 100,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 50,
    },
  },
  mainarea: {
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${stakeGhostBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  maincontainer: {
    paddingTop: 50,
    paddingBottom: 0,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  StakeGhostBgVector1: {
    position: "absolute",
    top: 600,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  StakeGhostBgVector2: {
    position: "absolute",
    top: 690,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const StackGhost = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.mainarea}>
        <div className="container">
          <Grid container className={classes.maincontainer}>
            <Grid item md={6} sm={12} xs={12}>
              <StackLeftSide />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <StackRightSide />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
