import styles from '../styles/global.module.css';

const CSS_MAP = {
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

type Keys = keyof typeof CSS_MAP;

function parseValue(value: string, name: string) {
  if (/^\d+$/.test(value)) {
    return `var(--${name}-${value})`;
  }
  return value;
}

export function useDesignProps(props: { [K in Keys]?: any }): [string[], { [key: string]: any }] {
  const classes: string[] = [];
  const styleProps: { [key: string]: any } = {};

  Object.keys(props).forEach(key => {
    const name = CSS_MAP[key as Keys];
    const value = props[key as Keys];

    if (value) {
      if (typeof value === 'string' || typeof value === 'number') {
        if (excludedProps.includes(key) || /var\(.*\)/.test(value.toString())) {
          styleProps[key] = value;
        } else {
          classes.push(styles[`${name}-${value}`]);
        }
      } else if (typeof value === 'object') {
        Object.keys(value).forEach(breakpoint => {
          const className = `${name}${breakpoint === 'default' ? '' : `-${breakpoint}`}`;

          if (styles[className]) {
            classes.push(styles[className]);
            styleProps[`--${className}`] = parseValue(value[breakpoint], name);
          } else {
            styleProps[`--${className}`] = value;
          }
        });
      }
    }
  });

  return [classes, styleProps];
}
