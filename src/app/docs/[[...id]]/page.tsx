import { getContent, getContentIds } from '@umami/shiso/server';
import config from '@/shiso.config.json';
import { DocsPage } from './DocsPage';

export async function generateStaticParams() {
  const ids = await getContentIds('./src/content/docs');

  return ids.map((id: string) => ({
    id: id.split('/'),
  }));
}

export default async function ({ params }: { params: Promise<{ id: string[] }> }) {
  const content = await getContent(await params, './src/content/docs');

  return <DocsPage content={content} config={config} />;
}
