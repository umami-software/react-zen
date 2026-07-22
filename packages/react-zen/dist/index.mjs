import { Button as Button$1, DisclosureGroup, Disclosure, DisclosurePanel, Dialog as Dialog$1, Breadcrumbs as Breadcrumbs$1, Breadcrumb as Breadcrumb$1, Calendar as Calendar$1, Heading as Heading$1, CalendarGrid, CalendarGridHeader, CalendarHeaderCell, CalendarGridBody, CalendarCell, Checkbox as Checkbox$1, Label as Label$1, ListBox, ListBoxItem, Separator, ListBoxSection, Header, Popover as Popover$1, ComboBox as ComboBox$1, Group, Input, TextField as TextField$1, TextArea, Table as Table$1, TableHeader as TableHeader$1, TableBody as TableBody$1, Row as Row$1, Column as Column$1, Cell, Tooltip as Tooltip$1, OverlayArrow, Menu as Menu$1, MenuItem as MenuItem$1, MenuSection as MenuSection$1, SubmenuTrigger, ModalOverlay, Modal as Modal$1, ProgressBar as ProgressBar$1, RadioGroup as RadioGroup$1, Radio as Radio$1, SearchField as SearchField$1, Select as Select$1, SelectValue, Slider as Slider$1, SliderOutput, SliderTrack, Switch as Switch$1, Tabs as Tabs$1, TabList as TabList$1, Tab as Tab$1, TabPanel as TabPanel$1, TagGroup as TagGroup$1, TagList, Tag as Tag$1, ToggleButton, SliderThumb } from 'react-aria-components';
export { DialogTrigger, FileTrigger, Focusable, MenuTrigger, Pressable, RouterProvider, SubmenuTrigger, TooltipTrigger } from 'react-aria-components';
import * as lucide_react_star from 'lucide-react';
import { forwardRef, createContext, isValidElement, cloneElement, createElement, useState, useRef, useEffect, useId, Fragment as Fragment$1, Children, useCallback, useLayoutEffect, useContext } from 'react';
import { tv } from 'tailwind-variants';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getLocalTimeZone, CalendarDate } from '@internationalized/date';
import { useForm, FormProvider, Controller, useFormContext, useFieldArray } from 'react-hook-form';
import { create } from 'zustand';
import { animated, useTransition } from '@react-spring/web';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);

