import { Link } from "react-router-dom";
import ChartDelete from "../GraphTriger/ChartDelete";
import ChartUsers from "../GraphTriger/ChartUsers";
import { Box, Button } from "@mui/material";
import './graphPage.css'

const GraphsPage = () => {

    return (
        <div className="graphPageContainer">
            <div className="graphPage">
            <Link to={'/chartDelete'}>
                <Box>
                <Button sx={{ backgroundColor: 'ButtonShadow', margin: 5, height: 100, borderWidth: 2, borderStyle: "solid", borderColor: "black" }}>
                        Delete Rec Graphs
                    </Button>
                </Box>
            </Link>

            <Link to={'/chartUsers'}>
                <Box>
                <Button sx={{ backgroundColor: 'ButtonShadow', margin: 5, height: 100, borderWidth: 2, borderStyle: "solid", borderColor: "black" }}>
                        Users That Log in
                    </Button>
                </Box>
            </Link>
            </div>
        </div>
    )
}

export default GraphsPage