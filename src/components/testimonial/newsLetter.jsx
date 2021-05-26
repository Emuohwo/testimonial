import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const  useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {
        background: '#25201D',
        color: '#ffffff',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        minHeight: '400px',
        fontFamily: `'Roboto', sans-serif `,
    },
    imageBox: {
        position: 'relative',
        width: '80%',
        margin: '0 auto',
    },
    image: {
        position: 'absolute',
        top: theme.spacing(-8),
        [theme.breakpoints.down('md')]: {
            position: 'relative',
            top: 0,
            width: '80%',
        },
    },
    title: {
        fontWeight: 700,
        fontSize: '40px',
        lineHeight: '40px',
        letterSpacing: '-3%',
        paddingTop: theme.spacing(3),
    },
    pTagRob: {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '2%',
        paddingRight: theme.spacing(12),
        margin: theme.spacing(2, 0),
    },
    button: {
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '15px',
        display: 'flex',
        alignTtems: 'center',
        textAlign: 'center',
        letterSpacing: '0.02em',
    }
}));

const TopFooter = () => {
    const classes = useStyles()

    return (
        <>
            <section className={classes.section}>
                <div className="pageContainer">
                    <Box component="div">
                        <Grid container spacing={3}>
                            <Grid item md={7}>
                                <Box component="div" className={classes.imageBox}>
                                    <img
                                        src="./images/phone.png"
                                        alt=""
                                        className={classes.image}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={5}>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        component="h3"
                                        className={classes.title}
                                    >
                                        Be a  member
                                        <br />
                                         of our community 🎉
                                    </Typography>
                                    
                                    <Typography
                                        component="p"
                                        className={classes.pTagRob}
                                    >
                                        We’d make sure you’re always first to know 
                                        what’s happening on Vasiti—thus, the world.
                                    </Typography>

                                    <Box variant='outlined'>
                                        <TextField
                                        id="outlined-password-input"
                                        label="enter your email address"
                                        type="email"
                                        autoComplete="email"
                                        variant="outlined"
                                        />
                                        <button
                                          className={classes.button}
                                        >Submit</button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default TopFooter;
