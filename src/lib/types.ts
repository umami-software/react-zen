export const breakpoints = ['default', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = (typeof breakpoints)[number];
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export type BaseColor = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type AccentColor =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky';

export type BackgroundColor = true | BaseColor | AccentColor;

export type BorderColor = true | BaseColor | AccentColor;

export type FontColor = AccentColor | 'primary' | 'muted' | 'disabled';

export type Spacing = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export type NegativeSpacing =
  | '-1'
  | '-2'
  | '-3'
  | '-4'
  | '-5'
  | '-6'
  | '-7'
  | '-8'
  | '-9'
  | '-10'
  | '-11'
  | '-12';

export type Padding = Spacing | NegativeSpacing | true;
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Top = Spacing | NegativeSpacing | string;
export type Right = Spacing | NegativeSpacing | string;
export type Bottom = Spacing | NegativeSpacing | string;
export type Left = Spacing | NegativeSpacing | string;
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export type Display = 'none' | 'inline' | 'inline-block' | 'block';
export type BorderRadius = true | '1' | '2' | '3' | '4' | 'full';
export type BoxShadow = '1' | '2' | '3' | '4' | '5' | '6';

export type FontSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export type FontWeight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';

export type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance';
export type TextAlign = 'left' | 'center' | 'right';
export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';

export type LetterSpacing = '1' | '2' | '3' | '4' | '5';

export type FlexDisplay = 'none' | 'flex' | 'inline-flex';
export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGrow = string | number;
export type FlexShrink = string | number;

export type GridDisplay = 'none' | 'grid' | 'inline-grid';
export type GridAutoFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
export type GridTemplateRows = string;
export type GridTemplateColumns = string;
export type GridTemplateAreas = string;

export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export type JustifyItems =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline';

export type JustifySelf =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch';

export type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';

export type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'stretch'
  | 'baseline';

export type AlignSelf =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch';

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
