'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Pause, Music, Calendar, Clock, Users, Disc, X, ExternalLink, ArrowUpDown } from 'lucide-react';

const albums = [
  {
    id: 1,
    title: 'Bem Vindo a Sua Vida',
    year: '2018',
    type: 'EP',
    cover: '/bem-vindo-sua-vida-cover.jpg',
    description:
      'Primeiro lançamento do Igor Delfino, reunindo composições introspectivas e pessoais, já mostrando o direcionamento musical e conceitual do projeto.',
    duration: '16:30',
    producer: "Raphael Mancini / Gustavo 'Big' Simão / Marcelo Trovão",
    studio: 'Lab Mancini / Choque DB / Hangout',
    genre: 'MPB/Indie',
    releaseDate: '24/05/2018',
    credits:
      'Voz, Guitarras e Violão: Igor Delfino | Percussão: Márcio Ricardo, Gustavo Simão | Teclado: Tutu Oliveira | Vocais: Márcio Ricardo, Teco Martins | Arte da Capa: Igor Delfino',
    tracklist: [
      {
        name: 'Bem Vindo a Sua Vida',
        duration: '4:15',
        audioUrl: '/audio-samples/Bem Vindo a Sua Vida.flac',
        composers: 'Igor Delfino / Márcio Ricardo',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/5nL0QWI8lyNEgAs09SI25p?si=5ff21f2f7fb44835',
          apple: 'https://music.apple.com/br/song/bem-vindo-a-sua-vida/1390862121',
          youtube: 'https://youtu.be/VKGK59I-bps?si=Q64uZypSdsTYyT7W',
        },
      },
      {
        name: 'Auto Intitulada Feat. Teco Martins',
        duration: '3:45',
        audioUrl: '/audio-samples/Auto Intitulada.flac',
        composers: 'Igor Delfino / Teco Martins',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/6VDHXAHeSBSP3Pe0jPW68i?si=01e933213d0f4160',
          apple: 'https://music.apple.com/br/song/auto-intitulada-feat-teco-martins/1390862123',
          youtube: 'https://youtu.be/xMrRriRhO_U?si=9JxUSefMiHgBWV1O',
        },
      },
      {
        name: 'A.C.A.S.O',
        duration: '4:20',
        audioUrl: '/audio-samples/Acaso.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/2ePJTnK6I06IQX5Fv9hs40?si=4703ef6bd5d94d73',
          apple: 'https://music.apple.com/br/song/acaso/1390862124',
          youtube: 'https://youtu.be/4sZgljD4Oms?si=v8W30qHO5bzuC6TP',
        },
      },
      {
        name: 'O Herói Não Resolvido',
        duration: '4:10',
        audioUrl: '/audio-samples/O Herói Não Resolvido.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/4tFlz4gwnC3137sIpbNGRj?si=997c483791bb458b',
          apple: 'https://music.apple.com/br/song/o-her%C3%B4i-n%C3%A3o-resolvido/1390862125',
          youtube: 'https://youtu.be/1cmROgqxchg?si=elyVISLBMVt7i87j',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Talvez Nunca Aqui',
    year: '2019',
    type: 'Single',
    cover: '/talvez-nunca-aqui-cover.jpg',
    description:
      'Single experimental que resgata uma composição antiga, dando nova roupagem e mostrando a identidade independente e sem rótulos do Igor Delfino.',
    duration: '3:42',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Experimental/Indie',
    releaseDate: '07/01/2019',
    credits:
      "Voz e Programação de Cordas: Igor Delfino | Guitarras e Vocais: Carlos Henrique 'CH4' | Arte da Capa: Igor Delfino",
    tracklist: [
      {
        name: 'Talvez Nunca Aqui',
        duration: '3:42',
        audioUrl: '/audio-samples/Talvez Nunca Aqui.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/4YnHeq5P0SM0SmE8AcQHly?si=0af02277c29a4ca2',
          apple: 'https://music.apple.com/br/song/talvez-nunca-aqui/1448738983',
          youtube: 'https://youtu.be/CbQymIN_0Vw?si=mvnrrNNeaLLQVNJT',
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Gratovolte',
    year: '2020',
    type: 'EP',
    cover: '/gratovolte-cover.jpg',
    description:
      'Primeiro EP totalmente composto para o Igor Delfino, explorando banda completa e temas como saúde mental, relacionamentos e saudades.',
    duration: '15:48',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Indie Rock/MPB',
    releaseDate: '05/03/2020',
    credits:
      'Voz, Guitarras, Violão e Baixo: Igor Delfino | Bateria e Vocais: Gustavo Simão | Arte da Capa: Igor Delfino',
    tracklist: [
      {
        name: 'Longe de Algum Lugar',
        duration: '4:12',
        audioUrl: '/audio-samples/Longe de Algum Lugar.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/7fALoQe5CcaU1Fpore1e73?si=2594fd6d02cf4ebb',
          apple: 'https://music.apple.com/br/song/longe-de-algum-lugar/1500159656',
          youtube: 'https://youtu.be/rm91iYvTjpc?si=gF2bkE2FcvRQrWDA',
        },
      },
      {
        name: 'Avivar',
        duration: '3:55',
        audioUrl: '/audio-samples/Avivar Gratovolte.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/6ZR6qPFA8iLGKNlP6C5Hbu?si=da1a46767a97432a',
          apple: 'https://music.apple.com/br/song/avivar/1500159657',
          youtube: 'https://youtu.be/ImYsxY7tbSM?si=Btd7a16EgEb6Ap1z',
        },
      },
      {
        name: 'Aonde Vai o Tempo?',
        duration: '3:48',
        audioUrl: '/audio-samples/Aonde Vai o Tempo.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/0ULIOcUoT223oNcprHCQOi?si=21be5f69126847e2',
          apple: 'https://music.apple.com/br/song/aonde-vai-o-tempo/1500159658',
          youtube: 'https://youtu.be/G4dZtnoxkLE?si=uNUrs6eHrOj1B_gA',
        },
      },
      {
        name: 'Tudo o Que Eu Queria Te Dizer',
        duration: '3:53',
        audioUrl: '/audio-samples/Tudo o Que Eu Queria Te Dizer.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/3NQr9o5JnNYvFlDqouAsV0?si=22fe0dde33ab4e83',
          apple: 'https://music.apple.com/br/song/tudo-o-que-eu-queria-te-dizer/1500159659',
          youtube: 'https://youtu.be/RPsuMkZ-ho0?si=rF45h1hMjRQhUTqJ',
        },
      },
    ],
  },
  {
    id: 4,
    title: 'Avivar (Acústica)',
    year: '2020',
    type: 'Single',
    cover: '/avivar-acustica-cover.jpg',
    description: "Versão acústica de 'Avivar', feita para uma campanha de Setembro Amarelo sobre saúde mental.",
    duration: '3:28',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Acústico/Folk',
    releaseDate: '09/09/2020',
    credits:
      'Voz, Guitarras e Violão: Igor Delfino | Percussão e Programação de Cordas: Gustavo Simão | Arte da Capa: Igor Delfino / Xaver Xylophon',
    tracklist: [
      {
        name: 'Avivar (Acústica)',
        duration: '3:28',
        audioUrl: '/audio-samples/Avivar.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/79iZvFH7v0U3Ihdn1whTwQ?si=a5ce0f50e2744e84',
          apple: 'https://music.apple.com/br/song/avivar/1532735884',
          youtube: 'https://youtu.be/ImYsxY7tbSM?si=Btd7a16EgEb6Ap1z',
        },
      },
    ],
  },
  {
    id: 5,
    title: 'Início de Outono',
    year: '2020',
    type: 'Single',
    cover: '/inicio-outono-cover.jpg',
    description: 'Escrita no auge da pandemia, a música transmite esperança de que tudo vai ficar bem.',
    duration: '4:05',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Folk/MPB',
    releaseDate: '12/11/2020',
    credits:
      'Voz, Guitarras e Violão: Igor Delfino | Programação de Acordeão: Gustavo Simão | Arte da Capa: Thayná Marinho',
    tracklist: [
      {
        name: 'Início de Outono',
        duration: '4:05',
        audioUrl: '/audio-samples/Inicio de Outono.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/4kOKVpLprtQFQNYEJcVyaS?si=2d153ec52c3b4518',
          apple: 'https://music.apple.com/br/song/inicio-de-outono/1540381749',
          youtube: 'https://youtu.be/Y6jRrusxY3E?si=Jp_HyyvsJ-SNOMFj',
        },
      },
    ],
  },
  {
    id: 6,
    title: 'Amanhã é um Novo Dia',
    year: '2021',
    type: 'Single',
    cover: '/amanha-novo-dia-cover.jpg',
    description: 'Versão em tributo aos 55 anos da banda Made In Brazil, uma das mais antigas do país.',
    duration: '3:52',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Rock/Tributo',
    releaseDate: '28/10/2021',
    credits: 'Voz, Guitarras e Violão: Igor Delfino | Vocais: Gustavo Simão | Arte da Capa: Igor Delfino',
    tracklist: [
      {
        name: 'Amanhã é um Novo Dia',
        duration: '3:52',
        audioUrl: '/audio-samples/Amanhã É um Novo Dia.flac',
        composers: 'Antônio Manuel de Medeiros Junior / Oswaldo Vecchione Junior',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/1SPwhQM2CEfm7oBAEckx5f?si=b8159446dc3d44b6',
          apple: 'https://music.apple.com/br/song/amanh%C3%A3-%C3%A9-um-novo-dia-cover/1593038041',
          youtube: 'https://youtu.be/nrLCteUhKnk?si=gVkfiWN00K7MIOOZ',
        },
      },
    ],
  },
  {
    id: 7,
    title: 'Trinta e Um',
    year: '2022',
    type: 'Single',
    cover: '/trinta-um-cover.jpg',
    description: 'Canção Lo-Fi intimista, gravada com celular, trazendo simplicidade e parceria na interpretação.',
    duration: '3:15',
    producer: 'Igor Delfino',
    studio: 'MongaBeach Home Studio',
    genre: 'Lo-Fi/Indie',
    releaseDate: '16/05/2022',
    credits: 'Voz, Guitarras e Violão: Igor Delfino | Voz: Janaina França | Arte da Capa: Janaina França',
    tracklist: [
      {
        name: 'Trinta e Um Feat. Janaina França',
        duration: '3:15',
        audioUrl: '/audio-samples/Trinta e Um.flac',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/3fICJtukGApzaSKo7KJp2q?si=483d074544194f89',
          apple: 'https://music.apple.com/br/song/trinta-e-um-feat-janaina-fran%C3%A7a/1687177294',
          youtube: 'https://youtu.be/1YJnQ41PcVE?si=L_cvFm4cuOaTGx06',
        },
      },
    ],
  },
  {
    id: 8,
    title: 'Broken Dreams & Hopes',
    year: '2024',
    type: 'Single',
    cover: '/broken-dreams-cover.jpg',
    description:
      'Releitura para os 10 anos do álbum All About Love da banda The Bombers, ícone do rock underground nacional.',
    duration: '4:22',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Rock/Tributo',
    releaseDate: '31/12/2024',
    credits:
      'Voz, Guitarras, Violão e Baixo: Igor Delfino | Vocais, Teclados e Bateria: Gustavo Simão | Arte da Capa: Furukawa Drawings',
    tracklist: [
      {
        name: 'Broken Dreams & Hopes',
        duration: '4:22',
        audioUrl: '/audio-samples/BROKEN DREAMS MASTER 02 MP3.mp3',
        composers: 'Matheus Krempel',
        streamingLinks: {
          spotify: '#',
          apple: '#',
          youtube: 'https://youtu.be/pUOboWnkxgI?si=q4OwWHfogyNJo-6J',
        },
      },
    ],
  },
  {
    id: 9,
    title: 'Voar',
    year: '2025',
    type: 'Single',
    cover: '/voar-cover.jpg',
    description: 'Marca a retomada do projeto com uma direção mais minimalista e intimista.',
    duration: '3:38',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio Choque DB',
    genre: 'Minimalista/Indie',
    releaseDate: '06/01/2025',
    credits: 'Voz, Violão e Baixo: Igor Delfino | Arte da Capa: Igor Delfino',
    tracklist: [
      {
        name: 'Voar',
        duration: '3:38',
        audioUrl: '/audio-samples/Voar.mp3',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/05R8En6Qioewa5Hq3U8hta?si=1a03474c3b784277',
          apple: 'https://music.apple.com/br/song/voar/1790093749',
          youtube: 'https://youtu.be/YD1hsoXfhM0?si=NonVvJ7fF15aNM31',
        },
      },
    ],
  },
  {
    id: 10,
    title: 'Grito Mudo / Silêncio Ensurdecedor',
    year: '2025',
    type: 'Double',
    cover: '/grito-mudo-cover.jpeg',
    description: 'Duo de canções que exploram a dor da ansiedade em suas formas mais intensas e silenciosas.',
    duration: '7:45',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio 438',
    genre: 'Indie Rock/Experimental',
    releaseDate: '17/04/2025',
    credits:
      'Voz e Guitarra: Igor Delfino | Baixo: Ennyo Viegas | Bateria: Márcio Ricardo | Vocais e Guitarra Adicional: Gustavo Simão | Piano: Bruno Piazza | Arte da Capa: Thayna Marinho',
    tracklist: [
      {
        name: 'Grito Mudo',
        duration: '3:52',
        audioUrl: '/audio-samples/Grito Mudo.mp3',
        composers: 'Ennyo Viegas / Igor Delfino / Márcio Ricardo',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/0otgZMiII8QImebUdU29gM?si=0c05bebfb7844685',
          apple: 'https://music.apple.com/br/song/grito-mudo/1808352231',
          youtube: 'https://youtu.be/1L54FO3z8-s?si=JU1BSqG0rrYYcxuL',
        },
      },
      {
        name: 'Silêncio Ensurdecedor',
        duration: '3:53',
        audioUrl: '/audio-samples/Silencio Ensurdecedor.mp3',
        composers: 'Ennyo Viegas / Igor Delfino / Márcio Ricardo',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/5ixe11RDnsD01eFjkiO6Vh?si=58b9999deffa4b8f',
          apple: 'https://music.apple.com/br/song/sil%C3%AAncio-ensudecedor/1808352232',
          youtube: 'https://youtu.be/cXOcWDQU1H8?si=NxUjR66Ib0o21hBA',
        },
      },
    ],
  },
  {
    id: 11,
    title: 'Tudo o Que Eu Queria Te Dizer (Ao Vivo 20)',
    year: '2025',
    type: 'Single',
    cover: '/tudo-que-queria-cover.png',
    description: 'Releitura em comemoração aos 20 anos da canção escrita como declaração de amor.',
    duration: '4:18',
    producer: "Gustavo 'Big' Simão",
    studio: 'Estúdio 438',
    genre: 'Acústico/Ao Vivo',
    releaseDate: '29/05/2025',
    credits: 'Voz e Guitarra: Igor Delfino | Violino: Silvia Cruz | Arte da Capa: Gui Silva',
    tracklist: [
      {
        name: 'Tudo o Que Eu Queria Te Dizer (Ao Vivo)',
        duration: '4:18',
        audioUrl: '/audio-samples/TQEQTD - VIVO20.wav',
        composers: 'Igor Delfino',
        streamingLinks: {
          spotify: 'https://open.spotify.com/intl-pt/track/1fDJc4wJ7EvP2HGuMR1uXo?si=47da613e511b4c9b',
          apple: 'https://music.apple.com/br/song/tudo-o-que-eu-queria-te-dizer-ao-vivo/1817956731',
          youtube: 'https://youtu.be/0AwFbg8XMxY?si=0nkTz13aXfBX2u-l',
        },
      },
    ],
  },
];

