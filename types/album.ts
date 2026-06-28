interface Album {
  id: number;
  title: string;
  year: string;
  type: string;
  cover: string;
  description: string;
  duration: string;
  producer: string;
  studio: string;
  genre: string;
  releaseDate: string;
  credits: string;
  tracklist: {
    name: string;
    duration: string;
    audioUrl: string;
    composers: string;
    streamingLinks: {
      spotify: string;
      apple: string;
      youtube: string;
      amazon?: string;
    };
  }[];
}
