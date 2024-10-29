import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { TextArea as AriaTextArea } from 'react-aria-components';
import { TextField, TextFieldProps } from './TextField';
import styles from './TextArea.module.css';

interface TextAreaProps extends TextFieldProps {
  rows?: number;
  cols?: number;
  resize?: 'none' | 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const TextArea = forwardRef(
  ({ rows, cols, resize, className, style, children, ...props }: TextAreaProps, ref: Ref<any>) => {
    return (
      <TextField
        {...props}
        ref={ref}
        className={classNames(resize && styles[`resize-${resize}`])}
        asChild
      >
        <AriaTextArea rows={rows} cols={cols} style={{ ...style }}>
          {children}
        </AriaTextArea>
      </TextField>
    );
  },
);

export { TextArea };
export type { TextAreaProps };
