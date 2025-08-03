export interface FacultyMember {
  name: string;
  emailID: string;
  src: string;
  designation: string;
  researchArea: string;
  id: {
    dept: string;
    deptID: string;
  };
  Incharge?: string;
  VidhwanLink?: string;
  Institute?: string;
  PersonalPage?:string;
}
