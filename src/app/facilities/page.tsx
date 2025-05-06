"use client";
import { Typography, Card, CardContent } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./facilites.module.css";
import nextConfig from "../../../next.config";

interface ImageData {
  title: string;
  url: string;
}

export default function Hostel() {
  const [images, setForms] = useState<ImageData[] | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("/json/general/facilities.json");
      const data = await response.json();
      setForms(data.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
      setForms([]);
    }
  }, []);

  useEffect(() => {
    document.title = "HOSTEL | IIITT";
    fetchData();
    return () => {
      document.title = "IIIT Trichy";
    };
  }, [fetchData]);

  return (
    <div>
      <div className={styles.title}>
        <Typography variant="h2">Facilities</Typography>
      </div>

      <div className={styles.cardContainer}>
        {images?.map((hInfo, index) => (
          <Card key={index} className={styles.card}>
            <CardContent>
              <Typography variant="subtitle1" className={styles.imageTitle}>
                {hInfo.title}
              </Typography>
            </CardContent>
            <Image
              src={`${nextConfig?.env?.IMAGE}/${hInfo.url}`}
              alt={hInfo.title}
              width={100}
              height={500}
              className={styles.image}
            />

          </Card>

        ))}
      </div>
    </div>
  );
}
