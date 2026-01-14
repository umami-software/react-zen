import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Breakpoint prefixes
type Breakpoint = '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

// Padding mappings - complete class names for JIT detection
const paddingMap: Record<string, string> = {
  '0': 'p-0', '1': 'p-1', '2': 'p-2', '3': 'p-3', '4': 'p-4',
  '5': 'p-6', '6': 'p-8', '7': 'p-10', '8': 'p-12', '9': 'p-16',
  '10': 'p-20', '11': 'p-24', '12': 'p-32', 'true': 'p-3',
};
const pxMap: Record<string, string> = {
  '0': 'px-0', '1': 'px-1', '2': 'px-2', '3': 'px-3', '4': 'px-4',
  '5': 'px-6', '6': 'px-8', '7': 'px-10', '8': 'px-12', '9': 'px-16',
  '10': 'px-20', '11': 'px-24', '12': 'px-32', 'true': 'px-3',
};
const pyMap: Record<string, string> = {
  '0': 'py-0', '1': 'py-1', '2': 'py-2', '3': 'py-3', '4': 'py-4',
  '5': 'py-6', '6': 'py-8', '7': 'py-10', '8': 'py-12', '9': 'py-16',
  '10': 'py-20', '11': 'py-24', '12': 'py-32', 'true': 'py-3',
};
const ptMap: Record<string, string> = {
  '0': 'pt-0', '1': 'pt-1', '2': 'pt-2', '3': 'pt-3', '4': 'pt-4',
  '5': 'pt-6', '6': 'pt-8', '7': 'pt-10', '8': 'pt-12', '9': 'pt-16',
  '10': 'pt-20', '11': 'pt-24', '12': 'pt-32',
};
const prMap: Record<string, string> = {
  '0': 'pr-0', '1': 'pr-1', '2': 'pr-2', '3': 'pr-3', '4': 'pr-4',
  '5': 'pr-6', '6': 'pr-8', '7': 'pr-10', '8': 'pr-12', '9': 'pr-16',
  '10': 'pr-20', '11': 'pr-24', '12': 'pr-32',
};
const pbMap: Record<string, string> = {
  '0': 'pb-0', '1': 'pb-1', '2': 'pb-2', '3': 'pb-3', '4': 'pb-4',
  '5': 'pb-6', '6': 'pb-8', '7': 'pb-10', '8': 'pb-12', '9': 'pb-16',
  '10': 'pb-20', '11': 'pb-24', '12': 'pb-32',
};
const plMap: Record<string, string> = {
  '0': 'pl-0', '1': 'pl-1', '2': 'pl-2', '3': 'pl-3', '4': 'pl-4',
  '5': 'pl-6', '6': 'pl-8', '7': 'pl-10', '8': 'pl-12', '9': 'pl-16',
  '10': 'pl-20', '11': 'pl-24', '12': 'pl-32',
};

