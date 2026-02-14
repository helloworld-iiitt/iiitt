/**
 *
 * Hostel And Mess Page
 *
 * fetches data from /json/student/hostelforms
 * fetches data from /json/student/hostels (contains both mess and hostel details)
 *
 * utilizes PersonCard,TableComponent
 *
 */

"use client";

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import nextConfig from "../../../next.config";
import styles from "./hostel.module.css";
import PersonCard from "@/components/PersonCard/PersonCard";
import TableComponent from "@/components/tablecomponent/tablecomponent";
import { GymData, HostelData, MessData } from "@/types/hostel.types";
import FeedIcon from "@mui/icons-material/Feed";
import MainCarousel from "@/components/Carousel/MainCarousel";

export default function Hostel() {
  const [hostelInfo, setHostelInfo] = useState<HostelData[] | null>(null);
  const [forms, setForms] = useState<FormData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [messInfo, setMessInfo] = useState<MessData[] | null>(null);
  const [gymInfo, setGymInfo] = useState<GymData[] | null>(null);
  const [carouselData, setCarouselData] = useState<{ data: any[] }>({
    data: [],
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [formRes, hostelRes, carouselRes] = await Promise.allSettled([
        fetch("/json/students/hostelforms.json"),
        fetch("/json/students/hostels.json"),
        fetch("/json/students/hostel_carousel.json"),
      ]);

      if (hostelRes.status === "fulfilled") {
        const hostelJson = await hostelRes.value.json();
        setHostelInfo(hostelJson.Hostel);
        setMessInfo(hostelJson.Mess);
        setGymInfo(hostelJson.Gym);
      }

      if (formRes.status === "fulfilled") {
        const formJson = await formRes.value.json();
        setForms(formJson);
      }

      if (carouselRes.status === "fulfilled") {
        const carouselJson = await carouselRes.value.json();
        setCarouselData(carouselJson);
      }
    } catch (error) {
      console.error("Failed to fetch hostel/form data", error);
      setForms([]);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(carouselData);

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
          <Grid size={{ xs: 12, sm: 10, md: 6 }} key={index} gap={2}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Image
                src={`${nextConfig.env?.DOCUMENT}${info.Hostelsrc}`}
                alt={info.title}
                width={680}
                height={462}
                style={{ width: "100%", height: "350" }}
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

      <Grid container spacing={4} alignItems="stretch">
        {/* Mess Hall Section */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" flexDirection="column">
          <Typography variant="h2" className={styles.title}>
            Mess Hall
          </Typography>

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            className={styles.cardContainer}
            sx={{ flex: 1 }}
          >
            {messInfo?.map((mess, index) => (
              <Grid key={index} size={{ xs: 12 }} display="flex">
                <Card
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <Image
                    src={`${nextConfig.env?.DOCUMENT}${mess.Hostelsrc}`}
                    alt={mess.title}
                    width={786}
                    height={600}
                    style={{ objectFit: "fill" }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {mess.desc}
                    </Typography>

                    <Box sx={{ display: "grid", gap: 1 }}>
                      {Object.entries(mess.MessTimings).map(
                        ([type, meal_obj]) => (
                          <Typography key={type} variant="body1">
                            <strong>{type}</strong>
                            {Object.entries(meal_obj).map(([meal, time]) => (
                              <Typography key={meal} variant="body2">
                                <strong>{meal}: </strong>
                                {time}
                              </Typography>
                            ))}
                          </Typography>
                        ),
                      )}
                    </Box>

                    <Box mt="auto">
                      <PersonCard
                        name={mess.Warden}
                        src={mess.WardenImage}
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
        </Grid>

        {/* Gym Section */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" flexDirection="column">
          <Typography variant="h2" className={styles.title}>
            Gym
          </Typography>

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            className={styles.cardContainer}
            sx={{ flex: 1 }}
          >
            {gymInfo?.map((gym, index) => (
              <Grid key={index} size={{ xs: 12 }} display="flex">
                <Card
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <div className="carousel">
                    <MainCarousel
                      images={carouselData.data}
                      height={600}
                      imageFit="cover"
                      repeat={false}
                      basePath={nextConfig.env?.DOCUMENT}
                    />
                  </div>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {gym.desc}
                    </Typography>

                    <Typography>
                      <strong>Timings:</strong>
                    </Typography>
                    <Box sx={{ display: "grid", gap: 1 }}>
                      {gym.GymTimings.map((time, idx) => (
                        <Typography key={idx} variant="body2">
                          {time}
                        </Typography>
                      ))}
                    </Box>

                    <Box mt={2}>
                      {gym.forms.map((form, i) => (
                        <Box
                          key={i}
                          display="flex"
                          alignItems="center"
                          gap={1}
                          mb={1}
                        >
                          <FeedIcon fontSize="small" />
                          <Typography variant="body1">
                            <a
                              href={`${nextConfig.env?.DOCUMENT}/${form.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {form.title}
                            </a>
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box mt="auto">
                      <PersonCard
                        name={gym.Warden}
                        src={gym.WardenImage}
                        src_type="Warden"
                        dept={gym.Department}
                        emailID={gym.emailId}
                        designation=""
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
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
