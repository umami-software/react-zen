import * as react from 'react';
import { ReactElement, HTMLAttributes, CSSProperties, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

type Primitive = string | number | boolean | bigint | symbol | null | undefined;
declare const Breakpoints: readonly ["base", "sm", "md", "lg", "xl", "2xl"];
type Breakpoint = (typeof Breakpoints)[number];
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;
type ColorName = 'gray' | 'slate' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
type TailwindColor = `${ColorName}-${ColorShade}`;
type SemanticColor = 'primary' | 'secondary' | 'muted' | 'strong' | 'inverted' | 'disabled' | 'transparent';
type SurfaceColor = 'surface-base' | 'surface-raised' | 'surface-sunken' | 'surface-overlay' | 'surface-inverted' | 'surface-disabled';
type InteractiveColor = 'interactive' | 'interactive-hover' | 'interactive-pressed';
type FontColor = SemanticColor | ColorName | TailwindColor | true;
type BackgroundColor = SemanticColor | SurfaceColor | InteractiveColor | ColorName | TailwindColor | true;
type BorderColor = SemanticColor | ColorName | TailwindColor | true;
type HoverColor = FontColor;
type StrokeColor = FontColor;
type FillColor = FontColor;
type Spacing = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';
type NegativeSpacing = '-px' | '-0.5' | '-1' | '-1.5' | '-2' | '-2.5' | '-3' | '-3.5' | '-4' | '-5' | '-6' | '-7' | '-8' | '-9' | '-10' | '-11' | '-12' | '-14' | '-16' | '-20' | '-24';
type Padding = Spacing | true;
type Top = Spacing | NegativeSpacing | string;
type Right = Spacing | NegativeSpacing | string;
type Bottom = Spacing | NegativeSpacing | string;
type Left = Spacing | NegativeSpacing | string;
type Gap = Spacing | true;
type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
type Display = 'none' | 'inline' | 'inline-block' | 'block';
type Cursor = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'help' | 'not-allowed' | 'none' | 'grab' | 'grabbing';
type Border = true | 'top' | 'right' | 'bottom' | 'left' | 'none';
type BorderWidth = 'sm' | 'md' | 'lg' | 'xl';
type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | true;
type BoxShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | true;
type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type HeadingSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type FontWeight = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
type TextWrap = 'wrap' | 'nowrap' | 'pretty' | 'balance';
type TextAlign = 'left' | 'center' | 'right';
type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none';
type LetterSpacing = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Whitespace = 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'break-spaces';
type WordBreak = 'normal' | 'words' | 'all' | 'keep';
type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' | 'sub' | 'super';
type TextDecorationStyle = 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy';
type TextIndent = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24';
type FlexDisplay = 'none' | 'flex' | 'inline-flex';
type FlexDirection = 'column' | 'row' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type FlexGrow = string | number;
type FlexShrink = string | number;
type GridDisplay = 'none' | 'grid' | 'inline-grid';
type GridAutoFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
type GridColumns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'none' | 'subgrid';
type GridRows = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'none' | 'subgrid';
type GridTemplateRows = string;
type GridTemplateColumns = string;
type GridTemplateAreas = string;
type JustifyContent = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type JustifyItems = 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline';
type JustifySelf = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
type AlignContent = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type AlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'stretch' | 'baseline';
type AlignSelf = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
type ObjectFit = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none';
type Opacity = '0' | '5' | '10' | '15' | '20' | '25' | '30' | '35' | '40' | '45' | '50' | '55' | '60' | '65' | '70' | '75' | '80' | '85' | '90' | '95' | '100';
type PointerEvents = 'none' | 'auto';
type SizingSpecial = 'auto' | 'full' | 'min' | 'max' | 'fit';
type WidthViewport = 'screen' | 'svw' | 'lvw' | 'dvw';
type HeightViewport = 'screen' | 'svh' | 'lvh' | 'dvh';
type Fraction = '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12';
type Width = Spacing | Fraction | SizingSpecial | WidthViewport;
type Height = Spacing | Fraction | SizingSpecial | HeightViewport;
type MaxWidthSpecial = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'min' | 'max' | 'fit' | 'prose' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl';
type MinWidth = Spacing | Fraction | SizingSpecial | WidthViewport;
type MaxWidth = Spacing | Fraction | MaxWidthSpecial | WidthViewport;
type MinHeight = Spacing | Fraction | SizingSpecial | HeightViewport;
type MaxHeight = Spacing | Fraction | SizingSpecial | HeightViewport;
interface StateStyles {
    color?: FontColor;
    backgroundColor?: BackgroundColor;
    borderColor?: BorderColor;
    opacity?: Opacity;
}

type RenderProp<P = Record<string, unknown>> = ReactElement | ((props: P) => ReactElement);
/**
 * Resolves a render prop to a React element.
 *
 * @param render - Either a React element or a function that returns one
 * @param props - Props to merge/pass to the render prop
 * @param defaultElement - Fallback element if render is not provided
 * @returns The resolved React element
 *
 * @example
 * // Element form - props are merged onto the element
 * <Button render={<a href="/foo" />}>Click</Button>
 *
 * // Function form - you control prop spreading
 * <Button render={(props) => <a {...props} href="/foo">Click</a>} />
 */
declare function resolveRender<P extends Record<string, unknown>>(render: RenderProp<P> | undefined, props: P, defaultElement: ReactElement): ReactElement;

interface BoxProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    display?: Responsive<Display>;
    color?: FontColor;
    backgroundColor?: BackgroundColor;
    border?: Responsive<Border>;
    borderWidth?: Responsive<BorderWidth>;
    borderColor?: BorderColor;
    borderRadius?: Responsive<BorderRadius>;
    shadow?: Responsive<BoxShadow>;
    padding?: Responsive<Padding>;
    paddingX?: Responsive<Padding>;
    paddingY?: Responsive<Padding>;
    paddingTop?: Responsive<Padding>;
    paddingRight?: Responsive<Padding>;
    paddingBottom?: Responsive<Padding>;
    paddingLeft?: Responsive<Padding>;
    margin?: Responsive<Spacing>;
    marginX?: Responsive<Spacing>;
    marginY?: Responsive<Spacing>;
    marginTop?: Responsive<Spacing>;
    marginRight?: Responsive<Spacing>;
    marginBottom?: Responsive<Spacing>;
    marginLeft?: Responsive<Spacing>;
    spaceX?: Responsive<Spacing>;
    spaceY?: Responsive<Spacing>;
    width?: Responsive<Width | string>;
    minWidth?: Responsive<MinWidth | string>;
    maxWidth?: Responsive<MaxWidth | string>;
    height?: Responsive<Height | string>;
    minHeight?: Responsive<MinHeight | string>;
    maxHeight?: Responsive<MaxHeight | string>;
    position?: Responsive<Position>;
    textAlign?: Responsive<TextAlign>;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    overflow?: Responsive<Overflow>;
    overflowX?: Responsive<Overflow>;
    overflowY?: Responsive<Overflow>;
    cursor?: Responsive<Cursor>;
    opacity?: Responsive<Opacity>;
    pointerEvents?: Responsive<PointerEvents>;
    alignContent?: Responsive<AlignContent>;
    alignItems?: Responsive<AlignItems>;
    alignSelf?: Responsive<AlignSelf>;
    justifyContent?: Responsive<JustifyContent>;
    justifyItems?: Responsive<JustifyItems>;
    justifySelf?: Responsive<JustifySelf>;
    flexBasis?: string;
    flexGrow?: FlexGrow;
    flexShrink?: FlexShrink;
    fill?: boolean;
    gridArea?: string;
    gridRow?: string;
    gridColumn?: string;
    order?: number;
    zIndex?: number;
    theme?: string;
    hover?: StateStyles;
    focus?: StateStyles;
    active?: StateStyles;
    as?: string;
    render?: RenderProp<BoxRenderProps>;
}
interface BoxRenderProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    [key: string]: unknown;
}
declare const Box: react.ForwardRefExoticComponent<BoxProps & react.RefAttributes<HTMLElement>>;

