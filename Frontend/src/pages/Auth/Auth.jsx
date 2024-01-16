import { Container, Typography, Button, Avatar, Grid } from "@mui/material";
import { MyPaper } from "./style";
import LockIcon from "@mui/icons-material/Lock";
import { Input } from "../../components2";

import "./style.css";
import { useState } from "react";

const Auth = () => {  
  //state to show sign in or sign up form
  const [isSignUp,setIsSignUp] = useState(false);

  //state to show or not show the password
  const [showPassword, setShowPassword] = useState(false);

  //function to show the password, or not
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //function to handle the form submit
  const handleSubmit = () => {};

  //function to handle change in the input fields
  const handleChange = () => {};

  //handle switching between the type of forms
  const switchMode = () => {
    setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
    handleShowPassword(false);
  };

  //handle google login
  const googleError = ()=>{
    alert('Google Sign In was unseccessful. Try again later');
  }

  const googleSuccess = ()=>{

  }

  return (
    <Container component="main" maxWidth="xs">
      <MyPaper elevation={3}>
        <Avatar
          sx={{
            margin: "8px",
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <LockIcon></LockIcon>
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstname"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                ></Input>
                <Input
                  name="lastname"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                ></Input>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            ></Input>
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Reapeat Password"
                handleChange={handleChange}
                type="password"
              ></Input>
            )}
          </Grid>
          <Button
            sx={{ margin: "24px 0px 16px" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyItems="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </MyPaper>
    </Container>
  );
};

export default Auth;
