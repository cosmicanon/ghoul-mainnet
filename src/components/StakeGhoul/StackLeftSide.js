import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 200,
    paddingBottom: 200,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  cardsize: {
    height: 400,
    width: 540,
    backgroundColor: "rgba(22, 22, 26, 0.8);",
    borderRadius: 15,
    border: "1px solid #2D2D2D",
    padding: 60,
    marginRight: 120,
    boxSizing: "border-box",
    boxShadow: "none",
    color: theme.palette.primary.textColor,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 25,
      width: "100%",
      height: "auto",
    },
  },
}));

export const StackLeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.cardsize}></Card>
    </div>
  );
};
