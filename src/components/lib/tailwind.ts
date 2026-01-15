import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Breakpoint prefixes
type Breakpoint = '' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

// Padding maps - explicit class names for Tailwind JIT detection
const paddingMap: Record<string, string> = {
  '0': 'p-0',
  px: 'p-px',
  '0.5': 'p-0.5',
  '1': 'p-1',
  '1.5': 'p-1.5',
  '2': 'p-2',
  '2.5': 'p-2.5',
  '3': 'p-3',
  '3.5': 'p-3.5',
  '4': 'p-4',
  '5': 'p-5',
  '6': 'p-6',
  '7': 'p-7',
  '8': 'p-8',
  '9': 'p-9',
  '10': 'p-10',
  '11': 'p-11',
  '12': 'p-12',
  '14': 'p-14',
  '16': 'p-16',
  '20': 'p-20',
  '24': 'p-24',
  '28': 'p-28',
  '32': 'p-32',
  '36': 'p-36',
  '40': 'p-40',
  '44': 'p-44',
  '48': 'p-48',
  '52': 'p-52',
  '56': 'p-56',
  '60': 'p-60',
  '64': 'p-64',
  '72': 'p-72',
  '80': 'p-80',
  '96': 'p-96',
  true: 'p-3',
};
const pxMap: Record<string, string> = {
  '0': 'px-0',
  px: 'px-px',
  '0.5': 'px-0.5',
  '1': 'px-1',
  '1.5': 'px-1.5',
  '2': 'px-2',
  '2.5': 'px-2.5',
  '3': 'px-3',
  '3.5': 'px-3.5',
  '4': 'px-4',
  '5': 'px-5',
  '6': 'px-6',
  '7': 'px-7',
  '8': 'px-8',
  '9': 'px-9',
  '10': 'px-10',
  '11': 'px-11',
  '12': 'px-12',
  '14': 'px-14',
  '16': 'px-16',
  '20': 'px-20',
  '24': 'px-24',
  '28': 'px-28',
  '32': 'px-32',
  '36': 'px-36',
  '40': 'px-40',
  '44': 'px-44',
  '48': 'px-48',
  '52': 'px-52',
  '56': 'px-56',
  '60': 'px-60',
  '64': 'px-64',
  '72': 'px-72',
  '80': 'px-80',
  '96': 'px-96',
  true: 'px-3',
};
const pyMap: Record<string, string> = {
  '0': 'py-0',
  px: 'py-px',
  '0.5': 'py-0.5',
  '1': 'py-1',
  '1.5': 'py-1.5',
  '2': 'py-2',
  '2.5': 'py-2.5',
  '3': 'py-3',
  '3.5': 'py-3.5',
  '4': 'py-4',
  '5': 'py-5',
  '6': 'py-6',
  '7': 'py-7',
  '8': 'py-8',
  '9': 'py-9',
  '10': 'py-10',
  '11': 'py-11',
  '12': 'py-12',
  '14': 'py-14',
  '16': 'py-16',
  '20': 'py-20',
  '24': 'py-24',
  '28': 'py-28',
  '32': 'py-32',
  '36': 'py-36',
  '40': 'py-40',
  '44': 'py-44',
  '48': 'py-48',
  '52': 'py-52',
  '56': 'py-56',
  '60': 'py-60',
  '64': 'py-64',
  '72': 'py-72',
  '80': 'py-80',
  '96': 'py-96',
  true: 'py-3',
};
const ptMap: Record<string, string> = {
  '0': 'pt-0',
  px: 'pt-px',
  '0.5': 'pt-0.5',
  '1': 'pt-1',
  '1.5': 'pt-1.5',
  '2': 'pt-2',
  '2.5': 'pt-2.5',
  '3': 'pt-3',
  '3.5': 'pt-3.5',
  '4': 'pt-4',
  '5': 'pt-5',
  '6': 'pt-6',
  '7': 'pt-7',
  '8': 'pt-8',
  '9': 'pt-9',
  '10': 'pt-10',
  '11': 'pt-11',
  '12': 'pt-12',
  '14': 'pt-14',
  '16': 'pt-16',
  '20': 'pt-20',
  '24': 'pt-24',
  '28': 'pt-28',
  '32': 'pt-32',
  '36': 'pt-36',
  '40': 'pt-40',
  '44': 'pt-44',
  '48': 'pt-48',
  '52': 'pt-52',
  '56': 'pt-56',
  '60': 'pt-60',
  '64': 'pt-64',
  '72': 'pt-72',
  '80': 'pt-80',
  '96': 'pt-96',
};
const prMap: Record<string, string> = {
  '0': 'pr-0',
  px: 'pr-px',
  '0.5': 'pr-0.5',
  '1': 'pr-1',
  '1.5': 'pr-1.5',
  '2': 'pr-2',
  '2.5': 'pr-2.5',
  '3': 'pr-3',
  '3.5': 'pr-3.5',
  '4': 'pr-4',
  '5': 'pr-5',
  '6': 'pr-6',
  '7': 'pr-7',
  '8': 'pr-8',
  '9': 'pr-9',
  '10': 'pr-10',
  '11': 'pr-11',
  '12': 'pr-12',
  '14': 'pr-14',
  '16': 'pr-16',
  '20': 'pr-20',
  '24': 'pr-24',
  '28': 'pr-28',
  '32': 'pr-32',
  '36': 'pr-36',
  '40': 'pr-40',
  '44': 'pr-44',
  '48': 'pr-48',
  '52': 'pr-52',
  '56': 'pr-56',
  '60': 'pr-60',
  '64': 'pr-64',
  '72': 'pr-72',
  '80': 'pr-80',
  '96': 'pr-96',
};
const pbMap: Record<string, string> = {
  '0': 'pb-0',
  px: 'pb-px',
  '0.5': 'pb-0.5',
  '1': 'pb-1',
  '1.5': 'pb-1.5',
  '2': 'pb-2',
  '2.5': 'pb-2.5',
  '3': 'pb-3',
  '3.5': 'pb-3.5',
  '4': 'pb-4',
  '5': 'pb-5',
  '6': 'pb-6',
  '7': 'pb-7',
  '8': 'pb-8',
  '9': 'pb-9',
  '10': 'pb-10',
  '11': 'pb-11',
  '12': 'pb-12',
  '14': 'pb-14',
  '16': 'pb-16',
  '20': 'pb-20',
  '24': 'pb-24',
  '28': 'pb-28',
  '32': 'pb-32',
  '36': 'pb-36',
  '40': 'pb-40',
  '44': 'pb-44',
  '48': 'pb-48',
  '52': 'pb-52',
  '56': 'pb-56',
  '60': 'pb-60',
  '64': 'pb-64',
  '72': 'pb-72',
  '80': 'pb-80',
  '96': 'pb-96',
};
const plMap: Record<string, string> = {
  '0': 'pl-0',
  px: 'pl-px',
  '0.5': 'pl-0.5',
  '1': 'pl-1',
  '1.5': 'pl-1.5',
  '2': 'pl-2',
  '2.5': 'pl-2.5',
  '3': 'pl-3',
  '3.5': 'pl-3.5',
  '4': 'pl-4',
  '5': 'pl-5',
  '6': 'pl-6',
  '7': 'pl-7',
  '8': 'pl-8',
  '9': 'pl-9',
  '10': 'pl-10',
  '11': 'pl-11',
  '12': 'pl-12',
  '14': 'pl-14',
  '16': 'pl-16',
  '20': 'pl-20',
  '24': 'pl-24',
  '28': 'pl-28',
  '32': 'pl-32',
  '36': 'pl-36',
  '40': 'pl-40',
  '44': 'pl-44',
  '48': 'pl-48',
  '52': 'pl-52',
  '56': 'pl-56',
  '60': 'pl-60',
  '64': 'pl-64',
  '72': 'pl-72',
  '80': 'pl-80',
  '96': 'pl-96',
};

