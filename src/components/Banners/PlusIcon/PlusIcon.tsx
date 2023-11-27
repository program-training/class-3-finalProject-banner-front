import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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