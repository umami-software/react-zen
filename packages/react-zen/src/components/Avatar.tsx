import { Avatar as BaseAvatar } from '@base-ui/react/avatar';
import type { ReactNode } from 'react';
import { cn } from './lib/tailwind';
import { type AvatarVariants, avatar } from './variants';

export interface AvatarProps extends BaseAvatar.Root.Props {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarVariants['size'];
}

function getInitials(name?: string) {
  if (!name) {
    return null;
  }
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word.charAt(0))
    .join('');
}

export function Avatar({ src, alt, fallback, size, className, children, ...props }: AvatarProps) {
  const styles = avatar({ size });

  return (
    <BaseAvatar.Root {...props} className={cn(styles.root(), className)}>
      {src && <BaseAvatar.Image src={src} alt={alt} className={styles.image()} />}
      <BaseAvatar.Fallback className={styles.fallback()}>
        {fallback ?? getInitials(alt)}
      </BaseAvatar.Fallback>
      {children}
    </BaseAvatar.Root>
  );
}