// Margin maps
const marginMap: Record<string, string> = {
  '0': 'm-0',
  px: 'm-px',
  '0.5': 'm-0.5',
  '1': 'm-1',
  '1.5': 'm-1.5',
  '2': 'm-2',
  '2.5': 'm-2.5',
  '3': 'm-3',
  '3.5': 'm-3.5',
  '4': 'm-4',
  '5': 'm-5',
  '6': 'm-6',
  '7': 'm-7',
  '8': 'm-8',
  '9': 'm-9',
  '10': 'm-10',
  '11': 'm-11',
  '12': 'm-12',
  '14': 'm-14',
  '16': 'm-16',
  '20': 'm-20',
  '24': 'm-24',
  '28': 'm-28',
  '32': 'm-32',
  '36': 'm-36',
  '40': 'm-40',
  '44': 'm-44',
  '48': 'm-48',
  '52': 'm-52',
  '56': 'm-56',
  '60': 'm-60',
  '64': 'm-64',
  '72': 'm-72',
  '80': 'm-80',
  '96': 'm-96',
  '-px': '-m-px',
  '-0.5': '-m-0.5',
  '-1': '-m-1',
  '-1.5': '-m-1.5',
  '-2': '-m-2',
  '-2.5': '-m-2.5',
  '-3': '-m-3',
  '-3.5': '-m-3.5',
  '-4': '-m-4',
  '-5': '-m-5',
  '-6': '-m-6',
  '-7': '-m-7',
  '-8': '-m-8',
  '-9': '-m-9',
  '-10': '-m-10',
  '-11': '-m-11',
  '-12': '-m-12',
  '-14': '-m-14',
  '-16': '-m-16',
  '-20': '-m-20',
  '-24': '-m-24',
};
const mxMap: Record<string, string> = {
  '0': 'mx-0',
  px: 'mx-px',
  '0.5': 'mx-0.5',
  '1': 'mx-1',
  '1.5': 'mx-1.5',
  '2': 'mx-2',
  '2.5': 'mx-2.5',
  '3': 'mx-3',
  '3.5': 'mx-3.5',
  '4': 'mx-4',
  '5': 'mx-5',
  '6': 'mx-6',
  '7': 'mx-7',
  '8': 'mx-8',
  '9': 'mx-9',
  '10': 'mx-10',
  '11': 'mx-11',
  '12': 'mx-12',
  '14': 'mx-14',
  '16': 'mx-16',
  '20': 'mx-20',
  '24': 'mx-24',
  '28': 'mx-28',
  '32': 'mx-32',
  '36': 'mx-36',
  '40': 'mx-40',
  '-px': '-mx-px',
  '-0.5': '-mx-0.5',
  '-1': '-mx-1',
  '-1.5': '-mx-1.5',
  '-2': '-mx-2',
  '-2.5': '-mx-2.5',
  '-3': '-mx-3',
  '-3.5': '-mx-3.5',
  '-4': '-mx-4',
};
const myMap: Record<string, string> = {
  '0': 'my-0',
  px: 'my-px',
  '0.5': 'my-0.5',
  '1': 'my-1',
  '1.5': 'my-1.5',
  '2': 'my-2',
  '2.5': 'my-2.5',
  '3': 'my-3',
  '3.5': 'my-3.5',
  '4': 'my-4',
  '5': 'my-5',
  '6': 'my-6',
  '7': 'my-7',
  '8': 'my-8',
  '9': 'my-9',
  '10': 'my-10',
  '11': 'my-11',
  '12': 'my-12',
  '14': 'my-14',
  '16': 'my-16',
  '20': 'my-20',
  '24': 'my-24',
  '28': 'my-28',
  '32': 'my-32',
  '36': 'my-36',
  '40': 'my-40',
  '-px': '-my-px',
  '-0.5': '-my-0.5',
  '-1': '-my-1',
  '-1.5': '-my-1.5',
  '-2': '-my-2',
  '-2.5': '-my-2.5',
  '-3': '-my-3',
  '-3.5': '-my-3.5',
  '-4': '-my-4',
};
const mtMap: Record<string, string> = {
  '0': 'mt-0',
  px: 'mt-px',
  '0.5': 'mt-0.5',
  '1': 'mt-1',
  '1.5': 'mt-1.5',
  '2': 'mt-2',
  '2.5': 'mt-2.5',
  '3': 'mt-3',
  '3.5': 'mt-3.5',
  '4': 'mt-4',
  '5': 'mt-5',
  '6': 'mt-6',
  '7': 'mt-7',
  '8': 'mt-8',
  '9': 'mt-9',
  '10': 'mt-10',
  '11': 'mt-11',
  '12': 'mt-12',
  '14': 'mt-14',
  '16': 'mt-16',
  '20': 'mt-20',
  '24': 'mt-24',
  '28': 'mt-28',
  '32': 'mt-32',
  '36': 'mt-36',
  '40': 'mt-40',
  '-px': '-mt-px',
  '-0.5': '-mt-0.5',
  '-1': '-mt-1',
  '-1.5': '-mt-1.5',
  '-2': '-mt-2',
  '-2.5': '-mt-2.5',
  '-3': '-mt-3',
  '-3.5': '-mt-3.5',
  '-4': '-mt-4',
};
const mrMap: Record<string, string> = {
  '0': 'mr-0',
  px: 'mr-px',
  '0.5': 'mr-0.5',
  '1': 'mr-1',
  '1.5': 'mr-1.5',
  '2': 'mr-2',
  '2.5': 'mr-2.5',
  '3': 'mr-3',
  '3.5': 'mr-3.5',
  '4': 'mr-4',
  '5': 'mr-5',
  '6': 'mr-6',
  '7': 'mr-7',
  '8': 'mr-8',
  '9': 'mr-9',
  '10': 'mr-10',
  '11': 'mr-11',
  '12': 'mr-12',
  '14': 'mr-14',
  '16': 'mr-16',
  '20': 'mr-20',
  '24': 'mr-24',
  '28': 'mr-28',
  '32': 'mr-32',
  '36': 'mr-36',
  '40': 'mr-40',
  '-px': '-mr-px',
  '-0.5': '-mr-0.5',
  '-1': '-mr-1',
  '-1.5': '-mr-1.5',
  '-2': '-mr-2',
  '-2.5': '-mr-2.5',
  '-3': '-mr-3',
  '-3.5': '-mr-3.5',
  '-4': '-mr-4',
};
const mbMap: Record<string, string> = {
  '0': 'mb-0',
  px: 'mb-px',
  '0.5': 'mb-0.5',
  '1': 'mb-1',
  '1.5': 'mb-1.5',
  '2': 'mb-2',
  '2.5': 'mb-2.5',
  '3': 'mb-3',
  '3.5': 'mb-3.5',
  '4': 'mb-4',
  '5': 'mb-5',
  '6': 'mb-6',
  '7': 'mb-7',
  '8': 'mb-8',
  '9': 'mb-9',
  '10': 'mb-10',
  '11': 'mb-11',
  '12': 'mb-12',
  '14': 'mb-14',
  '16': 'mb-16',
  '20': 'mb-20',
  '24': 'mb-24',
  '28': 'mb-28',
  '32': 'mb-32',
  '36': 'mb-36',
  '40': 'mb-40',
  '-px': '-mb-px',
  '-0.5': '-mb-0.5',
  '-1': '-mb-1',
  '-1.5': '-mb-1.5',
  '-2': '-mb-2',
  '-2.5': '-mb-2.5',
  '-3': '-mb-3',
  '-3.5': '-mb-3.5',
  '-4': '-mb-4',
};
const mlMap: Record<string, string> = {
  '0': 'ml-0',
  px: 'ml-px',
  '0.5': 'ml-0.5',
  '1': 'ml-1',
  '1.5': 'ml-1.5',
  '2': 'ml-2',
  '2.5': 'ml-2.5',
  '3': 'ml-3',
  '3.5': 'ml-3.5',
  '4': 'ml-4',
  '5': 'ml-5',
  '6': 'ml-6',
  '7': 'ml-7',
  '8': 'ml-8',
  '9': 'ml-9',
  '10': 'ml-10',
  '11': 'ml-11',
  '12': 'ml-12',
  '14': 'ml-14',
  '16': 'ml-16',
  '20': 'ml-20',
  '24': 'ml-24',
  '28': 'ml-28',
  '32': 'ml-32',
  '36': 'ml-36',
  '40': 'ml-40',
  '-px': '-ml-px',
  '-0.5': '-ml-0.5',
  '-1': '-ml-1',
  '-1.5': '-ml-1.5',
  '-2': '-ml-2',
  '-2.5': '-ml-2.5',
  '-3': '-ml-3',
  '-3.5': '-ml-3.5',
  '-4': '-ml-4',
};

