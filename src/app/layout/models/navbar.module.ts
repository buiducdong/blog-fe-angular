export interface INavbarModel {
  label: string;
  level: number;
  icon?: string;
  routerLink?: string[];
  items?: INavbarModel[];
  showTooltip?: boolean;
}


export const CommonNavData: INavbarModel[] = [
  {
    label: 'common.header.about',
    level: 1
  },
  {
    label: 'common.header.blogs',
    level: 1,
    routerLink: ['/blogs']
  },
  {
    label: 'common.header.knowledge',
    level: 1
  },
  {
    label: 'common.header.experience',
    level: 1
  },
  {
    label: 'common.header.messenger',
    level: 1
  }
];