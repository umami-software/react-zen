import * as react_jsx_runtime from 'react/jsx-runtime';
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';
import * as react from 'react';
import { ReactNode, HTMLAttributes, ReactElement, CSSProperties, LiHTMLAttributes, MouseEvent, ComponentProps, Key, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, Dispatch, SetStateAction, InputHTMLAttributes, AnchorHTMLAttributes, TextareaHTMLAttributes, RefObject } from 'react';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { ButtonProps as ButtonProps$1 } from '@base-ui/react/button';
import { DayPicker } from 'react-day-picker';
import useEmblaCarousel from 'embla-carousel-react';
import { CheckboxRoot } from '@base-ui/react/checkbox';
import { CheckboxGroup as CheckboxGroup$1 } from '@base-ui/react/checkbox-group';
import { Collapsible as Collapsible$1 } from '@base-ui/react/collapsible';
import { Combobox } from '@base-ui/react/combobox';
import { Command as Command$1 } from 'cmdk';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import { UseFormProps, SubmitHandler, UseFormReturn, ControllerProps, ControllerRenderProps, FieldValues, ControllerFieldState, UseFormStateReturn, RegisterOptions } from 'react-hook-form';
import * as zustand from 'zustand';
import { ClassValue } from 'clsx';
import { Menu as Menu$1 } from '@base-ui/react/menu';
import { Menubar as Menubar$1 } from '@base-ui/react/menubar';
import { Meter as Meter$1 } from '@base-ui/react/meter';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { NumberField as NumberField$1 } from '@base-ui/react/number-field';
import { OTPField as OTPField$1 } from '@base-ui/react/otp-field';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { ProgressRoot } from '@base-ui/react/progress';
import { RadioRoot } from '@base-ui/react/radio';
import { RadioGroupProps as RadioGroupProps$1 } from '@base-ui/react/radio-group';
import { SeparatorProps as SeparatorProps$1, PanelProps, GroupProps } from 'react-resizable-panels';
import { ScrollArea as ScrollArea$1 } from '@base-ui/react/scroll-area';
import { Select as Select$1 } from '@base-ui/react/select';
import { Separator as Separator$1 } from '@base-ui/react/separator';
import { Slider as Slider$1 } from '@base-ui/react/slider';
import { Switch as Switch$1 } from '@base-ui/react/switch';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';
import { ToggleProps as ToggleProps$1 } from '@base-ui/react/toggle';
import { ToggleGroupProps as ToggleGroupProps$1 } from '@base-ui/react/toggle-group';
import { Toolbar as Toolbar$1 } from '@base-ui/react/toolbar';

interface AccordionProps extends Omit<Accordion$1.Root.Props<string>, 'value' | 'defaultValue' | 'multiple' | 'onValueChange'> {
    type?: 'single' | 'multiple';
    className?: string;
    children?: ReactNode;
    allowsMultipleExpanded?: boolean;
    expandedKeys?: Iterable<string>;
    defaultExpandedKeys?: Iterable<string>;
    onExpandedChange?: (keys: Set<string>) => void;
}
interface AccordionItemProps extends Omit<Accordion$1.Item.Props, 'value' | 'disabled'> {
    id?: string;
    value?: string;
    isDisabled?: boolean;
}
declare function Accordion({ className, children, type, allowsMultipleExpanded, expandedKeys, defaultExpandedKeys, onExpandedChange, ...props }: AccordionProps): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ id, value, isDisabled, className, children, ...props }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface AlertBannerProps {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    variant?: 'info' | 'success' | 'warning' | 'error';
    align?: 'start' | 'center' | 'end';
    allowClose?: boolean;
    onClose?: () => void;
    className?: string;
    children?: ReactNode;
}
declare function AlertBanner({ title, description, icon, variant, align, allowClose, onClose, children, className, ...props }: AlertBannerProps): react_jsx_runtime.JSX.Element;

interface DialogRenderProps {
    close: () => void;
}
interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
    children?: ReactNode | ((props: DialogRenderProps) => ReactNode);
    title?: ReactNode;
    variant?: 'sheet';
}
declare function Dialog({ title, variant, children, className, ...props }: DialogProps): react_jsx_runtime.JSX.Element;

interface AlertDialogProps extends DialogProps {
    title?: ReactNode;
    description?: ReactNode;
    isDanger?: boolean;
    isConfirmDisabled?: boolean;
    confirmLabel?: ReactNode;
    cancelLabel?: ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
}
declare function AlertDialog({ title, description, isDanger, isConfirmDisabled, confirmLabel, cancelLabel, onConfirm, onCancel, className, children, ...props }: AlertDialogProps): react_jsx_runtime.JSX.Element;

interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
declare function AspectRatio({ ratio, className, style, children, ...props }: AspectRatioProps): react_jsx_runtime.JSX.Element;

