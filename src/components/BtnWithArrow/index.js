import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { Font } from "..";

const useStyles = makeStyles((theme) => ({
  titleSvg: {
    width: "50%",
    marginTop: 35,
    display: "flex",
    alignItems: "center",
    fill: "#FFFFFE",
    color: theme.palette.secondary.textColor,
    cursor: "pointer",
    transform: "translateY(0)",
    transition: "all .2s",
    // "&:hover": {
    //   transform: "translateX(10px)",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
      marginTop: 20,
      justifyContent: "center",
    },
  },
  title: {
    fontSize: Font.sm,
    color: "#FFFFFF",
    paddingRight: 14,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 10,
    },
  },
  svg: {
    [theme.breakpoints.down("sm")]: {
      height: 12,
      width: 18,
    },
  },
}));

export const BtnWithArrow = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.titleSvg} style={{ ...props.style }}>
      <Typography className={classes.title}>{props.title}</Typography>
      <div style={{ marginTop: 3 }}>
        <svg
          width="26"
          height="12"
          viewBox="0 0 26 12"
          // fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.svg}
        >
          <path
            d="M25.5333 6.53033C25.8262 6.23743 25.8262 5.76256 25.5333 5.46967L20.7603 0.696697C20.4674 0.403804 19.9925 0.403804 19.6996 0.696697C19.4067 0.989591 19.4067 1.46446 19.6996 1.75736L23.9423 6L19.6996 10.2426C19.4067 10.5355 19.4067 11.0104 19.6996 11.3033C19.9925 11.5962 20.4674 11.5962 20.7603 11.3033L25.5333 6.53033ZM0.00292975 6.75L25.0029 6.75L25.0029 5.25L0.00292962 5.25L0.00292975 6.75Z"
            //   fill="#FFFFFE"
          />
        </svg>
      </div>
    </div>
  );
};
