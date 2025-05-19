"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 - Page Not Found";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      bgcolor="background.default"
      px={2}
    >
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          boxShadow: 6,
          maxWidth: 480,
          width: "100%",
        }}
      >
        <CardContent>
          <SentimentDissatisfied color="error" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            404 - Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Looks like our junior developers took a wrong turn. We’re the best,
            but even we make mistakes sometimes!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/")}
          >
            Back to the Homepage
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
