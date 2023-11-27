import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';
import HomeIconButton from '../HomeIconButton/HomeIconButton';
import MenuButtonAccount from '../MenuButtonAccount/MenuButtonAccount';

export default function Header() {

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', fontFamily: 'italic',
            fontSize: '2rem' } }}
          >
            Welcome to Banner Services
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <HomeIconButton />
            <MenuButtonAccount />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <HeaderMenuItem />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