// src/components/icons.tsx
var icons_exports = {};
__reExport(icons_exports, lucide_react_star);
function resolveRender(render, props, defaultElement) {
  if (!render) {
    return defaultElement;
  }
  if (typeof render === "function") {
    return render(props);
  }
  if (isValidElement(render)) {
    const renderProps = render.props;
    const children = renderProps.children !== void 0 ? renderProps.children : props.children;
    return cloneElement(render, {
      ...props,
      ...renderProps,
      children,
      // Merge classNames if both exist
      className: renderProps.className ? `${props.className || ""} ${renderProps.className}`.trim() : props.className
    });
  }
  return defaultElement;
}
var button = tv({
  base: [
    "inline-flex items-center justify-center gap-3 whitespace-nowrap",
    "font-medium rounded border border-transparent cursor-pointer",
    "transition-colors leading-normal relative no-underline",
    "outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
  ],
  variants: {
    variant: {
      default: [
        "bg-interactive text-foreground-primary",
        "hover:bg-interactive-hover",
        "pressed:bg-interactive-pressed"
      ],
      primary: [
        "bg-primary text-primary-foreground",
        "hover:opacity-90",
        "pressed:opacity-80",
        "disabled:opacity-50"
      ],
      outline: [
        "bg-surface-base border-edge shadow-sm text-foreground-primary",
        "hover:border-edge-strong",
        "pressed:bg-surface-raised",
        "disabled:bg-surface-disabled"
      ],
      quiet: ["bg-transparent", "hover:bg-interactive", "pressed:bg-interactive-hover"],
      danger: [
        "bg-status-error text-white",
        "hover:opacity-90",
        "pressed:opacity-80",
        "disabled:opacity-50"
      ],
      zero: ["bg-transparent border-0", "hover:bg-transparent", "pressed:bg-transparent"]
    },
    size: {
      xs: "text-sm py-1 px-2",
      sm: "text-base py-1.5 px-2.5",
      md: "text-base py-2 px-3",
      lg: "text-lg py-2.5 px-4",
      xl: "text-xl py-3 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
tv({
  base: [
    "flex items-center px-3 gap-3",
    "text-base rounded border border-edge bg-surface-base shadow-sm",
    "leading-6 relative text-foreground-primary",
    "focus-within:border-edge-strong",
    "focus-within:ring-2 focus-within:ring-focus-ring focus-within:ring-offset-1 focus-within:ring-offset-surface-base"
  ],
  variants: {
    variant: {
      default: "",
      quiet: "border-transparent shadow-none bg-transparent focus-within:border-b-edge focus-within:border-x-transparent focus-within:border-t-transparent"
    }
  },
  compoundVariants: [
    {
      class: "readonly:bg-surface-raised"
    },
    {
      class: "disabled:bg-surface-disabled disabled:opacity-50 disabled:cursor-not-allowed"
    }
  ]
});
tv({
  base: [
    "flex items-center justify-between",
    "gap-3 text-base py-2 px-3 min-w-[120px]",
    "cursor-pointer outline-none rounded",
    "text-foreground-primary",
    "hovered:bg-interactive",
    "focused:bg-interactive",
    "focus-visible:bg-interactive",
    "disabled:text-foreground-disabled disabled:cursor-default",
    "selected:font-semibold"
  ]
});
tv({
  base: [
    "fixed inset-0",
    "bg-black/80 flex items-center justify-center",
    "z-[9999]",
    "entering:animate-modal-fade-in",
    "exiting:animate-modal-fade-out"
  ]
});
tv({
  base: "relative z-[9999]",
  variants: {
    position: {
      center: "entering:animate-modal-zoom-in",
      left: [
        "absolute top-0 left-0 bottom-0 m-auto",
        "w-[calc(100dvw-var(--modal-offset,0))]",
        "entering:animate-modal-slide-left-in",
        "exiting:animate-modal-slide-left-out"
      ],
      right: [
        "absolute top-0 right-0 bottom-0 m-auto",
        "w-[calc(100dvw-var(--modal-offset,0))]",
        "entering:animate-modal-slide-right-in",
        "exiting:animate-modal-slide-right-out"
      ],
      top: [
        "absolute top-0 left-0 right-0 m-auto",
        "h-[calc(100dvh-var(--modal-offset,0))]",
        "entering:animate-modal-slide-up-in",
        "exiting:animate-modal-slide-up-out"
      ],
      bottom: [
        "absolute bottom-0 left-0 right-0 m-auto",
        "h-[calc(100dvh-var(--modal-offset,0))]",
        "entering:animate-modal-slide-down-in",
        "exiting:animate-modal-slide-down-out"
      ],
      fullscreen: ["w-dvw h-dvh rounded-none", "entering:animate-modal-fade-in"]
    }
  },
  defaultVariants: {
    position: "center"
  }
});
tv({
  base: [
    "bg-surface-overlay border border-edge-muted rounded-lg shadow-lg p-4",
    "entering:animate-popover-in",
    "exiting:animate-popover-out"
  ],
  variants: {
    placement: {
      top: "[--tw-translate:translateY(8px)]",
      bottom: "[--tw-translate:translateY(-8px)]",
      left: "[--tw-translate:translateX(8px)]",
      right: "[--tw-translate:translateX(-8px)]"
    }
  }
});
var tooltip = tv({
  base: [
    "bg-surface-inverted text-surface-base text-base px-2 py-1 rounded",
    "entering:animate-popover-in",
    "exiting:animate-popover-out"
  ]
});
var checkbox = tv({
  slots: {
    root: [
      "group flex items-center gap-3",
      "text-base cursor-pointer",
      "disabled:text-foreground-disabled disabled:cursor-default"
    ],
    box: [
      "flex items-center justify-center",
      "w-5 h-5 rounded border border-edge bg-surface-base",
      "shadow-sm transition-colors",
      "group-selected:bg-primary group-selected:border-primary group-selected:text-primary-foreground",
      "group-indeterminate:bg-surface-base group-indeterminate:text-foreground-primary",
      "group-disabled:bg-surface-disabled",
      "group-focus-visible:ring-2 group-focus-visible:ring-focus-ring group-focus-visible:ring-offset-1"
    ],
    icon: [
      "hidden",
      "group-selected:flex",
      "group-indeterminate:flex",
      "items-center justify-center"
    ]
  }
});
var switchVariant = tv({
  slots: {
    root: [
      "group flex items-center gap-3",
      "text-base cursor-pointer",
      "disabled:opacity-50 disabled:cursor-default"
    ],
    track: [
      "flex items-center w-10 h-6 px-1 rounded-full",
      "bg-interactive",
      "transition-colors",
      "group-selected:bg-primary",
      "group-focus-visible:ring-2 group-focus-visible:ring-focus-ring group-focus-visible:ring-offset-1"
    ],
    thumb: [
      "w-4 h-4 rounded-full",
      "bg-surface-base shadow-sm",
      "transition-transform",
      "group-selected:translate-x-4"
    ]
  }
});
tv({
  slots: {
    root: "flex flex-col",
    list: ["flex gap-1 border-b border-edge-muted"],
    tab: [
      "px-4 py-2 text-base font-medium cursor-pointer",
      "text-foreground-muted outline-none",
      "border-b-2 border-transparent -mb-px",
      "hovered:text-foreground-primary",
      "selected:text-foreground-primary selected:border-primary",
      "disabled:text-foreground-disabled disabled:cursor-default",
      "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
    ],
    panel: "py-4"
  }
});
tv({
  base: "text-foreground-primary",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl"
    },
    color: {
      default: "",
      muted: "text-foreground-muted",
      disabled: "text-foreground-disabled"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});
tv({
  base: "font-semibold text-foreground-primary",
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl"
    }
  },
  defaultVariants: {
    size: "2xl"
  }
});
var alertBanner = tv({
  base: ["w-full flex items-start gap-3 px-4 py-3 rounded-lg", "text-base"],
  variants: {
    variant: {
      info: "bg-status-info-bg text-status-info-text",
      success: "bg-status-success-bg text-status-success-text",
      warning: "bg-status-warning-bg text-status-warning-text",
      error: "bg-status-error-bg text-status-error-text"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
tv({
  base: "inline-flex items-center gap-2",
  slots: {
    dot: "w-2 h-2 rounded-full",
    label: "text-base"
  },
  variants: {
    color: {
      gray: { dot: "bg-content-muted" },
      green: { dot: "bg-status-success" },
      yellow: { dot: "bg-status-warning" },
      red: { dot: "bg-status-error" },
      blue: { dot: "bg-status-info" }
    }
  },
  defaultVariants: {
    color: "gray"
  }
});
var toast = tv({
  base: [
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg",
    "bg-surface-overlay",
    "border border-edge-muted",
    "text-base",
    "entering:animate-toast-in",
    "exiting:animate-toast-out"
  ],
  variants: {
    variant: {
      default: "",
      success: "bg-status-success-bg text-status-success-text",
      error: "bg-status-error-bg text-status-error-text"
    }
  }
});
var tag = tv({
  slots: {
    base: [
      "inline-flex items-center gap-1 px-2 py-0.5 rounded text-sm",
      "cursor-default outline-none",
      "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-1"
    ],
    removeButton: [
      "flex items-center justify-center rounded-full p-0.5 -mr-1",
      "cursor-pointer outline-none",
      "hover:bg-black/10 dark:hover:bg-white/10",
      "pressed:bg-black/20 dark:pressed:bg-white/20"
    ]
  },
  variants: {
    variant: {
      default: {
        base: "bg-interactive text-foreground-primary"
      },
      outline: {
        base: "bg-transparent border border-edge text-foreground-primary"
      },
      primary: {
        base: "bg-primary text-primary-foreground"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Button({
  variant,
  size = "md",
  render,
  preventFocusOnPress = true,
  className,
  children,
  ...props
}) {
  const buttonClassName = button({ variant, size, className });
  const renderProps = {
    ...props,
    className: buttonClassName,
    children
  };
  const defaultElement = /* @__PURE__ */ jsx(Button$1, { ...props, preventFocusOnPress, className: buttonClassName, children });
  return resolveRender(render, renderProps, defaultElement);
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var paddingMap = {
  "0": "p-0",
  px: "p-px",
  "0.5": "p-0.5",
  "1": "p-1",
  "1.5": "p-1.5",
  "2": "p-2",
  "2.5": "p-2.5",
  "3": "p-3",
  "3.5": "p-3.5",
  "4": "p-4",
  "5": "p-5",
  "6": "p-6",
  "7": "p-7",
  "8": "p-8",
  "9": "p-9",
  "10": "p-10",
  "11": "p-11",
  "12": "p-12",
  "14": "p-14",
  "16": "p-16",
  "20": "p-20",
  "24": "p-24",
  "28": "p-28",
  "32": "p-32",
  "36": "p-36",
  "40": "p-40",
  "44": "p-44",
  "48": "p-48",
  "52": "p-52",
  "56": "p-56",
  "60": "p-60",
  "64": "p-64",
  "72": "p-72",
  "80": "p-80",
  "96": "p-96",
  true: "px-[var(--padding-x-default)] py-[var(--padding-y-default)]"
};
var pxMap = {
  "0": "px-0",
  px: "px-px",
  "0.5": "px-0.5",
  "1": "px-1",
  "1.5": "px-1.5",
  "2": "px-2",
  "2.5": "px-2.5",
  "3": "px-3",
  "3.5": "px-3.5",
  "4": "px-4",
  "5": "px-5",
  "6": "px-6",
  "7": "px-7",
  "8": "px-8",
  "9": "px-9",
  "10": "px-10",
  "11": "px-11",
  "12": "px-12",
  "14": "px-14",
  "16": "px-16",
  "20": "px-20",
  "24": "px-24",
  "28": "px-28",
  "32": "px-32",
  "36": "px-36",
  "40": "px-40",
  "44": "px-44",
  "48": "px-48",
  "52": "px-52",
  "56": "px-56",
  "60": "px-60",
  "64": "px-64",
  "72": "px-72",
  "80": "px-80",
  "96": "px-96",
  true: "px-[var(--padding-x-default)]"
};
var pyMap = {
  "0": "py-0",
  px: "py-px",
  "0.5": "py-0.5",
  "1": "py-1",
  "1.5": "py-1.5",
  "2": "py-2",
  "2.5": "py-2.5",
  "3": "py-3",
  "3.5": "py-3.5",
  "4": "py-4",
  "5": "py-5",
  "6": "py-6",
  "7": "py-7",
  "8": "py-8",
  "9": "py-9",
  "10": "py-10",
  "11": "py-11",
  "12": "py-12",
  "14": "py-14",
  "16": "py-16",
  "20": "py-20",
  "24": "py-24",
  "28": "py-28",
  "32": "py-32",
  "36": "py-36",
  "40": "py-40",
  "44": "py-44",
  "48": "py-48",
  "52": "py-52",
  "56": "py-56",
  "60": "py-60",
  "64": "py-64",
  "72": "py-72",
  "80": "py-80",
  "96": "py-96",
  true: "py-[var(--padding-y-default)]"
};
var ptMap = {
  "0": "pt-0",
  px: "pt-px",
  "0.5": "pt-0.5",
  "1": "pt-1",
  "1.5": "pt-1.5",
  "2": "pt-2",
  "2.5": "pt-2.5",
  "3": "pt-3",
  "3.5": "pt-3.5",
  "4": "pt-4",
  "5": "pt-5",
  "6": "pt-6",
  "7": "pt-7",
  "8": "pt-8",
  "9": "pt-9",
  "10": "pt-10",
  "11": "pt-11",
  "12": "pt-12",
  "14": "pt-14",
  "16": "pt-16",
  "20": "pt-20",
  "24": "pt-24",
  "28": "pt-28",
  "32": "pt-32",
  "36": "pt-36",
  "40": "pt-40",
  "44": "pt-44",
  "48": "pt-48",
  "52": "pt-52",
  "56": "pt-56",
  "60": "pt-60",
  "64": "pt-64",
  "72": "pt-72",
  "80": "pt-80",
  "96": "pt-96"
};
var prMap = {
  "0": "pr-0",
  px: "pr-px",
  "0.5": "pr-0.5",
  "1": "pr-1",
  "1.5": "pr-1.5",
  "2": "pr-2",
  "2.5": "pr-2.5",
  "3": "pr-3",
  "3.5": "pr-3.5",
  "4": "pr-4",
  "5": "pr-5",
  "6": "pr-6",
  "7": "pr-7",
  "8": "pr-8",
  "9": "pr-9",
  "10": "pr-10",
  "11": "pr-11",
  "12": "pr-12",
  "14": "pr-14",
  "16": "pr-16",
  "20": "pr-20",
  "24": "pr-24",
  "28": "pr-28",
  "32": "pr-32",
  "36": "pr-36",
  "40": "pr-40",
  "44": "pr-44",
  "48": "pr-48",
  "52": "pr-52",
  "56": "pr-56",
  "60": "pr-60",
  "64": "pr-64",
  "72": "pr-72",
  "80": "pr-80",
  "96": "pr-96"
};
var pbMap = {
  "0": "pb-0",
  px: "pb-px",
  "0.5": "pb-0.5",
  "1": "pb-1",
  "1.5": "pb-1.5",
  "2": "pb-2",
  "2.5": "pb-2.5",
  "3": "pb-3",
  "3.5": "pb-3.5",
  "4": "pb-4",
  "5": "pb-5",
  "6": "pb-6",
  "7": "pb-7",
  "8": "pb-8",
  "9": "pb-9",
  "10": "pb-10",
  "11": "pb-11",
  "12": "pb-12",
  "14": "pb-14",
  "16": "pb-16",
  "20": "pb-20",
  "24": "pb-24",
  "28": "pb-28",
  "32": "pb-32",
  "36": "pb-36",
  "40": "pb-40",
  "44": "pb-44",
  "48": "pb-48",
  "52": "pb-52",
  "56": "pb-56",
  "60": "pb-60",
  "64": "pb-64",
  "72": "pb-72",
  "80": "pb-80",
  "96": "pb-96"
};
var plMap = {
  "0": "pl-0",
  px: "pl-px",
  "0.5": "pl-0.5",
  "1": "pl-1",
  "1.5": "pl-1.5",
  "2": "pl-2",
  "2.5": "pl-2.5",
  "3": "pl-3",
  "3.5": "pl-3.5",
  "4": "pl-4",
  "5": "pl-5",
  "6": "pl-6",
  "7": "pl-7",
  "8": "pl-8",
  "9": "pl-9",
  "10": "pl-10",
  "11": "pl-11",
  "12": "pl-12",
  "14": "pl-14",
  "16": "pl-16",
  "20": "pl-20",
  "24": "pl-24",
  "28": "pl-28",
  "32": "pl-32",
  "36": "pl-36",
  "40": "pl-40",
  "44": "pl-44",
  "48": "pl-48",
  "52": "pl-52",
  "56": "pl-56",
  "60": "pl-60",
  "64": "pl-64",
  "72": "pl-72",
  "80": "pl-80",
  "96": "pl-96"
};
var marginMap = {
  "0": "m-0",
  px: "m-px",
  "0.5": "m-0.5",
  "1": "m-1",
  "1.5": "m-1.5",
  "2": "m-2",
  "2.5": "m-2.5",
  "3": "m-3",
  "3.5": "m-3.5",
  "4": "m-4",
  "5": "m-5",
  "6": "m-6",
  "7": "m-7",
  "8": "m-8",
  "9": "m-9",
  "10": "m-10",
  "11": "m-11",
  "12": "m-12",
  "14": "m-14",
  "16": "m-16",
  "20": "m-20",
  "24": "m-24",
  "28": "m-28",
  "32": "m-32",
  "36": "m-36",
  "40": "m-40",
  "44": "m-44",
  "48": "m-48",
  "52": "m-52",
  "56": "m-56",
  "60": "m-60",
  "64": "m-64",
  "72": "m-72",
  "80": "m-80",
  "96": "m-96",
  "-px": "-m-px",
  "-0.5": "-m-0.5",
  "-1": "-m-1",
  "-1.5": "-m-1.5",
  "-2": "-m-2",
  "-2.5": "-m-2.5",
  "-3": "-m-3",
  "-3.5": "-m-3.5",
  "-4": "-m-4",
  "-5": "-m-5",
  "-6": "-m-6",
  "-7": "-m-7",
  "-8": "-m-8",
  "-9": "-m-9",
  "-10": "-m-10",
  "-11": "-m-11",
  "-12": "-m-12",
  "-14": "-m-14",
  "-16": "-m-16",
  "-20": "-m-20",
  "-24": "-m-24"
};
var mxMap = {
  "0": "mx-0",
  px: "mx-px",
  "0.5": "mx-0.5",
  "1": "mx-1",
  "1.5": "mx-1.5",
  "2": "mx-2",
  "2.5": "mx-2.5",
  "3": "mx-3",
  "3.5": "mx-3.5",
  "4": "mx-4",
  "5": "mx-5",
  "6": "mx-6",
  "7": "mx-7",
  "8": "mx-8",
  "9": "mx-9",
  "10": "mx-10",
  "11": "mx-11",
  "12": "mx-12",
  "14": "mx-14",
  "16": "mx-16",
  "20": "mx-20",
  "24": "mx-24",
  "28": "mx-28",
  "32": "mx-32",
  "36": "mx-36",
  "40": "mx-40",
  "-px": "-mx-px",
  "-0.5": "-mx-0.5",
  "-1": "-mx-1",
  "-1.5": "-mx-1.5",
  "-2": "-mx-2",
  "-2.5": "-mx-2.5",
  "-3": "-mx-3",
  "-3.5": "-mx-3.5",
  "-4": "-mx-4"
};
var myMap = {
  "0": "my-0",
  px: "my-px",
  "0.5": "my-0.5",
  "1": "my-1",
  "1.5": "my-1.5",
  "2": "my-2",
  "2.5": "my-2.5",
  "3": "my-3",
  "3.5": "my-3.5",
  "4": "my-4",
  "5": "my-5",
  "6": "my-6",
  "7": "my-7",
  "8": "my-8",
  "9": "my-9",
  "10": "my-10",
  "11": "my-11",
  "12": "my-12",
  "14": "my-14",
  "16": "my-16",
  "20": "my-20",
  "24": "my-24",
  "28": "my-28",
  "32": "my-32",
  "36": "my-36",
  "40": "my-40",
  "-px": "-my-px",
  "-0.5": "-my-0.5",
  "-1": "-my-1",
  "-1.5": "-my-1.5",
  "-2": "-my-2",
  "-2.5": "-my-2.5",
  "-3": "-my-3",
  "-3.5": "-my-3.5",
  "-4": "-my-4"
};
var mtMap = {
  "0": "mt-0",
  px: "mt-px",
  "0.5": "mt-0.5",
  "1": "mt-1",
  "1.5": "mt-1.5",
  "2": "mt-2",
  "2.5": "mt-2.5",
  "3": "mt-3",
  "3.5": "mt-3.5",
  "4": "mt-4",
  "5": "mt-5",
  "6": "mt-6",
  "7": "mt-7",
  "8": "mt-8",
  "9": "mt-9",
  "10": "mt-10",
  "11": "mt-11",
  "12": "mt-12",
  "14": "mt-14",
  "16": "mt-16",
  "20": "mt-20",
  "24": "mt-24",
  "28": "mt-28",
  "32": "mt-32",
  "36": "mt-36",
  "40": "mt-40",
  "-px": "-mt-px",
  "-0.5": "-mt-0.5",
  "-1": "-mt-1",
  "-1.5": "-mt-1.5",
  "-2": "-mt-2",
  "-2.5": "-mt-2.5",
  "-3": "-mt-3",
  "-3.5": "-mt-3.5",
  "-4": "-mt-4"
};
var mrMap = {
  "0": "mr-0",
  px: "mr-px",
  "0.5": "mr-0.5",
  "1": "mr-1",
  "1.5": "mr-1.5",
  "2": "mr-2",
  "2.5": "mr-2.5",
  "3": "mr-3",
  "3.5": "mr-3.5",
  "4": "mr-4",
  "5": "mr-5",
  "6": "mr-6",
  "7": "mr-7",
  "8": "mr-8",
  "9": "mr-9",
  "10": "mr-10",
  "11": "mr-11",
  "12": "mr-12",
  "14": "mr-14",
  "16": "mr-16",
  "20": "mr-20",
  "24": "mr-24",
  "28": "mr-28",
  "32": "mr-32",
  "36": "mr-36",
  "40": "mr-40",
  "-px": "-mr-px",
  "-0.5": "-mr-0.5",
  "-1": "-mr-1",
  "-1.5": "-mr-1.5",
  "-2": "-mr-2",
  "-2.5": "-mr-2.5",
  "-3": "-mr-3",
  "-3.5": "-mr-3.5",
  "-4": "-mr-4"
};
var mbMap = {
  "0": "mb-0",
  px: "mb-px",
  "0.5": "mb-0.5",
  "1": "mb-1",
  "1.5": "mb-1.5",
  "2": "mb-2",
  "2.5": "mb-2.5",
  "3": "mb-3",
  "3.5": "mb-3.5",
  "4": "mb-4",
  "5": "mb-5",
  "6": "mb-6",
  "7": "mb-7",
  "8": "mb-8",
  "9": "mb-9",
  "10": "mb-10",
  "11": "mb-11",
  "12": "mb-12",
  "14": "mb-14",
  "16": "mb-16",
  "20": "mb-20",
  "24": "mb-24",
  "28": "mb-28",
  "32": "mb-32",
  "36": "mb-36",
  "40": "mb-40",
  "-px": "-mb-px",
  "-0.5": "-mb-0.5",
  "-1": "-mb-1",
  "-1.5": "-mb-1.5",
  "-2": "-mb-2",
  "-2.5": "-mb-2.5",
  "-3": "-mb-3",
  "-3.5": "-mb-3.5",
  "-4": "-mb-4"
};
var mlMap = {
  "0": "ml-0",
  px: "ml-px",
  "0.5": "ml-0.5",
  "1": "ml-1",
  "1.5": "ml-1.5",
  "2": "ml-2",
  "2.5": "ml-2.5",
  "3": "ml-3",
  "3.5": "ml-3.5",
  "4": "ml-4",
  "5": "ml-5",
  "6": "ml-6",
  "7": "ml-7",
  "8": "ml-8",
  "9": "ml-9",
  "10": "ml-10",
  "11": "ml-11",
  "12": "ml-12",
  "14": "ml-14",
  "16": "ml-16",
  "20": "ml-20",
  "24": "ml-24",
  "28": "ml-28",
  "32": "ml-32",
  "36": "ml-36",
  "40": "ml-40",
  "-px": "-ml-px",
  "-0.5": "-ml-0.5",
  "-1": "-ml-1",
  "-1.5": "-ml-1.5",
  "-2": "-ml-2",
  "-2.5": "-ml-2.5",
  "-3": "-ml-3",
  "-3.5": "-ml-3.5",
  "-4": "-ml-4"
};
var gapMap = {
  "0": "gap-0",
  px: "gap-px",
  "0.5": "gap-0.5",
  "1": "gap-1",
  "1.5": "gap-1.5",
  "2": "gap-2",
  "2.5": "gap-2.5",
  "3": "gap-3",
  "3.5": "gap-3.5",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
  "11": "gap-11",
  "12": "gap-12",
  "14": "gap-14",
  "16": "gap-16",
  "20": "gap-20",
  "24": "gap-24",
  "28": "gap-28",
  "32": "gap-32",
  "36": "gap-36",
  "40": "gap-40",
  "44": "gap-44",
  "48": "gap-48",
  "52": "gap-52",
  "56": "gap-56",
  "60": "gap-60",
  "64": "gap-64",
  "72": "gap-72",
  "80": "gap-80",
  "96": "gap-96",
  true: "gap-[var(--gap-default)]"
};
var gapXMap = {
  "0": "gap-x-0",
  px: "gap-x-px",
  "0.5": "gap-x-0.5",
  "1": "gap-x-1",
  "1.5": "gap-x-1.5",
  "2": "gap-x-2",
  "2.5": "gap-x-2.5",
  "3": "gap-x-3",
  "3.5": "gap-x-3.5",
  "4": "gap-x-4",
  "5": "gap-x-5",
  "6": "gap-x-6",
  "7": "gap-x-7",
  "8": "gap-x-8",
  "9": "gap-x-9",
  "10": "gap-x-10",
  "11": "gap-x-11",
  "12": "gap-x-12",
  "14": "gap-x-14",
  "16": "gap-x-16",
  "20": "gap-x-20",
  "24": "gap-x-24",
  "28": "gap-x-28",
  "32": "gap-x-32",
  true: "gap-x-[var(--gap-default)]"
};
var gapYMap = {
  "0": "gap-y-0",
  px: "gap-y-px",
  "0.5": "gap-y-0.5",
  "1": "gap-y-1",
  "1.5": "gap-y-1.5",
  "2": "gap-y-2",
  "2.5": "gap-y-2.5",
  "3": "gap-y-3",
  "3.5": "gap-y-3.5",
  "4": "gap-y-4",
  "5": "gap-y-5",
  "6": "gap-y-6",
  "7": "gap-y-7",
  "8": "gap-y-8",
  "9": "gap-y-9",
  "10": "gap-y-10",
  "11": "gap-y-11",
  "12": "gap-y-12",
  "14": "gap-y-14",
  "16": "gap-y-16",
  "20": "gap-y-20",
  "24": "gap-y-24",
  "28": "gap-y-28",
  "32": "gap-y-32",
  true: "gap-y-[var(--gap-default)]"
};
var spaceXMap = {
  "0": "space-x-0",
  px: "space-x-px",
  "0.5": "space-x-0.5",
  "1": "space-x-1",
  "1.5": "space-x-1.5",
  "2": "space-x-2",
  "2.5": "space-x-2.5",
  "3": "space-x-3",
  "3.5": "space-x-3.5",
  "4": "space-x-4",
  "5": "space-x-5",
  "6": "space-x-6",
  "7": "space-x-7",
  "8": "space-x-8",
  "9": "space-x-9",
  "10": "space-x-10",
  "11": "space-x-11",
  "12": "space-x-12",
  "14": "space-x-14",
  "16": "space-x-16",
  "20": "space-x-20",
  "24": "space-x-24",
  "28": "space-x-28",
  "32": "space-x-32",
  "36": "space-x-36",
  "40": "space-x-40",
  "44": "space-x-44",
  "48": "space-x-48",
  "52": "space-x-52",
  "56": "space-x-56",
  "60": "space-x-60",
  "64": "space-x-64",
  "72": "space-x-72",
  "80": "space-x-80",
  "96": "space-x-96"
};
var spaceYMap = {
  "0": "space-y-0",
  px: "space-y-px",
  "0.5": "space-y-0.5",
  "1": "space-y-1",
  "1.5": "space-y-1.5",
  "2": "space-y-2",
  "2.5": "space-y-2.5",
  "3": "space-y-3",
  "3.5": "space-y-3.5",
  "4": "space-y-4",
  "5": "space-y-5",
  "6": "space-y-6",
  "7": "space-y-7",
  "8": "space-y-8",
  "9": "space-y-9",
  "10": "space-y-10",
  "11": "space-y-11",
  "12": "space-y-12",
  "14": "space-y-14",
  "16": "space-y-16",
  "20": "space-y-20",
  "24": "space-y-24",
  "28": "space-y-28",
  "32": "space-y-32",
  "36": "space-y-36",
  "40": "space-y-40",
  "44": "space-y-44",
  "48": "space-y-48",
  "52": "space-y-52",
  "56": "space-y-56",
  "60": "space-y-60",
  "64": "space-y-64",
  "72": "space-y-72",
  "80": "space-y-80",
  "96": "space-y-96"
};
var fontSizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
};
var headingSizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
};
var fontWeightMap = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black"
};
var borderRadiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
  true: "rounded-[var(--radius-default)]"
};
var borderWidthMap = {
  sm: "border",
  md: "border-2",
  lg: "border-4",
  xl: "border-8"
};
var shadowMap = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  true: "shadow-[var(--shadow-default)]"
};
var semanticColorMap = {
  primary: { text: "text-foreground-primary", bg: "bg-primary" },
  muted: { text: "text-foreground-muted", bg: "bg-surface-raised" },
  inverted: { text: "text-surface-base", bg: "bg-surface-inverted" },
  disabled: { text: "text-foreground-disabled", bg: "bg-surface-disabled" },
  transparent: { text: "text-transparent", bg: "bg-transparent" },
  true: { text: "text-foreground-primary", bg: "bg-interactive" },
  // Surface colors
  "surface-base": { text: "", bg: "bg-surface-base" },
  "surface-raised": { text: "", bg: "bg-surface-raised" },
  "surface-sunken": { text: "", bg: "bg-surface-sunken" },
  "surface-overlay": { text: "", bg: "bg-surface-overlay" },
  "surface-inverted": { text: "", bg: "bg-surface-inverted" },
  "surface-disabled": { text: "", bg: "bg-surface-disabled" },
  // Interactive colors
  interactive: { text: "", bg: "bg-interactive" },
  "interactive-hover": { text: "", bg: "bg-interactive-hover" },
  "interactive-pressed": { text: "", bg: "bg-interactive-pressed" }
};
var tailwindColors = /* @__PURE__ */ new Set([
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
]);
function isTailwindColor(value) {
  const parts = value.split("-");
  if (parts.length === 2 && tailwindColors.has(parts[0]) && /^\d+$/.test(parts[1])) {
    return true;
  }
  return tailwindColors.has(value);
}
function getTailwindColorClass(value, prefix) {
  if (tailwindColors.has(value)) {
    return `${prefix}-${value}-500`;
  }
  return `${prefix}-${value}`;
}
var displayMap = {
  none: "hidden",
  block: "block",
  inline: "inline",
  "inline-block": "inline-block",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid"
};
var positionMap = {
  static: "static",
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  sticky: "sticky"
};
var overflowMap = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  clip: "overflow-clip",
  scroll: "overflow-scroll",
  auto: "overflow-auto"
};
var overflowXMap = {
  visible: "overflow-x-visible",
  hidden: "overflow-x-hidden",
  clip: "overflow-x-clip",
  scroll: "overflow-x-scroll",
  auto: "overflow-x-auto"
};
var overflowYMap = {
  visible: "overflow-y-visible",
  hidden: "overflow-y-hidden",
  clip: "overflow-y-clip",
  scroll: "overflow-y-scroll",
  auto: "overflow-y-auto"
};
var cursorMap = {
  auto: "cursor-auto",
  default: "cursor-default",
  pointer: "cursor-pointer",
  wait: "cursor-wait",
  text: "cursor-text",
  move: "cursor-move",
  help: "cursor-help",
  "not-allowed": "cursor-not-allowed",
  none: "cursor-none",
  grab: "cursor-grab",
  grabbing: "cursor-grabbing"
};
var opacityMap = {
  "0": "opacity-0",
  "5": "opacity-5",
  "10": "opacity-10",
  "15": "opacity-15",
  "20": "opacity-20",
  "25": "opacity-25",
  "30": "opacity-30",
  "35": "opacity-35",
  "40": "opacity-40",
  "45": "opacity-45",
  "50": "opacity-50",
  "55": "opacity-55",
  "60": "opacity-60",
  "65": "opacity-65",
  "70": "opacity-70",
  "75": "opacity-75",
  "80": "opacity-80",
  "85": "opacity-85",
  "90": "opacity-90",
  "95": "opacity-95",
  "100": "opacity-100"
};
var pointerEventsMap = {
  none: "pointer-events-none",
  auto: "pointer-events-auto"
};
var flexDirectionMap = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse"
};
var flexWrapMap = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse"
};
var justifyContentMap = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
  stretch: "justify-stretch"
};
var justifyItemsMap = {
  start: "justify-items-start",
  end: "justify-items-end",
  center: "justify-items-center",
  stretch: "justify-items-stretch"
};
var alignContentMap = {
  center: "content-center",
  start: "content-start",
  end: "content-end",
  "flex-start": "content-start",
  "flex-end": "content-end",
  "space-between": "content-between",
  "space-around": "content-around",
  "space-evenly": "content-evenly",
  stretch: "content-stretch",
  baseline: "content-baseline"
};
var alignItemsMap = {
  center: "items-center",
  start: "items-start",
  end: "items-end",
  "flex-start": "items-start",
  "flex-end": "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
var alignSelfMap = {
  auto: "self-auto",
  center: "self-center",
  start: "self-start",
  end: "self-end",
  "flex-start": "self-start",
  "flex-end": "self-end",
  stretch: "self-stretch",
  baseline: "self-baseline"
};
var textAlignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};
var textWrapMap = {
  wrap: "text-wrap",
  nowrap: "text-nowrap",
  balance: "text-balance",
  pretty: "text-pretty"
};
var textTransformMap = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  none: "normal-case"
};
var letterSpacingMap = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest"
};
var lineHeightMap = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
  "3": "leading-3",
  "4": "leading-4",
  "5": "leading-5",
  "6": "leading-6",
  "7": "leading-7",
  "8": "leading-8",
  "9": "leading-9",
  "10": "leading-10"
};
var whitespaceMap = {
  normal: "whitespace-normal",
  nowrap: "whitespace-nowrap",
  pre: "whitespace-pre",
  "pre-line": "whitespace-pre-line",
  "pre-wrap": "whitespace-pre-wrap",
  "break-spaces": "whitespace-break-spaces"
};
var wordBreakMap = {
  normal: "break-normal",
  words: "break-words",
  all: "break-all",
  keep: "break-keep"
};
var verticalAlignMap = {
  baseline: "align-baseline",
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
  "text-top": "align-text-top",
  "text-bottom": "align-text-bottom",
  sub: "align-sub",
  super: "align-super"
};
var textDecorationStyleMap = {
  solid: "decoration-solid",
  double: "decoration-double",
  dotted: "decoration-dotted",
  dashed: "decoration-dashed",
  wavy: "decoration-wavy"
};
var textIndentMap = {
  "0": "indent-0",
  px: "indent-px",
  "0.5": "indent-0.5",
  "1": "indent-1",
  "1.5": "indent-1.5",
  "2": "indent-2",
  "2.5": "indent-2.5",
  "3": "indent-3",
  "3.5": "indent-3.5",
  "4": "indent-4",
  "5": "indent-5",
  "6": "indent-6",
  "7": "indent-7",
  "8": "indent-8",
  "9": "indent-9",
  "10": "indent-10",
  "11": "indent-11",
  "12": "indent-12",
  "14": "indent-14",
  "16": "indent-16",
  "20": "indent-20",
  "24": "indent-24"
};
var gridAutoFlowMap = {
  row: "grid-flow-row",
  column: "grid-flow-col",
  dense: "grid-flow-dense",
  "row-dense": "grid-flow-row-dense",
  "column-dense": "grid-flow-col-dense"
};
var gridColumnsMap = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
  "4": "grid-cols-4",
  "5": "grid-cols-5",
  "6": "grid-cols-6",
  "7": "grid-cols-7",
  "8": "grid-cols-8",
  "9": "grid-cols-9",
  "10": "grid-cols-10",
  "11": "grid-cols-11",
  "12": "grid-cols-12",
  none: "grid-cols-none",
  subgrid: "grid-cols-subgrid"
};
var gridRowsMap = {
  "1": "grid-rows-1",
  "2": "grid-rows-2",
  "3": "grid-rows-3",
  "4": "grid-rows-4",
  "5": "grid-rows-5",
  "6": "grid-rows-6",
  "7": "grid-rows-7",
  "8": "grid-rows-8",
  "9": "grid-rows-9",
  "10": "grid-rows-10",
  "11": "grid-rows-11",
  "12": "grid-rows-12",
  none: "grid-rows-none",
  subgrid: "grid-rows-subgrid"
};
var borderMap = {
  true: "border border-edge",
  none: "border-0",
  top: "border-t border-edge",
  right: "border-r border-edge",
  bottom: "border-b border-edge",
  left: "border-l border-edge"
};
var semanticBorderColorMap = {
  true: "border-edge",
  transparent: "border-transparent",
  primary: "border-primary",
  muted: "border-edge-muted",
  strong: "border-edge-strong",
  disabled: "border-edge-muted"
};
function mapResponsive(value, mapper) {
  if (value === void 0 || value === null) return "";
  if (typeof value === "object" && !Array.isArray(value)) {
    const classes = [];
    for (const [breakpoint, val] of Object.entries(value)) {
      if (val === void 0) continue;
      const mapped = mapper(val);
      if (mapped) {
        if (breakpoint === "base") {
          classes.push(mapped);
        } else {
          classes.push(`${breakpoint}:${mapped}`);
        }
      }
    }
    return classes.join(" ");
  }
  return mapper(value) || "";
}
function mapDisplay(value) {
  return mapResponsive(value, (v) => displayMap[v] || v);
}
function mapPosition(value) {
  return mapResponsive(value, (v) => positionMap[v]);
}
function mapOverflow(value, axis) {
  const map = axis === "x" ? overflowXMap : axis === "y" ? overflowYMap : overflowMap;
  return mapResponsive(value, (v) => map[v]);
}
function mapCursor(value) {
  return mapResponsive(value, (v) => cursorMap[v]);
}
function mapOpacity(value) {
  return mapResponsive(value, (v) => opacityMap[v]);
}
function mapPointerEvents(value) {
  return mapResponsive(value, (v) => pointerEventsMap[v]);
}
function mapPadding(value, side) {
  const map = side === "x" ? pxMap : side === "y" ? pyMap : side === "t" ? ptMap : side === "r" ? prMap : side === "b" ? pbMap : side === "l" ? plMap : paddingMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapMargin(value, side) {
  const map = side === "x" ? mxMap : side === "y" ? myMap : side === "t" ? mtMap : side === "r" ? mrMap : side === "b" ? mbMap : side === "l" ? mlMap : marginMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapGap(value, axis) {
  const map = axis === "x" ? gapXMap : axis === "y" ? gapYMap : gapMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapSpace(value, axis) {
  const map = axis === "x" ? spaceXMap : spaceYMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapFontSize(value) {
  return mapResponsive(value, (v) => fontSizeMap[v]);
}
function mapHeadingSize(value) {
  return mapResponsive(value, (v) => headingSizeMap[v]);
}
function mapFontWeight(value) {
  return mapResponsive(value, (v) => fontWeightMap[v]);
}
function mapTextColor(value) {
  if (!value) return "";
  if (semanticColorMap[value]) {
    return semanticColorMap[value].text;
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "text");
  }
  return "";
}
function mapBackgroundColor(value) {
  if (!value) return "";
  if (semanticColorMap[value]) {
    return semanticColorMap[value].bg;
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "bg");
  }
  return "";
}
function mapBorderRadius(value) {
  return mapResponsive(value, (v) => borderRadiusMap[String(v)]);
}
function mapBorderWidth(value) {
  return mapResponsive(value, (v) => borderWidthMap[v]);
}
function mapShadow(value) {
  return mapResponsive(value, (v) => shadowMap[v]);
}
function mapFlexDirection(value) {
  return mapResponsive(value, (v) => flexDirectionMap[v]);
}
function mapFlexWrap(value) {
  return mapResponsive(value, (v) => flexWrapMap[v]);
}
function mapJustifyContent(value) {
  return mapResponsive(value, (v) => justifyContentMap[v]);
}
function mapJustifyItems(value) {
  return mapResponsive(value, (v) => justifyItemsMap[v]);
}
function mapAlignContent(value) {
  return mapResponsive(value, (v) => alignContentMap[v]);
}
function mapAlignItems(value) {
  return mapResponsive(value, (v) => alignItemsMap[v]);
}
function mapAlignSelf(value) {
  return mapResponsive(value, (v) => alignSelfMap[v]);
}
function mapTextAlign(value) {
  return mapResponsive(value, (v) => textAlignMap[v]);
}
function mapTextWrap(value) {
  return mapResponsive(value, (v) => textWrapMap[v]);
}
function mapTextTransform(value) {
  return mapResponsive(value, (v) => textTransformMap[v]);
}
function mapLetterSpacing(value) {
  return mapResponsive(value, (v) => letterSpacingMap[v]);
}
function mapLineHeight(value) {
  return mapResponsive(value, (v) => lineHeightMap[v]);
}
function mapWhitespace(value) {
  return mapResponsive(value, (v) => whitespaceMap[v]);
}
function mapWordBreak(value) {
  return mapResponsive(value, (v) => wordBreakMap[v]);
}
function mapVerticalAlign(value) {
  return mapResponsive(value, (v) => verticalAlignMap[v]);
}
function mapTextDecorationStyle(value) {
  return mapResponsive(value, (v) => textDecorationStyleMap[v]);
}
function mapTextIndent(value) {
  return mapResponsive(value, (v) => textIndentMap[v]);
}
function mapGridAutoFlow(value) {
  return mapResponsive(value, (v) => gridAutoFlowMap[v]);
}
function mapGridColumns(value) {
  return mapResponsive(value, (v) => gridColumnsMap[v]);
}
function mapGridRows(value) {
  return mapResponsive(value, (v) => gridRowsMap[v]);
}
function mapBorder(value) {
  return mapResponsive(value, (v) => borderMap[String(v)]);
}
function mapBorderColor(value) {
  if (!value) return "";
  if (semanticBorderColorMap[value]) {
    return semanticBorderColorMap[value];
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "border");
  }
  return "";
}
var semanticCssColorValues = {
  primary: "var(--text-primary)",
  muted: "var(--text-muted)",
  disabled: "var(--text-disabled)"
};
var tailwindColorHex = {
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712"
  },
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617"
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b"
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a"
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09"
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a"
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407"
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03"
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006"
  },
  lime: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05"
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16"
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22"
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e"
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344"
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49"
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554"
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b"
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065"
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764"
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a044e"
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724"
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519"
  }
};
function getCssColorValue(value) {
  if (!value) return void 0;
  if (semanticCssColorValues[value]) {
    return semanticCssColorValues[value];
  }
  const parts = value.split("-");
  if (parts.length === 2 && tailwindColors.has(parts[0])) {
    return tailwindColorHex[parts[0]]?.[parts[1]];
  }
  if (tailwindColors.has(value)) {
    return tailwindColorHex[value]?.["500"];
  }
  return void 0;
}
var widthMap = {
  // Spacing scale
  "0": "w-0",
  px: "w-px",
  "0.5": "w-0.5",
  "1": "w-1",
  "1.5": "w-1.5",
  "2": "w-2",
  "2.5": "w-2.5",
  "3": "w-3",
  "3.5": "w-3.5",
  "4": "w-4",
  "5": "w-5",
  "6": "w-6",
  "7": "w-7",
  "8": "w-8",
  "9": "w-9",
  "10": "w-10",
  "11": "w-11",
  "12": "w-12",
  "14": "w-14",
  "16": "w-16",
  "20": "w-20",
  "24": "w-24",
  "28": "w-28",
  "32": "w-32",
  "36": "w-36",
  "40": "w-40",
  "44": "w-44",
  "48": "w-48",
  "52": "w-52",
  "56": "w-56",
  "60": "w-60",
  "64": "w-64",
  "72": "w-72",
  "80": "w-80",
  "96": "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "3/6": "w-3/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "6/12": "w-6/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12",
  // Special values
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  svw: "w-svw",
  lvw: "w-lvw",
  dvw: "w-dvw",
  min: "w-min",
  max: "w-max",
  fit: "w-fit"
};
var heightMap = {
  // Spacing scale
  "0": "h-0",
  px: "h-px",
  "0.5": "h-0.5",
  "1": "h-1",
  "1.5": "h-1.5",
  "2": "h-2",
  "2.5": "h-2.5",
  "3": "h-3",
  "3.5": "h-3.5",
  "4": "h-4",
  "5": "h-5",
  "6": "h-6",
  "7": "h-7",
  "8": "h-8",
  "9": "h-9",
  "10": "h-10",
  "11": "h-11",
  "12": "h-12",
  "14": "h-14",
  "16": "h-16",
  "20": "h-20",
  "24": "h-24",
  "28": "h-28",
  "32": "h-32",
  "36": "h-36",
  "40": "h-40",
  "44": "h-44",
  "48": "h-48",
  "52": "h-52",
  "56": "h-56",
  "60": "h-60",
  "64": "h-64",
  "72": "h-72",
  "80": "h-80",
  "96": "h-96",
  // Fractions
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "2/6": "h-2/6",
  "3/6": "h-3/6",
  "4/6": "h-4/6",
  "5/6": "h-5/6",
  // Special values
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  svh: "h-svh",
  lvh: "h-lvh",
  dvh: "h-dvh",
  min: "h-min",
  max: "h-max",
  fit: "h-fit"
};
var minWidthMap = {
  "0": "min-w-0",
  px: "min-w-px",
  "0.5": "min-w-0.5",
  "1": "min-w-1",
  "1.5": "min-w-1.5",
  "2": "min-w-2",
  "2.5": "min-w-2.5",
  "3": "min-w-3",
  "3.5": "min-w-3.5",
  "4": "min-w-4",
  "5": "min-w-5",
  "6": "min-w-6",
  "7": "min-w-7",
  "8": "min-w-8",
  "9": "min-w-9",
  "10": "min-w-10",
  "11": "min-w-11",
  "12": "min-w-12",
  "14": "min-w-14",
  "16": "min-w-16",
  "20": "min-w-20",
  "24": "min-w-24",
  "28": "min-w-28",
  "32": "min-w-32",
  "36": "min-w-36",
  "40": "min-w-40",
  "44": "min-w-44",
  "48": "min-w-48",
  "52": "min-w-52",
  "56": "min-w-56",
  "60": "min-w-60",
  "64": "min-w-64",
  "72": "min-w-72",
  "80": "min-w-80",
  "96": "min-w-96",
  full: "min-w-full",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit"
};
var maxWidthMap = {
  "0": "max-w-0",
  px: "max-w-px",
  "0.5": "max-w-0.5",
  "1": "max-w-1",
  "1.5": "max-w-1.5",
  "2": "max-w-2",
  "2.5": "max-w-2.5",
  "3": "max-w-3",
  "3.5": "max-w-3.5",
  "4": "max-w-4",
  "5": "max-w-5",
  "6": "max-w-6",
  "7": "max-w-7",
  "8": "max-w-8",
  "9": "max-w-9",
  "10": "max-w-10",
  "11": "max-w-11",
  "12": "max-w-12",
  "14": "max-w-14",
  "16": "max-w-16",
  "20": "max-w-20",
  "24": "max-w-24",
  "28": "max-w-28",
  "32": "max-w-32",
  "36": "max-w-36",
  "40": "max-w-40",
  "44": "max-w-44",
  "48": "max-w-48",
  "52": "max-w-52",
  "56": "max-w-56",
  "60": "max-w-60",
  "64": "max-w-64",
  "72": "max-w-72",
  "80": "max-w-80",
  "96": "max-w-96",
  // Container sizes
  none: "max-w-none",
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  prose: "max-w-prose",
  "screen-sm": "max-w-screen-sm",
  "screen-md": "max-w-screen-md",
  "screen-lg": "max-w-screen-lg",
  "screen-xl": "max-w-screen-xl",
  "screen-2xl": "max-w-screen-2xl"
};
var minHeightMap = {
  "0": "min-h-0",
  px: "min-h-px",
  "0.5": "min-h-0.5",
  "1": "min-h-1",
  "1.5": "min-h-1.5",
  "2": "min-h-2",
  "2.5": "min-h-2.5",
  "3": "min-h-3",
  "3.5": "min-h-3.5",
  "4": "min-h-4",
  "5": "min-h-5",
  "6": "min-h-6",
  "7": "min-h-7",
  "8": "min-h-8",
  "9": "min-h-9",
  "10": "min-h-10",
  "11": "min-h-11",
  "12": "min-h-12",
  "14": "min-h-14",
  "16": "min-h-16",
  "20": "min-h-20",
  "24": "min-h-24",
  "28": "min-h-28",
  "32": "min-h-32",
  "36": "min-h-36",
  "40": "min-h-40",
  "44": "min-h-44",
  "48": "min-h-48",
  "52": "min-h-52",
  "56": "min-h-56",
  "60": "min-h-60",
  "64": "min-h-64",
  "72": "min-h-72",
  "80": "min-h-80",
  "96": "min-h-96",
  full: "min-h-full",
  screen: "min-h-screen",
  svh: "min-h-svh",
  lvh: "min-h-lvh",
  dvh: "min-h-dvh",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit"
};
var maxHeightMap = {
  "0": "max-h-0",
  px: "max-h-px",
  "0.5": "max-h-0.5",
  "1": "max-h-1",
  "1.5": "max-h-1.5",
  "2": "max-h-2",
  "2.5": "max-h-2.5",
  "3": "max-h-3",
  "3.5": "max-h-3.5",
  "4": "max-h-4",
  "5": "max-h-5",
  "6": "max-h-6",
  "7": "max-h-7",
  "8": "max-h-8",
  "9": "max-h-9",
  "10": "max-h-10",
  "11": "max-h-11",
  "12": "max-h-12",
  "14": "max-h-14",
  "16": "max-h-16",
  "20": "max-h-20",
  "24": "max-h-24",
  "28": "max-h-28",
  "32": "max-h-32",
  "36": "max-h-36",
  "40": "max-h-40",
  "44": "max-h-44",
  "48": "max-h-48",
  "52": "max-h-52",
  "56": "max-h-56",
  "60": "max-h-60",
  "64": "max-h-64",
  "72": "max-h-72",
  "80": "max-h-80",
  "96": "max-h-96",
  none: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  svh: "max-h-svh",
  lvh: "max-h-lvh",
  dvh: "max-h-dvh",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit"
};
function mapWidth(value) {
  return mapResponsive(value, (v) => widthMap[v]);
}
function mapHeight(value) {
  return mapResponsive(value, (v) => heightMap[v]);
}
function mapMinWidth(value) {
  return mapResponsive(value, (v) => minWidthMap[v]);
}
function mapMaxWidth(value) {
  return mapResponsive(value, (v) => maxWidthMap[v]);
}
function mapMinHeight(value) {
  return mapResponsive(value, (v) => minHeightMap[v]);
}
function mapMaxHeight(value) {
  return mapResponsive(value, (v) => maxHeightMap[v]);
}
function isWidthPreset(value) {
  return value in widthMap;
}
function isHeightPreset(value) {
  return value in heightMap;
}
function isMinWidthPreset(value) {
  return value in minWidthMap;
}
function isMaxWidthPreset(value) {
  return value in maxWidthMap;
}
function isMinHeightPreset(value) {
  return value in minHeightMap;
}
function isMaxHeightPreset(value) {
  return value in maxHeightMap;
}
function addStatePrefix(prefix, className) {
  if (!className) return "";
  return className.split(" ").filter(Boolean).map((cls) => `${prefix}:${cls}`).join(" ");
}
function mapStateStyles(prefix, styles) {
  if (!styles) return "";
  const classes = [];
  if (styles.color !== void 0) {
    const colorClass = mapTextColor(
      typeof styles.color === "boolean" ? "true" : String(styles.color)
    );
    if (colorClass) classes.push(addStatePrefix(prefix, colorClass));
  }
  if (styles.backgroundColor !== void 0) {
    const bgClass = mapBackgroundColor(
      typeof styles.backgroundColor === "boolean" ? "true" : String(styles.backgroundColor)
    );
    if (bgClass) classes.push(addStatePrefix(prefix, bgClass));
  }
  if (styles.borderColor !== void 0) {
    const borderClass = mapBorderColor(
      typeof styles.borderColor === "boolean" ? "true" : String(styles.borderColor)
    );
    if (borderClass) classes.push(addStatePrefix(prefix, borderClass));
  }
  if (styles.opacity !== void 0) {
    const opacityClass = mapOpacity(styles.opacity);
    if (opacityClass) classes.push(addStatePrefix(prefix, opacityClass));
  }
  return classes.join(" ");
}
var sizeMap = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8"
};
var strokeWidthMap = {
  "0.5": "stroke-[0.5]",
  "1": "stroke-1",
  "1.5": "stroke-[1.5]",
  "2": "stroke-2",
  "3": "stroke-[3]",
  "4": "stroke-[4]"
};
function Icon({
  color,
  size = "sm",
  variant,
  rotate,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  className,
  children,
  ...props
}) {
  const colorStr = color === true ? "true" : color;
  const wrapperClasses = cn("inline-flex items-center justify-center shrink-0");
  const strokeColorStr = strokeColor === true ? void 0 : strokeColor;
  const fillColorStr = fillColor === true ? void 0 : fillColor;
  const wrapperStyle = {
    ...style,
    transform: rotate ? `rotate(${rotate}deg)` : void 0
  };
  const svgClasses = cn(
    sizeMap[size],
    mapTextColor(colorStr),
    strokeWidth && strokeWidthMap[strokeWidth],
    className
  );
  const svgProps = {
    className: svgClasses
  };
  if (strokeColorStr) {
    svgProps.stroke = getCssColorValue(strokeColorStr);
  }
  if (fillColorStr) {
    svgProps.fill = getCssColorValue(fillColorStr);
  }
  const clonedChild = isValidElement(children) ? cloneElement(children, svgProps) : children;
  return /* @__PURE__ */ jsx("span", { ...props, className: wrapperClasses, style: wrapperStyle, children: clonedChild });
}
function Text({
  color,
  size = "base",
  weight,
  align,
  spacing,
  lineHeight,
  wrap,
  whitespace,
  wordBreak,
  transform,
  indent,
  verticalAlign,
  truncate,
  italic,
  underline,
  strikethrough,
  decorationStyle,
  decorationColor,
  as = "span",
  render,
  className,
  children,
  ...props
}) {
  const Component = as;
  const colorStr = color === true ? "true" : color;
  const decorationColorStr = decorationColor === true ? "true" : decorationColor;
  const classes = cn(
    mapFontSize(size),
    mapFontWeight(weight),
    mapTextAlign(align),
    mapLetterSpacing(spacing),
    mapLineHeight(lineHeight),
    mapTextWrap(wrap),
    mapWhitespace(whitespace),
    mapWordBreak(wordBreak),
    mapTextTransform(transform),
    mapTextIndent(indent),
    mapVerticalAlign(verticalAlign),
    mapTextColor(colorStr),
    truncate && "truncate",
    italic && "italic",
    underline && "underline",
    strikethrough && "line-through",
    mapTextDecorationStyle(decorationStyle),
    decorationColorStr && `decoration-${decorationColorStr}`,
    className
  );
  const renderProps = {
    ...props,
    className: classes,
    children
  };
  const defaultElement = /* @__PURE__ */ jsx(Component, { ...props, className: classes, children });
  return resolveRender(render, renderProps, defaultElement);
}
function Accordion({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    DisclosureGroup,
    {
      ...props,
      className: cn("flex flex-col items-start w-full gap-2 text-base", className),
      children
    }
  );
}
function AccordionItem({ className, children, ...props }) {
  const [trigger, panel] = children;
  return /* @__PURE__ */ jsx(Disclosure, { ...props, className: cn("w-full cursor-pointer group", className), children: ({ isExpanded }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      Button,
      {
        slot: "trigger",
        variant: "zero",
        className: "w-full justify-between font-bold py-2 px-0",
        children: [
          /* @__PURE__ */ jsx(Text, { children: trigger }),
          /* @__PURE__ */ jsx(
            Icon,
            {
              className: cn("transition-transform duration-200", isExpanded && "rotate-90"),
              size: "sm",
              children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      DisclosurePanel,
      {
        className: cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        ),
        children: panel
      }
    )
  ] }) });
}
function toStringValue(value) {
  if (value === void 0 || value === null) return void 0;
  if (typeof value === "boolean") return value ? "true" : void 0;
  return String(value);
}
var Box = forwardRef(function Box2({
  display,
  color,
  backgroundColor,
  border,
  borderWidth,
  borderColor,
  borderRadius,
  shadow,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  spaceX,
  spaceY,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  position,
  textAlign,
  top,
  right,
  bottom,
  left,
  overflow,
  overflowX,
  overflowY,
  cursor,
  opacity,
  pointerEvents,
  alignSelf,
  justifySelf,
  flexBasis,
  flexGrow,
  flexShrink,
  fill,
  gridArea,
  gridRow,
  gridColumn,
  order,
  zIndex,
  theme,
  hover,
  focus,
  active,
  as = "div",
  render,
  className,
  style,
  children,
  ...props
}, ref) {
  const Component = as;
  const getSizingStyle = (value, isPreset) => {
    if (!value) return void 0;
    if (typeof value === "string" && !isPreset(value)) return value;
    return void 0;
  };
  const classes = cn(
    mapDisplay(display),
    mapTextColor(toStringValue(color)),
    mapBackgroundColor(toStringValue(backgroundColor)),
    mapBorder(border),
    mapBorderWidth(borderWidth),
    mapBorderColor(toStringValue(borderColor)),
    mapBorderRadius(borderRadius),
    mapShadow(shadow),
    mapPadding(padding),
    mapPadding(paddingX, "x"),
    mapPadding(paddingY, "y"),
    mapPadding(paddingTop, "t"),
    mapPadding(paddingRight, "r"),
    mapPadding(paddingBottom, "b"),
    mapPadding(paddingLeft, "l"),
    mapMargin(margin),
    mapMargin(marginX, "x"),
    mapMargin(marginY, "y"),
    mapMargin(marginTop, "t"),
    mapMargin(marginRight, "r"),
    mapMargin(marginBottom, "b"),
    mapMargin(marginLeft, "l"),
    mapSpace(spaceX, "x"),
    mapSpace(spaceY, "y"),
    mapWidth(width),
    mapMinWidth(minWidth),
    mapMaxWidth(maxWidth),
    mapHeight(height),
    mapMinHeight(minHeight),
    mapMaxHeight(maxHeight),
    mapPosition(position),
    mapTextAlign(textAlign),
    mapOverflow(overflow),
    mapOverflow(overflowX, "x"),
    mapOverflow(overflowY, "y"),
    mapCursor(cursor),
    mapOpacity(opacity),
    mapPointerEvents(pointerEvents),
    mapAlignSelf(alignSelf),
    theme && `${theme}-theme`,
    mapStateStyles("hover", hover),
    mapStateStyles("focus", focus),
    mapStateStyles("active", active),
    className
  );
  const widthStyle = getSizingStyle(width, isWidthPreset);
  const minWidthStyle = getSizingStyle(minWidth, isMinWidthPreset);
  const maxWidthStyle = getSizingStyle(maxWidth, isMaxWidthPreset);
  const heightStyle = getSizingStyle(height, isHeightPreset);
  const minHeightStyle = getSizingStyle(minHeight, isMinHeightPreset);
  const maxHeightStyle = getSizingStyle(maxHeight, isMaxHeightPreset);
  const inlineStyles = {
    ...style,
    ...widthStyle && { width: widthStyle },
    ...minWidthStyle && { minWidth: minWidthStyle },
    ...maxWidthStyle && { maxWidth: maxWidthStyle },
    ...heightStyle && { height: heightStyle },
    ...minHeightStyle && { minHeight: minHeightStyle },
    ...maxHeightStyle && { maxHeight: maxHeightStyle },
    ...top && { top },
    ...right && { right },
    ...bottom && { bottom },
    ...left && { left },
    ...flexBasis && { flexBasis },
    ...flexGrow !== void 0 && { flexGrow },
    ...flexShrink !== void 0 && { flexShrink },
    ...fill && { flex: 1 },
    ...gridArea && { gridArea },
    ...gridRow && { gridRow },
    ...gridColumn && { gridColumn },
    ...order !== void 0 && { order },
    ...zIndex !== void 0 && { zIndex },
    ...justifySelf && { justifySelf }
  };
  const hasInlineStyles = Object.keys(inlineStyles).length > (style ? Object.keys(style).length : 0);
  const renderProps = {
    ...props,
    className: classes || void 0,
    style: hasInlineStyles || style ? inlineStyles : void 0,
    children
  };
  const defaultElement = /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      ...props,
      className: classes || void 0,
      style: hasInlineStyles || style ? inlineStyles : void 0,
      children
    }
  );
  return resolveRender(render, renderProps, defaultElement);
});
function Flexbox({
  display = "flex",
  direction,
  wrap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  className,
  children,
  ...props
}) {
  const classes = cn(
    mapDisplay(display),
    mapFlexDirection(direction),
    mapFlexWrap(wrap),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap),
    mapGap(gapX, "x"),
    mapGap(gapY, "y"),
    className
  );
  return /* @__PURE__ */ jsx(Box, { ...props, className: classes, children });
}
function Column({ reverse, children, ...props }) {
  return /* @__PURE__ */ jsx(Flexbox, { ...props, direction: reverse ? "column-reverse" : "column", children });
}
function Row({ reverse, children, ...props }) {
  return /* @__PURE__ */ jsx(Flexbox, { ...props, direction: reverse ? "row-reverse" : "row", children });
}
var AlertIcons = {
  info: icons_exports.Info,
  success: icons_exports.CircleCheck,
  warning: icons_exports.CircleAlert,
  error: icons_exports.TriangleAlert
};
var alignClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
};
function AlertBanner({
  title,
  description,
  icon,
  variant = "info",
  align,
  allowClose,
  onClose,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Row,
    {
      ...props,
      className: cn(alertBanner({ variant }), align && alignClasses[align], className),
      children: [
        (icon || variant) && /* @__PURE__ */ jsx(Icon, { size: "sm", className: "h-6", children: variant ? createElement(AlertIcons[variant]) : icon }),
        /* @__PURE__ */ jsxs(Column, { flexGrow: 1, children: [
          title && /* @__PURE__ */ jsx(Text, { weight: "semibold", children: title }),
          description && /* @__PURE__ */ jsx(Text, { children: description }),
          !title && !description && children
        ] }),
        (title || description) && children,
        allowClose && /* @__PURE__ */ jsx(Icon, { className: "cursor-pointer opacity-60 hover:opacity-100 h-6", onClick: onClose, children: /* @__PURE__ */ jsx(icons_exports.X, {}) })
      ]
    }
  );
}
function Heading({
  size = "2xl",
  spacing = "tight",
  as = "h2",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...props,
      as,
      spacing,
      weight: "semibold",
      className: cn(mapHeadingSize(size), className),
      children
    }
  );
}
function Dialog({ title, variant, children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$1,
    {
      "aria-label": "Dialog",
      ...props,
      className: cn(
        "p-6 shadow-xl bg-surface-base border border-edge rounded relative outline-none overflow-auto",
        variant === "sheet" && "w-full h-full p-0 border-0 rounded-none shadow-none z-[9999]",
        className
      ),
      children: (dialogProps) => {
        return /* @__PURE__ */ jsxs(Column, { height: "100%", gap: true, children: [
          title && /* @__PURE__ */ jsx(Heading, { size: "xl", children: title }),
          typeof children === "function" ? children(dialogProps) : children
        ] });
      }
    }
  );
}
function AlertDialog({
  title,
  description,
  isDanger,
  isConfirmDisabled,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  className,
  children,
  ...props
}) {
  const handleConfirm = (close) => {
    onConfirm?.();
    close();
  };
  const handleClose = (close) => {
    onCancel?.();
    close();
  };
  return /* @__PURE__ */ jsx(Dialog, { ...props, title, className: cn("grid", className), children: ({ close }) => {
    return /* @__PURE__ */ jsxs(Column, { gap: "4", children: [
      typeof children === "function" ? children({ close }) : children,
      /* @__PURE__ */ jsxs(Row, { gap: "3", justifyContent: "end", children: [
        /* @__PURE__ */ jsx(Button, { onPress: () => handleClose(close), children: cancelLabel }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: isDanger ? "danger" : "primary",
            isDisabled: isConfirmDisabled,
            onPress: () => handleConfirm(close),
            children: confirmLabel
          }
        )
      ] })
    ] });
  } });
}
function Blockquote({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(Text, { ...props, as: "blockquote", className: cn("border-l-2 border-primary pl-5", className), children });
}
function Breadcrumbs({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(Breadcrumbs$1, { ...props, className: cn("flex items-center gap-3", className), children });
}
function Breadcrumb({ children, className, ...props }) {
  return /* @__PURE__ */ jsxs(
    Breadcrumb$1,
    {
      ...props,
      className: cn(
        "flex items-center text-base gap-3 list-none",
        "[&_a]:text-foreground-muted [&_a]:no-underline [&_a]:font-normal [&_a]:p-2",
        "[&_a:hover]:text-foreground-primary",
        "last:[&>span]:hidden",
        className
      ),
      children: [
        children,
        /* @__PURE__ */ jsx(Icon, { className: "text-foreground-muted", size: "xs", children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) })
      ]
    }
  );
}
function toCalendarDate(date) {
  if (date) {
    return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
}
function Calendar({
  className,
  value,
  minValue,
  maxValue,
  defaultValue,
  onChange,
  ...props
}) {
  const handleChange = (date) => {
    onChange?.(date.toDate(getLocalTimeZone()));
  };
  return /* @__PURE__ */ jsxs(
    Calendar$1,
    {
      ...props,
      value: toCalendarDate(value),
      minValue: toCalendarDate(minValue),
      maxValue: toCalendarDate(maxValue),
      defaultValue: toCalendarDate(defaultValue),
      className: cn("w-fit max-w-full text-base", className),
      onChange: handleChange,
      children: [
        /* @__PURE__ */ jsxs(Row, { as: "header", alignItems: "center", marginBottom: "4", children: [
          /* @__PURE__ */ jsx(Button, { slot: "previous", variant: "quiet", children: /* @__PURE__ */ jsx(Icon, { rotate: 180, children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) }) }),
          /* @__PURE__ */ jsx(Heading$1, { className: "flex-1 m-0 text-center text-base font-bold" }),
          /* @__PURE__ */ jsx(Button, { slot: "next", variant: "quiet", children: /* @__PURE__ */ jsx(Icon, { children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) }) })
        ] }),
        /* @__PURE__ */ jsxs(CalendarGrid, { children: [
          /* @__PURE__ */ jsx(CalendarGridHeader, { children: (day) => /* @__PURE__ */ jsx(CalendarHeaderCell, { className: "font-bold", children: day }) }),
          /* @__PURE__ */ jsx(CalendarGridBody, { children: (date) => /* @__PURE__ */ jsx(
            CalendarCell,
            {
              className: cn(
                "w-12 leading-[3rem] text-center rounded cursor-pointer outline-none m-0.5",
                "hover:bg-interactive",
                "data-[outside-month]:hidden",
                "data-[focus-visible]:outline-2 data-[focus-visible]:outline-focus-ring data-[focus-visible]:outline-offset-2",
                "data-[selected]:text-primary-foreground data-[selected]:bg-primary",
                "data-[disabled]:text-foreground-disabled"
              ),
              date
            }
          ) })
        ] })
      ]
    }
  );
}
function Checkbox({ label, className, children, ...props }) {
  const isSelected = typeof props.value !== "undefined" ? !!props.value : void 0;
  const styles = checkbox();
  return /* @__PURE__ */ jsx(Checkbox$1, { ...props, isSelected, className: cn(styles.root(), className), children: ({ isIndeterminate, isSelected: isSelected2 }) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Box, { className: styles.box(), children: /* @__PURE__ */ jsx(Icon, { className: styles.icon(), size: "sm", children: isIndeterminate ? /* @__PURE__ */ jsx(icons_exports.Minus, {}) : isSelected2 ? /* @__PURE__ */ jsx(icons_exports.Check, {}) : null }) }),
      children
    ] });
  } });
}
function Code({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...props,
      as: "code",
      size: "base",
      weight: "medium",
      className: cn("font-mono bg-surface-sunken rounded p-1", className),
      children
    }
  );
}
function useFieldId(id) {
  const generatedId = useId();
  return id ?? generatedId;
}
function Label({
  size = "base",
  weight = "semibold",
  lineHeight = "loose",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...props,
      size,
      weight,
      lineHeight,
      render: (renderProps) => /* @__PURE__ */ jsx(Label$1, { ...renderProps })
    }
  );
}

