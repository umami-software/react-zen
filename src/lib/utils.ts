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
  width: 'width',
  height: 'height',
};

export function mapClasses(props: Record<string, Responsive<any>>) {
  return Object.keys(props).reduce(
    (obj, key) => {
      const value = props[key];
      const name = CSS_MAP[key as keyof typeof CSS_MAP];

      if (typeof value === 'string') {
        obj[styles[`${name}-${value}`]] = true;
      } else if (typeof value === 'object') {
        obj[styles[name]] = true;
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

      if (typeof value !== 'string' && typeof value !== 'undefined') {
        console.log({ key, value, t: typeof value });
      }

      if (typeof value === 'string') {
        obj[key] = value;
      } else if (typeof value === 'object') {
        Object.keys(value).forEach(breakpoint => {
          const name = CSS_MAP[key as keyof typeof CSS_MAP];

          obj[`--${name}${breakpoint === 'default' ? '' : `-${breakpoint}`}`] = parseValue(
            value[breakpoint],
            name,
          );
        });
      }

      console.log({ obj });

      return obj;
    },
    {} as { [key: string]: any },
  );
}

function parseValue(value: string, name: string) {
  if (/^\d+$/.test(value)) {
    return `var(--${name}-${value})`;
  }
  return value;
}
