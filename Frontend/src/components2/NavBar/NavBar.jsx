import { MyAppBar, MyTypography, MyToolbar, MyAvatar } from "./style";
import "./style.css";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = null;
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
            <MyAvatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </MyAvatar>
            {/* User sx prop becuase of the relatively low styles */}
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="h6"
            >
              {user.result.name}
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
