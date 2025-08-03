import { FormData } from "./common.types";

export interface InternshipData {
  title: string;
  sections: Section[];
}

export interface Section {
  heading?: string;
  cards?: CardData[];
  list?: string[];
  guidelines?: Guideline[];
  table?: TableRowData[];
  documents?: FormData[];
  announcements?: Announcement[];
}

export interface Announcement {
  message: string;
  date?: string;
  link?: string;
}

export interface CardData {
  header: string;
  list?: string[];
}

export interface Guideline {
  title: string;
}

export interface TableRowData {
  date: string;
  event: string;
}