// src/lib/constants.ts
var ACCENT_COLORS = [
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
];

// src/lib/styles.ts
var highlightColors = {
  gray: "#f3f4f6",
  slate: "#f1f5f9",
  zinc: "#f4f4f5",
  neutral: "#f5f5f5",
  stone: "#f5f5f4",
  red: "#fee2e2",
  orange: "#ffedd5",
  amber: "#fef3c7",
  yellow: "#fef9c3",
  lime: "#ecfccb",
  green: "#dcfce7",
  emerald: "#d1fae5",
  teal: "#ccfbf1",
  cyan: "#cffafe",
  sky: "#e0f2fe",
  blue: "#dbeafe",
  indigo: "#e0e7ff",
  violet: "#ede9fe",
  purple: "#f3e8ff",
  fuchsia: "#fae8ff",
  pink: "#fce7f3",
  rose: "#ffe4e6"
};
function getHighlightColor(color) {
  if (!color) return;
  if (ACCENT_COLORS.includes(color)) {
    return { "--highlight-color": highlightColors[color] || color };
  }
  return { "--highlight-color": color };
}
function List({
  id,
  highlightColor,
  showCheckmark = true,
  isFullscreen,
  label,
  value,
  onChange,
  className,
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  style,
  children,
  ...props
}) {
  const handleSelectionChange = (keys) => {
    onSelectionChange?.(keys);
    if (keys !== "all") {
      onChange?.([...keys].map(String));
    }
  };
  const fieldId = useFieldId(id);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    label && /* @__PURE__ */ jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsx(
      ListBox,
      {
        id: fieldId,
        "aria-label": "list",
        ...props,
        selectedKeys: value || selectedKeys,
        defaultSelectedKeys: value || defaultSelectedKeys,
        className: cn(
          "grid outline-none overflow-auto gap-1",
          isFullscreen && "block p-3 rounded-none fixed inset-0 overflow-auto z-[9999] bg-surface-base",
          className
        ),
        onSelectionChange: handleSelectionChange,
        style: { ...style, ...getHighlightColor(highlightColor) },
        children
      }
    )
  ] });
}
function ListItem({
  id,
  children,
  className,
  showCheckmark = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ListBoxItem,
    {
      ...props,
      id,
      className: cn(
        "text-base flex items-center justify-between px-2 py-1.5 gap-3 min-w-[120px] cursor-pointer outline-none rounded",
        "hover:bg-interactive",
        "data-[focus]:bg-interactive",
        "data-[disabled]:text-foreground-disabled",
        "data-[selected]:font-semibold",
        className
      ),
      textValue: typeof children === "string" ? children : id?.toString(),
      children: ({ isSelected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        children,
        showCheckmark && isSelected && /* @__PURE__ */ jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsx(icons_exports.Check, {}) })
      ] })
    }
  );
}
function ListSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Separator, { ...props, className: cn("border-b border-edge-muted", className) });
}
function ListSection({ title, className, children, ...props }) {
  return /* @__PURE__ */ jsxs(ListBoxSection, { ...props, className: cn("[&:not(:last-child)]:mb-4", className), children: [
    title && /* @__PURE__ */ jsx(Header, { className: "text-base font-bold px-2 py-1.5", children: title }),
    children
  ] });
}
function Popover({ children, isFullscreen, className, ...props }) {
  return /* @__PURE__ */ jsx(
    Popover$1,
    {
      ...props,
      className: cn(
        "zen-popover outline-none",
        isFullscreen && "block border-0 rounded-none fixed inset-0 overflow-auto z-[9999] bg-surface-base [&[data-entering]]:!animate-none [&[data-exiting]]:!animate-none",
        className
      ),
      children
    }
  );
}
function ComboBox({
  className,
  renderEmptyState,
  listProps,
  popoverProps,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(ComboBox$1, { "aria-label": "ComboBox", ...props, className: cn("relative", className), children: [
    /* @__PURE__ */ jsxs(
      Group,
      {
        className: cn(
          "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6",
          "focus-within:border-edge-strong"
        ),
        children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              className: cn(
                "flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Button$1,
            {
              className: cn(
                "flex items-center mr-3 text-foreground-muted hover:text-foreground-primary"
              ),
              children: /* @__PURE__ */ jsx(Icon, { rotate: 90, "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Popover, { ...popoverProps, children: /* @__PURE__ */ jsx(Box, { padding: "2", border: true, borderRadius: "md", shadow: "lg", className: "bg-surface-overlay", children: /* @__PURE__ */ jsx(List, { renderEmptyState, ...listProps, children }) }) })
  ] });
}
var TIMEOUT = 2e3;
function CopyButton({
  value,
  timeout = TIMEOUT,
  className,
  children,
  ...props
}) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(timeout);
  const handleCopy = async () => {
    const text2 = typeof value === "function" ? value() : value;
    if (text2) {
      await navigator.clipboard.writeText(text2);
      setCopied(true);
      clearTimeout(ref.current);
      ref.current = +setTimeout(() => setCopied(false), timeout);
    }
  };
  return /* @__PURE__ */ jsx(Icon, { ...props, className: cn("animate-icon-pop", className), onClick: handleCopy, children: copied ? /* @__PURE__ */ jsx(icons_exports.Check, {}) : /* @__PURE__ */ jsx(icons_exports.Copy, {}) });
}
var resizeClasses = {
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
  none: "resize-none"
};
function TextField({
  value,
  defaultValue,
  label,
  placeholder,
  allowCopy,
  asTextArea,
  resize,
  variant,
  onChange,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}) {
  const [inputValue, setInputValue] = useState(defaultValue || value);
  const Component = asTextArea ? TextArea : Input;
  const handleChange = (value2) => {
    setInputValue(value2);
    return onChange?.(value2);
  };
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const inputClasses = cn(
    "flex-1 min-w-0 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted",
    asTextArea && "p-3 w-full",
    resize && resizeClasses[resize]
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx(
      TextField$1,
      {
        "aria-label": "Text",
        ...props,
        className: cn("relative", className),
        value: inputValue,
        isReadOnly,
        isDisabled,
        onChange: handleChange,
        children: /* @__PURE__ */ jsxs(
          Group,
          {
            className: cn(
              "flex items-center w-full text-base border border-edge rounded bg-surface-base shadow-sm leading-6",
              "focus-within:border-edge-strong",
              "data-[readonly]:bg-surface-raised",
              "data-[disabled]:text-foreground-disabled data-[disabled]:bg-surface-disabled",
              "focus-within:data-[readonly]:border-edge",
              asTextArea && "p-0",
              variant === "quiet" && "py-0 px-0 shadow-none rounded-none border-transparent bg-transparent text-[length:inherit] focus-within:border-b-edge focus-within:border-x-transparent focus-within:border-t-transparent",
              variant === "quiet" && allowCopy && "pr-3"
            ),
            children: [
              /* @__PURE__ */ jsx(Component, { placeholder, className: inputClasses }),
              allowCopy && /* @__PURE__ */ jsx(
                CopyButton,
                {
                  value: inputValue,
                  className: cn(
                    "mr-3 text-foreground-muted cursor-pointer hover:text-foreground-primary",
                    !inputValue && "text-foreground-disabled",
                    asTextArea && "absolute top-3 right-3 z-10 mr-0"
                  )
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
function ConfirmationDialog({
  value,
  confirmMessage,
  className,
  children,
  ...props
}) {
  const [canSave, setCanSave] = useState(false);
  const handleChange = (e) => {
    setCanSave(e.target.value === value);
  };
  return /* @__PURE__ */ jsx(AlertDialog, { ...props, className: cn(className), isConfirmDisabled: !canSave, children: ({ close }) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      typeof children === "function" ? children({ close }) : children,
      /* @__PURE__ */ jsxs(Text, { children: [
        confirmMessage || "Type the following value to confirm",
        ":"
      ] }),
      /* @__PURE__ */ jsx(
        Box,
        {
          paddingX: "3",
          paddingY: "2",
          marginY: "2",
          borderRadius: "md",
          className: "font-mono text-base bg-surface-sunken",
          children: value
        }
      ),
      /* @__PURE__ */ jsx(TextField, { autoFocus: true, "aria-label": "Confirmation", onChange: handleChange })
    ] });
  } });
}
function Container({
  isCentered = true,
  isFluid,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Box,
    {
      ...props,
      className: cn(
        "w-full px-4",
        "sm:max-w-[500px] md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1240px] 2xl:max-w-[1600px]",
        isCentered && "mx-auto",
        isFluid && "max-w-full p-0",
        className
      ),
      children
    }
  );
}
var PRESET_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "none",
  "subgrid"
];
var BREAKPOINT_QUERIES = {
  base: "",
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  "2xl": "@media (min-width: 1536px)"
};
function isPresetValue(value) {
  return PRESET_VALUES.includes(value);
}
function isResponsiveObject(value) {
  return value !== void 0 && typeof value !== "string" && typeof value === "object";
}
function hasCustomResponsiveValues(value) {
  if (!isResponsiveObject(value)) return false;
  return Object.values(value).some((v) => typeof v === "string" && !isPresetValue(v));
}
function generateResponsiveStyles(id, columns, rows) {
  const styles = [];
  const breakpoints2 = ["base", "sm", "md", "lg", "xl", "2xl"];
  for (const bp of breakpoints2) {
    const rules = [];
    if (isResponsiveObject(columns)) {
      const colValue = columns[bp];
      if (colValue && !isPresetValue(colValue)) {
        rules.push(`grid-template-columns: ${colValue}`);
      }
    }
    if (isResponsiveObject(rows)) {
      const rowValue = rows[bp];
      if (rowValue && !isPresetValue(rowValue)) {
        rules.push(`grid-template-rows: ${rowValue}`);
      }
    }
    if (rules.length > 0) {
      const query = BREAKPOINT_QUERIES[bp];
      const ruleBlock = `.${id} { ${rules.join("; ")}; }`;
      styles.push(query ? `${query} { ${ruleBlock} }` : ruleBlock);
    }
  }
  return styles.join(" ");
}
function Grid({
  display = "grid",
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  autoFlow,
  rows,
  columns,
  areas,
  className,
  style,
  children,
  ...props
}) {
  const reactId = useId();
  const id = `zen-grid-${reactId.replace(/:/g, "")}`;
  const isCustomColumns = typeof columns === "string" && !isPresetValue(columns);
  const isCustomRows = typeof rows === "string" && !isPresetValue(rows);
  const hasResponsiveCustomColumns = hasCustomResponsiveValues(columns);
  const hasResponsiveCustomRows = hasCustomResponsiveValues(rows);
  const needsStyleTag = hasResponsiveCustomColumns || hasResponsiveCustomRows;
  const classes = cn(
    mapDisplay(display),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap),
    mapGap(gapX, "x"),
    mapGap(gapY, "y"),
    mapGridAutoFlow(autoFlow),
    !isCustomColumns && !hasResponsiveCustomColumns && mapGridColumns(columns),
    !isCustomRows && !hasResponsiveCustomRows && mapGridRows(rows),
    needsStyleTag && id,
    className
  );
  const inlineStyles = {
    ...style,
    ...isCustomColumns && { gridTemplateColumns: columns },
    ...isCustomRows && { gridTemplateRows: rows },
    ...areas && { gridTemplateAreas: areas }
  };
  const hasInlineStyles = isCustomColumns || isCustomRows || areas || style && Object.keys(style).length > 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    needsStyleTag && /* @__PURE__ */ jsx("style", { children: generateResponsiveStyles(id, columns, rows) }),
    /* @__PURE__ */ jsx(Box, { ...props, className: classes, style: hasInlineStyles ? inlineStyles : void 0, children })
  ] });
}

// src/lib/utils.ts
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function mapIdProperty(data) {
  return data.length && data?.[0]?.id === void 0 ? data.map((row, id) => ({ ...row, id })) : data;
}
function DataCard({ data = [], labelWidth = "auto", ...props }) {
  const rows = mapIdProperty(data);
  return /* @__PURE__ */ jsx(
    Grid,
    {
      width: "100%",
      columns: `${labelWidth} 1fr`,
      border: true,
      borderRadius: "lg",
      padding: "6",
      ...props,
      children: rows.map((row, index) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: rows are static display data
          /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(Row, { paddingY: "3", border: "bottom", borderColor: "muted", paddingRight: "6", children: /* @__PURE__ */ jsx(Text, { weight: "bold", children: row?.label }) }),
            /* @__PURE__ */ jsx(Row, { paddingY: "3", border: "bottom", children: /* @__PURE__ */ jsx(Text, { children: row?.value }) })
          ] }, index)
        );
      })
    }
  );
}
var gridTemplateColumns = "repeat(auto-fit, minmax(140px, 1fr))";
var alignClasses2 = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
};
function Table({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    Table$1,
    {
      "aria-label": "Table",
      ...props,
      className: cn("grid text-base w-full relative", className),
      children
    }
  );
}
function TableHeader({ children, className, style, ...props }) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;
  return /* @__PURE__ */ jsx(
    TableHeader$1,
    {
      ...props,
      className: cn(
        "[&>tr]:grid [&>tr]:border-b [&>tr]:border-edge [&>tr]:[grid-template-columns:var(--grid-cols)]",
        className
      ),
      style: { "--grid-cols": cols },
      children
    }
  );
}
function TableBody({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(TableBody$1, { ...props, className: cn("contents", className), children });
}
function TableRow({ children, className, style, ...props }) {
  return /* @__PURE__ */ jsx(
    Row$1,
    {
      ...props,
      className: cn("grid border-b border-edge-muted min-h-10", className),
      style: { gridTemplateColumns, ...style },
      children
    }
  );
}
function TableColumn({ children, className, align, ...props }) {
  return /* @__PURE__ */ jsx(
    Column$1,
    {
      ...props,
      className: cn(
        "flex p-2 text-left font-bold flex-1 first:pl-0 last:pr-0",
        align && alignClasses2[align],
        className
      ),
      isRowHeader: true,
      children
    }
  );
}
function TableCell({ children, className, align, ...props }) {
  return /* @__PURE__ */ jsx(
    Cell,
    {
      ...props,
      className: cn(
        "flex p-2 flex-1 first:pl-0 last:pr-0",
        "[&_a]:font-medium [&_a]:underline [&_a]:decoration-edge [&_a]:underline-offset-4",
        "[&_a:hover]:decoration-primary",
        align && alignClasses2[align],
        className
      ),
      children
    }
  );
}
function DataTable({
  data = [],
  displayMode = "table",
  className,
  children,
  ...props
}) {
  const rows = mapIdProperty(data);
  const widths = [];
  const columns = Children.map(children, (child) => {
    if (child) {
      widths.push(child?.props?.width || "1fr");
      return { ...child?.props };
    }
    return null;
  })?.filter((n) => n);
  const gridTemplateColumns2 = widths.join(" ");
  if (displayMode === "cards") {
    return /* @__PURE__ */ jsx(Grid, { id: "grid", width: "100%", gap: "6", children: rows.map((row, index) => {
      const items = columns?.filter(({ hidden }) => !hidden).map(({ id, label, children: children2 }) => {
        const value = typeof children2 === "function" ? children2(row, index) : children2 ?? row[id];
        return { id, label, value };
      });
      return /* @__PURE__ */ jsx(DataCard, { data: items }, `${row.id}-${index}`);
    }) });
  }
  return /* @__PURE__ */ jsxs(Table, { ...props, className: cn("relative text-base", className), children: [
    /* @__PURE__ */ jsx(TableHeader, { style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(({ id, label, as, hidden, width, ...columnProps }) => {
      if (hidden) {
        return null;
      }
      return /* @__PURE__ */ createElement(TableColumn, { ...columnProps, key: id, id }, label);
    }) }),
    /* @__PURE__ */ jsx(TableBody, { children: rows.map((row, index) => {
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: row data may not have unique ids
        /* @__PURE__ */ jsx(TableRow, { style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(({ id, as, hidden, className: className2, children: children2, ...cellProps }) => {
          if (hidden) {
            return null;
          }
          const value = typeof children2 === "function" ? children2(row, index) : children2 || row[id];
          return /* @__PURE__ */ createElement(
            TableCell,
            {
              ...cellProps,
              key: id,
              className: cn("items-center", className2)
            },
            as ? createElement(as, {}, value) : value
          );
        }) }, index)
      );
    }) })
  ] });
}
function DataColumn(_props) {
  return null;
}
var sizeMap2 = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-3 h-3"
};
function Dot({ size }) {
  return /* @__PURE__ */ jsx(Box, { className: cn("zen-dot", sizeMap2[size]) });
}
var gapMap2 = {
  sm: "1",
  md: "1.5",
  lg: "2"
};
function Dots({ size = "md", className, color: _color, ...props }) {
  return /* @__PURE__ */ jsxs(Row, { ...props, alignItems: "center", gap: gapMap2[size], className, children: [
    /* @__PURE__ */ jsx(Dot, { size }),
    /* @__PURE__ */ jsx(Dot, { size }),
    /* @__PURE__ */ jsx(Dot, { size })
  ] });
}
function Tooltip({ children, className, offset = 8, showArrow, ...props }) {
  return /* @__PURE__ */ jsxs(Tooltip$1, { ...props, offset, className: cn("group", tooltip(), className), children: [
    showArrow && /* @__PURE__ */ jsx(OverlayArrow, { className: "w-2 h-2", children: /* @__PURE__ */ jsx(
      "svg",
      {
        viewBox: "0 0 8 8",
        className: cn(
          "block fill-surface-inverted",
          "group-data-[placement=bottom]:rotate-180",
          "group-data-[placement=left]:-rotate-90",
          "group-data-[placement=right]:rotate-90"
        ),
        children: /* @__PURE__ */ jsx("path", { d: "M0 0 L4 4 L8 0" })
      }
    ) }),
    children
  ] });
}
function TooltipBubble({
  children,
  className,
  color: _color,
  ...props
}) {
  return /* @__PURE__ */ jsx(Box, { ...props, className, children });
}
function FloatingTooltip({ className, style, children, ...props }) {
  const [position, setPosition] = useState({ x: -1e3, y: -1e3 });
  useEffect(() => {
    const handler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    TooltipBubble,
    {
      ...props,
      className: cn(
        "fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-[calc(100%+10px)]",
        className
      ),
      style: { ...style, left: position.x, top: position.y },
      children
    }
  );
}
function Form({
  autoComplete,
  onSubmit,
  error,
  preventSubmit = false,
  // useForm props
  mode,
  disabled,
  reValidateMode,
  defaultValues,
  values,
  errors,
  resetOptions,
  resolver,
  context,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  progressive,
  criteriaMode,
  delayError,
  // Element props
  className,
  children,
  ...props
}) {
  const formValues = useForm({
    mode,
    disabled,
    reValidateMode,
    defaultValues,
    values,
    errors,
    resetOptions,
    resolver,
    context,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    progressive,
    criteriaMode,
    delayError
  });
  const { handleSubmit } = formValues;
  const onKeyDown = !onSubmit || preventSubmit ? (e) => e.key === "Enter" && e.preventDefault() : void 0;
  useEffect(() => {
    formValues.reset(values);
  }, [formValues, values]);
  useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(void 0, { keepDirty: true, keepValues: true });
    }
  }, [error, formValues]);
  return /* @__PURE__ */ jsxs(FormProvider, { ...formValues, children: [
    error && /* @__PURE__ */ jsx(
      AlertBanner,
      {
        variant: "error",
        align: "center",
        title: error instanceof Error ? error?.message : error
      }
    ),
    /* @__PURE__ */ jsx(
      "form",
      {
        ...props,
        autoComplete,
        className: cn("flex flex-col relative text-base gap-3", className),
        onSubmit: onSubmit ? handleSubmit(onSubmit) : void 0,
        onKeyDown,
        children: typeof children === "function" ? children(formValues) : children
      }
    )
  ] });
}
function FormButtons({ fill, children, ...props }) {
  return /* @__PURE__ */ jsx(Row, { paddingTop: "3", gap: "3", justifyContent: "flex-end", ...props, children });
}
function FormController({ children, ...props }) {
  return /* @__PURE__ */ jsx(Controller, { ...props, render: children });
}
function FormField({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  color: _color,
  ...props
}) {
  const fieldId = useFieldId(id);
  const context = useFormContext();
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);
  return /* @__PURE__ */ jsxs(Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsx(FormController, { name, control, rules, children: ({ field }) => {
      return Children.map(
        typeof children === "function" ? children({ context, field }) : children,
        (child) => {
          if (!child) {
            return null;
          }
          return cloneElement(child, { ...field, id: fieldId });
        }
      );
    } }),
    description && /* @__PURE__ */ jsx(Text, { color: "muted", children: description }),
    invalid && /* @__PURE__ */ jsx(Text, { className: "text-red-500", children: error?.message })
  ] });
}
function FormFieldArray({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  color: _color,
  ...props
}) {
  const fieldId = useFieldId(id);
  const context = useFormContext();
  const { formState, control, register } = context;
  const fieldProps = useFieldArray({
    control,
    name
  });
  register(name, rules);
  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message;
  return /* @__PURE__ */ jsxs(Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsx(Label, { htmlFor: fieldId, children: label }),
    description && /* @__PURE__ */ jsx(Text, { color: "muted", children: description }),
    errorMessage && /* @__PURE__ */ jsx(Text, { className: "text-red-500", children: errorMessage }),
    children({ ...context, ...fieldProps })
  ] });
}
function FormResetButton({
  values = {},
  children,
  onPress,
  ...props
}) {
  const { reset } = useFormContext();
  const handleReset = (e) => {
    reset(values);
    onPress?.(e);
  };
  return /* @__PURE__ */ jsx(Button, { ...props, type: "reset", onPress: handleReset, children });
}
var sizeMap3 = {
  sm: "w-4 h-4",
  md: "w-7 h-7",
  lg: "w-12 h-12"
};
function Spinner(props) {
  const { size = "md", quiet, className, isDisabled, color: _color, ...domProps } = props;
  return /* @__PURE__ */ jsx(
    Box,
    {
      ...domProps,
      className: cn("relative inline-flex justify-center items-center", sizeMap3[size], className),
      children: /* @__PURE__ */ jsxs("svg", { viewBox: "25 25 50 50", className: "zen-spinner-svg w-full h-full", children: [
        !quiet && /* @__PURE__ */ jsx("circle", { className: "zen-spinner-track stroke-interactive", cx: "50", cy: "50", r: "20" }),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: cn(
              "zen-spinner-fill",
              isDisabled ? "stroke-content-disabled" : "stroke-primary"
            ),
            cx: "50",
            cy: "50",
            r: "20"
          }
        )
      ] })
    }
  );
}
function LoadingButton({
  isLoading,
  isDisabled,
  showText = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Button, { ...props, isDisabled, children: [
    isLoading && /* @__PURE__ */ jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsx(Spinner, { isDisabled }) }),
    showText && children
  ] });
}
function FormSubmitButton({
  variant = "primary",
  isDisabled,
  isLoading,
  children,
  ...props
}) {
  const {
    formState: { isDirty, isValid, isSubmitting }
  } = useFormContext();
  return /* @__PURE__ */ jsx(
    LoadingButton,
    {
      ...props,
      type: "submit",
      variant,
      isDisabled: isDisabled ?? (!isDirty || !isValid || isSubmitting),
      isLoading: isLoading ?? isSubmitting,
      children
    }
  );
}
var CLOSE_DELAY = 500;
function HoverTrigger({
  isOpen,
  onHoverStart,
  onHoverEnd,
  closeDelay = CLOSE_DELAY,
  children
}) {
  const [triggerElement, popupElement] = children;
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(isOpen);
  const isOverMenu = useRef(false);
  const isOverButton = useRef(false);
  const timeout = useRef(null);
  useEffect(() => {
    if (isOpen !== open) {
      setOpen(isOpen);
    }
  }, [isOpen]);
  const handleMouseEnter = () => {
    isOverMenu.current = false;
    isOverButton.current = true;
    setOpen(true);
    onHoverStart?.();
  };
  const handleMouseLeave = () => {
    isOverButton.current = false;
    checkHoverState();
  };
  const handleMenuEnter = () => {
    isOverMenu.current = true;
  };
  const handleMenuLeave = () => {
    isOverMenu.current = false;
    checkHoverState();
  };
  const checkHoverState = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      if (!isOverMenu.current && !isOverButton.current) {
        setOpen(false);
        onHoverEnd?.();
        isOverMenu.current = false;
        isOverButton.current = false;
      }
    }, closeDelay);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { ref: triggerRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: triggerElement }),
    /* @__PURE__ */ jsx(Popover, { isOpen: open, isNonModal: true, triggerRef, children: /* @__PURE__ */ jsx("div", { onMouseEnter: handleMenuEnter, onMouseLeave: handleMenuLeave, children: popupElement }) })
  ] });
}
var breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
var DEBOUNCE_DELAY_MS = 150;
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(null);
  const calculateBreakpoint = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    const width = window.innerWidth;
    let currentBreakpoint = "base";
    for (const [key, minWidth] of Object.entries(breakpoints)) {
      if (width >= minWidth) {
        currentBreakpoint = key;
      }
    }
    setBreakpoint(currentBreakpoint);
  }, []);
  useEffect(() => {
    calculateBreakpoint();
    const debouncedResize = debounce(calculateBreakpoint, DEBOUNCE_DELAY_MS);
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [calculateBreakpoint]);
  return breakpoint;
}
function useDebounce(value, delay) {
  const [debouncedValue, setValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
var PALETTES = ["neutral", "slate", "gray", "zinc", "stone"];
var THEME_STORAGE_KEY = "theme";
var PALETTE_STORAGE_KEY = "zen.palette";
function getThemeFromDOM() {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function getPaletteFromDOM() {
  if (typeof window === "undefined") return "neutral";
  const palette = document.documentElement.getAttribute("data-palette");
  return palette && PALETTES.includes(palette) ? palette : "neutral";
}
function resolveTheme(preferred, colorScheme) {
  if (preferred) {
    return preferred;
  }
  if (colorScheme === "light" || colorScheme === "dark") {
    return colorScheme;
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}
function applyTheme(theme) {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
function applyPalette(palette) {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-palette", palette);
}
var useTheme = create((set, get) => ({
  theme: "light",
  palette: "neutral",
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      applyTheme(theme);
    }
  },
  setPalette: (palette) => {
    set({ palette });
    if (typeof window !== "undefined") {
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
      applyPalette(palette);
    }
  },
  syncTheme: () => {
    const theme = getThemeFromDOM();
    const palette = getPaletteFromDOM();
    const state = get();
    if (theme !== state.theme) {
      set({ theme });
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (palette !== state.palette) {
      set({ palette });
    }
  },
  initTheme: (preferred, colorScheme) => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = resolveTheme(preferred || stored || void 0, colorScheme);
    set({ theme: initial });
    applyTheme(initial);
  },
  initPalette: (preferred) => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
    const initial = preferred || (stored && PALETTES.includes(stored) ? stored : null) || "neutral";
    set({ palette: initial });
    applyPalette(initial);
  }
}));
function useInitTheme(preferred, colorScheme, preferredPalette) {
  const initTheme = useTheme((s) => s.initTheme);
  const initPalette = useTheme((s) => s.initPalette);
  const syncTheme = useTheme((s) => s.syncTheme);
  useLayoutEffect(() => {
    initTheme(preferred, colorScheme);
    initPalette(preferredPalette);
  }, [preferred, colorScheme, preferredPalette, initTheme, initPalette]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class" || mutation.attributeName === "data-palette") {
          syncTheme();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [syncTheme]);
}
var TOAST_CLOSE_ACTION = "close";
function Toast({
  id,
  message,
  title,
  actions = [],
  allowClose = true,
  variant,
  className,
  children,
  onClose,
  color: _color,
  ...props
}) {
  const hasActions = actions?.length > 0;
  return /* @__PURE__ */ jsxs(Row, { ...props, className: cn(toast({ variant }), className), children: [
    /* @__PURE__ */ jsxs(Column, { flexGrow: 1, gap: "1", children: [
      title && /* @__PURE__ */ jsx(Text, { weight: "semibold", children: title }),
      message && /* @__PURE__ */ jsx(Text, { color: title ? "muted" : void 0, children: message })
    ] }),
    hasActions && actions.map((action) => {
      return /* @__PURE__ */ jsx(Button, { variant: "outline", onPress: () => onClose?.(action), children: action }, action);
    }),
    !hasActions && allowClose && /* @__PURE__ */ jsx(
      Icon,
      {
        "aria-hidden": true,
        "aria-label": "Close",
        size: "sm",
        className: "cursor-pointer text-foreground-muted hover:text-foreground-primary",
        onClick: () => onClose?.(TOAST_CLOSE_ACTION),
        children: /* @__PURE__ */ jsx(icons_exports.X, {})
      }
    )
  ] });
}
var positionClasses = {
  "top-left": "top-4 left-4 items-start",
  top: "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  bottom: "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  left: "top-1/2 left-4 -translate-y-1/2 items-start",
  right: "top-1/2 right-4 -translate-y-1/2 items-end"
};
var AnimatedBox = animated(Box);
function Toaster({ duration = 0, position = "bottom-right" }) {
  const { toasts } = useToast();
  const [hovered, setHovered] = useState(false);
  const transitions = useTransition(toasts, {
    from: {
      opacity: 0,
      transform: position?.includes("left") ? "translateX(-100%)" : "translateX(100%)"
    },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: {
      opacity: 0,
      transform: position?.includes("top") ? "translateY(-80%)" : "translateY(80%)"
    },
    config: { duration: 100 }
  });
  useEffect(() => {
    if (duration) {
      const timeout = setInterval(() => {
        if (hovered || !toasts.length) return;
        const expired = Date.now() - duration;
        toasts.forEach((toast2) => {
          if (toast2.timestamp < expired) {
            removeToast(toast2.id);
          }
        });
      }, 100);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [duration, toasts, hovered]);
  return /* @__PURE__ */ jsx(
    Column,
    {
      gap: "2",
      className: cn("fixed z-[9999]", positionClasses[position]),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: transitions((style, item) => {
        const { id, ...props } = item;
        return /* @__PURE__ */ jsx(AnimatedBox, { style, children: /* @__PURE__ */ jsx(Toast, { ...props, id, onClose: () => removeToast(id) }) }, id);
      })
    }
  );
}
var ToastContext = createContext({});
function ToastProvider({ children, ...props }) {
  return /* @__PURE__ */ jsxs(ToastContext.Provider, { value: props, children: [
    children,
    /* @__PURE__ */ jsx(Toaster, { ...props })
  ] });
}

// src/components/hooks/useToast.ts
var TOAST_ID = 1;
var TOAST_DURATION = 0;
var initialState = {
  duration: TOAST_DURATION,
  toasts: []
};
var store = create(() => ({ ...initialState }));
function removeToast(id) {
  store.setState(({ toasts }) => {
    return { toasts: toasts.filter((toast2) => toast2.id !== id) };
  });
}
function displayToast(message, { duration = TOAST_DURATION, ...options } = {}) {
  const id = `toast-${TOAST_ID++}`;
  store.setState(({ toasts }) => {
    return {
      toasts: [...toasts, { ...options, id, message, timestamp: Date.now() }]
    };
  });
}
function useToast() {
  const { toasts } = store();
  const config = useContext(ToastContext);
  const toast2 = (message, options) => {
    displayToast(message, { ...options, ...config });
  };
  return { toast: toast2, toasts };
}
var objectFitMap = {
  fill: "object-fill",
  contain: "object-contain",
  cover: "object-cover",
  none: "object-none",
  "scale-down": "object-scale-down"
};
function Image({
  src,
  alt,
  objectFit,
  isCentered,
  borderRadius,
  shadow,
  className,
  ...props
}) {
  const classes = cn(
    "block max-w-full",
    mapBorderRadius(borderRadius),
    mapShadow(shadow),
    objectFit && objectFitMap[objectFit],
    objectFit && "w-full h-full",
    isCentered && "mx-auto",
    className
  );
  return /* @__PURE__ */ jsx("img", { ...props, className: classes, src, alt });
}
var placementClasses = {
  absolute: "absolute inset-0 m-auto",
  center: "m-auto",
  inline: "inline-flex"
};
function Loading({
  size,
  placement = "inline",
  icon = "spinner",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      ...props,
      className: cn(
        "relative flex justify-center items-center flex-1 pointer-events-none",
        placementClasses[placement],
        className
      ),
      children: [
        icon === "dots" && /* @__PURE__ */ jsx(Dots, { size }),
        icon === "spinner" && /* @__PURE__ */ jsx(Spinner, { size })
      ]
    }
  );
}
function Menu({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Menu$1,
    {
      ...props,
      className: cn(
        "min-w-[200px] p-2 border border-edge rounded-md shadow-lg bg-surface-base overflow-hidden outline-none",
        className
      ),
      children
    }
  );
}
function MenuItem({
  icon,
  label,
  showChecked = true,
  showSubMenuIcon,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    MenuItem$1,
    {
      ...props,
      className: cn(
        "text-base flex items-center justify-between gap-3 text-base px-2 py-1.5 rounded cursor-pointer outline-none w-full",
        "hover:bg-interactive",
        "data-[focus]:bg-interactive",
        "data-[disabled]:text-foreground-disabled",
        "data-[selected]:font-semibold",
        className
      ),
      children: ({ isSelected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(Row, { alignItems: "center", gap: true, children: [
          icon && /* @__PURE__ */ jsx(Icon, { children: icon }),
          label && /* @__PURE__ */ jsx(Text, { children: label }),
          children
        ] }),
        showChecked && isSelected && /* @__PURE__ */ jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsx(icons_exports.Check, {}) }),
        showSubMenuIcon && /* @__PURE__ */ jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) })
      ] })
    }
  );
}
function MenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx(Separator, { ...props, className: cn("border-b border-edge-muted my-2 -mx-2", className) });
}
function MenuSection({
  title,
  maxHeight,
  className,
  style,
  children,
  ...props
}) {
  const sectionStyle = {
    maxHeight,
    overflow: maxHeight ? "auto" : void 0
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    title && /* @__PURE__ */ jsx(Header, { className: "text-base font-bold px-2 py-1.5", children: title }),
    /* @__PURE__ */ jsx(
      MenuSection$1,
      {
        ...props,
        className: cn("[&:not(:last-child)]:mb-4", className),
        style: { ...sectionStyle, ...style },
        children
      }
    )
  ] });
}
function SubMenuTrigger({ children, ...props }) {
  return /* @__PURE__ */ jsx(SubmenuTrigger, { ...props, children });
}
var placementClasses2 = {
  center: "zen-modal-center",
  left: "zen-modal-left absolute inset-y-0 left-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]",
  right: "zen-modal-right absolute inset-y-0 right-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]",
  top: "zen-modal-top absolute inset-x-0 top-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]",
  bottom: "zen-modal-bottom absolute inset-x-0 bottom-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]",
  fullscreen: "zen-modal-fullscreen w-dvw h-dvh rounded-none"
};
function Modal({
  placement = "center",
  offset,
  children,
  className,
  style = {},
  ...props
}) {
  if (offset) {
    style[`--modal-offset`] = offset;
  }
  return /* @__PURE__ */ jsx(
    ModalOverlay,
    {
      ...props,
      className: "zen-modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]",
      style,
      isDismissable: true,
      children: /* @__PURE__ */ jsx(Modal$1, { className: cn("relative z-[9999]", placementClasses2[placement], className), children })
    }
  );
}
var NavbarContext = createContext(void 0);
var useNavigationContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavigationContext must be used within a Navbar");
  }
  return context;
};
function Navbar({
  showArrow = true,
  className,
  children,
  color: _color,
  ...props
}) {
  const [activeMenu, setActiveMenu] = useState("");
  return /* @__PURE__ */ jsx(NavbarContext.Provider, { value: { activeMenu, setActiveMenu }, children: /* @__PURE__ */ jsx(Row, { ...props, alignItems: "center", gap: "1", className, children }) });
}
function NavbarItem({
  label,
  children,
  className,
  color: _color,
  ...props
}) {
  const { activeMenu, setActiveMenu } = useNavigationContext();
  if (label) {
    return /* @__PURE__ */ jsxs(HoverTrigger, { isOpen: activeMenu === label, onHoverStart: () => setActiveMenu(label), children: [
      /* @__PURE__ */ jsxs(
        Row,
        {
          ...props,
          alignItems: "center",
          gap: "1",
          paddingX: "3",
          paddingY: "2",
          borderRadius: "md",
          className: cn("cursor-pointer", "hover:bg-interactive", className),
          children: [
            /* @__PURE__ */ jsx(Text, { children: label }),
            /* @__PURE__ */ jsx(Icon, { rotate: 90, size: "sm", color: "muted", children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) })
          ]
        }
      ),
      children
    ] });
  }
  return /* @__PURE__ */ jsx(
    Row,
    {
      ...props,
      alignItems: "center",
      gap: "1",
      paddingX: "3",
      paddingY: "2",
      borderRadius: "md",
      className: cn("cursor-pointer", "hover:bg-interactive", className),
      children
    }
  );
}
var PALETTE_LABELS = {
  neutral: "Neutral",
  slate: "Slate",
  gray: "Gray",
  zinc: "Zinc",
  stone: "Stone"
};
function PaletteSwitcher({ className }) {
  const { palette, setPalette } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentPalette = mounted ? palette : "neutral";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-flex items-center bg-surface-base border border-edge rounded-md overflow-hidden",
        className
      ),
      children: PALETTES.map((p) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setPalette(p),
          "aria-label": PALETTE_LABELS[p],
          "aria-pressed": currentPalette === p,
          className: cn(
            "px-3 h-9 flex items-center justify-center cursor-pointer outline-none transition-colors text-sm",
            "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge",
            "hover:bg-interactive",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
            currentPalette === p ? "bg-interactive text-foreground-primary" : "text-foreground-muted"
          ),
          children: PALETTE_LABELS[p]
        },
        p
      ))
    }
  );
}
var SvgEye = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72"
    }
  ),
  /* @__PURE__ */ jsx(
    "circle",
    {
      cx: 128,
      cy: 128,
      r: 40,
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16
    }
  )
] });
var Eye_default = SvgEye;
var SvgEyeSlash = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "m48 40 160 176M154.91 157.6a40 40 0 0 1-53.82-59.2M135.53 88.71a40 40 0 0 1 32.3 35.53"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 0 0-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0 0 54-12.6"
    }
  )
] });
var EyeSlash_default = SvgEyeSlash;
function PasswordField({ label, className, ...props }) {
  const [show, setShow] = useState(false);
  const type = show ? "text" : "password";
  const handleShowPassword = () => setShow((state) => !state);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsxs(
      TextField$1,
      {
        "aria-label": "Password",
        ...props,
        className: cn(
          "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative",
          "focus-within:border-edge-strong",
          "[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:px-3 [&_input]:bg-transparent [&_input]:w-full [&_input]:flex-1",
          "[&_input]:placeholder:text-foreground-muted",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(Input, { type }),
          /* @__PURE__ */ jsx(Icon, { className: "mr-3", onClick: handleShowPassword, children: show ? /* @__PURE__ */ jsx(EyeSlash_default, {}) : /* @__PURE__ */ jsx(Eye_default, {}) })
        ]
      }
    )
  ] });
}
function Track({ children }) {
  return /* @__PURE__ */ jsx(
    Box,
    {
      position: "relative",
      borderRadius: "full",
      overflow: "hidden",
      className: "w-full h-2 bg-interactive",
      children
    }
  );
}
function Fill({ percentage }) {
  return /* @__PURE__ */ jsx(
    Box,
    {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      borderRadius: "full",
      className: "bg-primary transition-all",
      style: { width: `${percentage}%` }
    }
  );
}
function ProgressBar({ className, showPercentage, ...props }) {
  return /* @__PURE__ */ jsx(ProgressBar$1, { ...props, className: cn("flex items-center gap-3 w-full", className), children: ({ percentage = 0, valueText }) => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Track, { children: /* @__PURE__ */ jsx(Fill, { percentage }) }),
      showPercentage && /* @__PURE__ */ jsx(Text, { className: "tabular-nums", children: valueText })
    ] });
  } });
}
function ProgressCircle({ className, showPercentage, ...props }) {
  return /* @__PURE__ */ jsx(ProgressBar$1, { ...props, className: cn("relative flex justify-center items-center", className), children: ({ percentage = 0, valueText }) => {
    const radius = 45;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - percentage / 100 * circumference;
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          className: "fill-none stroke-[8px] -rotate-90 w-24 h-24",
          children: [
            /* @__PURE__ */ jsx("circle", { className: "stroke-interactive", cx: "50", cy: "50", r: "45" }),
            /* @__PURE__ */ jsx(
              "circle",
              {
                className: "stroke-primary",
                cx: "50",
                cy: "50",
                r: "45",
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: offset
              }
            )
          ]
        }
      ),
      showPercentage && /* @__PURE__ */ jsx("label", { className: "text-base font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: valueText })
    ] });
  } });
}
function RadioGroup({ label, children, className, ...props }) {
  return /* @__PURE__ */ jsxs(
    RadioGroup$1,
    {
      "aria-label": "RadioGroup",
      ...props,
      className: cn("flex flex-col gap-2", className),
      children: [
        label && /* @__PURE__ */ jsx(Label, { children: label }),
        /* @__PURE__ */ jsx(Column, { gap: "2", children })
      ]
    }
  );
}
function Radio({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    Radio$1,
    {
      "aria-label": "Radio",
      ...props,
      className: cn(
        "radio group flex items-center gap-3 cursor-pointer text-base",
        "before:content-[''] before:block before:w-5 before:h-5 before:box-border before:rounded-full",
        "before:border before:border-edge-strong before:bg-surface-base before:transition-all before:duration-200",
        "data-[selected]:before:border-[6px] data-[selected]:before:border-primary",
        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
        className
      ),
      children
    }
  );
}
function SearchField({
  label,
  placeholder,
  value,
  defaultValue = "",
  delay = 0,
  onChange,
  onSearch,
  className,
  ...props
}) {
  const [search, setSearch] = useState(defaultValue);
  const searchValue = useDebounce(search, delay);
  const handleChange = (value2) => {
    setSearch(value2);
    if (delay === 0 || value2 === "") {
      onSearch?.(value2);
    }
    onChange?.(value2);
  };
  const resetSearch = () => {
    setSearch("");
    onSearch?.("");
    onChange?.("");
  };
  useEffect(() => {
    if (delay > 0) {
      onSearch?.(searchValue);
    }
  }, [searchValue, delay]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx(
      SearchField$1,
      {
        "aria-label": "Search",
        ...props,
        className: cn("relative", className),
        onChange: handleChange,
        children: /* @__PURE__ */ jsxs(
          Group,
          {
            className: cn(
              "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6",
              "focus-within:border-edge-strong"
            ),
            children: [
              /* @__PURE__ */ jsx(Icon, { className: "ml-3", color: "muted", children: /* @__PURE__ */ jsx(icons_exports.Search, {}) }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder,
                  value: search,
                  className: "flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted [&::-webkit-search-cancel-button]:hidden"
                }
              ),
              search && /* @__PURE__ */ jsx(Icon, { className: "mr-3", size: "sm", color: "muted", onClick: resetSearch, children: /* @__PURE__ */ jsx(icons_exports.X, {}) })
            ]
          }
        )
      }
    )
  ] });
}
function Select({
  value,
  defaultValue,
  label,
  isLoading,
  allowSearch,
  searchValue,
  searchDelay,
  isFullscreen,
  maxHeight,
  showIcon = true,
  onSearch,
  onChange,
  buttonProps,
  listProps,
  popoverProps,
  renderValue,
  className,
  children,
  ...props
}) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    onChange?.(e);
  };
  const handleSearch = (value2) => {
    setSearch(value2);
    onSearch?.(value2);
  };
  const handleOpenChange = () => {
    setSearch("");
    onSearch?.("");
  };
  return /* @__PURE__ */ jsxs(
    Select$1,
    {
      "aria-label": "Select",
      ...props,
      className: cn("flex flex-col gap-1", className),
      value,
      defaultValue,
      onChange: handleChange,
      children: [
        label && /* @__PURE__ */ jsx(Label, { children: label }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            ...buttonProps,
            className: cn("w-full justify-between", buttonProps?.className),
            children: [
              /* @__PURE__ */ jsx(SelectValue, { children: renderValue }),
              showIcon && /* @__PURE__ */ jsx(Icon, { rotate: 90, "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsx(icons_exports.ChevronRight, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Popover, { ...popoverProps, onOpenChange: handleOpenChange, isFullscreen, children: /* @__PURE__ */ jsxs(
          Column,
          {
            gap: "2",
            padding: "2",
            border: true,
            borderRadius: "md",
            shadow: "lg",
            className: "bg-surface-overlay",
            children: [
              allowSearch && /* @__PURE__ */ jsx(
                SearchField,
                {
                  className: "mb-2",
                  value: search,
                  onSearch: handleSearch,
                  delay: searchDelay,
                  defaultValue: searchValue,
                  autoFocus: true
                }
              ),
              isLoading && /* @__PURE__ */ jsx(Loading, { icon: "dots", placement: "center", size: "sm", height: "60px" }),
              /* @__PURE__ */ jsx(
                List,
                {
                  ...listProps,
                  isFullscreen,
                  ...isFullscreen && {
                    shouldSelectOnPressUp: true,
                    shouldFocusOnHover: false,
                    autoFocus: "first"
                  },
                  className: cn("overflow-auto", listProps?.className),
                  style: { ...listProps?.style, maxHeight, display: isLoading ? "none" : void 0 },
                  children
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function Fill2({ percentage }) {
  const width = `calc(10px + ${percentage}% - ${percentage * 0.2}px)`;
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 rounded-full bg-primary", style: { width } });
}
function Thumb({ percentage }) {
  const left = `calc(${percentage}% - ${percentage * 0.2}px)`;
  return /* @__PURE__ */ jsx(
    SliderThumb,
    {
      className: cn(
        "absolute w-5 h-5 rounded-full bg-surface-base border-2 border-primary shadow",
        "focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
      ),
      style: { top: "50%", left, transform: "translateY(-50%)" }
    }
  );
}
function Slider({ className, showValue = true, label, ...props }) {
  return /* @__PURE__ */ jsxs(Slider$1, { ...props, className: cn("flex flex-col gap-2 w-full", className), children: [
    /* @__PURE__ */ jsxs(Row, { justifyContent: "space-between", alignItems: "center", children: [
      label && /* @__PURE__ */ jsx(Label, { children: label }),
      showValue && /* @__PURE__ */ jsx(SliderOutput, { className: "text-base tabular-nums" })
    ] }),
    /* @__PURE__ */ jsx(SliderTrack, { className: "relative h-5 w-full", children: ({ state }) => {
      const percentage = state.getThumbPercent(0) * 100;
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-interactive overflow-hidden", children: /* @__PURE__ */ jsx(Fill2, { percentage }) }),
        /* @__PURE__ */ jsx(Thumb, { percentage })
      ] });
    } })
  ] });
}
var variantColors = {
  info: "bg-status-info",
  success: "bg-status-success",
  warning: "bg-status-warning",
  error: "bg-status-error",
  active: "bg-status-success",
  inactive: "bg-neutral-400",
  none: "bg-transparent"
};
function StatusDot({ color, variant }) {
  return /* @__PURE__ */ jsx(Row, { alignItems: "center", justifyContent: "center", className: "relative w-3 h-3", children: /* @__PURE__ */ jsx(
    Box,
    {
      borderRadius: "full",
      className: cn("w-2 h-2", variantColors[variant]),
      style: color ? { backgroundColor: color } : void 0
    }
  ) });
}
function StatusLight(props) {
  const { color, variant = "inactive", children, className, ...domProps } = props;
  return /* @__PURE__ */ jsxs(Row, { ...domProps, alignItems: "center", gap: "2", className, children: [
    /* @__PURE__ */ jsx(StatusDot, { color, variant }),
    children
  ] });
}
function Switch({ label, children, className, ...props }) {
  const styles = switchVariant();
  return /* @__PURE__ */ jsxs(Column, { children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsxs(Switch$1, { ...props, className: cn(styles.root(), className), children: [
      /* @__PURE__ */ jsx(Box, { className: styles.track(), children: /* @__PURE__ */ jsx(Box, { className: styles.thumb() }) }),
      children
    ] })
  ] });
}
function Tabs({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(Tabs$1, { ...props, className: cn("grid relative w-full gap-6", className), children });
}
function TabList({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    TabList$1,
    {
      ...props,
      className: cn(
        "flex items-center border-b border-edge gap-6",
        "[&_a.tab]:font-medium [&_a.tab]:no-underline",
        className
      ),
      children
    }
  );
}
function Tab({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    Tab$1,
    {
      ...props,
      className: cn(
        "tab flex items-center justify-center text-base text-foreground-muted py-2 border-b-2 border-transparent select-none -mb-[2px] cursor-pointer outline-none",
        "data-[hovered]:text-foreground-primary",
        "data-[selected]:text-foreground-primary data-[selected]:border-b-primary",
        "data-[disabled]:text-foreground-disabled data-[disabled]:cursor-default",
        className
      ),
      children
    }
  );
}
function TabPanel({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(TabPanel$1, { ...props, className, children });
}
function TagGroup({ label, children, className, ...props }) {
  return /* @__PURE__ */ jsxs(TagGroup$1, { ...props, className: cn("flex flex-col gap-1", className), children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx(TagList, { className: "flex flex-wrap gap-1", children })
  ] });
}
function Tag({ variant, children, className, ...props }) {
  const textValue = typeof children === "string" ? children : void 0;
  const styles = tag({ variant });
  return /* @__PURE__ */ jsx(Tag$1, { ...props, textValue, className: cn(styles.base(), className), children: ({ allowsRemoving }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    allowsRemoving && /* @__PURE__ */ jsx(Button$1, { slot: "remove", className: styles.removeButton(), children: /* @__PURE__ */ jsx(Icon, { size: "xs", children: /* @__PURE__ */ jsx(icons_exports.X, {}) }) })
  ] }) });
}
function getElement(target) {
  return "current" in target ? target.current : target;
}
function applyTheme2(element, theme) {
  element.setAttribute("data-theme", theme);
  if (theme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
}
function ThemeButton({
  className,
  variant = "quiet",
  target,
  onPress,
  ...props
}) {
  const globalTheme = useTheme();
  const [localTheme, setLocalTheme] = useState(null);
  const initializedRef = useRef(false);
  const isLocal = !!target;
  useEffect(() => {
    if (isLocal && target && !initializedRef.current) {
      const element = getElement(target);
      if (element) {
        initializedRef.current = true;
        setLocalTheme(globalTheme.theme);
        applyTheme2(element, globalTheme.theme);
      }
    }
  }, [isLocal, target, globalTheme.theme]);
  const theme = isLocal ? localTheme ?? globalTheme.theme : globalTheme.theme;
  const transitions = useTransition(theme, {
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: `translateY(${theme === "light" ? "20px" : "-20px"}) scale(0.5)`
    },
    enter: { opacity: 1, transform: "translateY(0px) scale(1.0)" },
    leave: {
      opacity: 0,
      transform: `translateY(${theme === "light" ? "-20px" : "20px"}) scale(0.5)`
    }
  });
  function handleClick(e) {
    const newTheme = theme === "light" ? "dark" : "light";
    if (isLocal && target) {
      const element = getElement(target);
      if (element) {
        applyTheme2(element, newTheme);
        setLocalTheme(newTheme);
      }
    } else {
      globalTheme.setTheme(newTheme);
    }
    onPress?.(e);
  }
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ...props,
      className: cn(
        "w-[42px] flex justify-center items-center cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:absolute",
        className
      ),
      variant,
      onPress: handleClick,
      children: [
        transitions((style, item) => (
          // @ts-expect-error
          /* @__PURE__ */ jsx(animated.div, { style, children: /* @__PURE__ */ jsx(Icon, { size: "sm", children: item === "light" ? /* @__PURE__ */ jsx(icons_exports.Sun, {}) : /* @__PURE__ */ jsx(icons_exports.Moon, {}) }) }, item)
        )),
        "\xA0"
      ]
    }
  );
}
var STORAGE_KEY = "theme-mode";
function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeSwitcher({ className }) {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState("system");
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setMode(stored);
    }
  }, []);
  useEffect(() => {
    if (mode === "system") {
      setTheme(getSystemTheme());
    } else {
      setTheme(mode);
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, setTheme]);
  useEffect(() => {
    if (mode !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(getSystemTheme());
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode, setTheme]);
  const options = [
    { value: "light", icon: /* @__PURE__ */ jsx(icons_exports.Sun, {}), label: "Light" },
    { value: "dark", icon: /* @__PURE__ */ jsx(icons_exports.Moon, {}), label: "Dark" },
    { value: "system", icon: /* @__PURE__ */ jsx(icons_exports.Monitor, {}), label: "System" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-flex items-center bg-surface-base border border-edge rounded-md overflow-hidden",
        className
      ),
      children: options.map((option) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setMode(option.value),
          "aria-label": option.label,
          "aria-pressed": mode === option.value,
          className: cn(
            "size-9 flex items-center justify-center cursor-pointer outline-none transition-colors",
            "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge",
            "hover:bg-interactive",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
            mode === option.value ? "bg-interactive text-foreground-primary" : "text-foreground-muted"
          ),
          children: /* @__PURE__ */ jsx(Icon, { size: "sm", children: option.icon })
        },
        option.value
      ))
    }
  );
}
function Toggle({ label, children, className, ...props }) {
  const isSelected = typeof props.value !== "undefined" ? !!props.value : void 0;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    label && /* @__PURE__ */ jsx(Label, { children: label }),
    /* @__PURE__ */ jsx(
      ToggleButton,
      {
        ...props,
        isSelected,
        className: cn(
          "flex items-center justify-center whitespace-nowrap gap-3 font-medium bg-interactive border border-transparent rounded p-2 relative cursor-pointer",
          "hover:bg-interactive-hover",
          "pressed:bg-interactive-pressed",
          "data-[selected]:text-primary-foreground data-[selected]:bg-primary",
          className
        ),
        children
      }
    )
  ] });
}
function ToggleGroup({
  label,
  value,
  defaultValue,
  variant,
  onChange,
  className,
  children,
  selectionMode = "single",
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}) {
  const handleChange = (keys) => {
    onSelectionChange?.(keys);
    onChange?.(Array.from(keys).map((k) => k.toString()));
  };
  return /* @__PURE__ */ jsxs(
    TagGroup$1,
    {
      ...props,
      selectedKeys: value || selectedKeys,
      defaultSelectedKeys: defaultValue || defaultSelectedKeys,
      selectionMode,
      onSelectionChange: handleChange,
      className: cn(
        "bg-surface-base shadow-sm border border-edge rounded overflow-hidden",
        className
      ),
      children: [
        label && /* @__PURE__ */ jsx(Label, { children: label }),
        /* @__PURE__ */ jsx(TagList, { className: "flex flex-row items-center", children })
      ]
    }
  );
}
function ToggleGroupItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsx(
    Tag$1,
    {
      ...props,
      className: cn(
        "text-foreground-muted bg-surface-base font-bold flex items-center justify-center p-2 cursor-pointer outline-none",
        "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge",
        "hover:bg-interactive",
        "data-[selected]:text-foreground-primary data-[selected]:bg-interactive",
        "data-[disabled]:text-foreground-disabled",
        className
      ),
      children
    }
  );
}
var defaultToastConfig = {
  duration: 3e3
};
function ZenProvider({
  children,
  theme,
  colorScheme,
  palette,
  toast: toast2 = defaultToastConfig
}) {
  useInitTheme(theme, colorScheme, palette);
  return /* @__PURE__ */ jsx(ToastProvider, { ...toast2, children });
}

