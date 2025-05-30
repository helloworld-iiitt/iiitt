"use client";

import { checkforfilepath } from "@/types/filepath";
import { validURL } from "@/types/validator";
import { FiberNew } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import nextConfig from "../../../next.config";
import "./PaperCard.css";

interface Item {
  title: string;
  link: string;
  date?: string;
  isNew?: boolean;
}

interface PaperCardProps {
  title: string;
  items: Item[];
  linkToOlder: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title,
  items,
  linkToOlder,
}) => {
  return (
    <div className="root">
      <OutlinedCard title={title} items={items} linkToOlder={linkToOlder} />
    </div>
  );
};

const OutlinedCard: React.FC<PaperCardProps> = ({
  title,
  items,
  linkToOlder,
}) => {
  return (
    <Card className="outline-root" id="simplecard">
      <CardContent>
        <div
          className={`${
            title === "Achievements" ? "centered-newshead" : "newshead"
          }`}
        >
          {title}
        </div>
        <ul className={title}>
          {items &&
            items.map((item, index) => (
              <li key={index} style={{ marginBottom: "15px" }}>
                <Link
                  href={
                    item.link.startsWith('/') && !checkforfilepath(item.link)
                      ? item.link // Internal routes checking like /cmp or any path
                      : validURL(item.link)
                        ? item.link // external sites like youtube(swarnim bharat)
                        : `${title === "Achievements" ? nextConfig?.env?.IMAGE : nextConfig?.env?.DOCUMENT}/${item.link}`
                  }

                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                  {/*  New Relasese*/ }
                  {/*item.isNew && (
                    <NewReleases
                      fontSize="small"
                      style={{ color: "red", marginLeft: 6 }}
                      titleAccess="New"
                    />
                  )*/}

{item.isNew && (
                    <FiberNew
                      fontSize="small"
                      style={{ color: "red", marginLeft: 6 }}
                      titleAccess="New"
                    />
                  )}
                </Link>
                {item.date && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    gutterBottom
                    style={{ display: "block" }}
                  >
                    Posted: {item.date}
                  </Typography>
                )}
              </li>
            ))}
        </ul>
      </CardContent>
      <CardActions>
        <Link href={linkToOlder}>
          <Button size="small">View older</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { OutlinedCard, PaperCard };