// Margin mappings
const marginMap: Record<string, string> = {
  '0': 'm-0', '1': 'm-1', '2': 'm-2', '3': 'm-3', '4': 'm-4',
  '5': 'm-6', '6': 'm-8', '7': 'm-10', '8': 'm-12', '9': 'm-16',
  '10': 'm-20', '11': 'm-24', '12': 'm-32',
  '-1': '-m-1', '-2': '-m-2', '-3': '-m-3', '-4': '-m-4',
  '-5': '-m-6', '-6': '-m-8', '-7': '-m-10', '-8': '-m-12',
};
const mxMap: Record<string, string> = {
  '0': 'mx-0', '1': 'mx-1', '2': 'mx-2', '3': 'mx-3', '4': 'mx-4',
  '5': 'mx-6', '6': 'mx-8', '7': 'mx-10', '8': 'mx-12', '9': 'mx-16',
  '10': 'mx-20', '11': 'mx-24', '12': 'mx-32',
  '-1': '-mx-1', '-2': '-mx-2', '-3': '-mx-3', '-4': '-mx-4',
};
const myMap: Record<string, string> = {
  '0': 'my-0', '1': 'my-1', '2': 'my-2', '3': 'my-3', '4': 'my-4',
  '5': 'my-6', '6': 'my-8', '7': 'my-10', '8': 'my-12', '9': 'my-16',
  '10': 'my-20', '11': 'my-24', '12': 'my-32',
  '-1': '-my-1', '-2': '-my-2', '-3': '-my-3', '-4': '-my-4',
};
const mtMap: Record<string, string> = {
  '0': 'mt-0', '1': 'mt-1', '2': 'mt-2', '3': 'mt-3', '4': 'mt-4',
  '5': 'mt-6', '6': 'mt-8', '7': 'mt-10', '8': 'mt-12', '9': 'mt-16',
  '10': 'mt-20', '11': 'mt-24', '12': 'mt-32',
  '-1': '-mt-1', '-2': '-mt-2', '-3': '-mt-3', '-4': '-mt-4',
};
const mrMap: Record<string, string> = {
  '0': 'mr-0', '1': 'mr-1', '2': 'mr-2', '3': 'mr-3', '4': 'mr-4',
  '5': 'mr-6', '6': 'mr-8', '7': 'mr-10', '8': 'mr-12', '9': 'mr-16',
  '10': 'mr-20', '11': 'mr-24', '12': 'mr-32',
  '-1': '-mr-1', '-2': '-mr-2', '-3': '-mr-3', '-4': '-mr-4',
};
const mbMap: Record<string, string> = {
  '0': 'mb-0', '1': 'mb-1', '2': 'mb-2', '3': 'mb-3', '4': 'mb-4',
  '5': 'mb-6', '6': 'mb-8', '7': 'mb-10', '8': 'mb-12', '9': 'mb-16',
  '10': 'mb-20', '11': 'mb-24', '12': 'mb-32',
  '-1': '-mb-1', '-2': '-mb-2', '-3': '-mb-3', '-4': '-mb-4',
};
const mlMap: Record<string, string> = {
  '0': 'ml-0', '1': 'ml-1', '2': 'ml-2', '3': 'ml-3', '4': 'ml-4',
  '5': 'ml-6', '6': 'ml-8', '7': 'ml-10', '8': 'ml-12', '9': 'ml-16',
  '10': 'ml-20', '11': 'ml-24', '12': 'ml-32',
  '-1': '-ml-1', '-2': '-ml-2', '-3': '-ml-3', '-4': '-ml-4',
};

// Gap mappings
const gapMap: Record<string, string> = {
  '0': 'gap-0', '1': 'gap-1', '2': 'gap-2', '3': 'gap-3', '4': 'gap-4',
  '5': 'gap-6', '6': 'gap-8', '7': 'gap-10', '8': 'gap-12', '9': 'gap-16',
  '10': 'gap-20', '11': 'gap-24', '12': 'gap-32', 'true': 'gap-3',
};
const gapXMap: Record<string, string> = {
  '0': 'gap-x-0', '1': 'gap-x-1', '2': 'gap-x-2', '3': 'gap-x-3', '4': 'gap-x-4',
  '5': 'gap-x-6', '6': 'gap-x-8', '7': 'gap-x-10', '8': 'gap-x-12', '9': 'gap-x-16',
  '10': 'gap-x-20', '11': 'gap-x-24', '12': 'gap-x-32', 'true': 'gap-x-3',
};
const gapYMap: Record<string, string> = {
  '0': 'gap-y-0', '1': 'gap-y-1', '2': 'gap-y-2', '3': 'gap-y-3', '4': 'gap-y-4',
  '5': 'gap-y-6', '6': 'gap-y-8', '7': 'gap-y-10', '8': 'gap-y-12', '9': 'gap-y-16',
  '10': 'gap-y-20', '11': 'gap-y-24', '12': 'gap-y-32', 'true': 'gap-y-3',
};

// Font size mapping
const fontSizeMap: Record<string, string> = {
  '1': 'text-[11px]',
  '2': 'text-xs',
  '3': 'text-sm',
  '4': 'text-base',
  '5': 'text-lg',
  '6': 'text-2xl',
  '7': 'text-3xl',
  '8': 'text-4xl',
  '9': 'text-5xl',
  '10': 'text-6xl',
  '11': 'text-7xl',
  '12': 'text-8xl',
};

// Heading size mapping
const headingSizeMap: Record<string, string> = {
  '1': 'text-base',
  '2': 'text-xl',
  '3': 'text-2xl',
  '4': 'text-[32px]',
  '5': 'text-[42px]',
  '6': 'text-6xl',
};

