import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    particleCanvas: {
        position: 'absolute',
        opacity: '0.3'
    }
})

const Home = () => {

    const classes= useStyles()
    return (
        <div>
            
            <Nav />
            <Header />
            <Particles
            canvasClassName={classes.particleCanvas}
            params={{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke :{
                            width: 1,
                            color: 'coral'
                        }
                    },
                    size: { 
                        value: 8, 
                        random: true,
                        anim: {
                            enable: false,
                            speed: 5,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            synce: false
                        }
                    }
                }
            }}
            />
        </div>
    )
}

export default Home;

