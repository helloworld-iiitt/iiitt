"use client";

import LabPage from "@/components/LabComponent/LabComponent";
import { useEffect } from "react";

const cmp = () => {
  useEffect(() => {
    document.title = "Advanced Manufacturing and Processing Lab";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  return (
    <LabPage labName="ampl"/>
  );
};

export default cmp;
