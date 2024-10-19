import classNames from 'classnames';
import { TextField, TextFieldProps } from './TextField';
import styles from './TextArea.module.css';

interface TextAreaProps extends TextFieldProps {
  resize?: 'none' | 'vertical' | 'horizontal';
}

function TextArea({ resize, className, ...props }: TextAreaProps) {
  return (
    <TextField
      {...props}
      className={classNames(resize && styles[`resize-${resize}`])}
      asTextArea={true}
    />
  );
}

export { TextArea };
export type { TextAreaProps };
