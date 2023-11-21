import styles from './Footer.module.css';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
     export default function Footer() {
       return (
        //  <footer className={styles.footer}>
        //     <h1>Footer</h1>
        //  </footer>
      <AppBar position="static" className={styles.footer}>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              WWW.@banner.com
            </Typography>
            <br />
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