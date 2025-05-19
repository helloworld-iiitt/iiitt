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
            href={`${nextConfig.env?.DOCUMENT}/notices/Gst_certificate.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GST Certificate
          </a>
        </Typography>
 </>

}
