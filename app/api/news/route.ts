import { NewsItem } from '@/types/news';
import { NextResponse } from 'next/server';

export async function GET() {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.NOTION_DATABASE_NEWS_ID;

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
  const items: NewsItem[] = data.results.map((page: any) => {
    const props = page.properties;
    const title = props['Título']?.title?.[0]?.plain_text ?? '';
    const excerpt = props['Resumo']?.rich_text?.[0]?.plain_text ?? '';
    const category = props['Categoria']?.select?.name ?? '';
    const date = props['Data']?.date?.start ?? '';

    return {
      date,
      title,
      excerpt,
      category,
    };
  });

  return NextResponse.json(items);
}
