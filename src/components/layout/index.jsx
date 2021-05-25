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
}));

const Footer = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <footer>
                <div className="pageContainer">
                    <Box component='div'>
                        <Grid container spacing={3}>
                            <Grid item md={3}>
                                <Typography
                                    variant='h4'
                                    className={classes.title}
                                >
                                    Company
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
