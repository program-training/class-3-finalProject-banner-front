import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import "./RecommendedBox.css";
import { Typography } from "@mui/material";

export default function RecommendedBox() {
  return (
    <div className="recommendedDiv">
      <Link to={"/homeRecommended"}>
        <Card>
          <CardContent>
            <CardMedia
              sx={{ height: 400, width: 450 }}
              image="https://media.istockphoto.com/id/848188628/photo/fast-shopping.jpg?s=612x612&w=0&k=20&c=0GTem3OoxQxkj5U-im7UTrRiJRx_Ryh1B_LROrlgjN0="
              title="recommend banners"
            ></CardMedia>
          </CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Recommended Banner
          </Typography>
        </Card>
      </Link>
    </div>
  );
}
