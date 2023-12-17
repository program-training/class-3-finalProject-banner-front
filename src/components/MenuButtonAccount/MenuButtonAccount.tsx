import { useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Badge, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/features/user/userReducer";
import { RootState } from "../../redux/store";

export default function MenuButtonAccount() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatchUser = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  // const [isLoggedIn] = useState(user?.isConnected == true);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogIn = () => {
    setAnchorEl(null);
    setTimeout(() => navigate("/login"), 1000);
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogHot = () => {
    dispatchUser(userLogOut());
    navigate("/");
  };

  const menuId = "primary-search-account-menu";

  const renderMenuIsLogin = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right", }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right", }}
      open={isMenuOpen}
      onClose={handleMenuClose}>

      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogHot();
        }}>
        <ExitToAppIcon /> Log Out
      </MenuItem>

    </Menu>
  );


  const renderMenuIsLogout = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right", }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right", }}
      open={isMenuOpen}
      onClose={handleMenuClose}>

        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLogIn();
          }}>
          {" "}
          <HowToRegIcon /> Log In{" "}
        </MenuItem>

      
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleRegister();
        }}>
        <PersonAddIcon /> Register{" "}
      </MenuItem>

    </Menu>
  );

  return (
    <Box sx={{ margin: "5px" }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        {user?.isConnected && (
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            color="success">
            <AccountCircle />
          </Badge>
        )}
        {!user?.isConnected && <AccountCircle />}
      </IconButton>

      {user?.isConnected ? renderMenuIsLogin : renderMenuIsLogout}
    </Box>
  );
}
