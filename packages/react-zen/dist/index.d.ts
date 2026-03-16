import { DisclosureGroupProps, DisclosureProps, DialogProps as DialogProps$1, DialogRenderProps, BreadcrumbProps, BreadcrumbsProps, ButtonProps as ButtonProps$1, CalendarProps as CalendarProps$1, CheckboxProps as CheckboxProps$1, ListBoxProps, ListBoxItemProps, ListBoxSectionProps, SeparatorProps, ComboBoxProps as ComboBoxProps$1, ListBoxRenderProps, PopoverProps as PopoverProps$1, TableProps, TooltipProps as TooltipProps$1, MenuProps as MenuProps$1, MenuItemProps as MenuItemProps$1, MenuSectionProps as MenuSectionProps$1, SubmenuTriggerProps as SubmenuTriggerProps$1, ModalOverlayProps, ModalRenderProps, TextFieldProps as TextFieldProps$1, ProgressBarProps as ProgressBarProps$1, RadioProps, RadioGroupProps as RadioGroupProps$1, SearchFieldProps as SearchFieldProps$1, SelectProps as SelectProps$1, SelectValueRenderProps, SliderProps as SliderProps$1, SwitchProps as SwitchProps$1, TableBodyProps, CellProps, ColumnProps, TableHeaderProps, RowProps as RowProps$1, TabProps, TabListProps, TabPanelProps, TabsProps, TagProps as TagProps$1, TagGroupProps as TagGroupProps$1, ToggleButtonProps } from 'react-aria-components';
export { DialogTrigger, FileTrigger, Focusable, MenuTrigger, Pressable, RadioProps, RouterProvider, Selection, SubmenuTrigger, TooltipTrigger } from 'react-aria-components';
import { FontColor, Responsive, FontSize, FontWeight, TextAlign, LetterSpacing, LineHeight, TextWrap, Whitespace, WordBreak, TextTransform, TextIndent, VerticalAlign, TextDecorationStyle, RenderProp, GridProps, RowProps, HeadingSize, StrokeColor, FillColor, ObjectFit, BorderRadius, BoxShadow, BoxProps } from '@umami/kaze';
export * from '@umami/kaze';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, HTMLAttributes, ReactElement, Dispatch, SetStateAction, CSSProperties, RefObject } from 'react';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import { UseFormProps, SubmitHandler, UseFormReturn, ControllerProps, ControllerRenderProps, FieldValues, ControllerFieldState, UseFormStateReturn, RegisterOptions } from 'react-hook-form';
import * as zustand from 'zustand';

interface AccordionProps extends DisclosureGroupProps {
    type?: 'single' | 'multiple';
    className?: string;
    children?: ReactNode;
}
interface AccordionItemProps extends DisclosureProps {
}
declare function Accordion({ className, children, ...props }: AccordionProps): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ className, children, ...props }: AccordionItemProps): react_jsx_runtime.JSX.Element;

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

