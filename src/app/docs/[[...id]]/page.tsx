import { Metadata } from 'next';
import path from 'node:path';
import { Markdown } from '@/app/Markdown';
import { getFile } from '@/lib/content';

const FOLDER = path.resolve(process.cwd(), './src/content/docs');

export async function generateMetadata({
  params,
}: {
  params: { id: string[] };
}): Promise<Metadata> {
  const { id } = await params;
  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  return {
    title: {
      absolute: `${doc?.meta?.title} – Umami`,
      default: 'Umami',
    },
  };
}

export default async function ({ params }: { params: Promise<{ id: string[] }> }) {
  const { id = [] } = await params;

  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  if (!doc) {
    return <h1>Page not found</h1>;
  }

  return (
    <div>
      <h1>{doc?.meta?.title}</h1>
      <p>{doc?.meta?.description}</p>
      <Markdown>{doc?.body}</Markdown>
    </div>
  );
}
