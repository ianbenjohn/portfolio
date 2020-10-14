import React from 'react';
import Nav from './Nav';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from "../images/cangaroo-img.jpg"


const useStyles = makeStyles({
    mainContainer: {
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    },
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Nav />
            <Grid container justify='center'>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
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
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
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
                {/* Project 3 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
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
                {/* Project 4 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                            component='img'
                            alt='Project 1'
                            height='140'
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
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
