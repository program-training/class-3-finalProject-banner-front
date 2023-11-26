import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const AddButton = () => {
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Link to={"/addNewRec"}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Box>
    </div>
  );
};

export default AddButton;