interface FlexboxProps extends Omit<BoxProps, 'display' | 'gap'> {
    display?: Responsive<FlexDisplay>;
    direction?: Responsive<FlexDirection>;
    wrap?: Responsive<FlexWrap>;
    justifyContent?: Responsive<JustifyContent>;
    justifyItems?: Responsive<JustifyItems>;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    gap?: Responsive<Gap>;
    gapX?: Responsive<Gap>;
    gapY?: Responsive<Gap>;
}
declare function Flexbox({ display, direction, wrap, justifyContent, justifyItems, alignContent, alignItems, gap, gapX, gapY, className, children, ...props }: FlexboxProps): react_jsx_runtime.JSX.Element;

interface RowProps extends FlexboxProps {
    children?: ReactNode;
    reverse?: boolean;
}
declare function Row({ reverse, children, ...props }: RowProps): react_jsx_runtime.JSX.Element;

interface ColumnProps extends FlexboxProps {
    children?: ReactNode;
    reverse?: boolean;
}
declare function Column({ reverse, children, ...props }: ColumnProps): react_jsx_runtime.JSX.Element;

interface GridProps extends Omit<BoxProps, 'display'> {
    display?: Responsive<GridDisplay>;
    justifyContent?: Responsive<JustifyContent>;
    justifyItems?: Responsive<JustifyItems>;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    gap?: Responsive<Gap>;
    gapX?: Responsive<Gap>;
    gapY?: Responsive<Gap>;
    autoFlow?: Responsive<GridAutoFlow>;
    rows?: Responsive<GridRows | string>;
    columns?: Responsive<GridColumns | string>;
    areas?: GridTemplateAreas;
}
declare function Grid({ display, justifyContent, justifyItems, alignContent, alignItems, gap, gapX, gapY, autoFlow, rows, columns, areas, className, style, children, ...props }: GridProps): react_jsx_runtime.JSX.Element;

