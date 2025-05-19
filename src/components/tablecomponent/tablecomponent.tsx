import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Skeleton,
  Box,
  Typography,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import styles from "./table.module.css";
import nextConfig from "../../../next.config";

const TableComponent = ({
  title,
  members,
  columns,
  loading,
  isMeetingTable = false,
}: {
  title?: string;
  members: any[];
  columns: string[];
  loading?: boolean;
  isMeetingTable?: boolean;
}) => (
  <>
    <Typography variant="h3" className={styles.title}>{title}</Typography>
    {loading ? (
      <Skeleton variant="rectangular" width="100%" height={300} />
    ) : isMeetingTable ? (
      <TableContainer component={Paper} className={styles.table}>
        <Box p={2}>
          {members.map((meeting, index) => (
            <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
              <FeedIcon fontSize="small" className={styles.meetingIcon} />
              <Typography variant="body1" gutterBottom className={styles.meetingTitle}>
                <a href={`${nextConfig.env?.DOCUMENT}/${meeting.url}`} target="_blank" rel="noopener noreferrer">{meeting.title}</a>
              </Typography>
            </Box>
          ))}
        </Box>
      </TableContainer>
    ) : (
      <TableContainer component={Paper} className={styles.table} sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHead}>S. No.</TableCell>
              {columns.map((col, idx) => (
                <TableCell key={idx} className={styles.tableHead}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index} className={styles.tableRow}>
                <TableCell className={styles.tableCell}>{index + 1}</TableCell>
                {columns.map((col, idx) => (
                  <TableCell key={idx} className={styles.tableCell}>
                    {member[col.toLowerCase()]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </>
);

export default TableComponent;
