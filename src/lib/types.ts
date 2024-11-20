export const breakpoints = ['default', 'xs', 'sm', 'md', 'lg', 'xl'] as const;
export type Breakpoint = (typeof breakpoints)[number];
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export type BackgroundColor =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

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

export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Top = Spacing | NegativeSpacing;
export type Right = Spacing | NegativeSpacing;
export type Bottom = Spacing | NegativeSpacing;
export type Left = Spacing | NegativeSpacing;

export type Display = 'none' | 'inline' | 'inline-block' | 'block';
export type BorderSize = 'thin' | 'medium' | 'thick';
export type BorderRadius = '1' | '2' | '3' | '4' | '5' | '6' | 'full';
export type BoxShadow = '1' | '2' | '3' | '4' | '5' | '6';

export type FontSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

export type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance';
export type TextAlign = 'left' | 'center' | 'right';

export type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider';

export type FlexDisplay = 'none' | 'flex' | 'inline-flex';
export type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
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

export type AlignContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
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
