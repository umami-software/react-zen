import { animated, useTransition } from '@react-spring/web';
import { type RefObject, useState } from 'react';
import type { PressEvent } from 'react-aria-components';
import { Moon, Sun } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { type Theme, useTheme } from './hooks/useTheme';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

export interface ThemeButtonProps extends ButtonProps {
  target?: RefObject<HTMLElement | null> | HTMLElement;
}

function applyTheme(element: HTMLElement, theme: Theme) {
  element.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    element.classList.add('dark');
  } else {
    element.classList.remove('dark');
  }
}

export function ThemeButton({
  className,
  variant = 'quiet',
  target,
  onPress,
  ...props
}: ThemeButtonProps) {
  const globalTheme = useTheme();
  const [localTheme, setLocalTheme] = useState<Theme>('light');

  const isLocal = !!target;
  const theme = isLocal ? localTheme : globalTheme.theme;

  const transitions = useTransition(theme, {
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: `translateY(${theme === 'light' ? '20px' : '-20px'}) scale(0.5)`,
    },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1.0)' },
    leave: {
      opacity: 0,
      transform: `translateY(${theme === 'light' ? '-20px' : '20px'}) scale(0.5)`,
    },
  });

  function handleClick(e: PressEvent) {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if (isLocal) {
      const element = 'current' in target ? target.current : target;
      if (element) {
        applyTheme(element, newTheme);
        setLocalTheme(newTheme);
      }
    } else {
      globalTheme.setTheme(newTheme);
    }

    onPress?.(e);
  }

  return (
    <Button
      {...props}
      className={cn(
        'w-[42px] flex justify-center items-center cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:absolute',
        className,
      )}
      variant={variant}
      onPress={handleClick}
    >
      {transitions((style, item) => (
        // @ts-expect-error
        <animated.div key={item} style={style}>
          <Icon size="sm">{item === 'light' ? <Sun /> : <Moon />}</Icon>
        </animated.div>
      ))}
      &nbsp;
    </Button>
  );
}
