import { MyAppBar, MyTypography, MyToolbar } from "./style";
import "./style.css";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { deepPurple } from "@mui/material/colors";
//import { useState } from "react";

const NavBar = () => {
  const {user:currentUser} = useSelector((state)=>{
    return state.userState;
  });
  const user = currentUser;
  //to navigate to other page using react router
  const navigate = useNavigate();
  return (
    <MyAppBar position="static" color="inherit">
      <div className="brandContainer">
        <MyTypography variant="h2" align="center">
          Memories
        </MyTypography>
      </div>
      <MyToolbar>
        {user ? (
          <div className="profile">
            <Avatar sx = {{color:(theme=>theme.palette.getContrastText(deepPurple[500]))}} alt='Some uSER' src={''}>
              {'S'}
            </Avatar>
            {/* User sx prop becuase of the relatively low styles */}
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="h6"
            >
              {'ASDASD'}
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/auth")}
          >
            Sign In
          </Button>
        )}
      </MyToolbar>
    </MyAppBar>
  );
};

export default NavBar;
