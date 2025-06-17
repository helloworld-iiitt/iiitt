"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";

const videoSources: { [key: string]: string } = {
  Hindi: " https://drive.google.com/file/d/1M3lJlPEw9BLoavfYj_davsDjPvPizNaN/preview",
  Punjabi: "https://drive.google.com/file/d/1wsu0VJ5wDe_eXsgq463X0bDaZA8JLO9X/preview",
  Malayalam: "https://drive.google.com/file/d/1q271tiywgpyDsAXwkfJm-omuQl4mbyfD/preview",
  Marathi: "https://drive.google.com/file/d/1eTFshv_5oqEtrUTV-31fbh6775im_EIS/preview",
  Odiya: "https://drive.google.com/file/d/1ZGPFAhC3j89bKRVY3Z-zeiQvwJYeEMhB/preview",
  Gujrati: "https://drive.google.com/file/d/1TF95j80rB5-eAWOWns3XpF6_qfppGX6y/preview",
  Telugu: "https://drive.google.com/file/d/1PhJG49d79JVf0P5jHwROjmHRsY9I8SuS/preview",
  Bengali: " https://drive.google.com/file/d/1LQl5fkoF2DC05IhYWLSr3-D6mRqmQ7N-/preview",
  Tamil: "https://drive.google.com/file/d/1Ja1Z1L_Wshrx2giB2SI3DmE_xTgOi38v/preview",
  Kannada: "https://drive.google.com/file/d/14zNDklveTwIQzu7uq0TXleN_-IL2Q8TE/preview",
};
export default function AwarenessWeek() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState("Tamil");

  useEffect(() => {
    document.title = `Awareness Week | IIIT Tiruchirappalli`;
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <Card sx={{ border: "2px solid #2e8b57", mb: 4 }}>
      <CardContent>
        <Typography variant="body1" textAlign="center" mb={2}>
          Road Safety Anthem/Sadak Suraksha Abhiyan Anthem/ परवाह करेंगे, सुरक्षित रहेंगे
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          mb={3}
          flexWrap="wrap"
        >
          {Object.keys(videoSources).map((langKey) => (
            <Button
              key={langKey}
              variant={language === langKey ? "contained" : "outlined"}
              onClick={() => setLanguage(langKey)}
              sx={{

                border: language === langKey ? "none" : "2px solid #2e8b57",
                backgroundColor: language === langKey ? "#2e8b57" : "transparent",
                color: language === langKey ? "#fff" : "#2e8b57",
                fontWeight: "bold",
                px: 3,
                py: 1,
                m: 0.5,
                textTransform: "capitalize",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#2e8b57",
                  color: "#fff",
                  borderColor: "#2e8b57",
                },
              }}
            >
              {langKey}
            </Button>
          ))}
        </Stack>
        <Box
          ref={scrollRef}
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9 aspect ratio
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src={videoSources[language]}
            title="Road Safety Anthem"
            allow="autoplay"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              touchAction: "manipulation",
              WebkitOverflowScrolling: "touch",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