// Font weight mapping
const fontWeightMap: Record<string, string> = {
  'thin': 'font-thin',
  'extra-light': 'font-extralight',
  'light': 'font-light',
  'regular': 'font-normal',
  'medium': 'font-medium',
  'semi-bold': 'font-semibold',
  'bold': 'font-bold',
  'extra-bold': 'font-extrabold',
  'black': 'font-black',
};

// Border radius mapping
const borderRadiusMap: Record<string, string> = {
  '0': 'rounded-none',
  '1': 'rounded-sm',
  '2': 'rounded',
  '3': 'rounded-lg',
  '4': 'rounded-2xl',
  'full': 'rounded-full',
  'true': 'rounded',
};

// Box shadow mapping
const shadowMap: Record<string, string> = {
  '0': 'shadow-none',
  '1': 'shadow-sm',
  '2': 'shadow',
  '3': 'shadow-md',
  '4': 'shadow-lg',
  '5': 'shadow-xl',
  '6': 'shadow-2xl',
  'none': 'shadow-none',
};

// Color mapping for text/background
const colorMap: Record<string, { text: string; bg: string }> = {
  '1': { text: 'text-gray-50', bg: 'bg-gray-50' },
  '2': { text: 'text-gray-100', bg: 'bg-gray-100' },
  '3': { text: 'text-gray-200', bg: 'bg-gray-200' },
  '4': { text: 'text-gray-300', bg: 'bg-gray-300' },
  '5': { text: 'text-gray-400', bg: 'bg-gray-400' },
  '6': { text: 'text-gray-500', bg: 'bg-gray-500' },
  '7': { text: 'text-gray-600', bg: 'bg-gray-600' },
  '8': { text: 'text-gray-700', bg: 'bg-gray-700' },
  '9': { text: 'text-gray-800', bg: 'bg-gray-800' },
  '10': { text: 'text-gray-800', bg: 'bg-gray-800' },
  '11': { text: 'text-gray-900', bg: 'bg-gray-900' },
  '12': { text: 'text-gray-950', bg: 'bg-gray-950' },
  'primary': { text: 'text-gray-900 dark:text-gray-100', bg: 'bg-gray-900 dark:bg-gray-100' },
  'muted': { text: 'text-gray-500 dark:text-gray-400', bg: 'bg-gray-500' },
  'disabled': { text: 'text-gray-400 dark:text-gray-500', bg: 'bg-gray-400' },
  'transparent': { text: 'text-transparent', bg: 'bg-transparent' },
  'true': { text: 'text-gray-900 dark:text-gray-100', bg: 'bg-gray-100 dark:bg-gray-800' },
  // Accent colors
  'red': { text: 'text-red-500', bg: 'bg-red-500' },
  'orange': { text: 'text-orange-500', bg: 'bg-orange-500' },
  'yellow': { text: 'text-yellow-500', bg: 'bg-yellow-500' },
  'green': { text: 'text-green-500', bg: 'bg-green-500' },
  'blue': { text: 'text-blue-500', bg: 'bg-blue-500' },
  'purple': { text: 'text-purple-500', bg: 'bg-purple-500' },
  'pink': { text: 'text-pink-500', bg: 'bg-pink-500' },
  'cyan': { text: 'text-cyan-500', bg: 'bg-cyan-500' },
  'teal': { text: 'text-teal-500', bg: 'bg-teal-500' },
  'indigo': { text: 'text-indigo-500', bg: 'bg-indigo-500' },
  'violet': { text: 'text-violet-500', bg: 'bg-violet-500' },
  'amber': { text: 'text-amber-500', bg: 'bg-amber-500' },
  'lime': { text: 'text-lime-500', bg: 'bg-lime-500' },
  'emerald': { text: 'text-emerald-500', bg: 'bg-emerald-500' },
  'sky': { text: 'text-sky-500', bg: 'bg-sky-500' },
  'rose': { text: 'text-rose-500', bg: 'bg-rose-500' },
};

// Display mapping
const displayMap: Record<string, string> = {
  'none': 'hidden',
  'block': 'block',
  'inline': 'inline',
  'inline-block': 'inline-block',
  'flex': 'flex',
  'inline-flex': 'inline-flex',
  'grid': 'grid',
  'inline-grid': 'inline-grid',
};

