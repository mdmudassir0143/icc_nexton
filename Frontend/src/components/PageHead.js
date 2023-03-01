import React from 'react'
import { useNavigate } from 'react-router-dom';

import WestIcon from '@mui/icons-material/West';
import { Box, Typography } from '@mui/material';

function PageHead({title}) {
    const naviate = useNavigate();
  return (
    <Box
        borderRadius="0 0 3px 3px"
        padding="0 0 10px 0"
        // boxShadow="0px 20px 10px 0px rgba(0,0,0,0.75)"
        // zIndex="10"
        display="flex"
        alignItems="center"
        gap="1rem"
        p="0.7rem"
        marginBottom="1rem"
        backgroundColor="#E0E4E7"
    >
        <WestIcon
            sx={{
                fontSize: '1.75rem',
                fontWeight: 'light',
                '&:hover': {
                    cursor: 'pointer',
                }
            }} 
            onClick={() => naviate(-1)}
        />
        <Typography
            variant="h5"
            // fontWeight="bold"
            marginLeft="5px"
        >
            {title}
        </Typography>
    </Box>
  )
}

export default PageHead
