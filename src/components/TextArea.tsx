import classNames from 'classnames';
import { TextArea as AriaTextArea } from 'react-aria-components';
import { TextField, TextFieldProps } from './TextField';
import styles from './TextArea.module.css';

export interface TextAreaProps extends TextFieldProps {
  rows?: number;
  cols?: number;
  resize?: 'none' | 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

export function TextArea({
  rows,
  cols,
  resize,
  className,
  style,
  children,
  ...props
}: TextAreaProps) {
  return (
    <TextField {...props} className={classNames(resize && styles[`resize-${resize}`])} asChild>
      <AriaTextArea rows={rows} cols={cols} style={{ ...style }}>
        {children}
      </AriaTextArea>
    </TextField>
  );
}
