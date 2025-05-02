import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import zlib from 'zlib'; // Importa biblioteca para compressão

export type Post = {
  title: string;
  link: string;
  date: string;
  content: string;
  image: string;
};

export async function GET() {
  const parser = new Parser();
  const feedUrl = 'https://brunocrispim.substack.com/feed'; // Altere para o feed do autor

  try {

    const feed = await parser.parseURL(feedUrl);

    // Obtém os 3 últimos posts e trata strings grandes
    const posts: Post[] = feed.items.slice(0, 3).map((item) => ({
      title: item.title || 'Sem título',
      link: item.link || '#',
      date: item.pubDate || '',
      content: item.contentSnippet?.substring(0, 1000) || 'Sem resumo disponível', 
      image: item.enclosure?.url || 'Sem imagem disponível',
    }));

    // Compacta os dados para reduzir impacto de strings grandes
    const compressedPosts = zlib.deflateSync(JSON.stringify(posts)).toString('base64');

    return NextResponse.json({ data: compressedPosts });
  } catch {
    return NextResponse.json({ error: 'Erro ao buscar o feed' }, { status: 500 });
  }
}
