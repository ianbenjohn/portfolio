import React from 'react'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box } from '@material-ui/core'
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons'


const Nav = () => {
    return (
        <>
        <Box component='div'>
            <Avatar src='' alt='ian-avatar' />



        </Box>
        <Box component='nav'>
            <AppBar position='static' style={{background: 'purple'}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color: 'coral'}}/>
                    </IconButton>
                    <Typography varient='h5'>IanBenJohn</Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Nav