function MinimalAudioPlayer({
  track,
  isPlaying,
  onPlayPause,
}: {
  track: { name: string; duration: string; audioUrl: string };
  isPlaying: boolean;
  onPlayPause: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => setIsLoading(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
    };
  }, [track.audioUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsLoading(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-background border rounded-lg p-4 space-y-3">
      <audio ref={audioRef} src={track.audioUrl} crossOrigin="anonymous" preload="metadata" />

      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate">{track.name}</h4>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <Button onClick={onPlayPause} size="sm" variant="ghost" className="rounded-full w-8 h-8 p-0 ml-3">
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
        </Button>
      </div>

      <div className="w-full bg-muted rounded-full h-1">
        <div
          className="bg-primary h-1 rounded-full transition-all duration-100"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}

export function DiscographyContent() {
  const [selectedAlbum, setSelectedAlbum] = useState<(typeof albums)[0] | null>(null);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const globalAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrackClick = (trackIndex: number) => {
    if (currentTrack === trackIndex) {
      // Se é a mesma faixa, apenas alternar play/pause
      setIsPlaying(!isPlaying);
    } else {
      // Se é uma faixa diferente e há música tocando, pausar primeiro
      if (isPlaying && globalAudioRef.current) {
        setIsPlaying(false);
        globalAudioRef.current.pause();
        globalAudioRef.current.currentTime = 0;

        // Aguardar 1 segundo antes de trocar e tocar a nova música
        setTimeout(() => {
          setCurrentTrack(trackIndex);
          setIsPlaying(true);
        }, 0);
      } else {
        // Se não há música tocando, trocar imediatamente
        setCurrentTrack(trackIndex);
        setIsPlaying(true);
      }
    }
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setCurrentTrack(null);
    if (globalAudioRef.current) {
      globalAudioRef.current.pause();
      globalAudioRef.current.currentTime = 0;
    }
    setSelectedAlbum(null);
  };

  const handleAlbumSelect = (album: (typeof albums)[0]) => {
    setIsPlaying(false);
    setCurrentTrack(0);
    if (globalAudioRef.current) {
      globalAudioRef.current.pause();
      globalAudioRef.current.currentTime = 0;
    }
    setSelectedAlbum(album);
  };

  const handlePlayerPlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElements = document.querySelectorAll('audio');
    if (audioElements.length > 0) {
      globalAudioRef.current = audioElements[audioElements.length - 1] as HTMLAudioElement;
    }
  }, [currentTrack, selectedAlbum]);

  const sortedAlbums = [...albums].sort((a, b) => {
    const dateA = new Date(a.releaseDate.split('/').reverse().join('-'));
    const dateB = new Date(b.releaseDate.split('/').reverse().join('-'));

    if (sortOrder === 'newest') {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });

  return (
    <section className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mb-20">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">Discografia</p>
            <h1 className="text-5xl lg:text-6xl font-light text-black leading-[0.9] tracking-tight">
              Meus
              <br />
              <span className="font-normal">Trabalhos</span>
            </h1>
          </div>
        </div>

        <div className="mb-8 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            className="flex items-center gap-2"
          >
            <ArrowUpDown className="h-4 w-4" />
            {sortOrder === 'newest' ? 'Mais Recentes' : 'Mais Antigos'}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {sortedAlbums.map((album, index) => (
            <div key={album.id} className="group cursor-pointer" onClick={() => handleAlbumSelect(album)}>
              <div className="relative mb-6">
                <div className="aspect-square overflow-hidden bg-white shadow-lg">
                  <img
                    src={album.cover || '/placeholder.svg'}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center cursor-pointer">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-light tracking-wide text-black group-hover:text-gray-600 transition-colors duration-300">
                    {album.title}
                  </h3>
                  <span className="text-sm font-mono text-gray-500">{album.year}</span>
                </div>
                <div className="text-xs font-mono tracking-[0.1em] uppercase text-gray-400">{album.type}</div>
                <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">{album.description}</p>
                <div className="text-xs font-mono tracking-[0.1em] uppercase text-gray-400 group-hover:text-black transition-colors duration-300">
                  Clique para explorar →
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedAlbum && (
            <Dialog open={!!selectedAlbum} onOpenChange={handleCloseModal}>
              <DialogContent
                className="w-full max-w-none h-screen max-h-screen m-0 rounded-none overflow-hidden p-0 
                            sm:w-[95vw] sm:max-w-7xl sm:h-[90vh] sm:max-h-[90vh] sm:rounded-lg sm:m-4"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-50 bg-background/90 backdrop-blur-sm border
                             sm:top-4 sm:right-4"
                  onClick={handleCloseModal}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="h-full overflow-y-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 sm:p-8 min-h-full"
                  >
                    <DialogHeader className="mb-4 sm:mb-8">
                      <DialogTitle className="text-xl sm:text-3xl font-bold pr-8">
                        {selectedAlbum.title} ({selectedAlbum.year})
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12">
                      <div className="space-y-4 sm:space-y-6">
                        <img
                          src={selectedAlbum.cover || '/placeholder.svg'}
                          alt={selectedAlbum.title}
                          className="w-full max-w-xs sm:max-w-lg mx-auto aspect-square object-cover rounded-lg"
                        />

                        {selectedAlbum.tracklist.length > 0 && (
                          <div className="w-full max-w-xs sm:max-w-lg mx-auto">
                            <MinimalAudioPlayer
                              track={selectedAlbum.tracklist[currentTrack || 0]}
                              isPlaying={isPlaying}
                              onPlayPause={handlePlayerPlayPause}
                            />
                          </div>
                        )}
                      </div>

                      <div className="space-y-6 sm:space-y-8">
                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                          {selectedAlbum.description}
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 sm:p-6">
                          <h4 className="font-bold mb-3 sm:mb-4 flex items-center text-base sm:text-lg">
                            <Disc className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            Ficha Técnica
                          </h4>
                          <div className="space-y-3 text-sm sm:text-base">
                            <div className="flex items-start">
                              <Calendar className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Lançamento:</span>
                                <span className="ml-2 font-medium">{selectedAlbum.releaseDate}</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Duração:</span>
                                <span className="ml-2 font-medium">{selectedAlbum.duration}</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Eng. de Som/Mix/Master:</span>
                                <span className="ml-2 font-medium">{selectedAlbum.producer}</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Music className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Gênero:</span>
                                <span className="ml-2 font-medium">{selectedAlbum.genre}</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Disc className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Estúdio:</span>
                                <span className="ml-2 font-medium">{selectedAlbum.studio}</span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <Users className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Créditos:</span>
                                <span className="ml-2 font-medium text-sm leading-relaxed">
                                  {selectedAlbum.credits}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Faixas:</h4>
                          <div className="space-y-1 sm:space-y-2">
                            {selectedAlbum.tracklist.map((track, index) => (
                              <div
                                key={index}
                                className={`flex justify-between items-center py-2 px-3 rounded cursor-pointer transition-colors text-sm ${
                                  currentTrack === index
                                    ? 'bg-primary/10 border border-primary/20'
                                    : 'bg-muted/30 hover:bg-muted/50'
                                }`}
                                onClick={() => handleTrackClick(index)}
                              >
                                <div className="flex items-center min-w-0 flex-1">
                                  <div className="mr-2 w-5 flex justify-center flex-shrink-0">
                                    {currentTrack === index && isPlaying ? (
                                      <Pause className="h-3 w-3 text-primary" />
                                    ) : (
                                      <Play className="h-3 w-3 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-medium truncate">{track.name}</div>
                                    {track.composers && (
                                      <div className="text-xs text-muted-foreground truncate">{track.composers}</div>
                                    )}
                                  </div>
                                </div>
                                <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">
                                  {track.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold mb-2 sm:mb-3 text-sm sm:text-base">Ouça em:</h4>
                          <div className="flex flex-col gap-2">
                            {selectedAlbum.tracklist[currentTrack || 0]?.streamingLinks && (
                              <>
                                {selectedAlbum.tracklist[currentTrack || 0].streamingLinks.spotify !== '#' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="w-full justify-start bg-transparent"
                                  >
                                    <a
                                      href={selectedAlbum.tracklist[currentTrack || 0].streamingLinks.spotify}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="mr-2 h-3 w-3" />
                                      Spotify
                                    </a>
                                  </Button>
                                )}
                                {selectedAlbum.tracklist[currentTrack || 0].streamingLinks.apple !== '#' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="w-full justify-start bg-transparent"
                                  >
                                    <a
                                      href={selectedAlbum.tracklist[currentTrack || 0].streamingLinks.apple}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="mr-2 h-3 w-3" />
                                      Apple Music
                                    </a>
                                  </Button>
                                )}
                                {selectedAlbum.tracklist[currentTrack || 0].streamingLinks.youtube !== '#' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    asChild
                                    className="w-full justify-start bg-transparent"
                                  >
                                    <a
                                      href={selectedAlbum.tracklist[currentTrack || 0].streamingLinks.youtube}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="mr-2 h-3 w-3" />
                                      YouTube
                                    </a>
                                  </Button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
