import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import { roadMapTabsAdaptive, roadMapTabs } from "../../images";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 44,
    paddingBottom: 22,
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${roadMapTabs})`,
      backgroundPosition: "center 122px",
      backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 24,
      backgroundImage: `none`,
    },
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 229,
    paddingLeft: 61,
    "&:first-child": {
      height: 122,
      marginBottom: 22,
    },
    "&:nth-child(even)": {
      paddingLeft: 245,
    },

    [theme.breakpoints.down("sm")]: {
      position: "relative",
      alignItems: "center",
      height: "auto",
      paddingLeft: 0,
      marginBottom: 50,
      "&:first-child": {
        height: "auto",
        marginBottom: 50,
      },
      "&:nth-child(even)": {
        paddingLeft: 0,
      },
      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        bottom: 0,
        width: 460,
        height: 46,
        backgroundImage: `url(${roadMapTabsAdaptive})`,
        [theme.breakpoints.down("xs")]: {
          width: "100%",
        },
      },
    },
  },
  title: {
    fontSize: 20,
    width: 568,
    color: "#6851fe",
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      width: 460,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  description: {
    letterSpacing: 0.5,
    fontSize: 14,
    color: theme.palette.secondary.textColor,
    width: 568,
    marginTop: 5,
    lineHeight: "18px",
    [theme.breakpoints.down("sm")]: {
      width: 460,
      marginBottom: 60,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const list = [

  {
    title: "On-Chain Governance (In Progress)",
    description:
      "Voting is a crucial requirement for any project to claim decentralization. The old way of voting was subject to manipulation and is difficult to track due to third-party " +
      "reliance. On-chain voting allows users to propose new ideas and suggest improvements to the Ghost ecosystem straight from the core wallet. Users having\n" +
      "a say in how the project moves forward gives Ghost a high level of transparency and direction, which is required within this space.",
  },

  {
    title: "GHOST-STABLECOIN (Planned)",
    description:
      "Ghost-Stablecoin will be the worlds first private stable coin pegged to the U.S. Dollar. Fees earned from these transactions will be distributed directly to GHOST holders. " +
      " You will easily be able to shop with confidence knowing your purchases are private.",
  },
  {
    title: "Wrapped Ghost on Ethereum (Planned)",
    description:
      "Wrapped Ghost will give everyone access to billions of dollars of liquidity on the Ethereum platform. This will allow Ghost to be traded on Uniswap and eventually integrated " +
      "with DeFi apps like Aave, Maker, and more. Wrapped Ghost could be minted by burning mainnet Ghost, or vice versa, creating a 2-way bridge between the Ghost and Ethereum chains.",
  },

  {
    title: "P2P Marketplace (Planned)",
    description:
      "Take control over your business and finances with a P2P marketplace. Listings and purchases will be made simple with user-friendly features that are flexible to your needs. " +
      "Decide when, where, and how you want your product bought, with fees starting under 1%.",
  },

];

export const Tabs = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      {list.map((data, index) => (
        <Grid key={index} className={classes.tab}>
          <Typography className={classes.title}>{data.title}</Typography>
          <Typography className={classes.description}>
            {data.description}
          </Typography>
        </Grid>
      ))}
    </div>
  );
};
