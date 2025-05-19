import React from "react";
import { Typography } from "@mui/material";

const EmptyNotice: React.FC = () => (
  <Typography color="text.disabled" fontStyle="italic" mt={1}>
    Will be updated shortly.
  </Typography>
);

export default EmptyNotice;