// Position mapping
const positionMap: Record<string, string> = {
  'static': 'static',
  'relative': 'relative',
  'absolute': 'absolute',
  'fixed': 'fixed',
  'sticky': 'sticky',
};

// Overflow mapping
const overflowMap: Record<string, string> = {
  'visible': 'overflow-visible',
  'hidden': 'overflow-hidden',
  'clip': 'overflow-clip',
  'scroll': 'overflow-scroll',
  'auto': 'overflow-auto',
};
const overflowXMap: Record<string, string> = {
  'visible': 'overflow-x-visible',
  'hidden': 'overflow-x-hidden',
  'clip': 'overflow-x-clip',
  'scroll': 'overflow-x-scroll',
  'auto': 'overflow-x-auto',
};
const overflowYMap: Record<string, string> = {
  'visible': 'overflow-y-visible',
  'hidden': 'overflow-y-hidden',
  'clip': 'overflow-y-clip',
  'scroll': 'overflow-y-scroll',
  'auto': 'overflow-y-auto',
};

// Flex direction mapping
const flexDirectionMap: Record<string, string> = {
  'row': 'flex-row',
  'row-reverse': 'flex-row-reverse',
  'column': 'flex-col',
  'column-reverse': 'flex-col-reverse',
};

// Flex wrap mapping
const flexWrapMap: Record<string, string> = {
  'wrap': 'flex-wrap',
  'nowrap': 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

// Justify content mapping
const justifyContentMap: Record<string, string> = {
  'center': 'justify-center',
  'start': 'justify-start',
  'end': 'justify-end',
  'flex-start': 'justify-start',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
  'stretch': 'justify-stretch',
};

// Justify items mapping
const justifyItemsMap: Record<string, string> = {
  'start': 'justify-items-start',
  'end': 'justify-items-end',
  'center': 'justify-items-center',
  'stretch': 'justify-items-stretch',
};

// Align content mapping
const alignContentMap: Record<string, string> = {
  'center': 'content-center',
  'start': 'content-start',
  'end': 'content-end',
  'flex-start': 'content-start',
  'flex-end': 'content-end',
  'space-between': 'content-between',
  'space-around': 'content-around',
  'space-evenly': 'content-evenly',
  'stretch': 'content-stretch',
  'baseline': 'content-baseline',
};

// Align items mapping
const alignItemsMap: Record<string, string> = {
  'center': 'items-center',
  'start': 'items-start',
  'end': 'items-end',
  'flex-start': 'items-start',
  'flex-end': 'items-end',
  'stretch': 'items-stretch',
  'baseline': 'items-baseline',
};

// Align self mapping
const alignSelfMap: Record<string, string> = {
  'auto': 'self-auto',
  'center': 'self-center',
  'start': 'self-start',
  'end': 'self-end',
  'flex-start': 'self-start',
  'flex-end': 'self-end',
  'stretch': 'self-stretch',
  'baseline': 'self-baseline',
};

// Text align mapping
const textAlignMap: Record<string, string> = {
  'left': 'text-left',
  'center': 'text-center',
  'right': 'text-right',
};

// Text wrap mapping
const textWrapMap: Record<string, string> = {
  'wrap': 'text-wrap',
  'nowrap': 'text-nowrap',
  'balance': 'text-balance',
  'pretty': 'text-pretty',
};

// Text transform mapping
const textTransformMap: Record<string, string> = {
  'uppercase': 'uppercase',
  'lowercase': 'lowercase',
  'capitalize': 'capitalize',
  'none': 'normal-case',
};

// Letter spacing mapping
const letterSpacingMap: Record<string, string> = {
  '1': 'tracking-tighter',
  '2': 'tracking-tight',
  '3': 'tracking-normal',
  '4': 'tracking-wide',
  '5': 'tracking-wider',
};

// Grid auto flow mapping
const gridAutoFlowMap: Record<string, string> = {
  'row': 'grid-flow-row',
  'column': 'grid-flow-col',
  'dense': 'grid-flow-dense',
  'row-dense': 'grid-flow-row-dense',
  'column-dense': 'grid-flow-col-dense',
};

// Border mapping
const borderMap: Record<string, string> = {
  'true': 'border',
  'none': 'border-0',
  'top': 'border-t',
  'right': 'border-r',
  'bottom': 'border-b',
  'left': 'border-l',
};

// Border color mapping
const borderColorMap: Record<string, string> = {
  'true': 'border-gray-300 dark:border-gray-700',
  'transparent': 'border-transparent',
  '1': 'border-gray-50',
  '2': 'border-gray-100',
  '3': 'border-gray-200',
  '4': 'border-gray-300',
  '5': 'border-gray-400',
  '6': 'border-gray-500',
  '7': 'border-gray-600',
  '8': 'border-gray-700',
  '9': 'border-gray-800',
  'primary': 'border-gray-900 dark:border-gray-100',
  'muted': 'border-gray-400',
};

// Helper to handle responsive values
function mapResponsive<T extends string | number | boolean>(
  value: Responsive<T> | undefined,
  mapper: (val: T) => string | undefined
): string {
  if (value === undefined || value === null) return '';

  if (typeof value === 'object' && !Array.isArray(value)) {
    const classes: string[] = [];
    for (const [breakpoint, val] of Object.entries(value)) {
      if (val === undefined) continue;
      const mapped = mapper(val as T);
      if (mapped) {
        if (breakpoint === '' || breakpoint === 'xs') {
          classes.push(mapped);
        } else {
          classes.push(`${breakpoint}:${mapped}`);
        }
      }
    }
    return classes.join(' ');
  }

  return mapper(value as T) || '';
}

// Props to Tailwind class mappers
export function mapDisplay(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => displayMap[v] || v);
}

