import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { customerData } from './cdata';

const contentful = require("contentful");

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {
        textAlign: 'left',
        paddingTop: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2, 5),
    },
    image: {
        borderRadius: '50%',
        maxWidth: '200px',
        maxHeight: '200px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '29px',
        letterSpacing: '0.02em',
        textAlign: 'left',
        margin: '0.5em 0'
    },
    twoCols: {
        display: 'flex',
    },
    location: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18.15px',
        letterSpacing: '5%',
        textTransform: 'capitalize'
    },
    customer: {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 'normal',
        lineHeight: '15.73px',
        letterSpacing: '2%',
        textTransform: 'capitalize',
        marginLeft: '18px',
    },
    pTag: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '2%',
        marginTop: '0.4em'
    }
}))

const CustomersList = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://cdn.contentful.com/spaces/qqm8l9caoufc/entries?access_token=ZGFnwdntAt4RP3-0tPLnJSoC_yyKbW8WL2nfTAUQ-No')
        .then(response => response.json())
        .then(res => {
            console.log(res.items)
            setData(res.items)
        });
    }, [])

    const CustomerItem = ({ datadetail }) => {
        const { firstname, lastname, kind, story, campus, photo } = datadetail.fields;
        return (
            <>
            <Grid item md={4}>
                <Box component="div" className={classes.paper}>
                    <Box component='div'>
                        <img src={photo.url} alt="" />
                    </Box>
                        <Typography
                            variant="h5"
                            component="h4"
                            className={classes.title}
                        >
                            {firstname} {lastname}
                        </Typography>
                    <Box className={classes.twoCols}>
                        <span className={classes.location}>{campus}</span>
                        <span className={classes.customer}>{kind}</span>
                    </Box>
                    <Typography
                    component="p"
                    className={classes.pTag}
                    >
                        {story}
                    </Typography>
                </Box>
            </Grid>
            </>
        )
    }


    return (
        <>
        <section className={classes.section}>
            <div className="pageContainer">
            <Grid container spacing={6}>
                {data.map((datadetail, i) => (
                        <Grid item md={4} sm={6} key={i}>
                            <CustomerItem datadetail={datadetail} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
        </>
    );
}

export default CustomersList;
