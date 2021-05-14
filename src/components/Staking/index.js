import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import './style.css';
import { Font } from "..";
import { Footer, FooterDivider, Seo } from "..";

export const Staking = () => (
  <>
    <Seo title="GHOUL Staking" />
    <StakingTiers />
    <FooterDivider />
    <Footer />
  </>
);


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 26,
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 26,
    },
  },
  title: {
    fontSize: Font.l,
    fontWeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
  title2: {
    fontSize: Font.l,
    fontWeight: "bold",
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
      fontSize: Font.size40,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: Font.size28,
    },
  },
 

}));


export default function StakingTiers() {
	const classes = useStyles();
    return (



<div className={classes.mainContainer}>
      <div className="container">
        <Grid container style={{ alignItems: "center" }}>
          <Grid item md={4} sm={12} xs={12}>
            <Typography className={classes.title}>
              Staking
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item  md={5} sm={12} xs={12}>

            	<br />
            	<p>Stake your GHOUL on Poltergeist Exchange for ecosystem governance, profit sharing and other upcoming benefits.<br /><br />
            		<br /><br /><a href="/" className="btn-buy">Buy $GHOUL</a><br /><br />
            	</p>

        </Grid>
        <Grid item  md={7} sm={12} xs={12}>

	    
	            <div className="group">


	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '30px' }}>
	                        <img className="goul-icon-a" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
	                        <h2>Diamond</h2>
	                        <h3><sup>Under </sup>50,000 GHOUL</h3>
	                        <hr /><br />
	                        <ul>
	                            <li>Poltergeist Profit Sharing</li>
	                            <li>Surprise Airdrops</li>
	                            <li>Governance Voting</li>
	                        </ul>
	                        <a href className="button">Stake Now</a>
	                    </div>
	                    <div className="grid-1-3" style={{ marginLeft: '10px', marginBottom: '30px' }}>
	                        <img className="goul-icon-b" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
	                        <h2>Platinum</h2>
	                        <h3><sup>Over </sup>50,000 GHOUL</h3>
	                        <hr /><br />
	                        <ul>
	                            <li>Poltergeist Profit Sharing</li>
	                            <li>Exclusive Airdrops</li>
	                            <li>Governance Voting</li>
	                            <li>Early access to PRIFI Dapps</li>
	                        </ul>
	                        <a href className="button">Stake Now</a>
	                    </div>
	            </div>


        </Grid>
        </Grid>
      </div>
    </div>


    )
};