// Gap maps
const gapMap: Record<string, string> = {
  '0': 'gap-0',
  px: 'gap-px',
  '0.5': 'gap-0.5',
  '1': 'gap-1',
  '1.5': 'gap-1.5',
  '2': 'gap-2',
  '2.5': 'gap-2.5',
  '3': 'gap-3',
  '3.5': 'gap-3.5',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '7': 'gap-7',
  '8': 'gap-8',
  '9': 'gap-9',
  '10': 'gap-10',
  '11': 'gap-11',
  '12': 'gap-12',
  '14': 'gap-14',
  '16': 'gap-16',
  '20': 'gap-20',
  '24': 'gap-24',
  '28': 'gap-28',
  '32': 'gap-32',
  '36': 'gap-36',
  '40': 'gap-40',
  '44': 'gap-44',
  '48': 'gap-48',
  '52': 'gap-52',
  '56': 'gap-56',
  '60': 'gap-60',
  '64': 'gap-64',
  '72': 'gap-72',
  '80': 'gap-80',
  '96': 'gap-96',
  true: 'gap-3',
};
const gapXMap: Record<string, string> = {
  '0': 'gap-x-0',
  px: 'gap-x-px',
  '0.5': 'gap-x-0.5',
  '1': 'gap-x-1',
  '1.5': 'gap-x-1.5',
  '2': 'gap-x-2',
  '2.5': 'gap-x-2.5',
  '3': 'gap-x-3',
  '3.5': 'gap-x-3.5',
  '4': 'gap-x-4',
  '5': 'gap-x-5',
  '6': 'gap-x-6',
  '7': 'gap-x-7',
  '8': 'gap-x-8',
  '9': 'gap-x-9',
  '10': 'gap-x-10',
  '11': 'gap-x-11',
  '12': 'gap-x-12',
  '14': 'gap-x-14',
  '16': 'gap-x-16',
  '20': 'gap-x-20',
  '24': 'gap-x-24',
  '28': 'gap-x-28',
  '32': 'gap-x-32',
  true: 'gap-x-3',
};
const gapYMap: Record<string, string> = {
  '0': 'gap-y-0',
  px: 'gap-y-px',
  '0.5': 'gap-y-0.5',
  '1': 'gap-y-1',
  '1.5': 'gap-y-1.5',
  '2': 'gap-y-2',
  '2.5': 'gap-y-2.5',
  '3': 'gap-y-3',
  '3.5': 'gap-y-3.5',
  '4': 'gap-y-4',
  '5': 'gap-y-5',
  '6': 'gap-y-6',
  '7': 'gap-y-7',
  '8': 'gap-y-8',
  '9': 'gap-y-9',
  '10': 'gap-y-10',
  '11': 'gap-y-11',
  '12': 'gap-y-12',
  '14': 'gap-y-14',
  '16': 'gap-y-16',
  '20': 'gap-y-20',
  '24': 'gap-y-24',
  '28': 'gap-y-28',
  '32': 'gap-y-32',
  true: 'gap-y-3',
};

