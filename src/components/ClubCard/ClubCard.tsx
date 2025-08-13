import React, { useState } from "react";
import styles from "./ClubCard.module.css";
import Image from "next/image";
import Link from "next/link";
interface ClubCardProps {
  club: {
    name: string;
    motto: string;
    emoji: string;
    facultyIncharge: string;
    coordinator: { name: string }[];
    logo?: string;
  };
}

const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').trim();
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const [selectedTab, setSelectedTab] = useState<"about us" | "coordinator">(
    "about us"
  );
  const slug = generateSlug(club.name);

  return (
    // <Link href={`/clubs/${slug}`}>
    <div className={styles.parent}>
      <div className={styles.header}>
        <div className={styles.clubEmoji}>
          {club.emoji}
        </div>
        <div className={styles.clubName}>{club.name}</div>
      </div>
    </div>
    // /* </Link> */ 


  );
};

export default ClubCard;