export { Accordion, AccordionItem, AlertBanner, AlertDialog, Blockquote, Box, Breadcrumb, Breadcrumbs, Button, Calendar, Checkbox, Code, Column, ComboBox, ConfirmationDialog, Container, CopyButton, DataCard, DataColumn, DataTable, Dialog, Dots, Flexbox, FloatingTooltip, Form, FormButtons, FormController, FormField, FormFieldArray, FormResetButton, FormSubmitButton, Grid, Heading, HoverTrigger, Icon, Image, Label, List, ListItem, ListSection, ListSeparator, Loading, LoadingButton, Menu, MenuItem, MenuSection, MenuSeparator, Modal, Navbar, NavbarContext, NavbarItem, PALETTES, PaletteSwitcher, PasswordField, Popover, ProgressBar, ProgressCircle, Radio, RadioGroup, Row, SearchField, Select, Slider, Spinner, StatusLight, SubMenuTrigger, Switch, Tab, TabList, TabPanel, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs, Tag, TagGroup, Text, TextField, ThemeButton, ThemeSwitcher, Toast, ToastContext, ToastProvider, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipBubble, ZenProvider, cn, getCssColorValue, isHeightPreset, isMaxHeightPreset, isMaxWidthPreset, isMinHeightPreset, isMinWidthPreset, isWidthPreset, mapAlignContent, mapAlignItems, mapAlignSelf, mapBackgroundColor, mapBorder, mapBorderColor, mapBorderRadius, mapBorderWidth, mapCursor, mapDisplay, mapFlexDirection, mapFlexWrap, mapFontSize, mapFontWeight, mapGap, mapGridAutoFlow, mapGridColumns, mapGridRows, mapHeadingSize, mapHeight, mapJustifyContent, mapJustifyItems, mapLetterSpacing, mapLineHeight, mapMargin, mapMaxHeight, mapMaxWidth, mapMinHeight, mapMinWidth, mapOpacity, mapOverflow, mapPadding, mapPointerEvents, mapPosition, mapShadow, mapSpace, mapStateStyles, mapTextAlign, mapTextColor, mapTextDecorationStyle, mapTextIndent, mapTextTransform, mapTextWrap, mapVerticalAlign, mapWhitespace, mapWidth, mapWordBreak, removeToast, resolveRender, useBreakpoint, useDebounce, useInitTheme, useNavigationContext, useTheme, useToast };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map