import { useFetchBanner } from '../../utils/useFetchBanners';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

export default function GetAllBanners() {
    const { allBanners , setAllBanners} = useFetchBanner(`${import.meta.env.BASE_URL}/api/banners`);

    const handelClickDelete = async (bannerId: string) => {
            try {
              await axios.delete(
                `${import.meta.env.BASE_URL}/api/banners/${bannerId}`
              );
              setAllBanners((prevBanners) =>
                prevBanners.filter((banner) => banner._id !== bannerId)
              );
            } catch (err) {
              console.error(err);
              throw err;
            }
          };
    
    return (
        <div>
            {allBanners.map((banner) => (
                <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 140 }}
                                image={banner.image.url}
                                alt={banner.image.alt}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" component='h1'>
                                    {banner.text}
                                </Typography >
                                <Typography variant="body2" color="text.secondary" component='p'>
                                    {banner.userName}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton onClick={() => handelClickDelete(banner._id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </div>
    )
}
