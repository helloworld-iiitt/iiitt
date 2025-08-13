/**
 * Club Committee Page
 *
 * fetches data from /json/general/clubs
 * Utilizes ClubCard Component
 * Utilizes CircularProgress Component
 */

"use client";
import ClubCard from "@/components/ClubCard/ClubCard";
import React, { useEffect, useState } from "react";
import styles from "./clubs.module.css";
import { CircularProgress } from "@mui/material";
import { Club } from "@/types/common.types";

const Clubs: React.FC = () => {
  const [clubs, setClubsData] = useState<Club[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "Clubs | IIIT Tiruchirappalli";
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

  // Function to categorize clubs by tag
  const categorizeClubs = (clubs: Club[]) => {
    const categories = {
      tech: clubs.filter(club => club.tag === "tech"),
      cultural: clubs.filter(club => club.tag === "cultural"),
      sport: clubs.filter(club => club.tag === "sport")
    };
    return categories;
  };

  // Function to render a section with heading and clubs
  const renderClubSection = (title: string, clubList: Club[], emoji: string) => {
    if (clubList.length === 0) return null;

    return (
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>
          <span className={styles.sectionEmoji}>{emoji}</span>
          {title}
        </h2>
        <div className={styles.cardContainer}>
          {clubList.map((club, index) => (
            <ClubCard key={`${title}-${index}`} club={club} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.facultyContainer}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.clubsContent}>
          {clubs && (() => {
            const categorizedClubs = categorizeClubs(clubs);
            return (
              <>
                {renderClubSection("TECHNICAL CLUBS", categorizedClubs.tech, "💻")}
                {renderClubSection("CULTURAL CLUBS", categorizedClubs.cultural, "🎭")}
                {renderClubSection("SPORTS CLUBS", categorizedClubs.sport, "⚽")}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default Clubs;