"use client";

import LabPage from "@/components/LabComponent/LabComponent";
import { useEffect } from "react";

const cmp = () => {
  useEffect(() => {
    document.title = "CMP LAB | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <LabPage labName="cmpl"/>
  );
};

export default cmp;
