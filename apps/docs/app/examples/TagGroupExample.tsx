'use client';
import { Tag, TagGroup } from '@/components';

export function RemovableTagGroupExample() {
  return (
    <TagGroup label="Skills" onRemove={keys => console.log('Remove:', [...keys])}>
      <Tag id="javascript">JavaScript</Tag>
      <Tag id="typescript">TypeScript</Tag>
      <Tag id="python">Python</Tag>
    </TagGroup>
  );
}
