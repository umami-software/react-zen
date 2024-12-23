import { getContent } from '@umami/shiso/server';
import config from '@/shiso.config.json';
import { DocsPage } from './DocsPage';

export default async function ({ params }: { params: Promise<{ id: string[] }> }) {
  const content = await getContent(await params, './src/content/docs');

  return <DocsPage content={content} config={config} />;
}