export function mapPosition(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => positionMap[v]);
}

export function mapOverflow(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string {
  const map = axis === 'x' ? overflowXMap : axis === 'y' ? overflowYMap : overflowMap;
  return mapResponsive(value, (v) => map[v]);
}

export function mapPadding(value: Responsive<string> | undefined, side?: string): string {
  const map = side === 'x' ? pxMap : side === 'y' ? pyMap : side === 't' ? ptMap :
              side === 'r' ? prMap : side === 'b' ? pbMap : side === 'l' ? plMap : paddingMap;
  return mapResponsive(value, (v) => map[String(v)]);
}

export function mapMargin(value: Responsive<string> | undefined, side?: string): string {
  const map = side === 'x' ? mxMap : side === 'y' ? myMap : side === 't' ? mtMap :
              side === 'r' ? mrMap : side === 'b' ? mbMap : side === 'l' ? mlMap : marginMap;
  return mapResponsive(value, (v) => map[String(v)]);
}

export function mapGap(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string {
  const map = axis === 'x' ? gapXMap : axis === 'y' ? gapYMap : gapMap;
  return mapResponsive(value, (v) => map[String(v)]);
}

export function mapFontSize(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => fontSizeMap[v]);
}

export function mapHeadingSize(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => headingSizeMap[v]);
}

export function mapFontWeight(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => fontWeightMap[v]);
}

export function mapTextColor(value: string | undefined): string {
  if (!value) return '';
  return colorMap[value]?.text || '';
}

export function mapBackgroundColor(value: string | undefined): string {
  if (!value) return '';
  return colorMap[value]?.bg || '';
}

export function mapBorderRadius(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => borderRadiusMap[String(v)]);
}

export function mapShadow(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => shadowMap[v]);
}

export function mapFlexDirection(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => flexDirectionMap[v]);
}

export function mapFlexWrap(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => flexWrapMap[v]);
}

export function mapJustifyContent(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => justifyContentMap[v]);
}

export function mapJustifyItems(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => justifyItemsMap[v]);
}

export function mapAlignContent(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => alignContentMap[v]);
}

export function mapAlignItems(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => alignItemsMap[v]);
}

export function mapAlignSelf(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => alignSelfMap[v]);
}

export function mapTextAlign(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => textAlignMap[v]);
}

export function mapTextWrap(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => textWrapMap[v]);
}

export function mapTextTransform(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => textTransformMap[v]);
}

export function mapLetterSpacing(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => letterSpacingMap[v]);
}

export function mapGridAutoFlow(value: Responsive<string> | undefined): string {
  return mapResponsive(value, (v) => gridAutoFlowMap[v]);
}

export function mapBorder(value: Responsive<string | boolean> | undefined): string {
  return mapResponsive(value, (v) => borderMap[String(v)]);
}

export function mapBorderColor(value: string | undefined): string {
  if (!value) return '';
  return borderColorMap[value] || '';
}
