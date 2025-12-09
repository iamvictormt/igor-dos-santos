import { NewsItem } from '@/types/news';
import { NextResponse } from 'next/server';

export async function GET() {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.NOTION_DATABASE_SHOWS_ID;

  console.log('Iniciando fetch na Notion API...');
  const res = await fetch('https://api.notion.com/v1/databases/' + DATABASE_ID + '/query', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    // Filtros e ordenação opcionais
    body: JSON.stringify({
      sorts: [{ property: 'Data', direction: 'descending' }],
      page_size: 10,
    }),
    // Recomendado: cache no server se fizer sentido
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const error = await res.text();
    console.error('Erro ao buscar dados da Notion API:', error);
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();

  if (!data.results) {
    return NextResponse.json({ error: 'Formato de dados inesperado' }, { status: 500 });
  }

  // Mapeia os campos do seu schema:
  // "ID" (number) => userDefined:ID na tabela
  // "Título" (title)
  // "Resumo" (text)
  // "Categoria" (select)
  // "Data" (date)
  const items: NewsItem[] = data.results.map((page: any, index: number) => {
    const props = page.properties;
    const id = index + 1;
    const date = props['Data']?.date?.start ?? '';
    const title = props['Descrição']?.title?.[0]?.plain_text ?? '';
    const city = props['Cidade, UF']?.rich_text?.[0]?.plain_text ?? '';
    const venue = props['Local']?.rich_text?.[0]?.plain_text ?? '';
    const time = props['Hora']?.rich_text?.[0]?.plain_text ?? '';
    const status = props['Status']?.status?.name ?? ''; // era select, agora status
    const ticketUrl = props['Link Ingresso']?.url ?? '';

    return {
      id,
      date,
      title,
      city,
      venue,
      time,
      status,
      ticketUrl,
    };
  });

  return NextResponse.json(items);
}
