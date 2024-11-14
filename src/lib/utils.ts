import { Responsive } from '@/lib/types';
import styles from '@/components/global.module.css';

const CSS_MAP = {
  display: 'display',
  size: 'font-size',
  align: 'align',
  letterSpacing: 'letter-spacing',
  backgroundColor: 'background-color',
  borderSize: 'border-size',
  borderRadius: 'border-radius',
  shadow: 'shadow',
  padding: 'padding',
  paddingX: 'padding-x',
  paddingY: 'padding-y',
  paddingTop: 'padding-top',
  paddingRight: 'padding-right',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  margin: 'margin',
  marginX: 'margin-x',
  marginY: 'margin-y',
  marginTop: 'margin-top',
  marginRight: 'margin-right',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
};

export function mapClasses(props: Record<string, Responsive<any>>) {
  return Object.keys(props).reduce(
    (obj, key) => {
      const value = props[key];

      if (typeof value === 'string') {
        const prefix = CSS_MAP[key as keyof typeof CSS_MAP];

        obj[styles[`${prefix}-${value}`]] = true;
      }

      return obj;
    },
    {} as { [key: string]: any },
  );
}

export function mapStyles(props: Record<string, Responsive<any>>) {
  return Object.keys(props).reduce(
    (obj, key) => {
      const value = props[key];

      if (typeof value === 'string') {
        obj[key] = value;
      }

      return obj;
    },
    {} as { [key: string]: any },
  );
}