// Font size mapping - Tailwind native names
const fontSizeMap: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

// Heading size mapping
const headingSizeMap: Record<string, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
};

// Font weight mapping - Tailwind native names
const fontWeightMap: Record<string, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

// Border radius mapping - Tailwind native names
const borderRadiusMap: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
  true: 'rounded-md',
};

// Box shadow mapping - Tailwind native names
const shadowMap: Record<string, string> = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  true: 'shadow-md',
};

// Color mapping for text/background - using semantic tokens
const colorMap: Record<string, { text: string; bg: string }> = {
  primary: { text: 'text-content-primary', bg: 'bg-interactive-selected' },
  muted: { text: 'text-content-muted', bg: 'bg-surface-raised' },
  disabled: { text: 'text-content-disabled', bg: 'bg-surface-disabled' },
  transparent: { text: 'text-transparent', bg: 'bg-transparent' },
  true: { text: 'text-content-primary', bg: 'bg-interactive' },
  // Tailwind color palette
  gray: { text: 'text-gray-500', bg: 'bg-gray-500' },
  slate: { text: 'text-slate-500', bg: 'bg-slate-500' },
  zinc: { text: 'text-zinc-500', bg: 'bg-zinc-500' },
  neutral: { text: 'text-neutral-500', bg: 'bg-neutral-500' },
  stone: { text: 'text-stone-500', bg: 'bg-stone-500' },
  red: { text: 'text-red-500', bg: 'bg-red-500' },
  orange: { text: 'text-orange-500', bg: 'bg-orange-500' },
  amber: { text: 'text-amber-500', bg: 'bg-amber-500' },
  yellow: { text: 'text-yellow-500', bg: 'bg-yellow-500' },
  lime: { text: 'text-lime-500', bg: 'bg-lime-500' },
  green: { text: 'text-green-500', bg: 'bg-green-500' },
  emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500' },
  teal: { text: 'text-teal-500', bg: 'bg-teal-500' },
  cyan: { text: 'text-cyan-500', bg: 'bg-cyan-500' },
  sky: { text: 'text-sky-500', bg: 'bg-sky-500' },
  blue: { text: 'text-blue-500', bg: 'bg-blue-500' },
  indigo: { text: 'text-indigo-500', bg: 'bg-indigo-500' },
  violet: { text: 'text-violet-500', bg: 'bg-violet-500' },
  purple: { text: 'text-purple-500', bg: 'bg-purple-500' },
  fuchsia: { text: 'text-fuchsia-500', bg: 'bg-fuchsia-500' },
  pink: { text: 'text-pink-500', bg: 'bg-pink-500' },
  rose: { text: 'text-rose-500', bg: 'bg-rose-500' },
};

