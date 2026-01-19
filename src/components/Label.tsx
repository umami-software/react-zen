import { Label as AriaLabel } from 'react-aria-components';
import { Text, type TextProps } from './Text';

interface LabelProps extends Omit<TextProps, 'as' | 'render'> {
  htmlFor?: string;
}

function Label({ size = 'sm', weight = 'medium', ...props }: LabelProps) {
  return (
    <Text
      {...props}
      size={size}
      weight={weight}
      render={renderProps => <AriaLabel {...renderProps} />}
    />
  );
}

export { Label };
export type { LabelProps };
