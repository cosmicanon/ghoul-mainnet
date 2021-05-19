import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { Font } from "..";

const useStyles = makeStyles(theme => ({
  body: {
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      textAlign: "center",
    },
  },
  title: {
    fontSize: Font.l,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontSize: Font.size28,
      lineHeight: 1.2,
      marginBottom: 40,
    },
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: 45,
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  listNumber: {
    padding: "15px 20px",
    borderRadius: 4,
    backgroundColor: "rgba(61,169,252, 0.1)",
    color: "#56ff99",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: "7px 13px",
    },
  },
  listTitle: {
    fontSize: Font.m,
    width: 245,
    marginLeft: 25,
    marginTop: -5,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      lineHeight: 1.2,
    },
  },
  listDescription: {
    marginTop: 10,
    color: theme.palette.secondary.textColor,
    fontSize: Font.sm,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginTop: 0,
    },
  },
}));

export const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.title}>Tokenomics</Typography>

      <div>
        <div className={classes.list}>
          <Typography className={classes.listNumber}>$GHOUL</Typography>
        </div>
        <Typography className={classes.listDescription}>
          The ecosystem’s profit sharing, governance and utility token. Benefits
          and rewards to Ghoul stakers increase as core roadmap projects are
          developed.
          <br />
          <br />
          <ul>
            <li>Initial Supply: 100000000 GHOUL</li>
            <li>Burned Supply: 42991369 GHOUL</li>
            <li>Final Supply: 57008631 GHOUL</li>
            <li>
              Locked Dev Fund: 15000000 GHOUL <br />
              (until ETH Block XXXXXXXX)
            </li>
            <li>Circulating Supply: 42008631 GHOUL</li>
            <li>
              ETH Token:{" "}
              <a
                style={{ color: "#56ff99" }}
                href="https://etherscan.io/token/0x3bb86d867a9f3addf994cdadb210fa82f0d4157a"
              >
                0x3bb86d867a9f3addf994cdadb210fa82f0d4157a
              </a>
            </li>
          </ul>
        </Typography>
      </div>

      <div>
        <div className={classes.list}>
          <Typography className={classes.listNumber}>$GHOSTDAI</Typography>
        </div>
        <Typography className={classes.listDescription}>
          A privacy stablecoin with a secure, fast and untraceable transaction
          layer for users. Anyone can deposit select stablecoins from public
          chains to mint GhostDai 1:1, for use within the ecosystem. Research
          and development is ongoing.
        </Typography>
      </div>
    </div>
  );
};
