"use client";
import ClubCard from "@/components/ClubCard/ClubCard";
import React, { useEffect, useState } from "react";
import styles from "./clubs.module.css";
import { CircularProgress } from "@mui/material";

interface Club {
  name: string;
  motto: string;
  facultyIncharge: string;
  coordinator: { name: string }[];
}

const Clubs: React.FC = () => {
  const [clubs, setClubsData] = useState<Club[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Clubs";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/general/clubs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch clubs data");
        }
        return response.json();
      })
      .then((data) => {
        setClubsData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching clubs data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.facultyContainer}>
      {loading ? (
        <CircularProgress/>
      ) : (
        <div className={styles.cardContainer}>
          {clubs?.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      )}
    </div>
  );

};

export default Clubs;