// Display mapping
const displayMap: Record<string, string> = {
  none: 'hidden',
  block: 'block',
  inline: 'inline',
  'inline-block': 'inline-block',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  'inline-grid': 'inline-grid',
};

// Position mapping
const positionMap: Record<string, string> = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
};

// Overflow mapping
const overflowMap: Record<string, string> = {
  visible: 'overflow-visible',
  hidden: 'overflow-hidden',
  clip: 'overflow-clip',
  scroll: 'overflow-scroll',
  auto: 'overflow-auto',
};
const overflowXMap: Record<string, string> = {
  visible: 'overflow-x-visible',
  hidden: 'overflow-x-hidden',
  clip: 'overflow-x-clip',
  scroll: 'overflow-x-scroll',
  auto: 'overflow-x-auto',
};
const overflowYMap: Record<string, string> = {
  visible: 'overflow-y-visible',
  hidden: 'overflow-y-hidden',
  clip: 'overflow-y-clip',
  scroll: 'overflow-y-scroll',
  auto: 'overflow-y-auto',
};

// Flex direction mapping
const flexDirectionMap: Record<string, string> = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
};

// Flex wrap mapping
const flexWrapMap: Record<string, string> = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
};

// Justify content mapping
const justifyContentMap: Record<string, string> = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  'flex-start': 'justify-start',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
  stretch: 'justify-stretch',
};