interface ContainerProps extends BoxProps {
    children?: ReactNode;
    isFluid?: boolean;
    isCentered?: boolean;
}
declare function Container({ isCentered, isFluid, className, children, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
declare function mapDisplay(value: Responsive<string> | undefined): string;
declare function mapPosition(value: Responsive<string> | undefined): string;
declare function mapOverflow(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string;
declare function mapCursor(value: Responsive<string> | undefined): string;
declare function mapOpacity(value: Responsive<string> | undefined): string;
declare function mapPointerEvents(value: Responsive<string> | undefined): string;
declare function mapPadding(value: Responsive<string> | undefined, side?: string): string;
declare function mapMargin(value: Responsive<string> | undefined, side?: string): string;
declare function mapGap(value: Responsive<string> | undefined, axis?: 'x' | 'y'): string;
declare function mapSpace(value: Responsive<string> | undefined, axis: 'x' | 'y'): string;
declare function mapFontSize(value: Responsive<string> | undefined): string;
declare function mapHeadingSize(value: Responsive<string> | undefined): string;
declare function mapFontWeight(value: Responsive<string> | undefined): string;
declare function mapTextColor(value: string | undefined): string;
declare function mapBackgroundColor(value: string | undefined): string;
declare function mapBorderRadius(value: Responsive<string> | undefined): string;
declare function mapBorderWidth(value: Responsive<string> | undefined): string;
declare function mapShadow(value: Responsive<string> | undefined): string;
declare function mapFlexDirection(value: Responsive<string> | undefined): string;
declare function mapFlexWrap(value: Responsive<string> | undefined): string;
declare function mapJustifyContent(value: Responsive<string> | undefined): string;
declare function mapJustifyItems(value: Responsive<string> | undefined): string;
declare function mapAlignContent(value: Responsive<string> | undefined): string;
declare function mapAlignItems(value: Responsive<string> | undefined): string;
declare function mapAlignSelf(value: Responsive<string> | undefined): string;
declare function mapTextAlign(value: Responsive<string> | undefined): string;
declare function mapTextWrap(value: Responsive<string> | undefined): string;
declare function mapTextTransform(value: Responsive<string> | undefined): string;
declare function mapLetterSpacing(value: Responsive<string> | undefined): string;
declare function mapLineHeight(value: Responsive<string> | undefined): string;
declare function mapWhitespace(value: Responsive<string> | undefined): string;
declare function mapWordBreak(value: Responsive<string> | undefined): string;
declare function mapVerticalAlign(value: Responsive<string> | undefined): string;
declare function mapTextDecorationStyle(value: Responsive<string> | undefined): string;
declare function mapTextIndent(value: Responsive<string> | undefined): string;
declare function mapGridAutoFlow(value: Responsive<string> | undefined): string;
declare function mapGridColumns(value: Responsive<string> | undefined): string;
declare function mapGridRows(value: Responsive<string> | undefined): string;
declare function mapBorder(value: Responsive<string | boolean> | undefined): string;
declare function mapBorderColor(value: string | undefined): string;
declare function getCssColorValue(value: string | undefined): string | undefined;
declare function mapWidth(value: Responsive<string> | undefined): string;
declare function mapHeight(value: Responsive<string> | undefined): string;
declare function mapMinWidth(value: Responsive<string> | undefined): string;
declare function mapMaxWidth(value: Responsive<string> | undefined): string;
declare function mapMinHeight(value: Responsive<string> | undefined): string;
declare function mapMaxHeight(value: Responsive<string> | undefined): string;
declare function isWidthPreset(value: string): boolean;
declare function isHeightPreset(value: string): boolean;
declare function isMinWidthPreset(value: string): boolean;
declare function isMaxWidthPreset(value: string): boolean;
declare function isMinHeightPreset(value: string): boolean;
declare function isMaxHeightPreset(value: string): boolean;
type StatePrefix = 'hover' | 'focus' | 'active';
interface StateStylesInput {
    color?: string | boolean;
    backgroundColor?: string | boolean;
    borderColor?: string | boolean;
    opacity?: string;
}
declare function mapStateStyles(prefix: StatePrefix, styles: StateStylesInput | undefined): string;

declare const breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
};
type BreakpointKey = 'base' | keyof typeof breakpoints;
declare function useBreakpoint(): BreakpointKey | null;

export { type AlignContent, type AlignItems, type AlignSelf, type BackgroundColor, type Border, type BorderColor, type BorderRadius, type BorderWidth, type Bottom, Box, type BoxProps, type BoxRenderProps, type BoxShadow, type Breakpoint, type BreakpointKey, Breakpoints, type ColorName, type ColorShade, Column, type ColumnProps, Container, type ContainerProps, type Cursor, type Display, type FillColor, type FlexDirection, type FlexDisplay, type FlexGrow, type FlexShrink, type FlexWrap, Flexbox, type FlexboxProps, type FontColor, type FontSize, type FontWeight, type Fraction, type Gap, Grid, type GridAutoFlow, type GridColumns, type GridDisplay, type GridProps, type GridRows, type GridTemplateAreas, type GridTemplateColumns, type GridTemplateRows, type HeadingSize, type Height, type HeightViewport, type HoverColor, type InteractiveColor, type JustifyContent, type JustifyItems, type JustifySelf, type Left, type LetterSpacing, type LineHeight, type MaxHeight, type MaxWidth, type MaxWidthSpecial, type MinHeight, type MinWidth, type NegativeSpacing, type ObjectFit, type Opacity, type Overflow, type Padding, type PointerEvents, type Position, type Primitive, type RenderProp, type Responsive, type Right, Row, type RowProps, type SemanticColor, type SizingSpecial, type Spacing, type StateStyles, type StrokeColor, type SurfaceColor, type TailwindColor, type TextAlign, type TextDecorationStyle, type TextIndent, type TextTransform, type TextWrap, type Top, type VerticalAlign, type Whitespace, type Width, type WidthViewport, type WordBreak, cn, getCssColorValue, isHeightPreset, isMaxHeightPreset, isMaxWidthPreset, isMinHeightPreset, isMinWidthPreset, isWidthPreset, mapAlignContent, mapAlignItems, mapAlignSelf, mapBackgroundColor, mapBorder, mapBorderColor, mapBorderRadius, mapBorderWidth, mapCursor, mapDisplay, mapFlexDirection, mapFlexWrap, mapFontSize, mapFontWeight, mapGap, mapGridAutoFlow, mapGridColumns, mapGridRows, mapHeadingSize, mapHeight, mapJustifyContent, mapJustifyItems, mapLetterSpacing, mapLineHeight, mapMargin, mapMaxHeight, mapMaxWidth, mapMinHeight, mapMinWidth, mapOpacity, mapOverflow, mapPadding, mapPointerEvents, mapPosition, mapShadow, mapSpace, mapStateStyles, mapTextAlign, mapTextColor, mapTextDecorationStyle, mapTextIndent, mapTextTransform, mapTextWrap, mapVerticalAlign, mapWhitespace, mapWidth, mapWordBreak, resolveRender, useBreakpoint };
