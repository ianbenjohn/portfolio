import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core'
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons'
import avatar from '../ianAvatar.png'
import NavMenuSlider from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom';

//CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
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
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'About Me',
        listPath: '/about'
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



//NAVBAR CODE

const Nav = () => {

    //STATE
    const [state, setState] = useState({
        right: false
    })

    //Toggle Slider
    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    //useStyles to Classes
    const classes = useStyles()

    const sideList = slider  => (
        <Box 
        className={classes.menuSliderContainer} 
        component='div'
        onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt='ian-avatar' />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                
                    <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>

                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>           
                ))}
            </List>
        </Box>
    )
    return (
        <>
        <Box component='nav'>
            <AppBar position='static' style={{background: 'gray'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}>
                        <ArrowBack style={{color: 'coral'}}/>
                    </IconButton>
                    <Typography varient='h4'>IanBenJohn</Typography>
                    <NavMenuSlider 
                    //where nav bar appears from
                    anchor='right'
                    open={state.right}
                    onClose={toggleSlider('right', false)}
                    >
                    {sideList('right')}

                    </NavMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Nav
