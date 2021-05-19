import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { floatingIcon } from "../../images";
import { Lottie } from "..";
import ghoulfly from "./ghoul-fly.json";

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

}));

export const StackRightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
                    <Lottie
                element={ghoulfly}
                defaultElement={
                  <img
                    className={classes.floatingIcon}
                    src={floatingIcon}
                    alt="Ghoul Staking"
                  />
                } 
              />      
                    <Lottie
                element={ghoulfly}
                defaultElement={
                  <img
                    className={classes.floatingIcon}
                    src={floatingIcon}
                    alt="Ghoul Staking"
                  />
                } 
              />
    </div>
  );
};
