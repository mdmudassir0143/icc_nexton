import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

import {
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

import login from '../../assets/img/login.png';

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    // Handle form submission here
  };

  return (
    <Box
        display="flex"
        flexDirection="column"
        height="100%"
        width="100%"
        backgroundColor="#1b2430"
      >
        <Box
          // backgroundColor="#1BB273"
          height="18rem"
          // borderRadius="0 0 10px 10px"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          // borderRadius="0 0 50% 50%"
          m="0.4rem 0 0 0"
        >
          <img
            src={login}
            height="80%"
            // width="100%"
            alt='loginImage'
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
            mt="-3rem"
          >
            <Typography
              p="0.4rem"
              variant="h6"
              // fontWeight="bold"
              textAlign="center"
              textTransform="capitalize"
            >
              Create your account
            </Typography>
          </Box>
          <Box
            height="25rem"
            backgroundColor="white"
            zIndex="2"
            mt="-7rem"
            borderRadius="3rem 3rem 0 0"
            p="1rem 2rem 1rem 2rem"
          >
            <Box
              component="form"
              noValidate
              display="flex"
              flexDirection="column"
              gap="1rem"
              color="#565864"
            >
              <TextField
                label="Name"
                type="text"
                variant='outlined'
                required
                onChange={(e) => setName(e.target.value)}
                sx={{
                  margin: "0",
                  width: "90%",
                }}
              />
              <TextField
                label="Email"
                type="email"
                variant='outlined'
                required
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  margin: "0",
                  width: "90%",
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant='outlined'
                required
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  margin: "0",
                  width: "90%",
                }}
              />
              <Button
                type='submit'
                variant="contained"
                sx={{
                  width: "60%",
                  margin: "1rem 0",
                }}
                onClick={handleSubmit}
              >
                Signup
              </Button>
            </Box>
            <Box
              display="flex"
              gap="0.2rem"
              justifyContent="center"
            >
              <Typography
                color="#565864"
                textAlign="center"
              >
                Already have an account?
                <a 
                  href="/"
                  style={{
                    marginLeft: "0.2rem",
                    color:"#565864",
                    textDecoration: "underline",
                  }}
                >
                  Login here
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

export default Signup;
