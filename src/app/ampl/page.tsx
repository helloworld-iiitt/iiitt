"use client";

import LabPage from "@/components/LabComponent/LabComponent";
import { useEffect } from "react";

const cmp = () => {
  useEffect(() => {
    document.title = "Advanced Manufacturing and Processing Lab | IIIT Tiruchirappalli";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <LabPage labName="ampl"/>
  );
};

export default cmp;
