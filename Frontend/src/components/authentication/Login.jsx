import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

import login from '../../assets/img/login.png';

function Login({ logged, setLogged }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle form submission here
    setLogged(true);
    return navigate("/home");
  };

  const navigate = useNavigate();
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
              Login to your account
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
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="0.5rem"
            >
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="row"
                gap="1rem"
              >
                <IconButton
                  sx={{
                    borderRadius: "50%",
                    padding: "0.4rem",
                    border: "1px solid lightgrey",
                  }}
                >
                  <GoogleIcon
                    fontSize="medium"
                  />
                </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "50%",
                    padding: "0.4rem",
                    border: "1px solid lightgrey",
                  }}
                >
                  <InstagramIcon
                    fontSize="medium"
                  />
                </IconButton>
              </Box>
              <Typography
                color="#565864"
                variant="h7"
                textAlign="center"
              >
                or Use your Email
              </Typography>
            </Box>
            <Box
              component="form"
              noValidate
              display="flex"
              flexDirection="column"
              gap="1rem"
              color="#565864"
            >
              <TextField
                label="Email"
                type="email"
                variant='outlined'
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
                Login
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
                Don't have an account?
                <a 
                  href="/signup"
                  style={{
                    marginLeft: "0.2rem",
                    color:"#565864",
                    textDecoration: "underline",
                  }}
                >
                  Signup here
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}

export default Login;
