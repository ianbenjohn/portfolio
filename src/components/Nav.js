import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core'
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons'
import avatar from '../ianAvatar.png'

//CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),

    },
    listItem: {
        color: 'tan'
    },
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts'
    },
]


const Nav = () => {
    const classes = useStyles()
    return (
        <>
        <Box className={classes.menuSliderContainer} component='div'>
            <Avatar className={classes.avatar} src={avatar} alt='ian-avatar' />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}

                    </ListItemIcon>
                    <ListItemText primary={lsItem.listText}/>
                    </ListItem>
            
                ))}
            </List>

        </Box>
        <Box component='nav'>
            <AppBar position='static' style={{background: 'purple'}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color: 'coral'}}/>
                    </IconButton>
                    <Typography varient='h4'>IanBenJohn</Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Nav
