"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import PersonCard from "@/components/PersonCard/PersonCard";
import { Typography } from "@mui/material";
import styles from "../faculty/faculty.module.css";
interface FacultyMember {
  name: string;
  emailID: string;
  src: string;
  designation: string;
  researchArea: string;
  id: {
    dept: string;
    deptID: string;
  };
  Incharge?: string;
  VidhwanLink?: string;
  Institute?: string;
}

const Faculty = () => {
  const [facultyData, setFacultyData] = useState<Record<string, FacultyMember[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch("/json/faculty/staff.json");
        if (!response.ok) throw new Error("Failed to fetch staff data");

        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setError("Error loading staff data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Faculty</title>
      </Head>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.facultyContainer}>
          {facultyData &&
            Object.entries(facultyData).map(([group, members]) => (
              <React.Fragment key={group}>
                <Typography variant="h3" className={styles.groupTitle}>
                  {group}
                </Typography>
                <div className={styles.gridContainer}>
                  {members.map((member, index) => (
                    <div className={styles.gridItem} key={index}>
                      <PersonCard
                        name={member.name}
                        emailID={member.emailID}
                        src={member.src}
                        src_type="staff"
                        designation={member.designation}
                        researchArea={member.researchArea}
                        dept={member.id.dept}
                        Incharge={member.Incharge}
                        VidhwanLink={member.VidhwanLink}
                        Institute={member.Institute}
                      />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
        </div>
      )}
    </div>
  );
};

export default Faculty;
