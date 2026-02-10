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
    Weekdays: {
      Breakfast: string;
      Lunch: string;
      Snacks: string;
      Dinner: string;
    };
    Weekends: {
      Breakfast: string;
      Lunch: string;
      Snacks: string;
      Dinner: string;
    };
  };
}

export interface GymData extends HostelData {
  GymTimings: string[];
  forms: {
    title: string;
    url: string;
  }[];
}