// Justify items mapping
const justifyItemsMap: Record<string, string> = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch',
};

// Align content mapping
const alignContentMap: Record<string, string> = {
  center: 'content-center',
  start: 'content-start',
  end: 'content-end',
  'flex-start': 'content-start',
  'flex-end': 'content-end',
  'space-between': 'content-between',
  'space-around': 'content-around',
  'space-evenly': 'content-evenly',
  stretch: 'content-stretch',
  baseline: 'content-baseline',
};

// Align items mapping
const alignItemsMap: Record<string, string> = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
  'flex-start': 'items-start',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

// Align self mapping
const alignSelfMap: Record<string, string> = {
  auto: 'self-auto',
  center: 'self-center',
  start: 'self-start',
  end: 'self-end',
  'flex-start': 'self-start',
  'flex-end': 'self-end',
  stretch: 'self-stretch',
  baseline: 'self-baseline',
};

// Text align mapping
const textAlignMap: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

// Text wrap mapping
const textWrapMap: Record<string, string> = {
  wrap: 'text-wrap',
  nowrap: 'text-nowrap',
  balance: 'text-balance',
  pretty: 'text-pretty',
};

// Text transform mapping
const textTransformMap: Record<string, string> = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  none: 'normal-case',
};

// Letter spacing mapping - Tailwind native names
const letterSpacingMap: Record<string, string> = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
};

// Grid auto flow mapping
const gridAutoFlowMap: Record<string, string> = {
  row: 'grid-flow-row',
  column: 'grid-flow-col',
  dense: 'grid-flow-dense',
  'row-dense': 'grid-flow-row-dense',
  'column-dense': 'grid-flow-col-dense',
};

// Border mapping
const borderMap: Record<string, string> = {
  true: 'border border-edge',
  none: 'border-0',
  top: 'border-t border-edge',
  right: 'border-r border-edge',
  bottom: 'border-b border-edge',
  left: 'border-l border-edge',
};

