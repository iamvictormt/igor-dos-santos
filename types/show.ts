
export interface Show {
  id: number;
  date: string; // ex: "2024-02-15"
  title: string;
  venue: string;
  city: string;
  time: string; // ex: "20:00"
  ticketUrl: string;
  description?: string;
}
