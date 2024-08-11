import { Box, Typography } from "@mui/material";
import "./RunningLine.css";

const RunningLine = () => {
  const longText = [
    "lorem ipsum 100%",
    "lorem ipsum 100%",
    "lorem ipsum 100%",
    "lorem ipsum 60%",
    "lorem ipsum 100%",
    "lorem ipsum 100%",
    "lorem ipsum 100%",
    "lorem ipsum 50%",
    "lorem ipsum 20%",
    "lorem ipsum 100%",
    "lorem ipsum 100%",
    "lorem ipsum 10%",
    "lorem ipsum 100%",
    "lorem ipsum 100%",
  ];

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        height: "30px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: "marquee 10s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        <Typography component="span" sx={{ display: "inline-block" }}>
          <>
            <div style={{ display: "flex" }}>
              {longText.map((el) => (
                <p style={{ marginRight: "10%" }}>{el}</p>
              ))}
            </div>
          </>
        </Typography>
      </Box>
    </Box>
  );
};

export default RunningLine;
