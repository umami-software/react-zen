import { Breakpoints } from '@/lib/types';
import styles from '../styles/vars.module.css';

const cssMap = {
  display: 'display',
  position: 'position',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  textAlign: 'text-align',
  textWrap: 'text-wrap',
  letterSpacing: 'letter-spacing',
  headingSize: 'heading-size',
  color: 'font-color',
  backgroundColor: 'background-color',
  hoverColor: 'hover-color',
  hoverBackgroundColor: 'hover-background-color',
  hoverBorderColor: 'hover-border-color',
  strokeColor: 'stroke-color',
  fillColor: 'fill-color',
  border: 'border',
  borderColor: 'border-color',
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
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  width: 'width',
  height: 'height',
  minHeight: 'min-height',
  maxHeight: 'max-height',
  minWidth: 'min-width',
  maxWidth: 'max-width',
  gap: 'gap',
  gapX: 'gap-x',
  gapY: 'gap-y',
  flexDirection: 'flex-direction',
  flexWrap: 'flex-wrap',
  justifyContent: 'justify-content',
  justifyItems: 'justify-items',
  justifySelf: 'justify-self',
  alignContent: 'align-content',
  alignItems: 'align-items',
  alignSelf: 'align-self',
  flexBasis: 'flex-basis',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  gridTemplateRows: 'grid-template-rows',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplateAreas: 'grid-template-areas',
  gridAutoRows: 'grid-auto-rows',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoFlow: 'grid-auto-flow',
  gridArea: 'grid-area',
  gridRow: 'grid-row',
  gridColumn: 'grid-column',
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  order: 'order',
  textTransform: 'text-transform',
};

const aliasMap = {
  gap: 'spacing',
  'gap-x': 'spacing',
  'gap-y': 'spacing',
};

const excludedProps = [
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',
  'gridAutoRows',
  'gridAutoColumns',
  'gridArea',
  'gridRow',
  'gridColumn',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'gridArea',
  'gridRow',
  'gridColumn',
  'order',
];

type Keys = keyof typeof cssMap;

function parseValue(name: string, value: string) {
  // Predefined value exists
  if (/^\d+$/.test(value)) {
    return `var(--${aliasMap[name as keyof typeof aliasMap] || name}-${value})`;
  }
  return value;
}

export function useDesignProps(props: { [K in Keys]?: any }): [string[], { [key: string]: any }] {
  const classes: string[] = [];
  const styleProps: { [key: string]: any } = {};

  Object.keys(props).forEach(key => {
    const name = cssMap[key as Keys];
    const value = props[key as Keys];

    if (value) {
      // Apply default style
      if (typeof value === 'boolean') {
        classes.push(styles[name]);
      }
      // Apply defined style
      else if (typeof value === 'string' || typeof value === 'number') {
        if (excludedProps.includes(key) || /var\(.*\)/.test(value.toString())) {
          styleProps[key] = value;
        } else {
          classes.push(styles[`${name}-${value}`]);
        }
      }
      // Handle responsive styles
      else if (typeof value === 'object') {
        Object.keys(value).forEach(breakpoint => {
          const className = `${name}-${breakpoint}`;

          if (styles[className]) {
            classes.push(styles[className]);
            styleProps[`--${className}`] = parseValue(name, value[breakpoint]);
          } else {
            styleProps[`--${className}`] = value;
          }
        });

        // Add default style
        classes.push(styles[name]);
        const breakpoint = Breakpoints.find(breakpoint => styles[`${name}-${breakpoint}`]);
        styleProps[`--${name}`] = breakpoint ? parseValue(name, value[breakpoint]) : value;
      }
    }
  });

  return [classes, styleProps];
}
