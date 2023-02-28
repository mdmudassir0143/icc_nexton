import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import PageHead from '../components/PageHead'
import Caurosal from '../components/Caurosal'
import Camera from './Camera'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {
    IconButton,
    Typography
} from '@mui/material'
import {
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material';
import { Box } from '@mui/system'

import disposeImg1 from '../assets/img/dispose1.png'
import disposeImg3 from '../assets/img/dispose3.png'
import rewardImg1 from '../assets/img/rewards1.png'
import rewardImg2 from '../assets/img/rewards2.png'

function Dispose() {
    let navigate = useNavigate();
    const imgList = [
        rewardImg1,
        rewardImg2
    ]

    const [openYS, setOpenYS] = useState(false);
    const [openCS, setOpenCS] = useState(false);

    const handleClickYS = () => {
        openCS && setOpenCS(!openCS);
        setOpenYS(!openYS);
    };

    const handleClickCS = () => {
        openYS && setOpenYS(!openYS);
        setOpenCS(!openCS);
    };

    return (
        <Box>
            <PageHead title="Dispose and Earn" />
            <Box
                backgroundColor="white"
                minHeight="82.5vh"
            >
                <Box>
                    <Box
                        height="10rem"
                    >
                        <Caurosal
                            timeInterval={2500}
                            imgList={imgList}
                            opac="0.3"
                        />
                    </Box>
                    <Typography
                        marginTop="-3rem"
                        padding="2rem"
                        variant="h5"
                        textAlign="center"
                        position="relative"
                        zIndex="2"
                    >
                        Enhance your experience by keeping the venue clean.
                        <br />
                        &
                        <br />
                        Get Rewarded !!
                    </Typography>
                </Box>
                <Box
                    position="relative"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    zIndex="3"
                >
                    <Box
                        marginTop="3.5rem"
                        width="90%"
                    >
                        <List
                            sx={{ 
                                width: '100%',
                            }}
                            component="nav"
                        >
                            <ListItemButton 
                                onClick={handleClickYS}
                            >
                                <ListItemText 
                                    primary="Deposit Trash Yourself" 
                                    sx={{
                                        fontSize: "1.5rem"
                                    }}        
                                />
                                {openYS ?
                                    <ExpandLess />
                                    :
                                    <ExpandMore />
                                }
                            </ListItemButton>
                            <Collapse in={openYS} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            backgroundColor="#ffb6c170"
                                            borderRadius="0 0 3rem 3rem"
                                        >
                                            <img
                                                src={disposeImg1}
                                                alt="disposeImg1"
                                                width="80%"
                                            />
                                            <Typography
                                                variant="h6"
                                                textAlign="center"
                                            >
                                                Deposit Your Trash
                                            </Typography>
                                        </Box>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItemButton onClick={handleClickCS}>
                                <ListItemText 
                                    primary="Call Staff for Cleaning" 
                                />
                                {openCS ?
                                    <ExpandLess />
                                    :
                                    <ExpandMore />
                                }
                            </ListItemButton>
                            <Collapse in={openCS} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton onClick={() => navigate("/camera")}>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                            alignItems="center"
                                            backgroundColor="#ffb6c170"
                                            borderRadius="0 0 3rem 3rem"
                                        >
                                            <img
                                                src={disposeImg3}
                                                alt="disposeImg1"
                                                width="80%"
                                            />
                                            <Typography
                                                variant="h6"
                                                textAlign="center"
                                            >
                                                Call Staff
                                            </Typography>
                                        </Box>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Dispose