export interface NewsItem {
  id: number;
  date: string; // ex: "2024-01-15"
  title: string;
  excerpt: string;
  category: 'Turnê' | 'Conquista' | 'Evento';
}
