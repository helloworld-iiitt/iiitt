"use client";

import PersonCard from "@/components/PersonCard/PersonCard";
import { FacultyMember } from "@/types/faculty.types";
import { Divider, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./faculty.module.css";

const orderofDesignation = [
  "Professor",
  "Associate Professor",
  "Assistant Professor",
];

const Faculty = () => {
  const [facultyData, setFacultyData] = useState<Record<
    string,
    FacultyMember[]
  > | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const normalizeDesignation = (designation: string): string => {
    const lower = designation.toLowerCase();
    if (lower.includes("assistant")) return "Assistant Professor";
    if (lower.includes("associate")) return "Associate Professor";
    if (lower.includes("professor")) return "Professor";
    return "Other";
  };
  const groupByDesignation = (
    members: FacultyMember[]
  ): Record<string, FacultyMember[]> => {
    const grouped: Record<string, FacultyMember[]> = {};

    members.forEach((member) => {
      const normalized = normalizeDesignation(member.designation || "Other");
      if (!grouped[normalized]) {
        grouped[normalized] = [];
      }
      grouped[normalized].push(member);
    });

    return grouped;
  };

  useEffect(() => {
    document.title = "Faculty | IIIT Tiruchirappalli ";
    const fetchFacultyData = async () => {
      try {
        const response = await fetch("/json/faculty/faculty.json");
        if (!response.ok) throw new Error("Failed to fetch faculty data");

        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
        setError("Error loading faculty data.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  return (
    <div>
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
            Object.entries(facultyData).map(([group, members], index) => {
              // Separate HoDs and others
              const hods = members.filter((member) => member.id.deptID === "1");
              const others = members.filter(
                (member) => member.id.deptID !== "1"
              );

              const groupedByDesignation = groupByDesignation(others);
              const sortedDesignations = [
                ...orderofDesignation,
                ...Object.keys(groupedByDesignation).filter(
                  (desig) => !orderofDesignation.includes(desig)
                ),
              ];

              return (
                <React.Fragment key={group}>
                  <Typography variant="h3" className={styles.groupTitle}>
                    {group}
                    <Divider></Divider>
                  </Typography>
                  {/* HOD Section */}
                  {hods.length == 1 && (
                    <>
                      <Typography variant="h4" className={styles.groupTitle}>
                        Head of the Department
                        <Divider></Divider>
                      </Typography>
                      <div className={styles.gridContainer}>
                        {hods.map((member, index) => (
                          <div className={styles.gridItem} key={index}>
                            <PersonCard
                              isHOD={true}
                              name={member.name}
                              emailID={member.emailID}
                              src={member.src}
                              src_type="faculty"
                              designation={member.designation}
                              researchArea={member.researchArea}
                              dept={member.id.dept}
                              Incharge={member.Incharge}
                              VidhwanLink={member.VidhwanLink}
                              Institute={member.Institute}
                              PersonalPage={member.PersonalPage}
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {/* Other Designations */}
                  {sortedDesignations.map((designation) => {
                    const filteredMember = groupedByDesignation[designation];
                    if (!filteredMember) return null;
                    return (
                      <div key={designation}>
                        <Typography variant="h4" className={styles.groupTitle}>
                          {designation}
                        </Typography>
                        <Divider />
                        <div className={styles.gridContainer}>
                          {filteredMember.map((member, index) => (
                            <div className={styles.gridItem} key={index}>
                              <PersonCard
                                name={member.name}
                                emailID={member.emailID}
                                src={member.src}
                                src_type="faculty"
                                designation={member.designation}
                                researchArea={member.researchArea}
                                dept={member.id.dept}
                                Incharge={member.Incharge}
                                VidhwanLink={member.VidhwanLink}
                                Institute={member.Institute}
                                PersonalPage={member.PersonalPage}
                              />
                            </div>
                          ))}
                        </div>
                        {designation === "Assistant Professor" && <hr></hr>}

                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
        </div>
      )}

      {/* Faculty Rule Book Section */}
      <Typography align="center" variant="h5" gutterBottom>
        <span className={styles.boldText}>Faculty Rule Book</span>
      </Typography>
      <Typography align="center">
        <Link
          href={`${nextConfig?.env?.DOCUMENT}/C-StaffHandbook.pdf`}
          download
          className={styles.downloadLink}
        >
          Download Faculty Rule Book
        </Link>
      </Typography>
    </div>
  );
};

export default Faculty;
