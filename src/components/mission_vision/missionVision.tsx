"use client";

import React from "react";
import { Card, CardActions, CardContent, Button, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import "./mission_vision.css";

export const missionPoints = [
 "Providing state-of-the-art infrastructure and facilities that support high-quality teaching, learning and research.", 
 "Offering industry-relevant and contemporary programs that cater to the needs of the industry and society.",
 "Providing opportunities for students to engage in research and innovation, and to develop skills and competencies required for the industry and society.",
 "Fostering a culture of inclusivity, diversity and social responsibility, where students and faculty are encouraged to make a positive contribution to society."
];

const MissionVision = () => {
  const bodyTextSx = {
    color: "#555",
    fontSize: { xs: "1rem", sm: "0.7rem", md: "0.9rem" },
    fontWeight: 400,
    textAlign: "justify",
    display: "block",
  } as const;

  const missionItemSx = {
    color: "#555",
    fontSize: { xs: "1rem", sm: "0.7rem", md: "0.9rem" },
    fontWeight: 400,
    lineHeight: 1.5,
  } as const;

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          minWidth: 340,
          p: 3,
          mb: 3,
          maxWidth: "100%",
          display: { xs: "none", md: "block" },
          height: "100%",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }} >
            Vision
          </Typography>
          <Divider />
          <Typography color="textSecondary" sx={{ ...bodyTextSx, mb: 2, mt: 1 }}>
            To be a world-class institute of excellence in the field of Information Technology and allied fields, with a strong focus on research and innovation, producing socially responsible, skilled professionals capable of contributing to the development of the nation and the world.
          </Typography>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Mission
          </Typography>
          <Divider />
          <div>
            <Typography color="textSecondary" className="mission-intro" sx={bodyTextSx}>
              Our mission is to provide a conducive and dynamic learning environment that fosters academic excellence,
              research and innovation, and prepares students to be leaders and innovators in the field of Information
              Technology and related fields. We aim to achieve this by:
            </Typography>
            <ul className="mission-list">
              {missionPoints.map((point) => (
                <li key={point}>
                  <Typography color="textSecondary" component="span" className="mission-item" sx={missionItemSx}>
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57", mt: 2 }}>
            Explore
          </Typography>
          <Divider />

          <Link href="/video_tour" passHref legacyBehavior>
            <Typography color="textSecondary" component="a" target="_blank" rel="noopener noreferrer" sx={{ ...bodyTextSx, mt: 1 }}>
              Virtual Tour of IIITT
            </Typography>
          </Link>
          <Link href="https://www.youtube.com/watch?v=KCrvIJOxigY" passHref legacyBehavior>
            <Typography color="textSecondary" sx={{ ...bodyTextSx, mt: 1 }} component="a" target="_blank" rel="noopener noreferrer">
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

      <Card
        variant="outlined"
        sx={{
          minWidth: 320,
          p: 2.5,
          maxWidth: "100%",
          display: { xs: "block", md: "none" },
          height: "100%",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }}>
            Vision
          </Typography>
          <Divider />
          <Typography color="textSecondary" sx={{ ...bodyTextSx, mb: 2, mt: 1 }}>
            To be a world-class institute of excellence in the field of Information Technology and allied fields, with a strong focus on research and innovation, producing socially responsible, skilled professionals capable of contributing to the development of the nation and the world.
          </Typography>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57" }} >
            Mission
          </Typography>
          <Divider />
          <div>
            <Typography color="textSecondary" className="mission-intro" sx={bodyTextSx}>
              Our mission is to provide a conducive and dynamic learning environment that fosters academic excellence,
              research and innovation, and prepares students to be leaders and innovators in the field of Information
              Technology and related fields. We aim to achieve this by:
            </Typography>
            <ul className="mission-list">
              {missionPoints.map((point) => (
                <li key={point}>
                  <Typography color="textSecondary" component="span" className="mission-item" sx={missionItemSx}>
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <Typography variant="h5" component="h1" sx={{ color: "#2e8b57", mt: 2 }}>
            Explore
          </Typography>
          <Divider />

          <Link href="/video_tour" passHref legacyBehavior>
            <Typography color="textSecondary" component="a" target="_blank" rel="noopener noreferrer" sx={{ ...bodyTextSx, mt: 1 }}>
              Virtual Tour of IIITT
            </Typography>
          </Link>
          <Link href="https://www.youtube.com/watch?v=KCrvIJOxigY" passHref legacyBehavior>
            <Typography color="textSecondary" sx={{ ...bodyTextSx, mt: 1 }} component="a" target="_blank" rel="noopener noreferrer">
              Video Virtual Tour of IIITT
            </Typography>
          </Link>
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
