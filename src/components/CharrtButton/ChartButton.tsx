import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import './chartButton.css'

const ChartButton = () => {
    return (
        <Link to={'/graphsPage'}>
        <Box>
            <Button className="blinkingButton" sx={{backgroundColor: 'ButtonShadow'}}>
                To the graphs page
            </Button>
        </Box>
        </Link>
    )
}

export default ChartButton