import React from "react";
import { Typography,Box } from "@mui/material";
import styles from "./infosection.module.css";

const InfoSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className={styles.departmentCard}>
    <Typography
      variant="h5"
      className={styles.departmentThemeText}
      gutterBottom
    >
      <Box component="span" fontWeight="fontWeightBold" sx={{mt:{xs:2}}}>
        {title}
      </Box>
    </Typography>
    {children}
  </div>
);

export default InfoSection;
