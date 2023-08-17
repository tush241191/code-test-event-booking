export interface Menu {
  url: string;
  label: string;
}

export interface MenuItem extends Menu {
  items?: Menu[];
}
