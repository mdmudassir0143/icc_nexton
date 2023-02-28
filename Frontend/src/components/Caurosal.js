import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/material'

function Caurosal({imgList, opac=1, timeInterval = 2000}) {
  return (
    <Box
        // height="15rem"
    >
        <Carousel
            autoPlay={true}
            animation="fade"
            interval={timeInterval}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            sx={{
                maxHeight: "100%",
            }}
        >
            {imgList.map((item, i) => (
                <img
                    key={i}
                    src={item}
                    height="100%"
                    width="100%"
                    alt="homeBanner"
                    style={{
                        opacity: `${opac}`
                    }}
                />
            ))}
        </Carousel>
    </Box>
  )
}

export default Caurosal