"use client";

import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import nextConfig from "../../../next.config";

type LinkItem = {
  name: string;
  href: string;
};

const C2SProject = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const base=`${process.env.NEXT_PUBLIC_CDN_IIITT}${process.env.NEXT_PUBLIC_DOCUMENT_URL}` || "http://store.iiitt.ac.in/downloads/c2s/bgimg2.jpg";

  useEffect(() => {
    document.title = "C2S Project";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/general/c2s_links.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: LinkItem[]) => {
        setLinks(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to load links:", err);
        setError("Unable to load project links. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/images/bgimg2.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "100% 100%",
        color: "white",
        minHeight: "100vh",
        paddingBottom: "2rem",
      }}
    >
      <Box textAlign="center" pt={2}>
        <Image
          src={`${nextConfig?.env?.DOCUMENT}/c2s/c2s_logo.png`}
          alt="C2S Logo"
          width={1000}
          height={130}
          layout="responsive"
        />
      </Box>

      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{
          textDecoration: "underline",
          mt: 3,
          color: "white",
        }}
      >
        Chip-to-Startup Programme
      </Typography>

      <Box display="flex" justifyContent="center" mt={4}>
        <Card
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            maxWidth: 600,
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <CardContent>
            {loading && (
              <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress color="inherit" />
              </Box>
            )}

            {error && (
              <Alert severity="error" sx={{ backgroundColor: "rgba(255,0,0,0.1)", color: "white", mt: 2 }}>
                {error}
              </Alert>
            )}

            {!loading && !error && links.length === 0 && (
              <Typography align="center" sx={{ color: "white", mt: 2 }}>
                No links available at the moment.
              </Typography>
            )}

            {links.map((link, index) => (
              <Typography key={index} align="center" sx={{ marginBottom: 2 }}>
                <Link
                  href={`${nextConfig?.env?.DOCUMENT}/${link.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{
                    color: "white"
                  }}
                >
                  {link.name}
                </Link>
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default C2SProject;
