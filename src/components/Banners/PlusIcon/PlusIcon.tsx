import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const PlusIcon = () => {
  return (
    <div>
      <Link to={"/addNewBanner"}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default PlusIcon;
