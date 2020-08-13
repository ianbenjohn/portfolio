import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Nav from './Nav'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top: 0
        },
        '&:after': {
            content: "''",
            display: 'table',
            clear: 'both'
        },
        [theme.breakpoints.up('md')]:{
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }

    }
}))



const About = () => {
    const classes = useStyles();
    return (
    <>
        <Nav/>
        <Box component='div' className={classes.mainContainer} >
            <Typography varient='h3' align='center'>
                ABOUT ME: IAN JOHNSON
            </Typography>
            <Box component='div' className={classes.timeLine}>
                <Typography varient='h2'>1994</Typography>
            </Box>
        </Box>
    </>
    )
}

export default About
