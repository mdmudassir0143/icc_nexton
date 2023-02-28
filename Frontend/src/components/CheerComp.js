import React from "react";
import { Typography, Box } from "@mui/material";

export default function CheerComp({title, imgSrc}){
    return (
        <Box
        display = "flex"
        flexDirection = "column"
        gap = "0.6rem"
        height = "100%"
        padding = "0.8rem"
        >
            <Typography
            textAlign = "center"
            variant = "h6"
            fontWeight = "600"
            >
                {title}
            </Typography>
            <Box
            height = "90%"
            display = "flex"
            justifyContent = "center"
            >
                <img 
                src = {imgSrc}
                alt = {title}
                height = "250rem"
                style={{
                    borderRadius: "2rem"
                }}
                />
            </Box>
        </Box>
    )
}