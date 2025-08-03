/**
 *
 * Virtual Tour of IIITT
 *
 * external lib kuula used
 */
"use client";
import { useEffect, useRef } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";


export default function VirtualTour() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.title = `Virtual Tour | IIIT Tiruchirappalli`;
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);
  return (
    <Card sx={{ border: "2px solid #2e8b57", mb: 4 }}>
      <CardContent>
        <Typography variant="body1" textAlign="center" mb={2}>
          Explore IIIT Trichy through a 360° virtual experience.
        </Typography>

        <Box ref={scrollRef}
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 ratio
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://kuula.co/share/collection/7b7nS?logo=-1&info=0&fs=1&vr=1&zoom=1&initload=0&thumbs=1"
            title="Virtual Tour of IIITT"
            allow="fullscreen; vr; accelerometer; gyroscope"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              touchAction: "manipulation", // For Mobile Responsiveness
              WebkitOverflowScrolling: "touch",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
