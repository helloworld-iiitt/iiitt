export interface SubMenuItem {
    text: string;
    link: string;
    submenu?: SubMenuItem[];
    icon?: string;
  }

  export interface NavItem {
    text: string;
    link?: string;
    submenu?: SubMenuItem[];
    icon?: string;
  }
  