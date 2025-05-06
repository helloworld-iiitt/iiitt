import React from "react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // Icon for external link
import styles from "./PersonCard.module.css"; // Import CSS Module
import nextConfig from "../../../next.config";
import SchoolIcon from "@mui/icons-material/School";

interface PersonCardProps {
  name: string;
  emailID: string;
  src: string;
  src_type: "faculty" | "student" | "staff"|"Warden";
  designation: string;
  researchArea?: string;
  phone?: string;
  dept?: string;
  Incharge?: string;
  VidhwanLink?: string;
  Institute?: string;
  Room?:string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  emailID,
  src,
  src_type,
  designation,
  researchArea,
  phone,
  dept,
  Incharge,
  VidhwanLink,
  Institute,
  Room,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.text}>
          <Link href="#" className={styles.name}>
            {name}
          </Link>
          <h4>{designation}</h4>
        </div>

        <div className={styles.circleImg}>
          <Image
            src={`${nextConfig.env?.IMAGE}${src}`}
            alt={name}
            width={115}
            height={115}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>

      <div className={styles.bottom}>
      {Room && Room.trim() &&src_type==="Warden" && (
          <p className={styles.researchArea}>
           <strong>Room No: </strong>{Room}
          </p>
        )}
      {dept && dept.trim() &&src_type==="Warden" && (
          <p className={styles.researchArea}>
           {dept}
          </p>
        )}

        {researchArea && researchArea.trim() && (
          <p className={styles.researchArea}>
            <strong>Research:</strong> {researchArea}
          </p>
        )}

        {Incharge && Incharge.trim() && (
          <p className={styles.incharge}>
            <strong>Incharge:</strong> {Incharge}
          </p>
        )}

        {Institute && (
          <div className={styles.infoDiv}>
            <SchoolIcon className={styles.infoIcon} />
            {Institute}
          </div>
        )}

        {emailID && emailID.trim() && (
          <div className={styles.infoDiv}>
            <MailIcon className={styles.infoIcon} />
            <a href={`mailto:${emailID}`} className={styles.info}>
              {emailID}
            </a>
          </div>
        )}

        {phone && phone.trim() && (
          <div className={styles.infoDiv}>
            <LocalPhoneIcon className={styles.infoIcon} />
            <a href={`tel:${phone}`} className={styles.phone}>
              {phone}
            </a>
          </div>
        )}

        {VidhwanLink && VidhwanLink.trim() && (
          <div className={styles.infoDiv}>
            <OpenInNewIcon className={styles.infoIcon} />
            <a
              href={VidhwanLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.info}
            >
              Vidwan Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
