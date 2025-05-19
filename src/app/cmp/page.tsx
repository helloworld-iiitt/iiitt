"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Construction } from "@mui/icons-material";
import { useEffect } from "react";
import LabPage from "@/components/LabComponent/LabComponent";

const cmp = () => {
  useEffect(() => {
    document.title = "CMP LAB";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <LabPage labName="cmpl"/>
  );
};

export default cmp;
