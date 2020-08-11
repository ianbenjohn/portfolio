import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import Typed from 'react-typed'
import avatar from '../ianAvatar.png'
import { makeStyles } from '@material-ui/core/styles'



//CSS STYLE
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "coral"
    },
    subtitle: {
        color: 'cornsilk',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: "absolute",
        top: "35%",
        transfrom: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: 'center',
        zIndex: '1'

    }

}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            
            <Grid container justify="center">
                <Avatar 
                src = {avatar} 
                alt='Ian Avatar'
                className= {classes.avatar}
            />
            </Grid>

            

            <Typography 
                variant = 'h4'
                className= {classes.title}
                >
                <Typed 
                    strings={['Ian Johnson']} 
                />
            </Typography>
            <br/>
            <Typography 
                variant = 'h6'
                className= {classes.subtitle}
                >
                <Typed 
                strings={['MERN Stack Developer' ,'React.js', 'JavaScript', 'Mongo']} 
                typeSpeed={60}
                backSpeed={50}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Header
