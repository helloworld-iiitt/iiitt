import React from "react";
import Link from "next/link";
import styles from "./faq.module.css";
import { Card, CardContent, IconButton, Collapse } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface faqprops {
  questionNumber: number;
  question: string;
  answer: string;
}

const Faq: React.FC<faqprops> = ({ questionNumber, question, answer }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleFaq = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card>
        <CardContent
          onClick={toggleFaq}
          aria-expanded={expanded}
          aria-label="Show answer"
        >
          <IconButton onClick={toggleFaq} aria-expanded={expanded} aria-label="Show answer">
            <KeyboardArrowRightIcon />
          </IconButton>
          {question}
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit className={styles.answer}>
          <CardContent className={styles.text}>
            {answer}
            {questionNumber === 11 ? (
              <Link style={{ display: "inline" }} href="/contactus">
                <span>location page for more information.</span>
              </Link>
            ) : null}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Faq;
