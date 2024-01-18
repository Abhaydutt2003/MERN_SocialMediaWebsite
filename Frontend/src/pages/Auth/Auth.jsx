import { Container, Typography, Button, Avatar, Grid } from "@mui/material";
import { MyPaper } from "./style";
import LockIcon from "@mui/icons-material/Lock";
import { Input } from "../../components2";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import "./style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleloginReducer } from "../../features/User/UserSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";

const Auth = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user:currentUser} = useSelector((state)=>{
    return state.userState;
  });
  const [user,setUser] = useState(currentUser);
  
  //state to show sign in or sign up form
  const [isSignUp, setIsSignUp] = useState(false);
  
  //state to show or not show the password
  const [showPassword, setShowPassword] = useState(false);
  
  //TODO, edge case, if the user is already logged in

    //function to show the password, or not
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //handle switching between the type of forms
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  };

  //handle google login
  const googleError = () => {
    alert("Google Sign In was unseccessful. Try again later");
  };

  const googleSuccess = (res) => {
    //call the reducer to login the user
    let decoded = jwtDecode(res.credential);
    dispatch(googleloginReducer(decoded));
    navigate('/');
  };

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
        <Form method="POST">
          <Grid container spacing={2} sx={{ marginBottom: "16px" }}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  autoFocus
                  half
                ></Input>
                <Input
                  name="lastName"
                  label="Last Name"
                  half
                ></Input>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
            ></Input>
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                type="password"
              ></Input>
            )}
          </Grid>
          <GoogleLogin
            onSuccess={googleSuccess}
            onError={googleError}
          ></GoogleLogin>
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
        </Form>
      </MyPaper>
    </Container>
  );
};

export default Auth;
