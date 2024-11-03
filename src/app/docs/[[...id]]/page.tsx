import { Metadata } from 'next';
import path from 'node:path';
import { Markdown } from '@/app/Markdown';
import { getFile } from '@/lib/content';

const FOLDER = path.resolve(process.cwd(), './src/content/docs');

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string[] };
}): Promise<Metadata> {
  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  return {
    title: {
      absolute: `${doc?.meta?.title} – Umami`,
      default: 'Umami',
    },
  };
}

export default async function ({ params: { id = [] } }: { params: { id: string[] } }) {
  const name = id?.length ? id.join('/') : 'index';
  const doc = await getFile(name, FOLDER);

  console.log({ id, name, doc });

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
