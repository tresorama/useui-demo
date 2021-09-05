import React from "react";
import { Box } from "@useui/react";

const fakeUIInput = {
  backgroundColor: ["primary", "red", "green"],
  color: "white",
  padding: 4,
  "& span": {
    "&:before": {
      content: '""',
      display: "block",
      backgroundColor: "yellow",
      height: "20px",
    },
  },
};

const UI = fakeUIInput;

const TestScreen = () => {
  return (
    <Box {...UI}>
      <Box as="span">Ciao</Box>
    </Box>
  );
};

export default TestScreen;
