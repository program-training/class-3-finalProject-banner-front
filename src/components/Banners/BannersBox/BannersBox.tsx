import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import './BannerBox.css'
export default function BannersBox() {
    return (
        <div className="bannerDiv">
            <Link to={'/homeBanners'}>
            <Card>
                <CardContent>
                    <CardMedia
                     sx={{ height: 400, width: 400}}
                     image= 'https://images.unsplash.com/photo-1582129165473-a878f105f3b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJpbGxib2FyZHxlbnwwfHwwfHx8MA%3D%3D'
                     title='banners'>
                    </CardMedia>
                </CardContent>
            </Card>
            </Link>
        </div>
    )
}