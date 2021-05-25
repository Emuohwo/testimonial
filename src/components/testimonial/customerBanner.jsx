import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    background: {
        background: '#000',
        color: '#ffffff',
        textAlign: 'left',
        // marginBottom: '-8em'
    },
    customerImg: {
        width: '80%',
        // height: '80%',
        // objectFit: 'cover',
        overflow: 'hidden',
    },
    mainHeading: {
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 700,
        fontStyle: 'normal',
        lineHeight: '38.73px',
        letterSpacing: '1%',
        paddingTop: '2em',
        paddingBottom: '4px',
    },
    badge: {
        fontFamily: 'Inter',
        fontSize: '13px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: '0.02em',
        textAlign: 'left',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        paddding: '0.3em 2em',
        margin: '1em 0'

    },
    pTag: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '2%',
        margin: '1em 0',
    },
    button: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '32px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        marginTop: '1em',
    }
}));

const CustomerBanner = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.background}>
                <div className="pageContainer">
                    <Grid container spacing={1}>
                        <Grid item md={8}>
                            <img
                                src="./images/customer.png" 
                                alt="Tolu & Joy’s Experience"
                                srcset=""
                                className={classes.customerImg}
                            />
                        </Grid>

                        <Grid item md={4}>
                            <Typography
                              variant="h5"
                              component="h4"
                              className={classes.mainHeading}
                            >
                                Tolu & Joy’s Experience
                            </Typography>
                            <Typography
                              variant="h5"
                              component="span"
                              className={classes.badge}
                            >
                                Customer
                            </Typography>
                            
                            <Typography
                                component="p"
                                className={classes.pTag}
                            >
                                I had the best experience shopping with vasiti. Usability
                                of the website was great,
                                very good customer service, an all round great experience.
                                I would definately be coming back! I had the best experience
                                shopping with vasiti. Usability of the website was great,
                                very good customer service, an all round great experience.
                                I would definately be coming back!
                            </Typography>
                            <Typography className={classes.button} component='a'>
                                SHARE YOUR STORY
                                <span>
                                    <img src="" alt="" srcset="" />
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default CustomerBanner;
