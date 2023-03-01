import React from 'react'
import { Box, Typography } from '@mui/material';

function PageHead() {
  return (
    <Box
        borderTop="2px solid black"
        padding="0.4rem"
    >
        <Typography
            align='center'
        >
           © {new Date().getFullYear()} | Made with ❤️ by Code Rushers
        </Typography>
    </Box>
  )
}

export default PageHead
