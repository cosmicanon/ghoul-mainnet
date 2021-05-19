import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { floatingIcon } from "../../images";
import { Content } from "./Content";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: 125,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  distributedImg: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400,
      display: "block",
      margin: "0 auto",
    },
  },
}));

export const CreatedDistributed = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className="container" id="tokenomics">
        <Grid container>
          <Grid item md={6} xs={12}>
            <img
              src={floatingIcon}
              alt="Distributed Img"
              className={classes.distributedImg}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Content />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
