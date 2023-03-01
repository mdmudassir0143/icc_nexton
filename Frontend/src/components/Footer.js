import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      borderTop="1px solid black"
      padding="0.4rem"
      position="relative"
      bottom="0"
      zIndex="10"
      // backgroundColor= "#1565C0"
      color="#565864"
    >
      <Typography
        align='center'
      >
        © 2023 | Made with ❤️ by Code Rushers
      </Typography>
    </Box>
  )
}