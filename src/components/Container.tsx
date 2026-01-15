import { Box, BoxProps } from './Box';
import { cn } from './lib/tailwind';

export interface ContainerProps extends BoxProps {
  isFluid?: boolean;
  isCentered?: boolean;
}

export function Container({
  isCentered = true,
  isFluid,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Box
      {...props}
      className={cn(
        'w-full px-4',
        'sm:max-w-[500px] md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1240px] 2xl:max-w-[1600px]',
        isCentered && 'mx-auto',
        isFluid && 'max-w-full p-0',
        className,
      )}
    >
      {children}
    </Box>
  );
}
