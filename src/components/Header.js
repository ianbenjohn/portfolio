import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import avatar from '../ianAvatar.png'

const Header = () => {
    return (
        <Box>
            <Avatar src = {avatar} alt='Ian Avatar'/>
            
        </Box>
    )
}

export default Header
