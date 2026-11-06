export type Video = {
  id: number;
  title: string;
  youtubeUrl: string;
};

export const videos: Video[] = [
  { id: 16, title: 'Tamanho de Um Rei', youtubeUrl: 'https://youtu.be/ZyLjXfduHEQ?si=N34duMah5VnkJZyx' },
  { id: 1, title: 'Outras Histórias', youtubeUrl: 'https://youtu.be/uLmp1D1tFfE?is=OFgPcrRXkil82tJ0' },
  { id: 2, title: 'Silêncio Ensurdecedor', youtubeUrl: 'https://youtu.be/GZ0DGvkg4us?si=-z3MiY824eoyNj_L' },
  { id: 3, title: 'Voar', youtubeUrl: 'https://youtu.be/YD1hsoXfhM0?si=l6HXWEhYCE3V3f39' },
  { id: 4, title: 'Bem Vindo a Sua Vida', youtubeUrl: 'https://youtu.be/VKGK59I-bps?si=xgvjsEV-GvBUabAQ' },
  { id: 5, title: 'Auto Intitulada', youtubeUrl: 'https://youtu.be/xMrRriRhO_U?si=EMD3VSevmsXZgpmo' },
  { id: 6, title: 'Avivar (Acústica)', youtubeUrl: 'https://youtu.be/ImYsxY7tbSM?si=jFMf_Us_pDE3SmyP' },
  { id: 7, title: 'A.C.A.S.O', youtubeUrl: 'https://youtu.be/4sZgljD4Oms?si=P6QClneLt3VOe2OJ' },
  { id: 8, title: 'Grito Mudo', youtubeUrl: 'https://youtu.be/1L54FO3z8-s?si=UFhcFaHCXovbB_db' },
  { id: 9, title: 'O Herói Não Resolvido', youtubeUrl: 'https://youtu.be/1cmROgqxchg?si=5iShmaS2yWaZy31z' },
  { id: 10, title: 'Aonde Vai o Tempo?', youtubeUrl: 'https://youtu.be/G4dZtnoxkLE?si=Dm4pWg0hbtV6j-Xx' },
  { id: 11, title: 'Amanhã É um Novo Dia', youtubeUrl: 'https://youtu.be/nrLCteUhKnk?si=q7e2Y5hBmRFC_-nL' },
  {
    id: 12,
    title: 'Broken Dreams & Hopes - Visualizer Oficial',
    youtubeUrl: 'https://youtu.be/pUOboWnkxgI?si=dqNay6O7IU09lhU1',
  },
  {
    id: 13,
    title: 'Tudo o Que Eu Queria Te Dizer - Ao Vivo',
    youtubeUrl: 'https://youtu.be/0AwFbg8XMxY?si=Gy_0TsUp0tnqcClN',
  },
  { id: 14, title: 'Bem Vindo a Sua Vida - Ao Vivo', youtubeUrl: 'https://youtu.be/BprfDyjdx60?si=g0Z-VQrQs2MouUg0' },
  {
    id: 15,
    title: 'Novos Horizontes (Engenheiros do Hawaii) - Ao Vivo',
    youtubeUrl: 'https://youtu.be/Hrj0w_zqOfc?si=WfOSIF62xucm7Een',
  },
];

export const getYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
};
