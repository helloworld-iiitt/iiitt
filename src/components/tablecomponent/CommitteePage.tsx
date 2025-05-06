"use client";
import React from "react";
import { Typography, Skeleton } from "@mui/material";
import { useCommitteeData } from "./useCommitteeData";
import TableComponent from "./tablecomponent";
import styles from "./committee.module.css";
import {Box} from "@mui/material";

export default function CommitteePage({ committee }: { committee: string }) {
  const { members, meetings, loading, isMeetingJsonAvailable } =
    useCommitteeData(committee);

  const columnMapping: Record<string, string[]> = {
    senate: ["Name", "Designation", "Senate"],
    bog: ["Name", "Designation", "Role"],
    bwc: ["Name", "Designation", "Role"],
    pio: ["Name", "Designation", "Role"],
    fc: ["Name", "Designation", "Role"],
    admission: ["Name", "Role"],
  };
  const committeeName = committee.toLowerCase();
  const formattedCommitteeName = committee.toUpperCase().replace("_", " ");

  return (
    <div className={styles.pageContainer}>
      {committeeName !== "admission" && (
        <Typography variant="h2" className={styles.themeText}>
          {formattedCommitteeName}
        </Typography>
      )}
      {members?.length ? (
        <TableComponent
          title={`Members of ${formattedCommitteeName}`}

          members={members}
          columns={columnMapping[committee]}
          loading={loading}
          aria-label={`Table displaying members of ${formattedCommitteeName}`}
        />
      ) : (
        <Typography variant="body1" className={styles.noDataText}>
          No members available.
        </Typography>
      )}
      
      {isMeetingJsonAvailable && committeeName!="admission" && (
        <>
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height={100} />
          ) : meetings?.length ? (
<Box mt={5}>
  <TableComponent
    title={`${formattedCommitteeName} Minutes`}
    members={meetings}
    columns={["Title", "Description"]}
    loading={loading}
    isMeetingTable
    aria-label={`Table displaying minutes of ${formattedCommitteeName}`}
  />
</Box>
          ) : (
            <Typography variant="body1" className={styles.noDataText}>
              No meeting records available.
            </Typography>
          )}
        </>
      )}
    </div>
  );
}
