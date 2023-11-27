import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const PlusIcon = () => {
  return (
    <div>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
    </div>
  );
};

export default PlusIcon;