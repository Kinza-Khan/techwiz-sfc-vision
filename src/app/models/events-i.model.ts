export interface EventsI {
     id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  time?: string;
  venue?: string;
  department?: string;
  category?: string;
  image?: string;
  organizer?: string;
}
