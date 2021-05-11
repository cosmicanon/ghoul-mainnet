import React from "react";
import { Link } from "gatsby";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Font, SocialIcon } from "..";
import { logo } from "../../images";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    maxWidth: 1110,
    minHeight: 80,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 70,
      padding: "0 10px",
    },
  },
  logoAreaContainer: {
    width: 200,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  logoArea: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 35,
    [theme.breakpoints.down("xs")]: {
      display: "block",
      margin: "0 auto",
    },
  },
  logoText: {
    marginLeft: 17,
    fontSize: Font.size25,
  },
  description: {
    width: 170,
    fontSize: Font.size16,
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("s")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  title: {
    width: 160,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  navbarText: {
    color: "rgba(255, 255, 255, 0.6)",
    paddingTop: 10,
  },
}));

export const Footer = (props) => {
  const classes = useStyles();
  return (
    <div style={{ ...props.style }}>
      <div className={classes.navContainer}>
        <Grid container align="center" justify="center" direction="row">
          <Grid item md={3} sm={6} xs={12}>
            <div className={classes.logoAreaContainer}>
              <div className={classes.logoArea}>
                <img alt="Logo" src={logo} className={classes.logo} />&nbsp;&nbsp;<h3>Poltergeist Labs</h3>
              </div>
              <Typography className={classes.description}>
                Privacy Focused Ecosystem with an Untraceable Stablecoin
              </Typography>
              <div className={classes.social}>
                <SocialIcon compact={true} />
              </div>
            </div>
            <br />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className={classes.logoAreaContainer}>
              <Typography className={classes.title}>Getting Started</Typography>
              <div className={classes.nav}>
                <Link to="/roadmap" className={classes.navbarText}>
                  <Typography>Roadmap</Typography>
                </Link>
                <Link to="/faq" className={classes.navbarText}>
                  <Typography>FAQ</Typography>
                </Link>
              </div>
              <br />
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
    </div>
  );
};
