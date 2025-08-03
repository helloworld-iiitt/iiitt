/**
 * Internal Conduct Committee
 *
 * utilizes CommitteePage
 */

"use client";
import CommitteePage from "@/components/tablecomponent/CommitteePage";
import { Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link"
import nextConfig from "../../../next.config";

export default function icc() {
 return<>
 <CommitteePage committee="icc"/>;
 <Typography align="center">
          <LinkIcon
            style={{ marginRight: "5px", color: "#007bff" }}
          />
          <a
            href={`${nextConfig.env?.DOCUMENT}/Revised Office Order - ICC - 17.02.2025.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Office Order
          </a>
        </Typography>
 </>

}
