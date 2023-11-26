// import styles from './Footer.module.css';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
     export default function Footer() {
       return (
      <AppBar position="static" >
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              WWW.@banner.com
            </Typography>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            
          </Toolbar>
        </Container>
      </AppBar>
       );
     }