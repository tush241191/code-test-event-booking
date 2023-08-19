export interface EventData {
  id: number;
  title: string;
  image: string;
  date: string;
  time?: string;
  location: string;
}

export type PageAction = 'NEXT' | 'PREVIOUS'
