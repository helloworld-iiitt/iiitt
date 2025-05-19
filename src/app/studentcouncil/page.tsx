"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import PersonCard from "@/components/PersonCard/PersonCard";
import { Typography } from "@mui/material";
import styles from "../faculty/faculty.module.css";

interface studentdata {
  name: string;
  designation: string;
  emailId: string;
  src: string;
}

const StudentCouncil = () => {
  const [studentCouncildata, setStudentCouncilData] = useState<Record<
    string,
    studentdata[]
  > | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchStudentCouncilData = async () => {
      try {
        const response = await fetch(
          "/json/committee/members/student_council.json"
        );
        if (!response.ok) throw new Error("Failed to fetch Student data");

        const data = await response.json();
        setStudentCouncilData(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setError("Error loading student data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentCouncilData();
  }, []);

  return (
    <div>
      <Head>
        <title>Student Council</title>
      </Head>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <div className={styles.facultyContainer}>
          {studentCouncildata &&
            Object.entries(studentCouncildata).map(([group, members]) => (
              <React.Fragment key={group}>
                <Typography variant="h3" className={styles.groupTitle}>
                  {group}
                </Typography>
                <div className={styles.gridContainer}>
                  {members.map((member, index) => (
                    <div className={styles.gridItem} key={index}>
                      <PersonCard
                        name={member.name}
                        emailID={member.emailId}
                        src={member.src}
                        src_type="student"
                        designation={member.designation}
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

export default StudentCouncil;
