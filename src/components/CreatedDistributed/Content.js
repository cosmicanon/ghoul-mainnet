import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { Font } from "..";

const useStyles = makeStyles((theme) => ({
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
    color: "#6851fe",
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
    width: 300,
    marginTop: 10,
    marginLeft: 80,
    color: theme.palette.secondary.textColor,
    fontSize: Font.sm,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      textAlign: "left",
      marginLeft: 60,
      marginTop: 0,
    },
  },
}));

const list = [
  {
    title: `Lorem Ipsum passages, and more recently with desktop.`,
    content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    title: `Many desktop publishing packages and web page.`,
    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.`,
  },
];

export const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.title}>Distributed</Typography>
      {list.map((item, index) => (
        <div key={index}>
          <div className={classes.list}>
            <Typography className={classes.listNumber}>{index + 1}.</Typography>
            <div>
              <Typography className={classes.listTitle}>
                {item.title}
              </Typography>
            </div>
          </div>
          <Typography className={classes.listDescription}>
            {item.content}
          </Typography>
        </div>
      ))}
    </div>
  );
};
