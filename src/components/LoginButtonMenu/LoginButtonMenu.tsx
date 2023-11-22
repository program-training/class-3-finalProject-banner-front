import styles from './LoginButtonMenu.module.css';
import * as React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Badge, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SignIn from '../Login/SignIn';
import Register from '../Register/Register';

export default function LoginButtonMenu() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      
    const handleMenuClose = () => {
    setAnchorEl(null);
    };

    const handleLogIn = () => {
      setAnchorEl(null);

    }
    const handleRegister = () => {

    } 

    const handleLogHot = () => {

    } 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl} 
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem onClick={() => { handleMenuClose(); handleLogIn(); }}> <HowToRegIcon /> Log In </MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); handleRegister(); }}><PersonAddIcon /> Register </MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); handleLogHot(); }}><ExitToAppIcon /> Log Hot</MenuItem>
    </Menu>
  );
    return (
        <Box sx={{ margin: '8px'}}>
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
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
    )
}