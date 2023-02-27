import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/material'

import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
// import team4 from '../assets/img/team4.jpg'
import team5 from '../assets/img/team5.jpg'

const list = [
    team1,
    team2,
    team3,
    // team4,
    team5
]

function Caurosal() {
  return (
    <Box
        height="15rem"
    >
        <Carousel
            autoPlay={true}
            animation="fade"
            interval="2000"
            indicators={false}
            navButtonsAlwaysInvisible={true}
            sx={{
                maxHeight: "15rem",
            }}
        >
            {list.map((item, i) => (
                <img
                    key={i}
                    src={item}
                    minHeight="100%"
                    width="100%"
                    alt="homeBanner"
                />
            ))}
        </Carousel>
    </Box>
  )
}

export default Caurosal