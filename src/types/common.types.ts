export interface FormData {
  title: string;
  link?: string;
}

export interface CalendarData {
  title: string;
  data: FormData[];
}

export interface Club {
  name: string;
  motto: string;
  facultyIncharge: string;
  coordinator: { name: string }[];
}


export interface CurriculumData {
  curriculum: {
    [department: string]: {
      [program: string]: {
        [year: string]: string;
      };
    };
  };
}

export interface EventItem extends FormData {
  date?: string;
  isNew?: boolean;
  text?: string;
}

export interface FaqsData {
  question: string;
  answer: string;
}

export interface FestivalData {
  name: string;
  description: string;
  links: [
    {
      name: string;
      url: string;
      download: boolean;
    }
  ];
  images: [
    {
      name: string;
      path: string;
    }
  ];
}