declare const button: tailwind_variants.TVReturnType<{
    variant: {
        default: string[];
        primary: string[];
        outline: string[];
        quiet: string[];
        danger: string[];
        zero: string[];
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, string[], {
    variant: {
        default: string[];
        primary: string[];
        outline: string[];
        quiet: string[];
        danger: string[];
        zero: string[];
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string[];
        primary: string[];
        outline: string[];
        quiet: string[];
        danger: string[];
        zero: string[];
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
}, undefined, string[], unknown, unknown, undefined>>;
type ButtonVariants = VariantProps<typeof button>;
declare const badge: tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        primary: string;
        outline: string;
        success: string;
        warning: string;
        error: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], {
    variant: {
        default: string;
        primary: string;
        outline: string;
        success: string;
        warning: string;
        error: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        primary: string;
        outline: string;
        success: string;
        warning: string;
        error: string;
        info: string;
    };
    size: {
        sm: string;
        md: string;
    };
}, undefined, string[], unknown, unknown, undefined>>;
type BadgeVariants = VariantProps<typeof badge>;
declare const avatar: tailwind_variants.TVReturnType<{
    size: {
        xs: {
            root: string;
            fallback: string;
        };
        sm: {
            root: string;
            fallback: string;
        };
        md: {
            root: string;
            fallback: string;
        };
        lg: {
            root: string;
            fallback: string;
        };
        xl: {
            root: string;
            fallback: string;
        };
    };
}, {
    root: string[];
    image: string;
    fallback: string[];
}, undefined, {
    size: {
        xs: {
            root: string;
            fallback: string;
        };
        sm: {
            root: string;
            fallback: string;
        };
        md: {
            root: string;
            fallback: string;
        };
        lg: {
            root: string;
            fallback: string;
        };
        xl: {
            root: string;
            fallback: string;
        };
    };
}, {
    root: string[];
    image: string;
    fallback: string[];
}, tailwind_variants.TVReturnType<{
    size: {
        xs: {
            root: string;
            fallback: string;
        };
        sm: {
            root: string;
            fallback: string;
        };
        md: {
            root: string;
            fallback: string;
        };
        lg: {
            root: string;
            fallback: string;
        };
        xl: {
            root: string;
            fallback: string;
        };
    };
}, {
    root: string[];
    image: string;
    fallback: string[];
}, undefined, unknown, unknown, undefined>>;
type AvatarVariants = VariantProps<typeof avatar>;
declare const tag: tailwind_variants.TVReturnType<{
    variant: {
        default: {
            base: string;
        };
        outline: {
            base: string;
        };
        primary: {
            base: string;
        };
    };
}, {
    base: string[];
    removeButton: string[];
}, undefined, {
    variant: {
        default: {
            base: string;
        };
        outline: {
            base: string;
        };
        primary: {
            base: string;
        };
    };
}, {
    base: string[];
    removeButton: string[];
}, tailwind_variants.TVReturnType<{
    variant: {
        default: {
            base: string;
        };
        outline: {
            base: string;
        };
        primary: {
            base: string;
        };
    };
}, {
    base: string[];
    removeButton: string[];
}, undefined, unknown, unknown, undefined>>;
type TagVariants = VariantProps<typeof tag>;

interface AvatarProps extends Avatar$1.Root.Props {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    size?: AvatarVariants['size'];
}
declare function Avatar({ src, alt, fallback, size, className, children, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariants['variant'];
    size?: BadgeVariants['size'];
}
declare function Badge({ variant, size, className, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Breakpoints: readonly ["base", "sm", "md", "lg", "xl", "2xl"];
type Breakpoint$1 = (typeof Breakpoints)[number];
type Responsive$1<T> = T | Partial<Record<Breakpoint$1, T>>;
type ColorName = 'gray' | 'slate' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
type TailwindColor = `${ColorName}-${ColorShade}`;
type SemanticColor = 'primary' | 'secondary' | 'muted' | 'strong' | 'inverted' | 'disabled' | 'transparent';
type SurfaceColor = 'surface-base' | 'surface-raised' | 'surface-sunken' | 'surface-overlay' | 'surface-inverted' | 'surface-disabled';
type InteractiveColor = 'interactive' | 'interactive-hover' | 'interactive-pressed';
type FontColor = SemanticColor | ColorName | TailwindColor | true;
type BackgroundColor = SemanticColor | SurfaceColor | InteractiveColor | ColorName | TailwindColor | true;
type BorderColor = SemanticColor | ColorName | TailwindColor | true;
type StrokeColor = FontColor;
type FillColor = FontColor;
type Spacing = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';
type Padding = Spacing | true;
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

interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    color?: FontColor;
    size?: Responsive$1<FontSize>;
    weight?: Responsive$1<FontWeight>;
    align?: Responsive$1<TextAlign>;
    spacing?: Responsive$1<LetterSpacing>;
    lineHeight?: Responsive$1<LineHeight>;
    wrap?: Responsive$1<TextWrap>;
    whitespace?: Responsive$1<Whitespace>;
    wordBreak?: Responsive$1<WordBreak>;
    transform?: Responsive$1<TextTransform>;
    indent?: Responsive$1<TextIndent>;
    verticalAlign?: Responsive$1<VerticalAlign>;
    truncate?: Responsive$1<boolean>;
    italic?: Responsive$1<boolean>;
    underline?: Responsive$1<boolean>;
    strikethrough?: Responsive$1<boolean>;
    decorationStyle?: Responsive$1<TextDecorationStyle>;
    decorationColor?: FontColor;
    as?: 'span' | 'div' | 'label' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'blockquote';
    render?: RenderProp<TextRenderProps>;
}
interface TextRenderProps {
    className: string;
    children?: ReactNode;
    [key: string]: unknown;
}
declare function Text({ color, size, weight, align, spacing, lineHeight, wrap, whitespace, wordBreak, transform, indent, verticalAlign, truncate, italic, underline, strikethrough, decorationStyle, decorationColor, as, render, className, children, ...props }: TextProps): react.ReactElement<unknown, string | react.JSXElementConstructor<any>>;

interface BlockquoteProps extends Omit<TextProps, 'as'> {
    children?: ReactNode;
}
declare function Blockquote({ className, children, ...props }: BlockquoteProps): react_jsx_runtime.JSX.Element;

interface BoxProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    display?: Responsive$1<Display>;
    color?: FontColor;
    backgroundColor?: BackgroundColor;
    border?: Responsive$1<Border>;
    borderWidth?: Responsive$1<BorderWidth>;
    borderColor?: BorderColor;
    borderRadius?: Responsive$1<BorderRadius>;
    shadow?: Responsive$1<BoxShadow>;
    padding?: Responsive$1<Padding>;
    paddingX?: Responsive$1<Padding>;
    paddingY?: Responsive$1<Padding>;
    paddingTop?: Responsive$1<Padding>;
    paddingRight?: Responsive$1<Padding>;
    paddingBottom?: Responsive$1<Padding>;
    paddingLeft?: Responsive$1<Padding>;
    margin?: Responsive$1<Spacing>;
    marginX?: Responsive$1<Spacing>;
    marginY?: Responsive$1<Spacing>;
    marginTop?: Responsive$1<Spacing>;
    marginRight?: Responsive$1<Spacing>;
    marginBottom?: Responsive$1<Spacing>;
    marginLeft?: Responsive$1<Spacing>;
    spaceX?: Responsive$1<Spacing>;
    spaceY?: Responsive$1<Spacing>;
    width?: Responsive$1<Width | string>;
    minWidth?: Responsive$1<MinWidth | string>;
    maxWidth?: Responsive$1<MaxWidth | string>;
    height?: Responsive$1<Height | string>;
    minHeight?: Responsive$1<MinHeight | string>;
    maxHeight?: Responsive$1<MaxHeight | string>;
    position?: Responsive$1<Position>;
    textAlign?: Responsive$1<TextAlign>;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    overflow?: Responsive$1<Overflow>;
    overflowX?: Responsive$1<Overflow>;
    overflowY?: Responsive$1<Overflow>;
    cursor?: Responsive$1<Cursor>;
    opacity?: Responsive$1<Opacity>;
    pointerEvents?: Responsive$1<PointerEvents>;
    alignContent?: Responsive$1<AlignContent>;
    alignItems?: Responsive$1<AlignItems>;
    alignSelf?: Responsive$1<AlignSelf>;
    justifyContent?: Responsive$1<JustifyContent>;
    justifyItems?: Responsive$1<JustifyItems>;
    justifySelf?: Responsive$1<JustifySelf>;
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

interface BreadcrumbsProps extends HTMLAttributes<HTMLOListElement> {
    isDisabled?: boolean;
}
interface BreadcrumbProps extends LiHTMLAttributes<HTMLLIElement> {
    isDisabled?: boolean;
}
declare function Breadcrumbs({ children, className, isDisabled, ...props }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;
declare function Breadcrumb({ children, className, isDisabled, ...props }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

interface ButtonProps extends Omit<ButtonProps$1, 'className' | 'disabled' | 'render'>, ButtonVariants {
    render?: RenderProp<ButtonRenderProps>;
    children?: ReactNode;
    className?: string;
    isDisabled?: boolean;
    onPress?: (event: MouseEvent<HTMLElement>) => void;
    preventFocusOnPress?: boolean;
}
interface ButtonRenderProps {
    className: string;
    children: ReactNode;
    [key: string]: unknown;
}
declare function Button({ variant, size, render, preventFocusOnPress: _preventFocusOnPress, isDisabled, onPress, onClick, className, children, ...props }: ButtonProps): react.ReactElement<unknown, string | react.JSXElementConstructor<any>>;

type CalendarProps = Omit<ComponentProps<typeof DayPicker>, 'mode' | 'selected' | 'defaultMonth' | 'onSelect' | 'disabled'> & {
    value: Date;
    minValue?: Date;
    maxValue?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
    isDisabled?: boolean;
    isReadOnly?: boolean;
};
declare function Calendar({ className, value, minValue, maxValue, defaultValue, onChange, isDisabled, isReadOnly, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

type EmblaOptions = NonNullable<Parameters<typeof useEmblaCarousel>[0]>;
interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    loop?: boolean;
    showArrows?: boolean;
    showDots?: boolean;
    opts?: EmblaOptions;
    onIndexChange?: (index: number) => void;
}
declare function Carousel({ orientation, loop, showArrows, showDots, opts, onIndexChange, className, children, ...props }: CarouselProps): react_jsx_runtime.JSX.Element;
declare function CarouselItem({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends Omit<CheckboxRoot.Props, 'checked' | 'defaultChecked' | 'disabled' | 'indeterminate' | 'onCheckedChange' | 'value'> {
    children?: ReactNode;
    label?: string;
    value?: string | boolean;
    isSelected?: boolean;
    defaultSelected?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    onChange?: (selected: boolean) => void;
}
declare function Checkbox({ label: _label, className, children, isSelected, defaultSelected, isDisabled, isIndeterminate, onChange, value, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface CheckboxGroupProps extends Omit<CheckboxGroup$1.Props, 'disabled' | 'onValueChange' | 'onChange'> {
    label?: string;
    isDisabled?: boolean;
    orientation?: 'vertical' | 'horizontal';
    onChange?: (value: string[]) => void;
    children?: ReactNode;
}
declare function CheckboxGroup({ label, isDisabled, orientation, onChange, className, children, ...props }: CheckboxGroupProps): react_jsx_runtime.JSX.Element;

interface CodeProps extends Omit<TextProps, 'as'> {
    children?: ReactNode;
}
declare function Code({ className, children, ...props }: CodeProps): react_jsx_runtime.JSX.Element;

interface CollapsibleProps extends Omit<Collapsible$1.Root.Props, 'open' | 'defaultOpen' | 'onOpenChange' | 'disabled'> {
    isExpanded?: boolean;
    defaultExpanded?: boolean;
    isDisabled?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    children?: ReactNode;
}
declare function Collapsible({ isExpanded, defaultExpanded, isDisabled, onExpandedChange, className, children, ...props }: CollapsibleProps): react_jsx_runtime.JSX.Element;
interface CollapsibleTriggerProps extends Collapsible$1.Trigger.Props {
    children?: ReactNode;
}
declare function CollapsibleTrigger({ className, children, ...props }: CollapsibleTriggerProps): react_jsx_runtime.JSX.Element;
interface CollapsiblePanelProps extends Collapsible$1.Panel.Props {
    children?: ReactNode;
}
declare function CollapsiblePanel({ className, children, ...props }: CollapsiblePanelProps): react_jsx_runtime.JSX.Element;

interface FlexboxProps extends Omit<BoxProps, 'display' | 'gap'> {
    display?: Responsive$1<FlexDisplay>;
    direction?: Responsive$1<FlexDirection>;
    wrap?: Responsive$1<FlexWrap>;
    justifyContent?: Responsive$1<JustifyContent>;
    justifyItems?: Responsive$1<JustifyItems>;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    gap?: Responsive$1<Gap>;
    gapX?: Responsive$1<Gap>;
    gapY?: Responsive$1<Gap>;
}
declare function Flexbox({ display, direction, wrap, justifyContent, justifyItems, alignContent, alignItems, gap, gapX, gapY, className, children, ...props }: FlexboxProps): react_jsx_runtime.JSX.Element;

interface ColumnProps extends FlexboxProps {
    children?: ReactNode;
    reverse?: boolean;
}
declare function Column({ reverse, children, ...props }: ColumnProps): react_jsx_runtime.JSX.Element;

type Selection = Set<Key> | 'all';
type PressEvent = MouseEvent<HTMLElement>;
declare function toSelection(value?: Iterable<Key> | 'all'): Selection;
declare function selectionToStrings(value: Selection): string[];

type ListKind = 'native' | 'select' | 'combobox';
declare function ListPrimitiveProvider({ kind, children, }: {
    kind: Exclude<ListKind, 'native'>;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
interface ListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    children?: ReactNode;
    highlightColor?: string;
    showCheckmark?: boolean;
    isFullscreen?: boolean;
    label?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
    selectionMode?: 'none' | 'single' | 'multiple';
    selectedKeys?: Iterable<Key>;
    defaultSelectedKeys?: Iterable<Key>;
    onSelectionChange?: (value: Selection) => void;
    renderEmptyState?: (props: object) => ReactNode;
}
declare function List({ id, highlightColor, isFullscreen, label, value, onChange, className, selectedKeys, defaultSelectedKeys, onSelectionChange, selectionMode, style, children, renderEmptyState, ...props }: ListProps): react_jsx_runtime.JSX.Element;
interface ListItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
    children?: ReactNode;
    id?: string | number;
    value?: string;
    showCheckmark?: boolean;
    isDisabled?: boolean;
    textValue?: string;
}
declare function ListItem({ id, value, children, className, showCheckmark, isDisabled, onClick, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;
declare function ListSeparator({ className, ...props }: HTMLAttributes<HTMLHRElement>): react_jsx_runtime.JSX.Element;
interface ListSectionProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    title?: string;
}
declare function ListSection({ title, className, children, ...props }: ListSectionProps): react_jsx_runtime.JSX.Element;

interface ComboBoxProps extends Omit<Combobox.Root.Props<string>, 'children' | 'items' | 'disabled' | 'onValueChange'> {
    children?: ReactNode;
    items?: ReadonlyArray<string | {
        label: ReactNode;
        value: string;
    }>;
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    onChange?: (value: string | null) => void;
    renderEmptyState?: (props: object) => ReactNode;
    listProps?: ListProps;
    popoverProps?: Combobox.Positioner.Props;
    className?: string;
}
declare function ComboBox({ className, label, placeholder, isDisabled, onChange, renderEmptyState, listProps, popoverProps, children, items, itemToStringLabel, ...props }: ComboBoxProps): react_jsx_runtime.JSX.Element;

interface CommandProps extends ComponentProps<typeof Command$1> {
}
declare function Command({ className, children, ...props }: CommandProps): react_jsx_runtime.JSX.Element;
interface CommandInputProps extends ComponentProps<typeof Command$1.Input> {
}
declare function CommandInput({ className, ...props }: CommandInputProps): react_jsx_runtime.JSX.Element;
interface CommandListProps extends ComponentProps<typeof Command$1.List> {
}
declare function CommandList({ className, ...props }: CommandListProps): react_jsx_runtime.JSX.Element;
interface CommandEmptyProps extends ComponentProps<typeof Command$1.Empty> {
}
declare function CommandEmpty({ className, ...props }: CommandEmptyProps): react_jsx_runtime.JSX.Element;
interface CommandGroupProps extends ComponentProps<typeof Command$1.Group> {
}
declare function CommandGroup({ className, ...props }: CommandGroupProps): react_jsx_runtime.JSX.Element;
interface CommandItemProps extends Omit<ComponentProps<typeof Command$1.Item>, 'disabled'> {
    icon?: ReactNode;
    isDisabled?: boolean;
}
declare function CommandItem({ icon, isDisabled, className, children, ...props }: CommandItemProps): react_jsx_runtime.JSX.Element;
interface CommandSeparatorProps extends ComponentProps<typeof Command$1.Separator> {
}
declare function CommandSeparator({ className, ...props }: CommandSeparatorProps): react_jsx_runtime.JSX.Element;
interface CommandDialogProps extends CommandProps {
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare function CommandDialog({ isOpen, onOpenChange, children, ...props }: CommandDialogProps): react_jsx_runtime.JSX.Element;

interface ConfirmationDialogProps extends AlertDialogProps {
    value: string;
    confirmMessage?: ReactNode;
}
declare function ConfirmationDialog({ value, confirmMessage, className, children, ...props }: ConfirmationDialogProps): react_jsx_runtime.JSX.Element;

interface ContainerProps extends BoxProps {
    children?: ReactNode;
    isFluid?: boolean;
    isCentered?: boolean;
}
declare function Container({ isCentered, isFluid, className, children, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

interface ContextMenuProps {
    children: ReactNode;
    onOpenChange?: (open: boolean) => void;
}
declare function ContextMenu({ children, onOpenChange }: ContextMenuProps): react_jsx_runtime.JSX.Element;

interface CopyButtonProps {
    value?: string | (() => string);
    timeout?: number;
    className?: string;
    children?: ReactNode;
}
declare function CopyButton({ value, timeout, className, children, ...props }: CopyButtonProps): react_jsx_runtime.JSX.Element;

interface GridProps extends Omit<BoxProps, 'display'> {
    display?: Responsive$1<GridDisplay>;
    justifyContent?: Responsive$1<JustifyContent>;
    justifyItems?: Responsive$1<JustifyItems>;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    gap?: Responsive$1<Gap>;
    gapX?: Responsive$1<Gap>;
    gapY?: Responsive$1<Gap>;
    autoFlow?: Responsive$1<GridAutoFlow>;
    rows?: Responsive$1<GridRows | string>;
    columns?: Responsive$1<GridColumns | string>;
    areas?: GridTemplateAreas;
}
declare function Grid({ display, justifyContent, justifyItems, alignContent, alignItems, gap, gapX, gapY, autoFlow, rows, columns, areas, className, style, children, ...props }: GridProps): react_jsx_runtime.JSX.Element;

interface DataCardProps extends GridProps {
    data?: {
        label: ReactNode;
        value: any;
    }[];
    labelWidth?: string;
}
declare function DataCard({ data, labelWidth, ...props }: DataCardProps): react_jsx_runtime.JSX.Element;

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    selectionMode?: 'none' | 'single' | 'multiple';
    selectedKeys?: Iterable<string>;
    defaultSelectedKeys?: Iterable<string>;
    onSelectionChange?: (keys: Set<string>) => void;
}
interface TableColumnProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
    align?: 'start' | 'center' | 'end';
    isRowHeader?: boolean;
}
interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> {
    align?: 'start' | 'center' | 'end';
}
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    id?: string;
}
declare function Table({ children, className, selectionMode: _selectionMode, selectedKeys: _selectedKeys, defaultSelectedKeys: _defaultSelectedKeys, onSelectionChange: _onSelectionChange, ...props }: TableProps): react_jsx_runtime.JSX.Element;
interface TableHeaderComponentProps extends HTMLAttributes<HTMLTableSectionElement> {
    style?: CSSProperties;
}
declare function TableHeader({ children, className, style, ...props }: TableHeaderComponentProps): react_jsx_runtime.JSX.Element;
declare function TableBody({ children, className, ...props }: HTMLAttributes<HTMLTableSectionElement>): react_jsx_runtime.JSX.Element;
declare function TableRow({ children, className, style, id, ...props }: TableRowProps): react_jsx_runtime.JSX.Element;
declare function TableColumn({ children, className, align, isRowHeader: _isRowHeader, ...props }: TableColumnProps): react_jsx_runtime.JSX.Element;
declare function TableCell({ children, className, align, ...props }: TableCellProps): react_jsx_runtime.JSX.Element;

interface DataTableProps extends TableProps {
    data?: any[];
    displayMode?: 'table' | 'cards';
}
declare function DataTable({ data, displayMode, className, children, ...props }: DataTableProps): react_jsx_runtime.JSX.Element;
interface DataColumnProps extends Omit<HTMLAttributes<any>, 'children'> {
    id: string;
    label?: ReactNode;
    align?: 'start' | 'center' | 'end';
    width?: string;
    as?: string;
    hidden?: boolean;
    children?: ReactNode | ((row: any, index: number) => void);
}
declare function DataColumn(_props: DataColumnProps): null;

interface DatePickerProps {
    value?: Date;
    defaultValue?: Date;
    minValue?: Date;
    maxValue?: Date;
    label?: string;
    placeholder?: string;
    locale?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    formatOptions?: Intl.DateTimeFormatOptions;
    onChange?: (date: Date) => void;
    buttonProps?: ButtonProps;
    calendarProps?: Partial<CalendarProps>;
    className?: string;
}
declare function DatePicker({ value, defaultValue, minValue, maxValue, label, placeholder, locale, isDisabled, isReadOnly, formatOptions, onChange, buttonProps, calendarProps, className, }: DatePickerProps): react_jsx_runtime.JSX.Element;

interface DotsProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}
declare function Dots({ size, className, color: _color, ...props }: DotsProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps extends Omit<ColumnProps, 'title'> {
    icon?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
}
declare function EmptyState({ icon, title, description, actions, children, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface TooltipProps extends Omit<Tooltip$1.Positioner.Props, 'children' | 'className'> {
    children?: ReactNode;
    showArrow?: boolean;
    className?: string;
}
declare function Tooltip({ children, className, sideOffset, showArrow, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;
interface TooltipBubbleProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    showArrow?: boolean;
}
declare function TooltipBubble({ children, className, color: _color, ...props }: TooltipBubbleProps): react_jsx_runtime.JSX.Element;

interface FloatingTooltipProps extends TooltipBubbleProps {
}
declare function FloatingTooltip({ className, style, children, ...props }: FloatingTooltipProps): react_jsx_runtime.JSX.Element;

interface FormProps extends UseFormProps, Omit<HTMLAttributes<HTMLFormElement>, 'children'> {
    autoComplete?: string;
    onSubmit?: SubmitHandler<any>;
    error?: ReactNode | Error;
    preventSubmit?: boolean;
    children?: ReactNode | ((e: UseFormReturn) => ReactNode);
}
declare function Form({ autoComplete, onSubmit, error, preventSubmit, mode, disabled, reValidateMode, defaultValues, values, errors, resetOptions, resolver, context, shouldFocusError, shouldUnregister, shouldUseNativeValidation, progressive, criteriaMode, delayError, className, children, ...props }: FormProps): react_jsx_runtime.JSX.Element;

interface RowProps extends FlexboxProps {
    children?: ReactNode;
    reverse?: boolean;
}
declare function Row({ reverse, children, ...props }: RowProps): react_jsx_runtime.JSX.Element;

interface FormButtonsProps extends RowProps {
    children?: ReactNode;
    fill?: boolean;
}
declare function FormButtons({ fill, children, ...props }: FormButtonsProps): react_jsx_runtime.JSX.Element;

interface FormControllerProps extends Omit<ControllerProps, 'render'> {
    children: ({ field, fieldState, formState, }: {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<FieldValues>;
    }) => ReactElement;
}
declare function FormController({ children, ...props }: FormControllerProps): react_jsx_runtime.JSX.Element;

interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, Partial<UseFormReturn> {
    name: string;
    description?: string;
    label?: string;
    rules?: RegisterOptions<FieldValues, string>;
    children: any;
}
declare function FormField({ id, name, description, label, rules, className, children, color: _color, ...props }: FormFieldProps): react_jsx_runtime.JSX.Element;

interface FormFieldArrayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    name: string;
    description?: string;
    label?: string;
    rules?: RegisterOptions<FieldValues, string>;
    children: (props: any) => ReactNode;
}
declare function FormFieldArray({ id, name, description, label, rules, className, children, color: _color, ...props }: FormFieldArrayProps): react_jsx_runtime.JSX.Element;

interface FormResetButtonProps extends ButtonProps {
    children?: ReactNode;
    values?: FieldValues | {
        [p: string]: any;
    };
}
declare function FormResetButton({ values, children, onPress, ...props }: FormResetButtonProps): react_jsx_runtime.JSX.Element;

interface LoadingButtonProps extends ButtonProps {
    children?: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    showText?: boolean;
}
declare function LoadingButton({ isLoading, isDisabled, showText, children, ...props }: LoadingButtonProps): react_jsx_runtime.JSX.Element;

declare function FormSubmitButton({ variant, isDisabled, isLoading, children, ...props }: LoadingButtonProps): react_jsx_runtime.JSX.Element;

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps extends Omit<TextProps, 'as' | 'size'> {
    children?: ReactNode;
    size?: Responsive$1<HeadingSize>;
    as?: HeadingElement;
}
declare function Heading({ size, spacing, as, className, children, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;

interface HoverButtonProps {
    isOpen?: boolean;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    closeDelay?: number;
    children: ReactElement[];
}
declare function HoverTrigger({ isOpen, onHoverStart, onHoverEnd, closeDelay, children, }: HoverButtonProps): react_jsx_runtime.JSX.Element;

declare const breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
};
type BreakpointKey = 'base' | keyof typeof breakpoints;
declare function useBreakpoint(): BreakpointKey | null;

declare function useDebounce(value: string, delay: number): string;

type Theme = 'light' | 'dark';
type Palette = 'neutral' | 'slate' | 'gray' | 'zinc' | 'stone';
declare const PALETTES: Palette[];
interface ThemeState {
    theme: Theme;
    palette: Palette;
    setTheme: (theme: Theme) => void;
    setPalette: (palette: Palette) => void;
    syncTheme: () => void;
    initTheme: (preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') => void;
    initPalette: (preferred?: Palette) => void;
}
declare const useTheme: zustand.UseBoundStore<zustand.StoreApi<ThemeState>>;
declare function useInitTheme(preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system', preferredPalette?: Palette): void;

type ToastVariant = 'success' | 'error';
interface ToastOptions {
    duration?: number;
    title?: string;
    actions?: string[];
    allowClose?: boolean;
    variant?: ToastVariant;
    onClose?: (action?: string) => void;
}
interface ToastState extends ToastOptions {
    id: string;
    message: string;
    timestamp: number;
}
declare function removeToast(id: string): void;
declare function useToast(): {
    toast: (message: string, options?: ToastOptions) => void;
    toasts: ToastState[];
};

type StrokeWidth = '0.5' | '1' | '1.5' | '2' | '3' | '4';
interface IconProps extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'size'> {
    color?: FontColor;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'input';
    rotate?: number;
    strokeWidth?: StrokeWidth;
    strokeColor?: StrokeColor;
    fillColor?: FillColor;
}
declare function Icon({ color, size, variant, rotate, strokeWidth, strokeColor, fillColor, style, className, children, ...props }: IconProps): react_jsx_runtime.JSX.Element;

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    objectFit?: ObjectFit;
    isCentered?: boolean;
    borderRadius?: Responsive$1<BorderRadius>;
    shadow?: Responsive$1<BoxShadow>;
}
declare function Image({ src, alt, objectFit, isCentered, borderRadius, shadow, className, ...props }: ImageProps): react_jsx_runtime.JSX.Element;

type KbdProps = HTMLAttributes<HTMLElement>;
declare function Kbd({ className, children, ...props }: KbdProps): react_jsx_runtime.JSX.Element;

interface LabelProps extends Omit<TextProps, 'as' | 'render'> {
    htmlFor?: string;
}
declare function Label({ size, weight, lineHeight, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

interface LoadingProps extends BoxProps {
    size?: 'sm' | 'md' | 'lg';
    icon?: 'dots' | 'spinner';
    placement?: 'absolute' | 'center' | 'inline';
    className?: string;
}
declare function Loading({ size, placement, icon, className, ...props }: LoadingProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;
type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;
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

interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    selectionMode?: 'none' | 'single' | 'multiple';
    selectedKeys?: Iterable<Key>;
    defaultSelectedKeys?: Iterable<Key>;
    onSelectionChange?: (keys: Selection) => void;
}
declare function Menu({ className, children, selectionMode, selectedKeys, defaultSelectedKeys, onSelectionChange, ...props }: MenuProps): react_jsx_runtime.JSX.Element;
interface MenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
    id?: string | number;
    value?: string;
    icon?: ReactNode;
    label?: string;
    showChecked?: boolean;
    showSubMenuIcon?: boolean;
    isDisabled?: boolean;
    onAction?: (key: Key) => void;
}
declare function MenuItem({ id, value, icon, label, showChecked, showSubMenuIcon, isDisabled, onAction, children, className, onClick, ...props }: MenuItemProps): react_jsx_runtime.JSX.Element;
declare function MenuSeparator({ className, ...props }: HTMLAttributes<HTMLHRElement>): react_jsx_runtime.JSX.Element;
interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    maxHeight?: number;
}
declare function MenuSection({ title, maxHeight, className, style, children, ...props }: MenuSectionProps): react_jsx_runtime.JSX.Element;
interface SubmenuTriggerProps {
    children?: ReactNode;
}
declare function SubMenuTrigger({ children }: SubmenuTriggerProps): react_jsx_runtime.JSX.Element;

interface MenubarProps extends Omit<Menubar$1.Props, 'disabled'> {
    isDisabled?: boolean;
    children?: ReactNode;
}
declare function Menubar({ isDisabled, className, children, ...props }: MenubarProps): react_jsx_runtime.JSX.Element;
interface MenubarMenuProps extends Omit<Menu$1.Root.Props, 'children' | 'disabled'> {
    label: ReactNode;
    isDisabled?: boolean;
    children?: ReactNode;
}
declare function MenubarMenu({ label, isDisabled, children, ...props }: MenubarMenuProps): react_jsx_runtime.JSX.Element;

interface MeterProps extends Omit<Meter$1.Root.Props, 'min' | 'max' | 'format'> {
    value: number;
    minValue?: number;
    maxValue?: number;
    label?: string;
    showValue?: boolean;
    formatOptions?: Intl.NumberFormatOptions;
}
declare function Meter({ value, minValue, maxValue, label, showValue, formatOptions, className, ...props }: MeterProps): react_jsx_runtime.JSX.Element;

interface ModalProps extends Dialog$1.Portal.Props {
    children?: ReactNode;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
    offset?: string;
    className?: string;
    style?: CSSProperties;
}
declare function Modal({ placement, offset, children, className, style, isOpen: _isOpen, onOpenChange: _onOpenChange, ...props }: ModalProps): react_jsx_runtime.JSX.Element;

type NavigationContext = {
    activeMenu: string;
    setActiveMenu: Dispatch<SetStateAction<string>>;
};
declare const NavbarContext: react.Context<NavigationContext | undefined>;
interface NavbarProps extends HTMLAttributes<HTMLElement> {
    showArrow?: boolean;
}
declare const useNavigationContext: () => NavigationContext;
declare function Navbar({ showArrow, className, children, color: _color, ...props }: NavbarProps): react_jsx_runtime.JSX.Element;
interface NavbarItemProps extends HTMLAttributes<HTMLElement> {
    label?: string;
    children?: ReactNode;
}
declare function NavbarItem({ label, children, className, color: _color, ...props }: NavbarItemProps): react_jsx_runtime.JSX.Element;

interface NumberFieldProps extends Omit<NumberField$1.Root.Props, 'min' | 'max' | 'disabled' | 'readOnly' | 'required' | 'format' | 'onValueChange'> {
    label?: string;
    placeholder?: string;
    minValue?: number;
    maxValue?: number;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    formatOptions?: Intl.NumberFormatOptions;
    onChange?: (value: number | null) => void;
}
declare function NumberField({ label, placeholder, minValue, maxValue, isDisabled, isReadOnly, isRequired, formatOptions, onChange, className, ...props }: NumberFieldProps): react_jsx_runtime.JSX.Element;

interface OTPFieldProps extends Omit<OTPField$1.Root.Props, 'length' | 'disabled' | 'readOnly' | 'required' | 'onValueChange' | 'onValueComplete'> {
    length?: number;
    label?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    onChange?: (value: string) => void;
    onComplete?: (value: string) => void;
}
declare function OTPField({ length, label, isDisabled, isReadOnly, isRequired, onChange, onComplete, className, ...props }: OTPFieldProps): react_jsx_runtime.JSX.Element;

interface DialogTriggerProps {
    children: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare function DialogTrigger({ children, isOpen, defaultOpen, onOpenChange }: DialogTriggerProps): react_jsx_runtime.JSX.Element;
interface TooltipTriggerProps {
    children: ReactNode;
    delay?: number;
    closeDelay?: number;
}
declare function TooltipTrigger({ children, delay, closeDelay }: TooltipTriggerProps): react_jsx_runtime.JSX.Element;
interface MenuTriggerProps {
    children: ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare function MenuTrigger({ children, isOpen, defaultOpen, onOpenChange }: MenuTriggerProps): react_jsx_runtime.JSX.Element;
interface FileTriggerProps {
    children: ReactElement;
    acceptedFileTypes?: string[];
    allowsMultiple?: boolean;
    onSelect?: (files: FileList | null) => void;
}
declare function FileTrigger({ children, acceptedFileTypes, allowsMultiple, onSelect, }: FileTriggerProps): react_jsx_runtime.JSX.Element;
declare function Focusable({ children }: {
    children: ReactElement;
}): ReactElement<any, string | react.JSXElementConstructor<any>>;
declare function Pressable({ children, onPress, }: {
    children: ReactElement;
    onPress?: (event: react.MouseEvent<HTMLElement>) => void;
}): ReactElement<unknown, string | react.JSXElementConstructor<any>>;
declare function RouterProvider({ children }: {
    children?: ReactNode;
}): ReactNode;

interface PageHeaderProps extends RowProps {
    children?: ReactNode;
}
declare function PageHeader({ children, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;
interface PageHeaderTitleProps extends Omit<ColumnProps, 'title'> {
    title: ReactNode;
    description?: ReactNode;
    breadcrumb?: ReactNode;
}
declare function PageHeaderTitle({ title, description, breadcrumb, children, ...props }: PageHeaderTitleProps): react_jsx_runtime.JSX.Element;
interface PageHeaderActionsProps extends RowProps {
    children?: ReactNode;
}
declare function PageHeaderActions({ children, ...props }: PageHeaderActionsProps): react_jsx_runtime.JSX.Element;

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    pageCount?: number;
    totalItems?: number;
    pageSize?: number;
    page?: number;
    defaultPage?: number;
    siblingCount?: number;
    isDisabled?: boolean;
    onChange?: (page: number) => void;
}
declare function Pagination({ pageCount, totalItems, pageSize, page, defaultPage, siblingCount, isDisabled, onChange, className, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;

interface PaletteSwitcherProps {
    className?: string;
}
declare function PaletteSwitcher({ className }: PaletteSwitcherProps): react_jsx_runtime.JSX.Element;

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'readOnly'> {
    label?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}
declare function PasswordField({ label, className, isDisabled, isReadOnly, ...props }: PasswordFieldProps): react_jsx_runtime.JSX.Element;

interface PopoverProps extends Omit<Popover$1.Positioner.Props, 'children' | 'className'> {
    children?: ReactNode;
    isFullscreen?: boolean;
    isOpen?: boolean;
    isNonModal?: boolean;
    triggerRef?: React.RefObject<Element | null>;
    className?: string;
    onOpenChange?: (open: boolean) => void;
}
declare function Popover({ children, isFullscreen, className, isOpen: _isOpen, isNonModal: _isNonModal, triggerRef: _triggerRef, onOpenChange: _onOpenChange, ...props }: PopoverProps): react_jsx_runtime.JSX.Element;

interface ProgressBarProps extends ProgressRoot.Props {
    showPercentage?: boolean;
}
declare function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface ProgressCircleProps extends ProgressRoot.Props {
    showPercentage?: boolean;
}
declare function ProgressCircle({ className, showPercentage, value, min, max, ...props }: ProgressCircleProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends Omit<RadioGroupProps$1, 'disabled' | 'readOnly' | 'onChange' | 'onValueChange'> {
    children?: ReactNode;
    label?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    onChange?: (value: string) => void;
}
declare function RadioGroup({ label, children, className, isDisabled, isReadOnly, onChange, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;
interface RadioProps extends Omit<RadioRoot.Props, 'disabled'> {
    isDisabled?: boolean;
}
declare function Radio({ children, className, isDisabled, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

interface ResizablePanelGroupProps extends Omit<GroupProps, 'orientation'> {
    direction?: 'horizontal' | 'vertical';
}
declare function ResizablePanelGroup({ direction, className, ...props }: ResizablePanelGroupProps): react_jsx_runtime.JSX.Element;
interface ResizablePanelProps extends PanelProps {
}
declare function ResizablePanel({ className, ...props }: ResizablePanelProps): react_jsx_runtime.JSX.Element;
interface ResizableHandleProps extends SeparatorProps$1 {
    withHandle?: boolean;
}
declare function ResizableHandle({ withHandle, className, ...props }: ResizableHandleProps): react_jsx_runtime.JSX.Element;

interface ScrollAreaProps extends ScrollArea$1.Root.Props {
    maxHeight?: string | number;
    orientation?: 'vertical' | 'horizontal' | 'both';
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare function ScrollArea({ maxHeight, orientation, className, style, children, ...props }: ScrollAreaProps): react_jsx_runtime.JSX.Element;

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSearch'> {
    label?: string;
    delay?: number;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
}
declare function SearchField({ label, placeholder, value, defaultValue, delay, onChange, onSearch, className, ...props }: SearchFieldProps): react_jsx_runtime.JSX.Element;

interface SelectValueRenderProps {
    defaultChildren: ReactNode;
    isPlaceholder: boolean;
}
interface SelectProps extends Omit<Select$1.Root.Props<string | number>, 'children' | 'value' | 'defaultValue' | 'items' | 'disabled' | 'onValueChange'> {
    children?: ReactNode;
    items?: ReadonlyArray<string | number | {
        label: ReactNode;
        value: string | number;
    }>;
    value?: string | number;
    defaultValue?: string | number;
    label?: string;
    placeholder?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    allowSearch?: boolean;
    searchValue?: string;
    searchDelay?: number;
    isFullscreen?: boolean;
    maxHeight?: string | number;
    showIcon?: boolean;
    alignItemWithTrigger?: boolean;
    onSearch?: (value: string) => void;
    onChange?: (value: string | number | null) => void;
    buttonProps?: ButtonProps;
    listProps?: ListProps;
    popoverProps?: Select$1.Positioner.Props;
    renderValue?: ReactNode | ((values: SelectValueRenderProps) => ReactNode);
    className?: string;
}
declare function Select({ value, defaultValue, label, placeholder, isLoading, isDisabled, allowSearch, searchValue, searchDelay, isFullscreen, maxHeight, showIcon, alignItemWithTrigger, onSearch, onChange, buttonProps, listProps, popoverProps, renderValue, className, children, items, onOpenChange, ...props }: SelectProps): react_jsx_runtime.JSX.Element;

interface SeparatorProps extends Separator$1.Props {
    orientation?: 'horizontal' | 'vertical';
}
declare function Separator({ orientation, className, ...props }: SeparatorProps): react_jsx_runtime.JSX.Element;

interface SheetProps extends Dialog$1.Portal.Props {
    children?: ReactNode;
    side?: 'left' | 'right' | 'top' | 'bottom';
    size?: string | number;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    style?: CSSProperties;
}
declare function Sheet({ side, size, children, className, style, isOpen: _isOpen, onOpenChange: _onOpenChange, ...props }: SheetProps): react_jsx_runtime.JSX.Element;
interface SheetHeaderProps {
    title?: ReactNode;
    showClose?: boolean;
    className?: string;
    children?: ReactNode;
}
declare function SheetHeader({ title, showClose, className, children }: SheetHeaderProps): react_jsx_runtime.JSX.Element;

interface SidebarContextValue {
    isCollapsed: boolean;
    toggle: () => void;
}
declare function useSidebar(): SidebarContextValue;
interface SidebarProps extends HTMLAttributes<HTMLElement> {
    isCollapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
}
declare function Sidebar({ isCollapsed, defaultCollapsed, onCollapseChange, className, children, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;
declare function SidebarHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
declare function SidebarFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}
declare function SidebarGroup({ title, className, children, ...props }: SidebarGroupProps): react_jsx_runtime.JSX.Element;
interface SidebarItemProps extends Omit<AnchorHTMLAttributes<HTMLElement>, 'onClick'> {
    icon?: ReactNode;
    label?: string;
    href?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    onPress?: (event: MouseEvent<HTMLElement>) => void;
}
declare function SidebarItem({ icon, label, href, isSelected, isDisabled, onPress, className, children, ...props }: SidebarItemProps): react_jsx_runtime.JSX.Element;
interface SidebarToggleProps extends ButtonProps {
}
declare function SidebarToggle({ onPress, ...props }: SidebarToggleProps): react_jsx_runtime.JSX.Element;

interface SkeletonProps extends BoxProps {
}
declare function Skeleton({ width, height, borderRadius, className, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;
interface SkeletonTextProps extends ColumnProps {
    lines?: number;
    lastLineWidth?: BoxProps['width'];
    lineHeight?: BoxProps['height'];
}
declare function SkeletonText({ lines, lastLineWidth, lineHeight, ...props }: SkeletonTextProps): react_jsx_runtime.JSX.Element;
interface SkeletonAvatarProps extends Omit<SkeletonProps, 'width' | 'height' | 'borderRadius'> {
    size?: 'sm' | 'md' | 'lg';
}
declare function SkeletonAvatar({ size, ...props }: SkeletonAvatarProps): react_jsx_runtime.JSX.Element;

interface SliderProps extends Omit<Slider$1.Root.Props<number>, 'disabled' | 'onChange' | 'onValueChange' | 'onValueCommitted'> {
    label?: ReactNode;
    showValue?: boolean;
    isDisabled?: boolean;
    onChange?: (value: number) => void;
    onChangeEnd?: (value: number) => void;
}
declare function Slider({ className, showValue, label, isDisabled, onChange, onChangeEnd, ...props }: SliderProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
    quiet?: boolean;
    isDisabled?: boolean;
}
declare function Spinner(props: SpinnerProps): react_jsx_runtime.JSX.Element;

interface StatusLightProps {
    color?: string;
    variant?: 'info' | 'success' | 'warning' | 'error' | 'active' | 'inactive' | 'none';
    className?: string;
    children?: ReactNode;
}
declare function StatusLight(props: StatusLightProps): react_jsx_runtime.JSX.Element;

interface SwitchProps extends Omit<Switch$1.Root.Props, 'checked' | 'defaultChecked' | 'disabled' | 'onCheckedChange' | 'value'> {
    children?: ReactNode;
    label?: string;
    value?: string | boolean;
    isSelected?: boolean;
    defaultSelected?: boolean;
    isDisabled?: boolean;
    onChange?: (selected: boolean) => void;
}
declare function Switch({ label, children, className, isSelected, defaultSelected, isDisabled, onChange, value, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

interface TabsProps extends Omit<Tabs$1.Root.Props, 'value' | 'defaultValue' | 'onValueChange'> {
    children?: ReactNode;
    selectedKey?: string;
    defaultSelectedKey?: string;
    onSelectionChange?: (key: string) => void;
}
interface TabListProps extends Tabs$1.List.Props {
    children?: ReactNode;
}
interface TabProps extends Omit<Tabs$1.Tab.Props, 'value' | 'disabled'> {
    id?: string;
    value?: string;
    isDisabled?: boolean;
    href?: string;
}
interface TabPanelProps extends Omit<Tabs$1.Panel.Props, 'value'> {
    id?: string;
    value?: string;
}
declare function Tabs({ children, className, selectedKey, defaultSelectedKey, onSelectionChange, ...props }: TabsProps): react_jsx_runtime.JSX.Element;
declare function TabList({ children, className, ...props }: TabListProps): react_jsx_runtime.JSX.Element;
declare function Tab({ id, value, isDisabled, href, children, className, ...props }: TabProps): react_jsx_runtime.JSX.Element;
declare function TabPanel({ id, value, children, className, ...props }: TabPanelProps): react_jsx_runtime.JSX.Element;

interface TagGroupProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children?: ReactNode;
    onRemove?: (keys: Set<Key>) => void;
}
declare function TagGroup({ label, children, className, onRemove, ...props }: TagGroupProps): react_jsx_runtime.JSX.Element;
interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>, TagVariants {
    id?: string | number;
    children?: ReactNode;
    isDisabled?: boolean;
}
declare function Tag({ id, variant, children, className, isDisabled, ...props }: TagProps): react_jsx_runtime.JSX.Element;

type NativeFieldProps = Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'readOnly' | 'disabled'>;
interface TextFieldProps extends NativeFieldProps {
    label?: string;
    placeholder?: string;
    allowCopy?: boolean;
    asTextArea?: boolean;
    resize?: 'vertical' | 'horizontal' | 'both' | 'none';
    variant?: 'quiet' | 'none';
    isReadOnly?: boolean;
    isDisabled?: boolean;
    onChange?: (value: any) => void;
}
declare function TextField({ value, defaultValue, label, placeholder, allowCopy, asTextArea, resize, variant, onChange, isReadOnly, isDisabled, className, children: _children, ...props }: TextFieldProps): react_jsx_runtime.JSX.Element;

interface ThemeButtonProps extends ButtonProps {
    target?: RefObject<HTMLElement | null> | HTMLElement;
}
declare function ThemeButton({ className, variant, target, onPress, ...props }: ThemeButtonProps): react_jsx_runtime.JSX.Element;

type ThemeMode = 'light' | 'dark' | 'system';
interface ThemeSwitcherProps {
    className?: string;
}
declare function ThemeSwitcher({ className }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

interface ToggleProps extends Omit<ToggleProps$1<string>, 'pressed' | 'defaultPressed' | 'disabled' | 'onChange' | 'onPressedChange'> {
    label?: string;
    value?: string;
    isSelected?: boolean;
    defaultSelected?: boolean;
    isDisabled?: boolean;
    onChange?: (selected: boolean) => void;
}
declare function Toggle({ label, children, className, isSelected, defaultSelected, isDisabled, onChange, ...props }: ToggleProps): react_jsx_runtime.JSX.Element;

interface ToggleGroupProps extends Omit<ToggleGroupProps$1<string>, 'value' | 'defaultValue' | 'onChange' | 'onValueChange'> {
    label?: string;
    value?: string[];
    defaultValue?: string[];
    variant?: 'primary';
    onChange?: (value: string[]) => void;
    selectionMode?: 'single' | 'multiple';
    selectedKeys?: Iterable<string>;
    defaultSelectedKeys?: Iterable<string>;
    onSelectionChange?: (value: Selection) => void;
}
declare function ToggleGroup({ label, value, defaultValue, variant, onChange, className, children, selectionMode, selectedKeys, defaultSelectedKeys, onSelectionChange, ...props }: ToggleGroupProps): react_jsx_runtime.JSX.Element;
interface ToggleGroupItemProps extends Omit<ToggleProps$1<string>, 'disabled'> {
    id?: string;
    isDisabled?: boolean;
}
declare function ToggleGroupItem({ id, className, children, isDisabled, ...props }: ToggleGroupItemProps): react_jsx_runtime.JSX.Element;

interface ToolbarProps extends Omit<Toolbar$1.Root.Props, 'disabled'> {
    isDisabled?: boolean;
    children?: ReactNode;
}
declare function Toolbar({ isDisabled, orientation, className, children, ...props }: ToolbarProps): react_jsx_runtime.JSX.Element;
interface ToolbarGroupProps extends Toolbar$1.Group.Props {
    children?: ReactNode;
}
declare function ToolbarGroup({ className, children, ...props }: ToolbarGroupProps): react_jsx_runtime.JSX.Element;
interface ToolbarButtonProps extends ButtonProps {
    isDisabled?: boolean;
}
declare function ToolbarButton({ isDisabled, variant, ...props }: ToolbarButtonProps): react_jsx_runtime.JSX.Element;
declare function ToolbarSeparator({ className, ...props }: Toolbar$1.Separator.Props): react_jsx_runtime.JSX.Element;

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    id: string;
    message: string;
    title?: string;
    actions?: string[];
    allowClose?: boolean;
    variant?: 'success' | 'error';
    onClose?: (action?: string) => void;
}
declare function Toast({ id, message, title, actions, allowClose, variant, className, children, onClose, color: _color, ...props }: ToastProps): react_jsx_runtime.JSX.Element;

type ToastPosition = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left' | 'right';
interface ToasterProps {
    duration?: number;
    position?: ToastPosition;
}
declare function Toaster({ duration, position }: ToasterProps): react_jsx_runtime.JSX.Element;

interface ToastProviderProps extends ToasterProps {
    children: ReactNode;
}
declare const ToastContext: react.Context<{}>;
declare function ToastProvider({ children, ...props }: ToastProviderProps): react_jsx_runtime.JSX.Element;

interface ZenProviderProps {
    theme?: Theme;
    colorScheme?: 'light' | 'dark' | 'system';
    palette?: Palette;
    toast?: ToasterProps;
    children: ReactNode;
}
declare function ZenProvider({ children, theme, colorScheme, palette, toast, }: ZenProviderProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, AlertBanner, type AlertBannerProps, AlertDialog, type AlertDialogProps, AspectRatio, type AspectRatioProps, Avatar, type AvatarProps, Badge, type BadgeProps, Blockquote, type BlockquoteProps, Box, type BoxProps, type BoxRenderProps, Breadcrumb, type BreadcrumbProps, Breadcrumbs, type BreadcrumbsProps, type BreakpointKey, Button, type ButtonProps, type ButtonRenderProps, Calendar, type CalendarProps, Carousel, CarouselItem, type CarouselProps, Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxProps, Code, type CodeProps, Collapsible, CollapsiblePanel, type CollapsiblePanelProps, type CollapsibleProps, CollapsibleTrigger, type CollapsibleTriggerProps, Column, type ColumnProps, ComboBox, type ComboBoxProps, Command, CommandDialog, type CommandDialogProps, CommandEmpty, type CommandEmptyProps, CommandGroup, type CommandGroupProps, CommandInput, type CommandInputProps, CommandItem, type CommandItemProps, CommandList, type CommandListProps, type CommandProps, CommandSeparator, type CommandSeparatorProps, ConfirmationDialog, type ConfirmationDialogProps, Container, type ContainerProps, ContextMenu, type ContextMenuProps, CopyButton, type CopyButtonProps, DataCard, type DataCardProps, DataColumn, type DataColumnProps, DataTable, type DataTableProps, DatePicker, type DatePickerProps, Dialog, type DialogProps, type DialogRenderProps, DialogTrigger, Dots, type DotsProps, EmptyState, type EmptyStateProps, FileTrigger, Flexbox, type FlexboxProps, FloatingTooltip, type FloatingTooltipProps, Focusable, Form, FormButtons, type FormButtonsProps, FormController, type FormControllerProps, FormField, FormFieldArray, type FormFieldArrayProps, type FormFieldProps, type FormProps, FormResetButton, type FormResetButtonProps, FormSubmitButton, Grid, type GridProps, Heading, type HeadingProps, type HoverButtonProps, HoverTrigger, Icon, type IconProps, Image, type ImageProps, Kbd, type KbdProps, Label, type LabelProps, List, ListItem, type ListItemProps, ListPrimitiveProvider, type ListProps, ListSection, type ListSectionProps, ListSeparator, Loading, LoadingButton, type LoadingButtonProps, type LoadingProps, Menu, MenuItem, type MenuItemProps, type MenuProps, MenuSection, type MenuSectionProps, MenuSeparator, MenuTrigger, Menubar, MenubarMenu, type MenubarMenuProps, type MenubarProps, Meter, type MeterProps, Modal, type ModalProps, Navbar, NavbarContext, NavbarItem, type NavbarItemProps, type NavbarProps, type NavigationContext, NumberField, type NumberFieldProps, OTPField, type OTPFieldProps, PALETTES, PageHeader, PageHeaderActions, type PageHeaderActionsProps, type PageHeaderProps, PageHeaderTitle, type PageHeaderTitleProps, Pagination, type PaginationProps, type Palette, PaletteSwitcher, type PaletteSwitcherProps, PasswordField, type PasswordFieldProps, Popover, type PopoverProps, type PressEvent, Pressable, ProgressBar, type ProgressBarProps, ProgressCircle, type ProgressCircleProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, type RenderProp, ResizableHandle, type ResizableHandleProps, ResizablePanel, ResizablePanelGroup, type ResizablePanelGroupProps, type ResizablePanelProps, RouterProvider, Row, type RowProps, ScrollArea, type ScrollAreaProps, SearchField, type SearchFieldProps, Select, type SelectProps, type SelectValueRenderProps, type Selection, Separator, type SeparatorProps, Sheet, SheetHeader, type SheetHeaderProps, type SheetProps, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, type SidebarGroupProps, SidebarHeader, SidebarItem, type SidebarItemProps, type SidebarProps, SidebarToggle, type SidebarToggleProps, Skeleton, SkeletonAvatar, type SkeletonAvatarProps, type SkeletonProps, SkeletonText, type SkeletonTextProps, Slider, type SliderProps, Spinner, type SpinnerProps, StatusLight, type StatusLightProps, type StrokeWidth, SubMenuTrigger, SubMenuTrigger as SubmenuTrigger, type SubmenuTriggerProps, Switch, type SwitchProps, Tab, TabList, type TabListProps, TabPanel, type TabPanelProps, type TabProps, Table, TableBody, TableCell, type TableCellProps, TableColumn, type TableColumnProps, TableHeader, type TableProps, TableRow, type TableRowProps, Tabs, type TabsProps, Tag, TagGroup, type TagGroupProps, type TagProps, Text, TextField, type TextFieldProps, type TextProps, type TextRenderProps, type Theme, ThemeButton, type ThemeButtonProps, type ThemeMode, ThemeSwitcher, type ThemeSwitcherProps, Toast, ToastContext, type ToastOptions, type ToastPosition, type ToastProps, ToastProvider, type ToastProviderProps, type ToastState, type ToastVariant, Toaster, type ToasterProps, Toggle, ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupProps, type ToggleProps, Toolbar, ToolbarButton, type ToolbarButtonProps, ToolbarGroup, type ToolbarGroupProps, type ToolbarProps, ToolbarSeparator, Tooltip, TooltipBubble, type TooltipBubbleProps, type TooltipProps, TooltipTrigger, ZenProvider, type ZenProviderProps, cn, getCssColorValue, isHeightPreset, isMaxHeightPreset, isMaxWidthPreset, isMinHeightPreset, isMinWidthPreset, isWidthPreset, mapAlignContent, mapAlignItems, mapAlignSelf, mapBackgroundColor, mapBorder, mapBorderColor, mapBorderRadius, mapBorderWidth, mapCursor, mapDisplay, mapFlexDirection, mapFlexWrap, mapFontSize, mapFontWeight, mapGap, mapGridAutoFlow, mapGridColumns, mapGridRows, mapHeadingSize, mapHeight, mapJustifyContent, mapJustifyItems, mapLetterSpacing, mapLineHeight, mapMargin, mapMaxHeight, mapMaxWidth, mapMinHeight, mapMinWidth, mapOpacity, mapOverflow, mapPadding, mapPointerEvents, mapPosition, mapShadow, mapSpace, mapStateStyles, mapTextAlign, mapTextColor, mapTextDecorationStyle, mapTextIndent, mapTextTransform, mapTextWrap, mapVerticalAlign, mapWhitespace, mapWidth, mapWordBreak, removeToast, resolveRender, selectionToStrings, toSelection, useBreakpoint, useDebounce, useInitTheme, useNavigationContext, useSidebar, useTheme, useToast };
