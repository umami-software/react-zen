import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { TextField, TextFieldProps } from './TextField';
import styles from './TextArea.module.css';

interface TextAreaProps extends TextFieldProps {
  resize?: 'none' | 'vertical' | 'horizontal';
}

const TextArea = forwardRef(({ resize, className, ...props }: TextAreaProps, ref: Ref<any>) => {
  return (
    <TextField
      {...props}
      ref={ref}
      className={classNames(resize && styles[`resize-${resize}`])}
      asTextArea={true}
    />
  );
});

export { TextArea };
export type { TextAreaProps };
