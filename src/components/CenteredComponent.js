'use client'

import { Box } from "@mui/material";

const CenteredComponent = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Ensures the container fills the entire viewport height
    >
      <div>
        {children}
      </div>
    </Box>
  );
};
export default CenteredComponent;
