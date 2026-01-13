export interface HostelData {
  title: string;
  desc: string;
  Hostelsrc: string;
  Warden: string;
  RoomNo: string;
  Department: string;
  emailId: string;
  WardenImage: string;
}

export interface MessData extends HostelData {
  MessTimings: {
    Breakfast: string;
    Lunch: string;
    Snacks: string;
    Dinner: string;
  };
}

export interface GymData extends HostelData {
  GymTimings: {
    Morning: string;
    Evening: string;
  };
  forms: {
    title: string;
    url: string;
  }[];
}
