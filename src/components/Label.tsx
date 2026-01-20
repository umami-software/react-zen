import { Label as AriaLabel } from 'react-aria-components';
import { Text, type TextProps } from './Text';

interface LabelProps extends Omit<TextProps, 'as' | 'render'> {
  htmlFor?: string;
}

function Label({ size = 'base', weight = 'semibold', lineHeight = 'loose', ...props }: LabelProps) {
  return (
    <Text
      {...props}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      render={renderProps => <AriaLabel {...renderProps} />}
    />
  );
}

export { Label };
export type { LabelProps };
