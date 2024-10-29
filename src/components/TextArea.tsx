import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { TextArea as AriaTextArea } from 'react-aria-components';
import { TextField, TextFieldProps } from './TextField';
import styles from './TextArea.module.css';

interface TextAreaProps extends TextFieldProps {
  resize?: 'none' | 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

const TextArea = forwardRef(
  ({ resize, className, children, ...props }: TextAreaProps, ref: Ref<any>) => {
    return (
      <TextField
        {...props}
        ref={ref}
        className={classNames(resize && styles[`resize-${resize}`])}
        asChild
      >
        <AriaTextArea>{children}</AriaTextArea>
      </TextField>
    );
  },
);

export { TextArea };
export type { TextAreaProps };
