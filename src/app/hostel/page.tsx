"use client";

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2"
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./hostel.module.css";
import PersonCard from "@/components/PersonCard/PersonCard";
import TableComponent from "@/components/tablecomponent/tablecomponent";
import {HostelData,MessData,FormData} from "@/types/hostel.types";

export default function Hostel() {
  const [hostelInfo, setHostelInfo] = useState<HostelData[] | null>(null);
  const [forms, setForms] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [messInfo, setMessInfo] = useState<MessData[] | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [formRes, hostelRes] = await Promise.allSettled([
        fetch("/json/students/hostelforms.json"),
        fetch("/json/students/hostels.json"),
      ]);

      if (hostelRes.status === "fulfilled") {
        const hostelJson = await hostelRes.value.json();
        setHostelInfo(hostelJson.Hostel);
        setMessInfo(hostelJson.Mess);
      }

      if (formRes.status === "fulfilled") {
        const formJson = await formRes.value.json();
        setForms(formJson);
      }
    } catch (error) {
      console.error("Failed to fetch hostel/form data", error);
      setForms([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = "Hostel | IIIT Tiruchirappalli";
    fetchData();
    return () => {
      document.title = "IIIT Trichy";
    };
  }, [fetchData]);

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: 2 }}>
      {/* Residence Hall Section */}
      <Typography variant="h2" className={styles.title}>
        Residence Hall
      </Typography>

      <Grid container spacing={3} className={styles.cardContainer}>
        {hostelInfo?.map((info, index) => (
          <Grid size={{xs:12, sm:10 ,md:6}} key={index} gap={2}>
            <Card  sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          boxShadow: 3,
        }}>
              <Image
                src={`${nextConfig.env?.DOCUMENT}${info.Hostelsrc}`}
                alt={info.title}
                width={680}
                height={462}
                style={{ width: "100%", height:"350" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {info.desc}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Chief Warden
                </Typography>
                <PersonCard
                  name={info.Warden}
                  src={info.WardenImage}
                  Room={info.RoomNo}
                  src_type="Warden"
                  dept={info.Department}
                  emailID={info.emailId}
                  designation=""
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className={styles.sectiondivider}></div>

      {/* Mess Hall Section */}
      <Typography variant="h2" className={styles.title}>
        Mess Hall
      </Typography>

      <Grid container spacing={3} className={styles.cardContainer}>
        {messInfo?.map((mess, index) => (
          <Grid size={{xs:12, sm:10 ,md:6}} key={index}>
            <Card  sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          boxShadow: 3,
        }}>
              <Image
                src={`${nextConfig.env?.DOCUMENT}${mess.Hostelsrc}`}
                alt={mess.title}
                width={600}
                height={462}
                style={{ width: "100%", height:"auto" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {mess.desc}
                </Typography>

                <Box sx={{ display: "grid", gap: 1 }}>
                  {Object.entries(mess.MessTimings).map(([meal, time]) => (
                    <Typography key={meal} variant="body2">
                      <strong>{meal}:</strong> {time}
                    </Typography>
                  ))}
                </Box>

                <Box mt={2}>
                  <PersonCard
                    name={mess.Warden}
                    src={mess.WardenImage}
                    Room={mess.RoomNo}
                    src_type="Warden"
                    dept={mess.Department}
                    emailID={mess.emailId}
                    designation=""
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className={styles.sectiondivider}></div>

      {/* Forms Section */}
      <Typography variant="h2" className={styles.title}>
        Hostel Forms
      </Typography>

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : forms && forms.length > 0 ? (
        <Box mt={2}>
          <TableComponent
            loading={loading}
            columns={[]}
            isMeetingTable={true}
            members={forms}
          />
        </Box>
      ) : (
        <Typography variant="body1" color="error" textAlign="center">
          No forms available.
        </Typography>
      )}
    </Box>
  );
}
