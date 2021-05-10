import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

import { SocialIcon, Font } from "..";
import { logo } from "../../images";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: Font.l,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: 450,
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: Font.size28,
    },
  },
  title2: {
    fontSize: Font.l,
    fontWeight: "normal",
    width: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  description: {
    fontSize: Font.m,
    width: 430,
    color: theme.palette.secondary.textColor,
    paddingTop: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size16,
      width: 380,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: 30,
    },
  },
  btnarea: {
    marginTop: 50,
    display: "flex",
    flexFlow: "column",
    marginLeft: -16,
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row",
      justifyContent: "center",
      marginTop: "35px",
      marginLeft: "-8px",
    },
  },
  btnLink: {
    [theme.breakpoints.down("sm")]: {
      "& button": {
        marginTop: "15px",
      },
    },
  },
  btnsWrapper: {
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      width: "100%",
    },
  },
  btnCommon: {
    width: "196px",
    height: "48px",
    borderRadius: 8,
    marginLeft: 16,
    textTransform: "capitalize",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      fontSize: Font.size12,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
      width: "calc(100% - 15px)",
    },
  },
  downloadBtn: {
    width: 140,
    border: "1px solid #FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.15)",
    },
  },
  socialIconGroup: {
    marginTop: 40,
  },
}));

export const PrivacyLeftSide = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>
        Privacy-Focused &{" "}
        <span className={classes.title2}>Anonymous Ecosystem</span>
      </Typography>
      <Typography className={classes.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>
      <div className={classes.btnarea}>
        <div className={classes.btnsWrapper}>
          <a href="#0" className={classes.btnLink}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnCommon}
              style={{ width: 225 }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: 18, marginRight: 8 }}
              />
              Launch App{" "}
              <span style={{ fontSize: 10, marginLeft: 5 }}>(Coming Soon)</span>
            </Button>
          </a>
          <a href="#0" className={classes.btnLink}>
            <Button
              variant="contained"
              color="primary"
              className={`${classes.btnCommon} ${classes.downloadBtn}`}
            >
              Learn More
            </Button>
          </a>
        </div>
      </div>
      <div className={classes.socialIconGroup}>
        <SocialIcon />
      </div>
    </div>
  );
};
