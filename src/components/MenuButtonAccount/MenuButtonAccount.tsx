import * as React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Badge, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";


export default function MenuButtonAccount() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLoggedIn] = React.useState(false);
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
    setTimeout(() => navigate('/login'), 1000);
  };
  const handleRegister = () => {
    navigate('/register')
  };

  const handleLogHot = () => {
    
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          // handleMenuClose();
          handleLogIn();
        }}
      >
        {" "}
        <HowToRegIcon /> Log In{" "}
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleRegister();
        }}
      >
        <PersonAddIcon /> Register{" "}
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogHot();
        }}
      >
        <ExitToAppIcon /> Log Hot
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
        {isLoggedIn && (
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            color="success"
          >
            <AccountCircle />
          </Badge>
        )}
        {!isLoggedIn && <AccountCircle />}
      </IconButton>
      {renderMenu}
    </Box>
  );
}
