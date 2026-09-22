"use client";

import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";

export default function MedicalInsurancePage() {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Medical Insurance | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    const fetchDocumentsData = async () => {
      try {
        const response = await fetch("/json/medical_insurance/documents.json");
        const data = await response.json();
        setDocuments(data.data);
      } catch (err) {
        console.error("Error fetching Documents data:", err);
      }
    };

    fetchDocumentsData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: "#2e8b57",
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5rem",
        }}
      >
        Medical Insurance
      </Typography>

      <Typography variant="body1" paragraph>
        All students of IIIT Tiruchirappalli enrolled in UG, PG, and Full-Time
        Ph.D. programmes are covered under the Students Group Mediclaim
        Insurance Policy provided by National Insurance Company Limited.
      </Typography>

      <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
        Policy Details
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1">
          <strong>Policy Name:</strong> Vidyarthi Mediclaim for Students
        </Typography>
        <Typography variant="body1">
          <strong>UIN Number:</strong> NICHLIP21113V032021
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
        TPA Contact Details
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1">
          Medi Assist Insurance TPA Pvt. Ltd.
        </Typography>
        <Typography variant="body1">
          Mr. Maheswara Pandian - 7094496963
        </Typography>
        <Typography variant="body1">Ms. Gayathri - 6366884480</Typography>
        <Typography variant="body1">
          Address: Medi Assist Insurance TPA (Pvt) Ltd, No 20/2, 1st Floor,
          Ponmeni Narayan Street, SS Colony, Madurai 626016.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
        Claim Process
      </Typography>

      <Typography variant="body1" paragraph>
        Students should intimate the claim immediately and submit the required
        claim documents within 15 days. Delayed intimation may result in
        rejection of the claim, subject to the terms and conditions of the
        policy.
      </Typography>

      <Typography variant="body1" paragraph>
        Students should inform the Medi Assist TPA team and the hospital
        authorities before hospitalization, wherever applicable, to facilitate
        the claim process and cashless treatment under the policy.
      </Typography>

      <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
        Claim Forms and Policy Documents
      </Typography>

      <List dense sx={{ pl: 2 }}>
        <ListItem disablePadding>
          <ListItemText
            primary={
              <Link href={`${nextConfig.env?.DOCUMENT}/Medi_Ins/Medi Assist - NOC format.pdf`} target="_blank" underline="hover">
                Medi Assist – Reimbursement Claim Form
              </Link>
            }
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={
              <Link href={`${nextConfig.env?.DOCUMENT}/Medi_Ins/Medi Assist - Reimbursement Claim Form.pdf`} target="_blank" underline="hover">
                Medi Assist – NOC Format
              </Link>
            }
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={
              <Link href={`${nextConfig.env?.DOCUMENT}/Medi_Ins/Vidyarthi Prospectus.pdf`} target="_blank" underline="hover">
                Vidyarthi Mediclaim Policy Prospectus
              </Link>
            }
          />
        </ListItem>
      </List>

      {documents ? (
        <>
          <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
            Documents Required for Claim Process
          </Typography>

          <List sx={{ listStyleType: "decimal", pl: 4 }}>
            {documents.map((document, idx) => (
              <ListItem key={idx} disablePadding sx={{ display: "list-item" }}>
                <ListItemText primary={document.name} />
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <></>
      )}

      <Typography variant="h5" sx={{ mt: 4, mb: 2, color: "#2e8b57" }}>
        For Further Assistance
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1">Dr. M. Ambika</Typography>
        <Typography variant="body1">
          Assistant Professor – Insurance (i/c)
        </Typography>
        <Typography variant="body1">Email: ambikam@iiitt.ac.in</Typography>
        <Typography variant="body1">Mobile: +91 9894890900</Typography>
      </Box>
    </Container>
  );
}
