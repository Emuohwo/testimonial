import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    textAlign: 'left',
    // marginBottom: '-1.25em',
    },
    heading: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '60px',
        letterSpacing: '-2%',
        paddingTop: '1.4em',
        maxWidth: '586px',
    },
    pTag: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '31px',
        maxWidth: '489px'
    },
    heroImage: {
        width: '100%',
        overflow: 'hidden',
    },
}))



const TestimonialHero = () => {
    const classes = useStyles();

    return (
        <div className="pageContainer">
        <div  className={classes.root}>
            <Grid container>
                <Grid item md={6}>
                    <Typography className={classes.heading} variant="h3" component="h1">
                        Amazing <br /> Experiences from Our Wonderful Customers
                    </Typography>
                    <Typography className={classes.pTag} component="p">
                        Here is what customers and vendors are saying about us,
                        you can share your stories with us too.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <div>
                        <img
                          src="./images/hero1.png"
                          alt="" srcset=""
                          className={classes.heroImage}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
        </div>
    )
};

export default TestimonialHero;
