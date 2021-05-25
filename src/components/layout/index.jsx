import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#25201D',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(2),
        color: '#ffffff'
    },
    title: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '18.75px',
    },
    link: {
        display: 'block',
        padding: theme.spacing(1, 0),
        color: '#ffffff',
        textDecoration: 'none',
    },
    socialBox: {
        margin: theme.spacing(2, 0),
    },
    social: {
        margin: theme.spacing(2, 0.9),
    }
}));

const Footer = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <footer>
                <div className="pageContainer">
                    <Box component='div'>
                        <Grid container spacing={3}>
                            <Grid item md={2} xs={6}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Company
                                </Typography>
                                <Box component="div">
                                    <a className={classes.link} href="/#">About us</a>
                                    <a className={classes.link} href="/#">Terms of Use</a>
                                    <a className={classes.link} href="/#">Privacy Policy</a>
                                    <a className={classes.link} href="/#">Press & Media</a>
                                </Box>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Products
                                </Typography>
                                <Box component="div">
                                    <a className={classes.link} href="/#">Marketplace</a>
                                    <a className={classes.link} href="/#">Magazine</a>
                                    <a className={classes.link} href="/#">Seller</a>
                                    <a className={classes.link} href="/#">Wholesale</a>
                                    <a className={classes.link} href="/#">Services</a>
                                </Box>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Careers
                                </Typography>
                                <Box component="div">
                                    <a className={classes.link} href="/#">Become a Campus Rep</a>
                                    <a className={classes.link} href="/#">Become a Vasiti Influencer</a>
                                    <a className={classes.link} href="/#">Become a Campus seller</a>
                                    <a className={classes.link} href="/#">Become an affilliate</a>
                                </Box>
                            </Grid>
                            <Grid item md={2} xs={6}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Get In Touch
                                </Typography>
                                <Box component="div">
                                    <a className={classes.link} href="/#">Contact us</a>
                                    <a className={classes.link} href="/#">Partner with us</a>
                                    <a className={classes.link} href="/#">Advertise with us</a>
                                    <a className={classes.link} href="/#">Help/FAQS</a>
                                </Box>
                            </Grid>
                            <Grid item md={3} xs={12}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Join our Community
                                </Typography>
                                <Box component="div" className={classes.socialBox}>
                                    <a className={classes.social} href="/#">
                                        <img src="/icons/tw.png" alt="Twitter Icon" />
                                    </a>
                                    <a className={classes.social} href="/#">
                                        <img src="./icons/fb.png" alt="Facebook Icon" />
                                    </a>
                                    <a className={classes.social} href="/#">
                                        <img src="./icons/ig.png" alt="Facebook Icon" />
                                    </a>
                                    <a className={classes.social} href="/#">
                                        <img src="./icons/in.png" alt="Facebook Icon" />
                                    </a>
                                </Box>
                                <Typography
                                    variant="body1"
                                    component="p"
                                >
                                    Email Newsletter
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
