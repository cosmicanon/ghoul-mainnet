import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Font, BtnWithArrow } from "..";

const useStyles = makeStyles((theme) => ({
  constainer: {
    paddingLeft: 118,
    paddingTop: 250,
    paddingBottom: 250,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingTop: 50,
      paddingBottom: 0,
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
      textAlign: "center",
    },
  },
  title: {
    fontSize: Font.l,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
      width: "100%",
      lineHeight: 1.2,
    },
  },
  description: {
    fontSize: Font.m,
    color: theme.palette.secondary.textColor,
    width: 340,
    marginTop: 18,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "10px auto 0",
    },
  },
}));

export const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.constainer}>
      <Typography className={classes.title}>Staking</Typography>
      <Typography className={classes.description}>
        Stake your GHOUL on Poltergeist Exchange for governance voting and earning rewards within the ecosystem.
      </Typography>

      <a
        href="/staking"
        // rel="noreferrer"
        // target="_blank"
      >
        <BtnWithArrow title="View Staking Tiers" />
      </a>


      <a
        href="/"
        // rel="noreferrer"
        // target="_blank"
      >
        <BtnWithArrow title="Buy $GHOUL" />
      </a>
    </div>
  );
};
