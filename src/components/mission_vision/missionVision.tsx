"use client";

import React from "react";
import { Card, CardActions, CardContent, Button, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import "./mission_vision.css";

const MissionVision = () => {
  return (
    <>
      <Card
        variant="outlined"
        id="mission_vision"
        sx={{
          minWidth: 275,
          p: 2,
          mb: 3,
          display: { xs: "none", md: "block" }, // Show only on desktop
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Vision
          </Typography>
          <Divider />
          <Typography color="textSecondary" id="vision" sx={{ mb: 2 }}>
            To achieve  &quot;World Class Excellence in Information and Communication Technology &quot;.
          </Typography>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Mission
          </Typography>
          <Divider />
          <Typography color="textSecondary" id="mission">
            • To impart Information Technology education to students and future leaders.
            <br />
            • To establish Centers of Excellence in Information Technology.
            <br />
            • To engage in cutting-edge technology research to meet the current needs and future challenges of India and the world at large.
          </Typography>
          <br/>
          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57",mt:2 }}>
            Explore
          </Typography>
          <Divider/>

          <Link href="https://iiitt.ac.in/video_tour" passHref legacyBehavior>
          <Typography color="textSecondary" id="mission" component="a" target="_blank" rel="noopener noreferrer">
          Virtual Tour of IIITT 
          </Typography>
          </Link>
          <Link  href="https://www.youtube.com/watch?v=KCrvIJOxigY" passHref legacyBehavior>
          <Typography color="textSecondary" id="vision" sx={{ mt: 1}}  component="a" target="_blank" rel="noopener noreferrer">
          Video Virtual Tour of IIITT
          </Typography>
          </Link>
        </CardContent>
        <CardActions id="learn_more">
          <Link href="/about" passHref>
            <Button size="small">
              Learn More about IIIT Trichy <ArrowForwardIcon />
            </Button>
          </Link>
        </CardActions>
      </Card>

      {/* Mobile View */}
      <Card
        variant="outlined"
        id="mission_vision"
        sx={{
          minWidth: 275,
          p: 2,
          display: { xs: "block", md: "none" }, // Show only on mobile
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Vision
          </Typography>
          <Divider />
          <Typography color="textSecondary" id="vision" sx={{ mb: 2 }}>
            To achieve  &quot;World Class Excellence in Information and Communication Technology &quot;.
          </Typography>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Mission
          </Typography>
          <Divider />
          <Typography color="textSecondary" id="mission">
            • To impart Information Technology education to students and future leaders.
            <br />
            • To establish Centers of Excellence in Information Technology.
            <br />
            • To engage in cutting-edge technology research to meet the current needs and future challenges of India and the world at large.
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="/about" passHref>
            <Button size="small">
              Learn More about IIIT Trichy <ArrowForwardIcon />
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default MissionVision;
