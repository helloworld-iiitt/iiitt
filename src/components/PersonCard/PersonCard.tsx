import React from "react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "./PersonCard.module.css";
import nextConfig from "../../../next.config";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import { validURL } from "@/types/validator";






interface PersonCardProps {
  isHOD?:boolean;
  name: string;
  emailID?: string;
  src: string;
  src_type: "faculty" | "student" | "staff" | "Warden" | "phd";
  designation?: string;
  researchArea?: string;
  phone?: string;
  dept?: string;
  Incharge?: string;
  VidhwanLink?: string;
  Institute?: string;
  Room?: string;
  PersonalPage?: string;
  Supervisor?: string
  status?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  isHOD,
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
  PersonalPage,
  Supervisor,
  status
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.text}>
          <Link href="#" className={styles.name}>
            {name}
          </Link>
          {isHOD &&(<h4 style={{marginTop:"0.8rem"}}>Head of the Department</h4>)}
          <h4 >{designation}</h4>
          {/* INFO : see Departments Page */}
          {Supervisor && Supervisor.trim() && (
            <p className={styles.supervisor}>
              <strong>Supervisor:</strong> {Supervisor}
            </p>
          )}

        </div>

        <div className={styles.circleImg}>
          <Image
            src={validURL(src) ? src : `${nextConfig.env?.IMAGE}${src}`}
            alt={name}
            width={115}
            height={115}
            className={styles.profileImage}
            priority
          />

        </div>
      </div>

      <div className={styles.bottom}>
         {/* INFO : see Hostel Page */}
        {Room && Room.trim() && src_type === "Warden" && (
          <p className={styles.researchArea}>
            <strong>Room No: </strong>{Room}
          </p>
        )}
        {/* INFO : To display the students, department (see S&H) */}
        {dept && dept.trim() && (src_type === "Warden" || src_type === "phd") && (
          <p className={styles.researchArea}>
            {dept}
          </p>
        )}

        {researchArea && researchArea.trim() && (
          <p className={styles.researchArea}>
            <strong>Research:</strong> {researchArea}
          </p>
        )}
        {Supervisor && Supervisor.trim() && (
          <p className={styles.incharge}>
            <strong>Status: {status}</strong>
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
        {isHOD && dept && (
          <div className={styles.infoDiv}>
            <MailIcon className={styles.infoIcon} />
            <a href={`mailto:hod@${dept?.toLowerCase()}.iiitt.ac.in`} className={styles.info}>
            {`hod@${dept?.toLowerCase()}.iiitt.ac.in`}
            </a>
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
      {PersonalPage && PersonalPage.trim() && (
        <div className={styles.infoDiv}>
          <LanguageIcon className={styles.infoIcon} />
          <a
            href={PersonalPage}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.info}
          >
            More
          </a>
        </div>
      )}
    </div>
  );
};

export default PersonCard;
