export type Primitive = string | number | boolean | bigint | symbol | null | undefined;

// Tailwind 4 default breakpoints (mobile-first)
// base = all sizes, sm = 640px+, md = 768px+, lg = 1024px+, xl = 1280px+, 2xl = 1536px+
export const Breakpoints = ['base', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type Breakpoint = (typeof Breakpoints)[number];
export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

// Colors - semantic and Tailwind color names
export type ColorName =
  | 'gray'
  | 'slate'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

export type ColorShade =
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

// Tailwind color with shade (e.g., 'blue-500', 'red-300')
export type TailwindColor = `${ColorName}-${ColorShade}`;

// Semantic color values
export type SemanticColor = 'primary' | 'muted' | 'disabled' | 'transparent';

// Surface color variants
export type SurfaceColor =
  | 'surface-base'
  | 'surface-raised'
  | 'surface-sunken'
  | 'surface-overlay'
  | 'surface-inverted'
  | 'surface-disabled';

// All supported colors: semantic + base colors + color-shade combinations
export type FontColor = SemanticColor | ColorName | TailwindColor | true;
export type BackgroundColor = SemanticColor | SurfaceColor | ColorName | TailwindColor | true;
export type BorderColor = SemanticColor | ColorName | TailwindColor | true;
export type HoverColor = FontColor;
export type StrokeColor = FontColor;
export type FillColor = FontColor;

// Spacing - Tailwind's native scale
export type Spacing =
  | '0'
  | 'px'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96';

export type NegativeSpacing =
  | '-px'
  | '-0.5'
  | '-1'
  | '-1.5'
  | '-2'
  | '-2.5'
  | '-3'
  | '-3.5'
  | '-4'
  | '-5'
  | '-6'
  | '-7'
  | '-8'
  | '-9'
  | '-10'
  | '-11'
  | '-12'
  | '-14'
  | '-16'
  | '-20'
  | '-24';

export type Padding = Spacing | true;
export type Top = Spacing | NegativeSpacing | string;
export type Right = Spacing | NegativeSpacing | string;
export type Bottom = Spacing | NegativeSpacing | string;
export type Left = Spacing | NegativeSpacing | string;
export type Gap = Spacing | true;
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';

export type Display = 'none' | 'inline' | 'inline-block' | 'block';

export type Cursor =
  | 'auto'
  | 'default'
  | 'pointer'
  | 'wait'
  | 'text'
  | 'move'
  | 'help'
  | 'not-allowed'
  | 'none'
  | 'grab'
  | 'grabbing';

export type Border = true | 'top' | 'right' | 'bottom' | 'left' | 'none';
export type BorderWidth = 'sm' | 'md' | 'lg' | 'xl';
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | true;

export type BoxShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | true;

export type FontSize =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type HeadingSize =
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type FontWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

export type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance';
export type TextAlign = 'left' | 'center' | 'right';
export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';

export type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

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

export type Opacity =
  | '0'
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100';

export type PointerEvents = 'none' | 'auto';