// Border color mapping - using semantic tokens
const borderColorMap: Record<string, string> = {
  true: 'border-edge',
  transparent: 'border-transparent',
  primary: 'border-edge-inverted',
  muted: 'border-edge-muted',
  gray: 'border-gray-500',
  slate: 'border-slate-500',
  zinc: 'border-zinc-500',
  neutral: 'border-neutral-500',
  stone: 'border-stone-500',
  red: 'border-red-500',
  orange: 'border-orange-500',
  amber: 'border-amber-500',
  yellow: 'border-yellow-500',
  lime: 'border-lime-500',
  green: 'border-green-500',
  emerald: 'border-emerald-500',
  teal: 'border-teal-500',
  cyan: 'border-cyan-500',
  sky: 'border-sky-500',
  blue: 'border-blue-500',
  indigo: 'border-indigo-500',
  violet: 'border-violet-500',
  purple: 'border-purple-500',
  fuchsia: 'border-fuchsia-500',
  pink: 'border-pink-500',
  rose: 'border-rose-500',
};

// Helper to handle responsive values
function mapResponsive<T extends string | number | boolean>(
  value: Responsive<T> | undefined,
  mapper: (val: T) => string | undefined,
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
  return mapResponsive(value, v => displayMap[v] || v);
}

export function mapPosition(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => positionMap[v]);
}

export function mapOverflow(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string {
  const map = axis === 'x' ? overflowXMap : axis === 'y' ? overflowYMap : overflowMap;
  return mapResponsive(value, v => map[v]);
}

export function mapPadding(value: Responsive<string> | undefined, side?: string): string {
  const map =
    side === 'x'
      ? pxMap
      : side === 'y'
        ? pyMap
        : side === 't'
          ? ptMap
          : side === 'r'
            ? prMap
            : side === 'b'
              ? pbMap
              : side === 'l'
                ? plMap
                : paddingMap;
  return mapResponsive(value, v => map[String(v)]);
}

export function mapMargin(value: Responsive<string> | undefined, side?: string): string {
  const map =
    side === 'x'
      ? mxMap
      : side === 'y'
        ? myMap
        : side === 't'
          ? mtMap
          : side === 'r'
            ? mrMap
            : side === 'b'
              ? mbMap
              : side === 'l'
                ? mlMap
                : marginMap;
  return mapResponsive(value, v => map[String(v)]);
}

export function mapGap(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string {
  const map = axis === 'x' ? gapXMap : axis === 'y' ? gapYMap : gapMap;
  return mapResponsive(value, v => map[String(v)]);
}

export function mapFontSize(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => fontSizeMap[v]);
}

export function mapHeadingSize(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => headingSizeMap[v]);
}

export function mapFontWeight(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => fontWeightMap[v]);
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
  return mapResponsive(value, v => borderRadiusMap[String(v)]);
}

export function mapShadow(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => shadowMap[v]);
}

export function mapFlexDirection(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => flexDirectionMap[v]);
}

export function mapFlexWrap(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => flexWrapMap[v]);
}

export function mapJustifyContent(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => justifyContentMap[v]);
}

export function mapJustifyItems(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => justifyItemsMap[v]);
}

export function mapAlignContent(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => alignContentMap[v]);
}

export function mapAlignItems(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => alignItemsMap[v]);
}

export function mapAlignSelf(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => alignSelfMap[v]);
}

export function mapTextAlign(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => textAlignMap[v]);
}

export function mapTextWrap(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => textWrapMap[v]);
}

export function mapTextTransform(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => textTransformMap[v]);
}

export function mapLetterSpacing(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => letterSpacingMap[v]);
}

export function mapGridAutoFlow(value: Responsive<string> | undefined): string {
  return mapResponsive(value, v => gridAutoFlowMap[v]);
}

export function mapBorder(value: Responsive<string | boolean> | undefined): string {
  return mapResponsive(value, v => borderMap[String(v)]);
}

export function mapBorderColor(value: string | undefined): string {
  if (!value) return '';
  return borderColorMap[value] || '';
}

// CSS color values for SVG stroke/fill (using CSS variables for semantic tokens)
const cssColorValues: Record<string, string> = {
  primary: 'var(--text-primary)',
  muted: 'var(--text-muted)',
  disabled: 'var(--text-disabled)',
  gray: '#6b7280',
  slate: '#64748b',
  zinc: '#71717a',
  neutral: '#737373',
  stone: '#78716c',
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
};

export function getCssColorValue(value: string | undefined): string | undefined {
  if (!value) return undefined;
  return cssColorValues[value];
}
