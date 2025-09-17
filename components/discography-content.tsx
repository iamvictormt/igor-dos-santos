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
      },
      {
        name: 'Auto Intitulada Feat. Teco Martins',
        duration: '3:45',
        audioUrl: '/audio-samples/Auto Intitulada.flac',
        composers: 'Igor Delfino / Teco Martins',
      },
      { name: 'A.C.A.S.O', duration: '4:20', audioUrl: '/audio-samples/Acaso.flac', composers: 'Igor Delfino' },
      {
        name: 'O Herói Não Resolvido',
        duration: '4:10',
        audioUrl: '/audio-samples/O Herói Não Resolvido.flac',
        composers: 'Igor Delfino',
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/bemvindo',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/talveznunca',
      apple: '#',
      youtube: '#',
    },
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
      },
      {
        name: 'Avivar',
        duration: '3:55',
        audioUrl: '/audio-samples/Avivar Gratovolte.flac',
        composers: 'Igor Delfino',
      },
      {
        name: 'Aonde Vai o Tempo?',
        duration: '3:48',
        audioUrl: '/audio-samples/Aonde Vai o Tempo.flac',
        composers: 'Igor Delfino',
      },
      {
        name: 'Tudo o Que Eu Queria Te Dizer',
        duration: '3:53',
        audioUrl: '/audio-samples/Tudo o Que Eu Queria Te Dizer.flac',
        composers: 'Igor Delfino',
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/gratovolte',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/avivaracustica',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/iniciooutono',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/amanhanovodia',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/trintaum',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/0Rx1hjRaaMfmNi6yYmyMBs',
      apple: '#',
      youtube: '#',
    },
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
    tracklist: [{ name: 'Voar', duration: '3:38', audioUrl: '/audio-samples/Voar.mp3', composers: 'Igor Delfino' }],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/voar',
      apple: '#',
      youtube: '#',
    },
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
      },
      {
        name: 'Silêncio Ensurdecedor',
        duration: '3:53',
        audioUrl: '/audio-samples/Silencio Ensurdecedor.mp3',
        composers: 'Ennyo Viegas / Igor Delfino / Márcio Ricardo',
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/gritomudo',
      apple: '#',
      youtube: '#',
    },
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
      },
    ],
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/tudoquequeria',
      apple: '#',
      youtube: '#',
    },
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

        <Button
          onClick={onPlayPause}
          size="sm"
          variant="ghost"
          className="rounded-full w-8 h-8 p-0 ml-3"
        >
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
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            Uma jornada sonora através de composições que exploram as nuances da experiência humana, traduzidas em
            melodias e harmonias contemporâneas.
          </p>
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
                    <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
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

                      <div className="space-y-4 sm:space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {selectedAlbum.description}
                        </p>

                        <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                          <h4 className="font-bold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                            <Disc className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Ficha Técnica
                          </h4>
                          <div className="space-y-2 text-xs sm:text-sm">
                            <div className="flex items-start gap-2">
                              <Calendar className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Lançamento:</span>
                                <span className="ml-1 font-medium">{selectedAlbum.releaseDate}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Duração:</span>
                                <span className="ml-1 font-medium">{selectedAlbum.duration}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Users className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Produção:</span>
                                <span className="ml-1 font-medium">{selectedAlbum.producer}</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Music className="h-3 w-3 text-muted-foreground flex-shrink-0 mt-0.5" />
                              <div>
                                <span className="text-muted-foreground">Gênero:</span>
                                <span className="ml-1 font-medium">{selectedAlbum.genre}</span>
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
                            <Button size="sm" variant="outline" asChild className="w-full justify-start bg-transparent">
                              <a href={selectedAlbum.streamingLinks.spotify} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Spotify
                              </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild className="w-full justify-start bg-transparent">
                              <a href={selectedAlbum.streamingLinks.apple} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Apple Music
                              </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild className="w-full justify-start bg-transparent">
                              <a href={selectedAlbum.streamingLinks.youtube} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                YouTube
                              </a>
                            </Button>
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
