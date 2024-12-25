import { getContent, getContentIds } from '@umami/shiso/server';
import config from '@/shiso.config.json';
import { DocsPage } from './DocsPage';

const contentDir = './src/content/docs';

export async function generateMetadata({ params }: { params: Promise<{ id: string[] }> }) {
  const name = (await params)?.id?.join('/');

  const content = await getContent(name, contentDir);

  return {
    title: {
      absolute: `${content?.meta?.title} – Zen`,
      default: 'Zen',
    },
  };
}

export async function generateStaticParams() {
  const ids = await getContentIds(contentDir);

  return ids.map((id: string) => ({
    id: id.split('/'),
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string[] }> }) {
  const name = (await params)?.id?.join('/');

  const content = await getContent(name, contentDir);

  return <DocsPage content={content} config={config} />;
}
