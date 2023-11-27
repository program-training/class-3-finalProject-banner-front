import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  return (
    <div>
        <Link to={"/addNewRec"}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
    </div>
  );
};

export default AddButton;
