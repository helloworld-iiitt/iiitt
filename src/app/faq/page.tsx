"use client";
import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./faqs.module.css";
import Faq from "@/components/faq/faq";

interface FaqsData {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqsData[] | null>(null);
  useEffect(() => {
    document.title = "FAQs";
    return () => {
      document.title = "IIIT Trichy";
    };
  }, []);

  useEffect(() => {
    fetch("/json/general/faqs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch faqs data");
        }
        return response.json();
      })
      .then((data) => {
        setFaqs(data.data);

      })
      .catch((error) => {
        console.error("Error fetching faqs data:", error);

      });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Grid container className={styles.container}>
        <Grid size={1} />
        <Grid size={10}>
        <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.themeText}
          >
            <Box component="span" fontWeight={380}>
              FAQs
            </Box>
          </Typography>
          {faqs &&
            faqs.map((faq, index) => {
              return (
                <div key={index} className={styles.faq}>
                  <Faq questionNumber={index} question={faq.question} answer={faq.answer} />
                </div>
              );
            })}
        </Grid>
        <Grid size={1} />
      </Grid>
    </div>
  );
};

export default Faqs;
