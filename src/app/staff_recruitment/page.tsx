/**
 * Faculty and Staff Recruitment Page
 *
 * Displays information about faculty and staff recruitment opportunities
 * at IIIT Tiruchirappalli
 *
 */

"use client";

import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from "./staffrec.module.css";

interface StaffRecruitmentData {
  title: string;
  description: string;
  currentOpenings: {
    faculty: {
      title: string;
      description: string;
      departments: Array<{
        name: string;
        positions: Array<{
          title: string;
          qualification: string;
          experience: string;
          specializations: string[];
        }>;
      }>;
    };
    staff: {
      title: string;
      description: string;
      categories: Array<{
        name: string;
        positions: Array<{
          title: string;
          qualification: string;
          experience: string;
          responsibilities: string[];
        }>;
      }>;
    };
  };
  applicationProcess: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
      link?: string;
    }>;
    requiredDocuments: string[];
  };
  contact: {
    title: string;
    recruitment: {
      title: string;
      office: string;
      address: {
        line1: string;
        line2: string;
        line3: string;
        line4: string;
      };
      email: string;
      phone: string;
    };
  };
  importantLinks: Array<{
    title: string;
    link: string;
    description: string;
  }>;
}

const StaffRecruitment = () => {
  const [recruitmentData, setRecruitmentData] = useState<StaffRecruitmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Faculty and Staff Recruitment | IIIT Tiruchirappalli";
    
    // Fetch recruitment data
    const fetchData = async () => {
      try {
        const response = await fetch('/json/general/staff_recruitment.json');
        const data = await response.json();
        setRecruitmentData(data);
      } catch (error) {
        console.error('Error fetching recruitment data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <Grid container>
          <Grid size={12}>
            <Typography variant="h4" align="center" sx={{ marginTop: 4 }}>
              Loading...
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  if (!recruitmentData) {
    return (
      <div className="page-container">
        <Grid container>
          <Grid size={12}>
            <Typography variant="h4" align="center" sx={{ marginTop: 4 }}>
              Error loading recruitment data
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Grid container>
        <Grid size={1} />
        <Grid container size={10} className={styles.container}>
          <Grid size={12}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              align="center"
              color="#2e8b57"
              sx={{ fontWeight: 300, marginBottom: 4 }}
            >
              {recruitmentData.title}
            </Typography>
          </Grid>

          <Grid size={12}>
            <Typography variant="h5" gutterBottom sx={{ marginBottom: 3 }}>
              Join IIIT Tiruchirappalli - A Premier Institute of National Importance
            </Typography>
            
            <Typography variant="body1" paragraph>
              {recruitmentData.description}
            </Typography>
          </Grid>

          {/* Faculty Positions */}
          <Grid size={12} sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom className={styles.themeText}>
              {recruitmentData.currentOpenings.faculty.title}
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />

            <Typography variant="body1" paragraph>
              {recruitmentData.currentOpenings.faculty.description}
            </Typography>

            {recruitmentData.currentOpenings.faculty.departments.map((dept, index) => (
              <Accordion key={index} sx={{ marginBottom: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box display="flex" alignItems="center">
                    <SchoolIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{dept.name}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {dept.positions.map((position, posIndex) => (
                    <Card key={posIndex} sx={{ marginBottom: 2 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom color="primary">
                          {position.title}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Qualification:</strong> {position.qualification}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Experience:</strong> {position.experience}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Specializations:</strong>
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {position.specializations.map((spec, specIndex) => (
                            <Chip key={specIndex} label={spec} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Staff Positions */}
          <Grid size={12} sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom className={styles.themeText}>
              {recruitmentData.currentOpenings.staff.title}
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />

            <Typography variant="body1" paragraph>
              {recruitmentData.currentOpenings.staff.description}
            </Typography>

            {recruitmentData.currentOpenings.staff.categories.map((category, index) => (
              <Accordion key={index} sx={{ marginBottom: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box display="flex" alignItems="center">
                    <WorkIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{category.name}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {category.positions.map((position, posIndex) => (
                    <Card key={posIndex} sx={{ marginBottom: 2 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom color="primary">
                          {position.title}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Qualification:</strong> {position.qualification}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Experience:</strong> {position.experience}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 1 }}>
                          <strong>Key Responsibilities:</strong>
                        </Typography>
                        <List dense>
                          {position.responsibilities.map((resp, respIndex) => (
                            <ListItem key={respIndex}>
                              <ListItemIcon>
                                <CheckCircleIcon fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={resp} />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>

          {/* Application Process */}
          <Grid size={12} sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom className={styles.themeText}>
              {recruitmentData.applicationProcess.title}
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />
            
            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Application Steps</Typography>
                <List>
                  {recruitmentData.applicationProcess.steps.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: '#2e8b57',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 'bold'
                          }}
                        >
                          {step.step}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={step.title}
                        secondary={step.description}
                      />
                      {step.link && (
                        <Button
                          variant="outlined"
                          size="small"
                          href={step.link}
                          className={styles.link}
                        >
                          Visit
                        </Button>
                      )}
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card sx={{ marginBottom: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Required Documents</Typography>
                <List>
                  {recruitmentData.applicationProcess.requiredDocuments.map((doc, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={doc} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          

          {/* Contact Information */}
          <Grid size={12} sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom className={styles.themeText}>
              {recruitmentData.contact.title}
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />
            
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {recruitmentData.contact.recruitment.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>{recruitmentData.contact.recruitment.office}</strong><br />
                  {recruitmentData.contact.recruitment.address.line1}<br />
                  {recruitmentData.contact.recruitment.address.line2}<br />
                  {recruitmentData.contact.recruitment.address.line3}<br />
                  {recruitmentData.contact.recruitment.address.line4}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> <a href={`mailto:${recruitmentData.contact.recruitment.email}`}>
                    {recruitmentData.contact.recruitment.email}
                  </a><br />
                  <strong>Phone:</strong> <a href={`tel:${recruitmentData.contact.recruitment.phone}`}>
                    {recruitmentData.contact.recruitment.phone}
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Important Links */}
          <Grid size={12} sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom className={styles.themeText}>
              Important Links
            </Typography>
            <Divider sx={{ marginBottom: 3 }} />
            
            <Grid container spacing={2}>
              {recruitmentData.importantLinks.map((link, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {link.title}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {link.description}
                      </Typography>
                      <Button
                        variant="contained"
                        href={link.link}
                        className={styles.link}
                        target={link.link.startsWith('http') ? '_blank' : '_self'}
                      >
                        Visit
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default StaffRecruitment;
