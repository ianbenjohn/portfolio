import React from 'react';
import Nav from './Nav';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from "../images/cangaroo-img.jpg"

const Portfolio = () => {
    return (
        <Box component="div">
            <Nav />
            <Grid container justify='center' alignItems='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    project1
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                    ldjdnskafjndask jaksdjfh kasjdhf kasjdfh aksdjhf kasjdhfka jsdhf kajsdh fkj askdjghfsg
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                            
                        </CardActionArea>
                 </Card>
                </Grid>
            </Grid>
        </Box>
       
    )
};

export default Portfolio
