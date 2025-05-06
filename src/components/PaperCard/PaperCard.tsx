"use client";

import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./PaperCard.css";
import { validURL } from "@/app/achievements/validator";
import nextConfig from "../../../next.config";

interface Item {
  title: string;
  link: string;
  date?: string;
}

interface PaperCardProps {
  title: string;
  items: Item[];
  linkToOlder: string;
}

const PaperCard: React.FC<PaperCardProps> = ({ title, items, linkToOlder }) => {
  return (
    <div className="root">
      <OutlinedCard title={title} items={items} linkToOlder={linkToOlder} />
    </div>
  );
};
const OutlinedCard: React.FC<PaperCardProps> = ({ title, items, linkToOlder }) => {
  return (
    <Card className="outline-root" id="simplecard">
      <CardContent>
        <div className="newshead">{title}</div>
        <ul className={title}>
          {items &&
            items.map((item,index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <Link  href={
                          validURL(item.link)
                            ? item.link
                            : `${nextConfig.env?.DOCUMENT}/${item.link}`
                        }>{item.title}</Link>
                <br />
                {item.date && <Typography
                  variant="caption"
                  color="textSecondary"
                  gutterBottom
                >
                  Posted:{item.date}
                </Typography>}
              </li>
            ))}
        </ul>
      </CardContent>
      <CardActions>
        <Link href={linkToOlder}><Button size="small">View older</Button></Link>
      </CardActions>
    </Card>
  );
};

export { OutlinedCard, PaperCard };
