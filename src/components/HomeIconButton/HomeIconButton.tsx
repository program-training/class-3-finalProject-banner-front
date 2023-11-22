import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function HomeIconButton() {
    return (
        <Box sx={{margin: '8px'}}>
            <Link to={'/'}>
                <IconButton
                 size="large"
                 edge="end"
                 aria-label="go to home">
                        <HomeIcon />
                </IconButton>
            </Link>
        </Box>
    )
}
