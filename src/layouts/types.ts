export interface Menu {
  url: string;
  label: string;
  description?: string;
}

export interface MenuItem extends Menu {
  items?: Menu[];
}
