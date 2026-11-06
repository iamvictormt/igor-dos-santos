import { NextResponse } from 'next/server';
import { getYouTubeId, videos } from '@/lib/videography';

export const revalidate = 0;

type Availability = 'private' | 'available' | 'unknown';

async function getVideoAvailability(videoId: string): Promise<Availability> {
  try {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}&hl=pt-BR`, {
      headers: {
        'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) return 'unknown';

    const html = await response.text();
    const statusIndex = html.indexOf('"playabilityStatus"');
    if (statusIndex === -1) return 'unknown';

    const playability = html.slice(statusIndex, statusIndex + 1500);
    const status = /"status"\s*:\s*"([A-Z_]+)"/.exec(playability)?.[1];
    const reason = /"reason"\s*:\s*"([^"]+)"/.exec(playability)?.[1] ?? '';
    const normalizedReason = reason.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    if (status === 'LOGIN_REQUIRED' && /video.{0,30}privado|private.{0,30}video|video.{0,30}private/.test(normalizedReason)) {
      return 'private';
    }

    return status === 'OK' ? 'available' : 'unknown';
  } catch {
    return 'unknown';
  }
}

export async function GET() {
  const statuses = await Promise.all(
    videos.map(async (video) => {
      const videoId = getYouTubeId(video.youtubeUrl);
      return videoId ? ([videoId, await getVideoAvailability(videoId)] as const) : null;
    }),
  );

  const validStatuses = statuses.filter((status): status is readonly [string, Availability] => status !== null);
  const availabilityById = Object.fromEntries(validStatuses);

  return NextResponse.json(availabilityById, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
