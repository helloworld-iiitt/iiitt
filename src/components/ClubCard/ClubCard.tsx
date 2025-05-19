import React, { useState } from "react";
import styles from "./ClubCard.module.css";
import Image from "next/image";
interface ClubCardProps {
  club: {
    name: string;
    motto: string;
    facultyIncharge: string;
    coordinator: { name: string }[];
    logo?:string;
  };
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const [selectedTab, setSelectedTab] = useState<"about us" | "coordinator">(
    "about us"
  );

  const toggleTab = () => {
    setSelectedTab((prev) => (prev === "about us" ? "coordinator" : "about us"));
  };

  return (
    <div className={styles.parent}>
      <div className={styles.imageWrapper}>
      <div className={styles.imagecontainer}>
  {club.logo && (
    <Image
      src={club.logo}
      alt={`${club.name} logo`}
      width={120}
      height={120}
      className={styles.logo}
    />
  )}
</div>
      </div>
      <div className={styles.clubName}>{club.name}</div>

      <div className={styles.clubContent}>
        {selectedTab === "about us" ? (
          <>
            <div className={styles.clubIncharge}>Incharge: {club.facultyIncharge}</div>
            <div className={styles.clubMotto}>{club.motto}</div>
          </>
        ) : (
          <ul className="clubCoordinator">
            <div className={styles.clubHead}> CLUB CO-ORDINATORS : </div>
            {club.coordinator.map((student, idx) => (
              <li key={idx}>{student.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.btn}>
        <button
          className={styles.active}
          onClick={toggleTab}
        >
          {selectedTab === "about us" ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default ClubCard;