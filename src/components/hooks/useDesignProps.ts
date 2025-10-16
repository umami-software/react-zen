import { Breakpoints } from '@/lib/types';
import styles from '../styles/vars.module.css';

const cssMap = {
  alignContent: 'align-content',
  alignItems: 'align-items',
  alignSelf: 'align-self',
  backgroundColor: 'background-color',
  border: 'border',
  borderColor: 'border-color',
  borderRadius: 'border-radius',
  borderWidth: 'border-width',
  bottom: 'bottom',
  color: 'font-color',
  display: 'display',
  fillColor: 'fill-color',
  flexBasis: 'flex-basis',
  flexDirection: 'flex-direction',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  flexWrap: 'flex-wrap',
  fontSize: 'font-size',
  fontWeight: 'font-weight',
  gap: 'gap',
  gapX: 'gap-x',
  gapY: 'gap-y',
  gridArea: 'grid-area',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoFlow: 'grid-auto-flow',
  gridAutoRows: 'grid-auto-rows',
  gridColumn: 'grid-column',
  gridRow: 'grid-row',
  gridTemplateAreas: 'grid-template-areas',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplateRows: 'grid-template-rows',
  headingSize: 'heading-size',
  height: 'height',
  hoverBackgroundColor: 'hover-background-color',
  hoverBorderColor: 'hover-border-color',
  hoverColor: 'hover-color',
  justifyContent: 'justify-content',
  justifyItems: 'justify-items',
  justifySelf: 'justify-self',
  left: 'left',
  letterSpacing: 'letter-spacing',
  margin: 'margin',
  marginBottom: 'margin-bottom',
  marginLeft: 'margin-left',
  marginRight: 'margin-right',
  marginTop: 'margin-top',
  marginX: 'margin-x',
  marginY: 'margin-y',
  maxHeight: 'max-height',
  maxWidth: 'max-width',
  minHeight: 'min-height',
  minWidth: 'min-width',
  order: 'order',
  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',
  padding: 'padding',
  paddingBottom: 'padding-bottom',
  paddingLeft: 'padding-left',
  paddingRight: 'padding-right',
  paddingTop: 'padding-top',
  paddingX: 'padding-x',
  paddingY: 'padding-y',
  position: 'position',
  right: 'right',
  shadow: 'shadow',
  strokeColor: 'stroke-color',
  textAlign: 'text-align',
  textTransform: 'text-transform',
  textWrap: 'text-wrap',
  top: 'top',
  width: 'width',
  zIndex: 'z-index',
};

const aliasMap = {
  gap: 'spacing',
  'gap-x': 'spacing',
  'gap-y': 'spacing',
  margin: 'spacing',
  'margin-x': 'spacing',
  'margin-y': 'spacing',
  'margin-top': 'spacing',
  'margin-bottom': 'spacing',
  'margin-left': 'spacing',
  'margin-right': 'spacing',
  padding: 'spacing',
  'padding-x': 'spacing',
  'padding-y': 'spacing',
  'padding-top': 'spacing',
  'padding-bottom': 'spacing',
  'padding-left': 'spacing',
  'padding-right': 'spacing',
};

const excludedProps = [
  'bottom',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'gridArea',
  'gridAutoColumns',
  'gridAutoRows',
  'gridColumn',
  'gridRow',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'left',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'order',
  'right',
  'top',
  'width',
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
          // Otherwise, try to find a CSS Module class (e.g., 'font-size-large')
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
