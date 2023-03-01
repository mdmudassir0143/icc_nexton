import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import PageHead from "../components/PageHead";
import ticketImg from "../assets/img/ticket.png";

import { useNavigate } from "react-router-dom";

export default function Scan({ isTicket, setIsticket }) {
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isTicket) {
  //     return navigate("/");
  //   }
  // }, [isTicket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    setIsticket(true);
    window.alert("Ticket Registered Successfully")
    navigate('/home');
  };

  return (
    <Box
      minHeight="84vh"
    >
      <PageHead title="Scan Ticket" />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
        backgroundColor="#1b2430"
        marginTop="-1rem"
      >
        <Box
          height="50%"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
        >
          <img
            src={ticketImg}
            // height="80%"
            width="60%"
            alt='TicketImage'
            style={{
              aspectRatio: "1/1",
            }}
          />
        </Box>
        <Box
          height="90%"
        >
          <Box
            height="10rem"
            borderRadius="3rem 3rem 0 0"
            backgroundColor="#dddddd"
            color="#565864"
            zIndex="1"
          >
            <Typography
              p="0.4rem"
              variant="h6"
              // fontWeight="bold"
              textAlign="center"
            >
              Enter Ticket
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%"
            backgroundColor="white"
            zIndex="2"
            mt="-7rem"
            borderRadius="3rem 3rem 0 0"
            p="2rem"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              width="70%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="1rem"
            >
              <TextField
                // required
                id="email"
                label="Ticket Number"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
              >
                Register Ticket
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
