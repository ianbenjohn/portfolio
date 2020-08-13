import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Nav from './Nav'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#5F9EA0",
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before': {
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid cornsilk',
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
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid cornsilk',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear:'both',
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.62rem",
            top: 'calc(50% - 5px)',
            borderstyle: 'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            "&:nth-of-type(2n)": {
                float: 'right',
                margin: '1rem',
                borderColor: 'tan',
            },
            "&:nth-of-type(2n):before": {
                right: 'auto',
                left: '-0.625rem',
                borderColor: "tomato tomato transparent transparent"
            }
        }

    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.9rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            "&:nth-of-type(2n)": {
                float: 'none',
                margin: '0 auto'
            },
            "&:nth-of-type(2n):before": {
                display: 'none'
            }

        }
    },
    heading: {
        color: 'tomato',
        padding: '2rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}));



const About = () => {
    const classes = useStyles();
    return (
    <>
        <Nav/>
        <Box component='div' className={classes.mainContainer} >
            <Typography varient='h3' align='center' className={classes.heading}>
                ABOUT ME: IAN JOHNSON
            </Typography>
            <Box component='div' className={classes.timeLine}>
                <Typography variant='h2' className={`${classes.timeLineYear} ${classes.timeLineItem}`}>1994</Typography>

                <Box component='div' className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                        Birth
                    </Typography>
                    <Typography variant='body1' align='center'>
                        Troutdale
                    </Typography>
                    <Typography variant='subtitle1' align='center'>
                        asdijfandsljvnasdkjvnsakdjvnskdjvn
                    </Typography>

                </Box>
            </Box>
        </Box>
    </>
    )
}

export default About
