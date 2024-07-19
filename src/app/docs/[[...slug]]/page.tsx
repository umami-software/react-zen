import { cache } from 'react';
import matter from 'gray-matter';
import path from 'path';
import walk from 'walkdir';
import fs from 'fs/promises';
import Markdown from '@/app/Markdown';

const SRC_PATH = `./src/content/docs`;

export interface Doc {
  id: string;
  title: string;
  body: string;
  path: string;
}

export async function generateStaticParams() {
  const docs = await getDocs();

  return docs.map(doc => {
    return { slug: [doc.id] };
  });
}

const getDocs = cache(async () => {
  const files = await walk.async(SRC_PATH);

  return Promise.all(
    files
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const postContent = await fs.readFile(file, 'utf8');
        const { data, content } = matter(postContent);

        return { ...data, path: file.replace('.mdx', ''), body: content } as Doc;
      }),
  );
});

async function getDoc(id: string) {
  const docs = await getDocs();

  return docs.find(doc => doc?.id === id);
}

export default async function ({ params: { slug } }: { params: { slug: string[] } }) {
  const doc = await getDoc(slug ? slug.join('/') : 'index');

  return <Markdown>{doc?.body || 'not found'}</Markdown>;
}
