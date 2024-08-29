import { CircularProgress } from "@mui/material";
import "./Loader.css";

const Loader = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="spinnerContainer">
          <CircularProgress size={75} color={"error"} />
        </div>
      )}
    </>
  );
};

export default Loader;
