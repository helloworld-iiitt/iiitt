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

export interface Partner {
  name: string;
  description: string;
  logo: string;
  link: string;
}
export interface PostGraduateData {
  [category: string]: FormData[];
}

export interface RTIData {
  head: string;
  name: string;
  designation: string;
  emailID: string;
  phone?: string;
  fax?: string;
  src: string;
}


export interface studentdata {
  name: string;
  designation: string;
  emailId: string;
  src: string;
}

