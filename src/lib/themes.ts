import type { Theme } from '@stylexjs/stylex';
import { zen } from '@/themes/zen';
import { light } from '@/themes/light';
import { dark } from '@/themes/dark';

export const themes: { [key: string]: Theme<any, any> } = {
  zen,
  light,
  dark,
};
