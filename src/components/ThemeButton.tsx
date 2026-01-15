import { useTransition, animated } from '@react-spring/web';
import { PressEvent } from 'react-aria-components';
import { Sun, Moon } from '@/components/icons';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { useTheme } from './hooks/useTheme';
import { cn } from './lib/tailwind';

export function ThemeButton({ className, variant = 'quiet', onPress, ...props }: ButtonProps) {
  const { theme, setTheme } = useTheme();

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
    setTheme(theme === 'light' ? 'dark' : 'light');
    onPress?.(e);
  }

  return (
    <Button
      {...props}
      className={cn('w-[42px] flex justify-center items-center cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:absolute', className)}
      variant={variant}
      onPress={handleClick}
    >
      {transitions((style, item) => (
        // @ts-ignore
        <animated.div key={item} style={style}>
          <Icon size="sm">{item === 'light' ? <Sun /> : <Moon />}</Icon>
        </animated.div>
      ))}
      &nbsp;
    </Button>
  );
}
