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
  borderWidth: 'border-width',
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
  zIndex: 'z-index',
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
  'top',
  'right',
  'bottom',
  'left',
  'order',
  'zIndex',
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
      // 1. Handle boolean values (e.g., <div display />)
      if (typeof value === 'boolean') {
        classes.push(styles[name]);
      }
      // 2. Handle string or number values (e.g., <div fontSize="large" /> or <div padding={10} />)
      else if (typeof value === 'string' || typeof value === 'number') {
        // If the prop is excluded or already a CSS variable, set as inline style
        if (excludedProps.includes(key) || /var\(.*\)/.test(value.toString())) {
          styleProps[key] = value;
        } else {
          // Otherwise, try to find a CSS Module class (e.g., 'fontSize-large')
          classes.push(styles[`${name}-${value}`]);
        }
      }
      // 3. Handle object values (responsive styles, e.g., <div display={{ sm: 'block', md: 'flex' }} />)
      else if (typeof value === 'object') {
        Object.keys(value).forEach(breakpoint => {
          const className = `${name}-${breakpoint}`;

          if (styles[className]) {
            // If a CSS Module class exists for the breakpoint, add it
            classes.push(styles[className]);

            // And set a CSS variable for the actual value at that breakpoint
            styleProps[`--${className}`] = parseValue(name, value[breakpoint]);
          } else {
            // If no specific CSS Module class, just set the CSS variable
            styleProps[`--${className}`] = value;
          }
        });

        // Add a default style (base class for the property)
        classes.push(styles[name]);

        // Find a matching breakpoint from the `Breakpoints` array
        const breakpoint = Breakpoints.find(breakpoint => styles[`${name}-${breakpoint}`]);

        // Set a default CSS variable for the property, potentially using the first matching breakpoint's value
        styleProps[`--${name}`] = breakpoint ? parseValue(name, value[breakpoint]) : value;
      }
    }
  });

  return [classes, styleProps];
}
