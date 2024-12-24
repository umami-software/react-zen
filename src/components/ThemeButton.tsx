import { useTransition, animated } from '@react-spring/web';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { useTheme } from './hooks/useTheme';
import Moon from '@/assets/moon.svg';
import Sun from '@/assets/sun.svg';
import styles from './ThemeButton.module.css';
import classNames from 'classnames';

export function ThemeButton({ className, variant = 'quiet', ...props }: ButtonProps) {
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

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Button
      {...props}
      className={classNames(styles.button, className)}
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

export default ThemeButton;
