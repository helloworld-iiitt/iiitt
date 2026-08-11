/**
 *
 * Right To Information Page
 *
 * fetches data from /json/committee/members/rti.json
 * additionally bottomLinks available in json
 *
 */
"use client";

import { RTIData, RTIReturn, RTIResponse } from "@/types/common.types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Collapse,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./rti.module.css";

export default function RTI() {
  const [rtiList, setRtiList] = useState<RTIData[]>([]);
  const [rtiReturns, setRtiReturns] = useState<RTIReturn[]>([]);
  const [bottomLinks, setBottonLinks] = useState<
    { label: string; href: string }[]
  >([]);
  const currentOfficers = rtiList.slice(0, 2);
  const tenureHistory = rtiList.slice(2);

  useEffect(() => {
    document.title = "RTI | IIIT Tiruchirappalli ";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchRTIData = async () => {
      try {
        const response = await fetch("/json/committee/members/rti.json");
        const data: RTIResponse = await response.json();
        setRtiList(data.data);
        setRtiReturns(data.rtiReturns);
        setBottonLinks(data.links);
      } catch (error) {
        console.error("Error fetching RTI data:", error);
      }
    };

    fetchRTIData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        className={styles.heading}
      >
        <Box component="span" fontWeight={300}>
          Right to Information Act
        </Box>
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Name and Address of Public Information Officers
      </Typography>

      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc", width: "50%" }}
              >
                First Appellate Authority
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
              >
                Public Information officer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                className={styles.tableCell}
                style={{ borderRight: "1px solid #ccc", width: "50%" }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  {currentOfficers[0] && (
                    <Image
                      src={`${nextConfig.env?.IMAGE}/${currentOfficers[0].src}`}
                      alt="Prof. G. Seetharaman"
                      width={180}
                      height={180}
                      style={{ borderRadius: 14 }}
                    />
                  )}
                  <Box>
                    <Typography component="div">
                      <strong>Prof. G. Seetharaman</strong>
                    </Typography>
                    Professor, <br />
                    Department of Electronics and Communication Engineering,{" "}
                    <br />
                    IIIT Tiruchirappalli, <br />
                    Chennai - 620012.
                    <br />
                    Email:
                    <a href="gsraman@iiitt.ac.in">registrar@iiitdm.ac.in</a>
                  </Box>
                </Box>
              </TableCell>

              <TableCell className={styles.tableCell}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  {currentOfficers[1] && (
                    <Image
                      src={`${nextConfig.env?.IMAGE}/${currentOfficers[1].src}`}
                      alt="Dr. Sindhu V"
                      width={180}
                      height={180}
                      style={{ borderRadius: 14 }}
                    />
                  )}
                  <Box>
                    <Typography component="div">
                      <strong>Dr. Sindhu V</strong>
                    </Typography>
                    Assitant Professor, <br />
                    Department of Science and Humanities, <br />
                    IIIT Tiruchirappalli, <br />
                    Chennai - 620012.
                    <br />
                    Email:
                    <a href="sindhuv@iiitt.ac.in">registrar@iiitdm.ac.in</a>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Details of CPIO in IIIT Tiruchirappalli from 2015 to 2026
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, mt: 4 }}>
        IIITT's RTI credentials were maintained by NIT Trichy as a mentor
        Institute. IIITT appointed PIO only in 2022.
      </Typography>
      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                SI. No.
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                Designation
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                Name
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                colSpan={2}
                align="center"
              >
                Tenure
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                From Date
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
              >
                To Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tenureHistory.map((officer, idx) => (
              <TableRow key={idx} className={styles.tableRow}>
                <TableCell
                  className={styles.tableCell}
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  {idx + 1}
                </TableCell>
                <TableCell
                  className={styles.tableCell}
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  {officer.designation}
                </TableCell>
                <TableCell
                  className={styles.tableCell}
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  {officer.name}
                </TableCell>
                <TableCell
                  className={styles.tableCell}
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  {officer.fromDate || "-"}
                </TableCell>
                <TableCell
                  className={styles.tableCell}
                  style={{ borderRight: "1px solid #ccc" }}
                >
                  {officer.toDate || "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Independent External Monitors (IEMs)
      </Typography>
      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className={styles.tableCell}>
                IIT Tiruchirappalli has not appointed the Independent External
                Monitors (IEMs) at present.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className={styles.tableCell}
                style={{ borderRight: "1px solid #ccc", width: "50%" }}
              >
                Information related to procurements
              </TableCell>
              <TableCell className={styles.tableCell}>
                <Link href="/rti/purchase-manuals">Purchase Manuals</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Details of Official Foreign Visits of Head of the Department (2024-26)
      </Typography>
      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                S.No.
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Name
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Title of the Conference
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                1.
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Prof. Usha Natesan Director (i/c), IIITT
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                No foreign visits{" "}
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                {" "}
                NA{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        About RTI Act
      </Typography>

      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                className={styles.tableCell}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Name & Title of the Act
              </TableCell>

              <TableCell className={styles.tableCell} style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/2.%20RTI%20Act%202005%20(English).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RTI Act 2005 (English)
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/3.%20RTI%20Act%202005%20(Hindi).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RTI Act 2005 (Hindi)
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className={styles.tableCell}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Definition
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                Right to Information means the right to:
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>Inspection of work, documents, records</li>
                  <li>
                    Taking notes, extracts, certified copies of documents or
                    records
                  </li>
                  <li>Taking certified samples of material</li>
                  <li>
                    Obtaining information in the form of diskettes, floppies,
                    tapes, video cassettes or in any other electronic mode or
                    through printouts where such information is stored in a
                    computer or in any other device subject to relevant
                    provisions in this regard
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className={styles.tableCell}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Objective/purpose of the Act
              </TableCell>
              <TableCell className={styles.tableCell}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    To provide available information of the Institute as
                    enshrined in RTI ACT to the Indian citizen on payment of
                    prescribed fees.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className={styles.tableCell}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
              >
                Users
              </TableCell>
              <TableCell className={styles.tableCell}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>Citizens of India</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Proactive Disclosure under Section 4 of RTI Act 2005
      </Typography>

      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                Article under 4(1)(b)
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                Requirement under the Act
              </TableCell>
              <TableCell
                className={styles.tableHead}
                sx={{ fontWeight: "bold" }}
                style={{ borderRight: "1px solid #ccc" }}
                rowSpan={2}
              >
                Disclosure
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (i)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The particulars of its organization, functions & duties[Section
                4(1)(b)(i)]
              </TableCell>
              <TableCell>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="https://iiitt.ac.in/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Brief Historical Background
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/4.%20Institute's%20Organogram.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Institute's Organogram
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/partners"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Public Private Partnership (PPP)
                    </a>
                    The Industry Partners of IIITT are Tata Consultancy Services
                    (TCS), Cognizant Technology Solutions (CTS), Infosys, Ramco
                    Systems, Navitas (TAKE Solutions), and ELCOT.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (ii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The powers & duties of its officers and employees.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                Work distribution in IIIT Tiruchirappalli
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="https://iiitt.ac.in/director"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Institute Administration-Director
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://iiitt.ac.in/registrar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Institute Administration-Registrar
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/faculty"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Employees{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/5.%20Nodal%20Officers.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Nodal Officers
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (iii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The procedure followed in the decision making process, including
                channels of supervision and accountability.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                As per
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIIT_Act_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IIIT Act 2017
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIITT%20Statutes.pdf "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Statutes
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (iv)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The norms set by it for the discharge of its functions.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                As per
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIIT_Act_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IIIT Act 2017
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIITT%20Statutes.pdf "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Statutes
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (v)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The rules, regulations, instructions, manuals and records, held
                by it or under its control or used by its employees for
                discharging its functions
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                As per
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIIT_Act_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IIIT Act 2017
                    </a>
                  </li>

                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIITT%20Statutes.pdf "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Statutes
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (vi)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                A statement of the categories of documents that are held by it
                or under its control.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIIT_Act_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IIIT Act 2017
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/notices/IIITT%20Statutes.pdf "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Statutes
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/annualreports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Annual Accounts and Reports
                    </a>
                  </li>

                  <li>All records of operations of the organization.</li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (vii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The particulars of any arrangement that exists for consultation
                with, or representation by, the members of the public in
                relation to the formulation of its policy or implementation
                thereof
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                A statement of the
                cahttp://store.iiitt.ac.in/downloads/RTI_2026/RTI/12.%20Third%20Party%20Transparency%20Audit%20Report%202024-25.pdftegories
                of documents that are held by it or under its control.
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    The Board of Governors is the apex decision making body of
                    IIIT Tiruchirappalli, the Senate for academic and the
                    Finance Committee for financial matters. They are
                    represented by eminent persons from industry, academic
                    community, professional bodies and the nominees of the Govt.
                    of India etc. who help in the formulation and implementation
                    of policies and programs.
                  </li>

                  <li>
                    Different local committees are formed on need basis to
                    advice technical/financial matters and other aspects even in
                    routine functions of the Institute.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (viii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                A statement of the boards, councils, committees and other bodies
                consisting of two or more persons constituted as its part or for
                the purpose of its advice, and as to whether meetings of those
                boards councils, committees and other bodies are open to the
                public,or the minutes of such meetings are accessible for public
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                Following are the Main Committees / Governing body of the
                Institute:
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Current Chairman of the
                    <a
                      href="https://iiitt.ac.in/bog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Board of Governors
                    </a>
                    is Shri. Anil Kumble.
                  </li>

                  <li>
                    Registrar (i/c), IIITT is the Ex-officio Member Secretary of
                    the BOG.
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/fc "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Finance Committee
                    </a>
                    The Finance Committee of the Institute has the
                    responsibility to look after resource mobilization, control
                    of expenditure, etc. It is also responsible for stimulating
                    resource generation from sources other than Government such
                    as sponsored projects, research, consultancy, etc. and
                    promotes Industry Institute Interaction.
                  </li>

                  <li>
                    The Chairman of BOG ex-officio of the Institute is the
                    Chairman of Finance Committee while Registrar (i/c), IIITT
                    is the Secretary.
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/bwc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Building and Works Committee
                    </a>
                    BWC of the Institute comprises of various statutory members
                    who advised upon the building and other infrastructural
                    requirements of the Institute keeping in view its future
                    plans and projections. Director, IIITT is the Ex-officio
                    Chairman of the Building & Works Committee.
                  </li>

                  <li>
                    <a
                      href="https://iiitt.ac.in/grievance-redressal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Grievance Redressal
                    </a>
                    The Grievance Redressal mechanism of the Institute looks
                    after all grievances of students, employees and the public
                    at large relation to the Institute. The Committee works as
                    per directions issued by the Board of Governors/Govt. It
                    also includes the Anti Ragging Committee to prohibit,
                    prevent and eliminate the scourge of ragging. Competent
                    authority of the Institute has constituted Anti-Ragging
                    Committee. The Internal Complaints Committee has been formed
                    to prevent the sexual harassment of women at workplace. The
                    Committee works as per directions issued by the Board of
                    Governors/Govt.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (ix)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                A directory of its officers and employees.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="https://iiitt.ac.in/director"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Directory of Officials of IIIT Tiruchirappalli
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (x)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Monthly remuneration (pay and allowances) of all the employees.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/7.%20Monthly%20Remuneration%20of%20Employees.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Monthly remuneration
                    </a>
                    of all the employees.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xi)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The budget allocated to each of its agency, indicating the
                particulars of all plans, proposed expenditures and reports on
                disbursements made
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Please see
                    <a
                      href="https://iiitt.ac.in/annualreports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Annual Account
                    </a>
                  </li>

                  <li>
                    There is no separate Object Head in IIITT like other CFTIs
                    as it is under PPP mode. All expenditure (recurring,
                    non-recurring and salary) is booked under the tuition fee
                    paid by the students.
                  </li>

                  <li>
                    Hostel expenses are also booked under the hostel fee paid by
                    the students. Other funds such as Project, consultancy or
                    short term courses is utilized as per the sanction order
                    with the approval of the competent authority.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The manner of execution of subsidy programmes, including the
                amounts allocated and the details of beneficiaries of such
                programmes.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    IIIT Tiruchirappalli waives Tuition Fees
                    <a
                      href="https://iiitt.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fees Structure
                    </a>
                    for SC and ST category students based on parental income for
                    B.Tech. Programs offered from Academic Year 2026-27. The
                    Institute waived Tuition Fees for SC and ST category
                    students so far.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xiii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Particulars of recipients of concessions, permits or
                authorization granted by it.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Students receive
                    <a
                      href="https://iiitt.ac.in/scholarship"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      National Scholarship
                    </a>
                    through NSP
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xiv)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Details in respect of the information, available to or held by
                it, reduced in an electronic form.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    As available on the website of IIIT Tiruchirappalli
                    <a
                      href="https://iiitt.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.iiitt.ac.in
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xv)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                The particulars of facilities available to citizens for
                obtaining information, including the working hours of a library
                or reading room, if maintained for public use.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Citizens have the facility to obtain information from the
                    PIO. IIIT Tiruchirappalli monitor five working days a week
                    from Monday-Friday and follows the weekly holiday on
                    Saturday and Sunday. The working hours of the IIIT
                    Tiruchirappalli are from 09.00 a.m. to 05.30 p.m.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "10%" }}
              >
                (xvi)
              </TableCell>

              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "40%" }}
              >
                The names, designations and other particulars of the Public
                Information Officers
              </TableCell>

              <TableCell style={{ width: "50%" }}>
                <strong>First Appellate Authority</strong>
                <br />
                Prof. G. Seetharaman
                <br />
                Professor,
                <br />
                Department of Electronics and Communication Engineering,
                <br />
                IITT Tiruchirappalli, Chennai - 620012.
                <br />
                Email:{" "}
                <a href="mailto:gsrama@iiitt.ac.in">gsrama@iiitt.ac.in</a>
                <br />
                <br />
                <strong>Public Information Officer</strong>
                <br />
                Dr. Sindhu V<br />
                Assistant Professor
                <br />
                Department of Science and Humanities
                <br />
                IITT Tiruchirappalli, Chennai - 620012.
                <br />
                Email:{" "}
                <a href="mailto:sindhuv@iiitt.ac.in">sindhuv@iiitt.ac.in</a>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "10%" }}
              ></TableCell>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "40%" }}
              >
                Programs to advance understanding of RTI
              </TableCell>
              <TableCell style={{ width: "50%" }}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>Not attended any program</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "10%" }}
              ></TableCell>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "40%" }}
              >
                Consultancy committee of key stakeholders for advice on suomotu
                disclosure
              </TableCell>
              <TableCell style={{ width: "50%" }}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>Not Available</li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "10%" }}
              ></TableCell>
              <TableCell
                style={{ borderRight: "1px solid #ccc", width: "40%" }}
              >
                Committee of PIOs/FAAs with rich experience in RTI to identify
                frequently sought information under
              </TableCell>
              <TableCell style={{ width: "50%" }}>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  <li>
                    Current FAA and PIO are the most experienced in handling
                    RTIs at present.{" "}
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xvii)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Details of Parliament Questions and replies
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Please see
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/9.%20Parlimentary%20Questions%20and%20Replies%20for%202025-26.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Parliament Questions and Replies
                    </a>
                    Year 2025-26
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xix)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Such other information as may be prescribed
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    All such information is updated time to time and available
                    on the website of IIIT Tiruchirappalli.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                1.3 of DoPT guide lines
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Transfer Policy and Transfer Order
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>Not applicable for IIIT Tiruchirappalli</li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                1.4 of DoPT guide lines
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                RTI Applications/ First Appeals and their replies
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/10.%20RTI%20Quarterly%20Returns%202025-26.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RTI Annual Quarterly Return 2025-26
                    </a>
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                1.5 of DoPT guide lines
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                CAG & PAC Paras and the Action Taken Reports
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                Please see Annual Accounts
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    IIITT is submitting the Annual Reports & Accounts including
                    SAR which is placed in both the Parliamentary Houses. The
                    Ministry sends the acknowledgement of the same to the
                    Institute.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                1.6 of DoPT guide lines
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Citizens Charter
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    Not applicable for IIIT Tiruchirappalli as no civic service
                    is directly provided.
                  </li>
                </ul>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                (xx)
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Whether STQC certification obtained and its validity.
              </TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>
                    The Institute recently submitted the Cyber Crisis Management
                    Plan (CCMP) and conducted Cyber Security Audit as per the
                    directions received from MeiTy. Further, the other
                    certifications will be explored in future.
                  </li>

                  <li>
                    The Institute has
                    <a
                      href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/11.%20STQC%20For%20CCTV%20Cameras%20-%20CPPLUS.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      STQC Certification
                    </a>
                    for the CCTV Cameras installed in the campus.
                  </li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Third Party Transparency Audit Report
      </Typography>

      <Box sx={{ p: 3, bgcolor: "white", color: "green", borderRadius: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            href="http://store.iiitt.ac.in/downloads/RTI_2026/RTI/12.%20Third%20Party%20Transparency%20Audit%20Report%202024-25.pdf"
            target="_blank"
          >
            Third Party Transparency Audit Report 2024-25
          </Button>
        </Box>
      </Box>

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Disciplinary action has been proposed/ taken against Employees
      </Typography>
      <TableContainer component={Paper} className={styles.table} sx={{ mb: 4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>RTI disclosure on Disciplinary Cases</TableCell>
              <TableCell
                className={styles.tableCell}
                style={{ borderRight: "1px solid #ccc" }}
              ></TableCell>
              <TableCell style={{ width: "70%" }}>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>Pending cases for major/minor penalty: NIL</li>

                  <li>Finalized cases for major/minor penalty: NIL</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Important Links
        </Typography>

        <List dense>
          {bottomLinks.map((item, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <OpenInNewIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <Link
                  href={item.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
