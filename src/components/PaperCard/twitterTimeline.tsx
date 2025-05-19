"use client";

import { useEffect, useState } from "react";
import { Paper, Typography, CircularProgress, Box } from "@mui/material";

interface TwitterTimelineProps {
  username: string;
  theme?: "light" | "dark";
  height?: number;
}

const TwitterTimeline: React.FC<TwitterTimelineProps> = ({
  username,
  theme = "light",
  height = 600,
}) => {
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const loadTwitterScript = () => {
      if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        setLoading(false);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => setLoading(false);
      script.onerror = () => {
        setLoading(false);
        setFailed(true);
      };

      document.body.appendChild(script);

      timeoutId = setTimeout(() => {
        setLoading(false);
        if (!document.querySelector(".twitter-timeline-rendered")) {
          setFailed(true);
        }
      }, 10000);
    };

    loadTwitterScript();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [username]);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        width: "100%",
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        boxShadow:"none"
      }}
    >
      <Typography variant="h6" gutterBottom>
        Tweets by @{username}
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      <Box
        sx={{
          width: "100%",
          minHeight: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {failed ? (
          <Typography color="error" textAlign="center">
            Failed to load tweets. Please try again later.
          </Typography>
        ) : (
          <a
            className="twitter-timeline"
            data-theme={theme}
            data-height={height}
            data-width="100%"
            href={`https://twitter.com/${username}`}
          >
            Tweets by @{username}
          </a>
        )}
      </Box>
    </Paper>
  );
};

export default TwitterTimeline;