interface DialogProps extends DialogProps$1 {
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

interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
    color?: FontColor;
    size?: Responsive<FontSize>;
    weight?: Responsive<FontWeight>;
    align?: Responsive<TextAlign>;
    spacing?: Responsive<LetterSpacing>;
    lineHeight?: Responsive<LineHeight>;
    wrap?: Responsive<TextWrap>;
    whitespace?: Responsive<Whitespace>;
    wordBreak?: Responsive<WordBreak>;
    transform?: Responsive<TextTransform>;
    indent?: Responsive<TextIndent>;
    verticalAlign?: Responsive<VerticalAlign>;
    truncate?: Responsive<boolean>;
    italic?: Responsive<boolean>;
    underline?: Responsive<boolean>;
    strikethrough?: Responsive<boolean>;
    decorationStyle?: Responsive<TextDecorationStyle>;
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

declare function Breadcrumbs({ children, className, ...props }: BreadcrumbsProps<any>): react_jsx_runtime.JSX.Element;
declare function Breadcrumb({ children, className, ...props }: BreadcrumbProps): react_jsx_runtime.JSX.Element;

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

interface ButtonProps extends Omit<ButtonProps$1, 'className' | 'render'>, ButtonVariants {
    render?: RenderProp<ButtonRenderProps>;
    children?: ReactNode;
    className?: string;
}
interface ButtonRenderProps {
    className: string;
    children: ReactNode;
    [key: string]: unknown;
}
declare function Button({ variant, size, render, preventFocusOnPress, className, children, ...props }: ButtonProps): react.ReactElement<unknown, string | react.JSXElementConstructor<any>>;

interface CalendarProps extends Omit<CalendarProps$1<any>, 'value' | 'minValue' | 'maxValue' | 'defaultValue' | 'onChange'> {
    value: Date;
    minValue?: Date;
    maxValue?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
}
declare function Calendar({ className, value, minValue, maxValue, defaultValue, onChange, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps extends CheckboxProps$1 {
    children?: ReactNode;
    label?: string;
}
declare function Checkbox({ label, className, children, ...props }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface CodeProps extends Omit<TextProps, 'as'> {
    children?: ReactNode;
}
declare function Code({ className, children, ...props }: CodeProps): react_jsx_runtime.JSX.Element;

interface ListProps extends ListBoxProps<any> {
    children?: ReactNode;
    highlightColor?: string;
    showCheckmark?: boolean;
    isFullscreen?: boolean;
    label?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
}
declare function List({ id, highlightColor, showCheckmark, isFullscreen, label, value, onChange, className, selectedKeys, defaultSelectedKeys, onSelectionChange, style, children, ...props }: ListProps): react_jsx_runtime.JSX.Element;
interface ListItemProps extends ListBoxItemProps<any> {
    children?: ReactNode;
    id?: string | number;
    showCheckmark?: boolean;
}
declare function ListItem({ id, children, className, showCheckmark, ...props }: ListItemProps): react_jsx_runtime.JSX.Element;
declare function ListSeparator({ className, ...props }: SeparatorProps): react_jsx_runtime.JSX.Element;
interface ListSectionProps extends ListBoxSectionProps<any> {
    children?: ReactNode;
    title?: string;
}
declare function ListSection({ title, className, children, ...props }: ListSectionProps): react_jsx_runtime.JSX.Element;

interface ComboBoxProps extends ComboBoxProps$1<any> {
    children?: ReactNode;
    renderEmptyState?: (props: ListBoxRenderProps) => ReactNode;
    listProps?: ListProps;
    popoverProps?: PopoverProps$1;
}
declare function ComboBox({ className, renderEmptyState, listProps, popoverProps, children, ...props }: ComboBoxProps): react_jsx_runtime.JSX.Element;

interface ConfirmationDialogProps extends AlertDialogProps {
    value: string;
    confirmMessage?: ReactNode;
}
declare function ConfirmationDialog({ value, confirmMessage, className, children, ...props }: ConfirmationDialogProps): react_jsx_runtime.JSX.Element;

interface CopyButtonProps {
    value?: string | (() => string);
    timeout?: number;
    className?: string;
    children?: ReactNode;
}
declare function CopyButton({ value, timeout, className, children, ...props }: CopyButtonProps): react_jsx_runtime.JSX.Element;

interface DataCardProps extends GridProps {
    data?: {
        label: ReactNode;
        value: any;
    }[];
    labelWidth?: string;
}
declare function DataCard({ data, labelWidth, ...props }: DataCardProps): react_jsx_runtime.JSX.Element;

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

interface DotsProps extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}
declare function Dots({ size, className, color: _color, ...props }: DotsProps): react_jsx_runtime.JSX.Element;

interface TooltipProps extends TooltipProps$1 {
    children?: ReactNode;
    showArrow?: boolean;
}
declare function Tooltip({ children, className, offset, showArrow, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;
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
    size?: Responsive<HeadingSize>;
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
    borderRadius?: Responsive<BorderRadius>;
    shadow?: Responsive<BoxShadow>;
}
declare function Image({ src, alt, objectFit, isCentered, borderRadius, shadow, className, ...props }: ImageProps): react_jsx_runtime.JSX.Element;

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

interface MenuProps extends MenuProps$1<any> {
    className?: string;
    children?: ReactNode;
}
declare function Menu({ className, children, ...props }: MenuProps): react_jsx_runtime.JSX.Element;
interface MenuItemProps extends MenuItemProps$1 {
    children?: ReactNode;
    icon?: ReactNode;
    label?: string;
    showChecked?: boolean;
    showSubMenuIcon?: boolean;
}
declare function MenuItem({ icon, label, showChecked, showSubMenuIcon, children, className, ...props }: MenuItemProps): react_jsx_runtime.JSX.Element;
declare function MenuSeparator({ className, ...props }: SeparatorProps): react_jsx_runtime.JSX.Element;
interface MenuSectionProps extends MenuSectionProps$1<any> {
    children?: ReactNode;
    title?: string;
    maxHeight?: number;
}
declare function MenuSection({ title, maxHeight, className, style, children, ...props }: MenuSectionProps): react_jsx_runtime.JSX.Element;
interface SubmenuTriggerProps extends SubmenuTriggerProps$1 {
}
declare function SubMenuTrigger({ children, ...props }: SubmenuTriggerProps): react_jsx_runtime.JSX.Element;

interface ModalProps extends ModalOverlayProps {
    children?: ReactNode | ((values: ModalRenderProps & {
        defaultChildren: ReactNode;
    }) => ReactNode);
    isOpen?: boolean;
    placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
    offset?: string;
}
declare function Modal({ placement, offset, children, className, style, ...props }: ModalProps): react_jsx_runtime.JSX.Element;

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

interface PaletteSwitcherProps {
    className?: string;
}
declare function PaletteSwitcher({ className }: PaletteSwitcherProps): react_jsx_runtime.JSX.Element;

interface PasswordFieldProps extends TextFieldProps$1 {
    label?: string;
}
declare function PasswordField({ label, className, ...props }: PasswordFieldProps): react_jsx_runtime.JSX.Element;

interface PopoverProps extends PopoverProps$1 {
    children?: ReactNode;
    isFullscreen?: boolean;
}
declare function Popover({ children, isFullscreen, className, ...props }: PopoverProps): react_jsx_runtime.JSX.Element;

interface ProgressBarProps extends ProgressBarProps$1 {
    showPercentage?: boolean;
}
declare function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface ProgressCircleProps extends ProgressBarProps$1 {
    showPercentage?: boolean;
}
declare function ProgressCircle({ className, showPercentage, ...props }: ProgressCircleProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends RadioGroupProps$1 {
    children?: ReactNode;
    label?: string;
}
declare function RadioGroup({ label, children, className, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;

declare function Radio({ children, className, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

interface SearchFieldProps extends SearchFieldProps$1 {
    label?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    delay?: number;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
}
declare function SearchField({ label, placeholder, value, defaultValue, delay, onChange, onSearch, className, ...props }: SearchFieldProps): react_jsx_runtime.JSX.Element;

interface SelectProps extends SelectProps$1<HTMLSelectElement> {
    children?: ReactNode;
    value?: string | number;
    defaultValue?: string | number;
    label?: string;
    placeholder?: string;
    isLoading?: boolean;
    allowSearch?: boolean;
    searchValue?: string;
    searchDelay?: number;
    isFullscreen?: boolean;
    maxHeight?: string | number;
    showIcon?: boolean;
    onSearch?: (value: string) => void;
    onChange?: (e: any) => void;
    buttonProps?: ButtonProps;
    listProps?: ListProps;
    popoverProps?: PopoverProps$1;
    renderValue?: ReactNode | ((values: SelectValueRenderProps<object> & {
        defaultChildren: ReactNode;
    }) => ReactNode);
}
declare function Select({ value, defaultValue, label, isLoading, allowSearch, searchValue, searchDelay, isFullscreen, maxHeight, showIcon, onSearch, onChange, buttonProps, listProps, popoverProps, renderValue, className, children, ...props }: SelectProps): react_jsx_runtime.JSX.Element;

interface SliderProps extends SliderProps$1 {
    label?: ReactNode;
    showValue?: boolean;
}
declare function Slider({ className, showValue, label, ...props }: SliderProps): react_jsx_runtime.JSX.Element;

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

interface SwitchProps extends SwitchProps$1 {
    children?: ReactNode;
    label?: string;
}
declare function Switch({ label, children, className, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;

interface TableColumnProps extends ColumnProps {
    align?: 'start' | 'center' | 'end';
}
interface TableCellProps extends CellProps {
    align?: 'start' | 'center' | 'end';
}
declare function Table({ children, className, ...props }: TableProps): react_jsx_runtime.JSX.Element;
interface TableHeaderComponentProps extends Omit<TableHeaderProps<any>, 'style'> {
    style?: CSSProperties;
}
declare function TableHeader({ children, className, style, ...props }: TableHeaderComponentProps): react_jsx_runtime.JSX.Element;
declare function TableBody({ children, className, ...props }: TableBodyProps<any>): react_jsx_runtime.JSX.Element;
declare function TableRow({ children, className, style, ...props }: RowProps$1<any>): react_jsx_runtime.JSX.Element;
declare function TableColumn({ children, className, align, ...props }: TableColumnProps): react_jsx_runtime.JSX.Element;
declare function TableCell({ children, className, align, ...props }: TableCellProps): react_jsx_runtime.JSX.Element;

declare function Tabs({ children, className, ...props }: TabsProps): react_jsx_runtime.JSX.Element;
declare function TabList({ children, className, ...props }: TabListProps<any>): react_jsx_runtime.JSX.Element;
declare function Tab({ children, className, ...props }: TabProps): react_jsx_runtime.JSX.Element;
declare function TabPanel({ children, className, ...props }: TabPanelProps): react_jsx_runtime.JSX.Element;

interface TagGroupProps extends Omit<TagGroupProps$1, 'children'> {
    label?: string;
    children?: ReactNode;
}
declare function TagGroup({ label, children, className, ...props }: TagGroupProps): react_jsx_runtime.JSX.Element;
interface TagProps extends TagProps$1, TagVariants {
    children?: ReactNode;
}
declare function Tag({ variant, children, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;

interface TextFieldProps extends TextFieldProps$1 {
    label?: string;
    placeholder?: string;
    allowCopy?: boolean;
    asTextArea?: boolean;
    resize?: 'vertical' | 'horizontal' | 'both' | 'none';
    variant?: 'quiet' | 'none';
    onChange?: (e: any) => void;
}
declare function TextField({ value, defaultValue, label, placeholder, allowCopy, asTextArea, resize, variant, onChange, isReadOnly, isDisabled, className, children, ...props }: TextFieldProps): react_jsx_runtime.JSX.Element;

interface ThemeButtonProps extends ButtonProps {
    target?: RefObject<HTMLElement | null> | HTMLElement;
}
declare function ThemeButton({ className, variant, target, onPress, ...props }: ThemeButtonProps): react_jsx_runtime.JSX.Element;

type ThemeMode = 'light' | 'dark' | 'system';
interface ThemeSwitcherProps {
    className?: string;
}
declare function ThemeSwitcher({ className }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

interface ToggleProps extends ToggleButtonProps {
    label?: string;
    value?: string;
}
declare function Toggle({ label, children, className, ...props }: ToggleProps): react_jsx_runtime.JSX.Element;

interface ToggleGroupProps extends TagGroupProps$1 {
    label?: string;
    value?: string[];
    defaultValue?: string[];
    variant?: 'primary';
    onChange?: (value: string[]) => void;
}
declare function ToggleGroup({ label, value, defaultValue, variant, onChange, className, children, selectionMode, selectedKeys, defaultSelectedKeys, onSelectionChange, ...props }: ToggleGroupProps): react_jsx_runtime.JSX.Element;
interface ToggleGroupItemProps extends TagProps$1 {
}
declare function ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps): react_jsx_runtime.JSX.Element;

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

export { Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, AlertBanner, type AlertBannerProps, AlertDialog, type AlertDialogProps, Blockquote, type BlockquoteProps, Breadcrumb, Breadcrumbs, Button, type ButtonProps, type ButtonRenderProps, Calendar, type CalendarProps, Checkbox, type CheckboxProps, Code, type CodeProps, ComboBox, type ComboBoxProps, ConfirmationDialog, type ConfirmationDialogProps, CopyButton, type CopyButtonProps, DataCard, type DataCardProps, DataColumn, type DataColumnProps, DataTable, type DataTableProps, Dialog, type DialogProps, Dots, type DotsProps, FloatingTooltip, type FloatingTooltipProps, Form, FormButtons, type FormButtonsProps, FormController, type FormControllerProps, FormField, FormFieldArray, type FormFieldArrayProps, type FormFieldProps, type FormProps, FormResetButton, type FormResetButtonProps, FormSubmitButton, Heading, type HeadingProps, type HoverButtonProps, HoverTrigger, Icon, type IconProps, Image, type ImageProps, Label, type LabelProps, List, ListItem, type ListItemProps, type ListProps, ListSection, type ListSectionProps, ListSeparator, Loading, LoadingButton, type LoadingButtonProps, type LoadingProps, Menu, MenuItem, type MenuItemProps, type MenuProps, MenuSection, type MenuSectionProps, MenuSeparator, Modal, type ModalProps, Navbar, NavbarContext, NavbarItem, type NavbarItemProps, type NavbarProps, type NavigationContext, PALETTES, type Palette, PaletteSwitcher, type PaletteSwitcherProps, PasswordField, type PasswordFieldProps, Popover, type PopoverProps, ProgressBar, type ProgressBarProps, ProgressCircle, type ProgressCircleProps, Radio, RadioGroup, type RadioGroupProps, SearchField, type SearchFieldProps, Select, type SelectProps, Slider, type SliderProps, Spinner, type SpinnerProps, StatusLight, type StatusLightProps, type StrokeWidth, SubMenuTrigger, type SubmenuTriggerProps, Switch, type SwitchProps, Tab, TabList, TabPanel, Table, TableBody, TableCell, type TableCellProps, TableColumn, type TableColumnProps, TableHeader, TableRow, Tabs, Tag, TagGroup, type TagGroupProps, type TagProps, Text, TextField, type TextFieldProps, type TextProps, type TextRenderProps, type Theme, ThemeButton, type ThemeButtonProps, type ThemeMode, ThemeSwitcher, type ThemeSwitcherProps, Toast, ToastContext, type ToastOptions, type ToastPosition, type ToastProps, ToastProvider, type ToastProviderProps, type ToastState, type ToastVariant, Toaster, type ToasterProps, Toggle, ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupProps, type ToggleProps, Tooltip, TooltipBubble, type TooltipBubbleProps, type TooltipProps, ZenProvider, type ZenProviderProps, removeToast, useDebounce, useInitTheme, useNavigationContext, useTheme, useToast };
