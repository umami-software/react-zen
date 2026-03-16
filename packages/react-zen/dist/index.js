'use strict';

var reactAriaComponents = require('react-aria-components');
var kaze_star = require('@umami/kaze');
var lucide_react_star = require('lucide-react');
var tailwindVariants = require('tailwind-variants');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var date = require('@internationalized/date');
var reactHookForm = require('react-hook-form');
var zustand = require('zustand');
var web = require('@react-spring/web');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var kaze_star__namespace = /*#__PURE__*/_interopNamespace(kaze_star);
var lucide_react_star__namespace = /*#__PURE__*/_interopNamespace(lucide_react_star);

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
__reExport(icons_exports, lucide_react_star__namespace);

// src/components/lib/render.ts
var render_exports = {};
__reExport(render_exports, kaze_star__namespace);
var button = tailwindVariants.tv({
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
tailwindVariants.tv({
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
tailwindVariants.tv({
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
tailwindVariants.tv({
  base: [
    "fixed inset-0",
    "bg-black/80 flex items-center justify-center",
    "z-[9999]",
    "entering:animate-modal-fade-in",
    "exiting:animate-modal-fade-out"
  ]
});
tailwindVariants.tv({
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
tailwindVariants.tv({
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
var tooltip = tailwindVariants.tv({
  base: [
    "bg-surface-inverted text-surface-base text-base px-2 py-1 rounded",
    "entering:animate-popover-in",
    "exiting:animate-popover-out"
  ]
});
var checkbox = tailwindVariants.tv({
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
var switchVariant = tailwindVariants.tv({
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
tailwindVariants.tv({
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
tailwindVariants.tv({
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
tailwindVariants.tv({
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
var alertBanner = tailwindVariants.tv({
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
tailwindVariants.tv({
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
var toast = tailwindVariants.tv({
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
var tag = tailwindVariants.tv({
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
  const defaultElement = /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { ...props, preventFocusOnPress, className: buttonClassName, children });
  return (0, render_exports.resolveRender)(render, renderProps, defaultElement);
}

// src/components/lib/tailwind.ts
var tailwind_exports = {};
__reExport(tailwind_exports, kaze_star__namespace);
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
  const wrapperClasses = (0, tailwind_exports.cn)("inline-flex items-center justify-center shrink-0");
  const strokeColorStr = strokeColor === true ? void 0 : strokeColor;
  const fillColorStr = fillColor === true ? void 0 : fillColor;
  const wrapperStyle = {
    ...style,
    transform: rotate ? `rotate(${rotate}deg)` : void 0
  };
  const svgClasses = (0, tailwind_exports.cn)(
    sizeMap[size],
    (0, tailwind_exports.mapTextColor)(colorStr),
    strokeWidth && strokeWidthMap[strokeWidth],
    className
  );
  const svgProps = {
    className: svgClasses
  };
  if (strokeColorStr) {
    svgProps.stroke = (0, tailwind_exports.getCssColorValue)(strokeColorStr);
  }
  if (fillColorStr) {
    svgProps.fill = (0, tailwind_exports.getCssColorValue)(fillColorStr);
  }
  const clonedChild = react.isValidElement(children) ? react.cloneElement(children, svgProps) : children;
  return /* @__PURE__ */ jsxRuntime.jsx("span", { ...props, className: wrapperClasses, style: wrapperStyle, children: clonedChild });
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
  const classes = (0, tailwind_exports.cn)(
    (0, tailwind_exports.mapFontSize)(size),
    (0, tailwind_exports.mapFontWeight)(weight),
    (0, tailwind_exports.mapTextAlign)(align),
    (0, tailwind_exports.mapLetterSpacing)(spacing),
    (0, tailwind_exports.mapLineHeight)(lineHeight),
    (0, tailwind_exports.mapTextWrap)(wrap),
    (0, tailwind_exports.mapWhitespace)(whitespace),
    (0, tailwind_exports.mapWordBreak)(wordBreak),
    (0, tailwind_exports.mapTextTransform)(transform),
    (0, tailwind_exports.mapTextIndent)(indent),
    (0, tailwind_exports.mapVerticalAlign)(verticalAlign),
    (0, tailwind_exports.mapTextColor)(colorStr),
    truncate && "truncate",
    italic && "italic",
    underline && "underline",
    strikethrough && "line-through",
    (0, tailwind_exports.mapTextDecorationStyle)(decorationStyle),
    decorationColorStr && `decoration-${decorationColorStr}`,
    className
  );
  const renderProps = {
    ...props,
    className: classes,
    children
  };
  const defaultElement = /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props, className: classes, children });
  return (0, render_exports.resolveRender)(render, renderProps, defaultElement);
}
function Accordion({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.DisclosureGroup,
    {
      ...props,
      className: (0, tailwind_exports.cn)("flex flex-col items-start w-full gap-2 text-base", className),
      children
    }
  );
}
function AccordionItem({ className, children, ...props }) {
  const [trigger, panel] = children;
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Disclosure, { ...props, className: (0, tailwind_exports.cn)("w-full cursor-pointer group", className), children: ({ isExpanded }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        slot: "trigger",
        variant: "zero",
        className: "w-full justify-between font-bold py-2 px-0",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(Text, { children: trigger }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Icon,
            {
              className: (0, tailwind_exports.cn)("transition-transform duration-200", isExpanded && "rotate-90"),
              size: "sm",
              children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.DisclosurePanel,
      {
        className: (0, tailwind_exports.cn)(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        ),
        children: panel
      }
    )
  ] }) });
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    kaze_star.Row,
    {
      ...props,
      className: (0, tailwind_exports.cn)(alertBanner({ variant }), align && alignClasses[align], className),
      children: [
        (icon || variant) && /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", className: "h-6", children: variant ? react.createElement(AlertIcons[variant]) : icon }),
        /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { flexGrow: 1, children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(Text, { weight: "semibold", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx(Text, { children: description }),
          !title && !description && children
        ] }),
        (title || description) && children,
        allowClose && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "cursor-pointer opacity-60 hover:opacity-100 h-6", onClick: onClose, children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Text,
    {
      ...props,
      as,
      spacing,
      weight: "semibold",
      className: (0, tailwind_exports.cn)((0, tailwind_exports.mapHeadingSize)(size), className),
      children
    }
  );
}
function Dialog({ title, variant, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Dialog,
    {
      "aria-label": "Dialog",
      ...props,
      className: (0, tailwind_exports.cn)(
        "p-6 shadow-xl bg-surface-base border border-edge rounded relative outline-none overflow-auto",
        variant === "sheet" && "w-full h-full p-0 border-0 rounded-none shadow-none z-[9999]",
        className
      ),
      children: (dialogProps) => {
        return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { height: "100%", gap: true, children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl", children: title }),
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
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, title, className: (0, tailwind_exports.cn)("grid", className), children: ({ close }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { gap: "4", children: [
      typeof children === "function" ? children({ close }) : children,
      /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { gap: "3", justifyContent: "end", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button, { onPress: () => handleClose(close), children: cancelLabel }),
        /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(Text, { ...props, as: "blockquote", className: (0, tailwind_exports.cn)("border-l-2 border-primary pl-5", className), children });
}
function Breadcrumbs({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Breadcrumbs, { ...props, className: (0, tailwind_exports.cn)("flex items-center gap-3", className), children });
}
function Breadcrumb({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactAriaComponents.Breadcrumb,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "flex items-center text-base gap-3 list-none",
        "[&_a]:text-foreground-muted [&_a]:no-underline [&_a]:font-normal [&_a]:p-2",
        "[&_a:hover]:text-foreground-primary",
        "last:[&>span]:hidden",
        className
      ),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "text-foreground-muted", size: "xs", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) })
      ]
    }
  );
}
function toCalendarDate(date$1) {
  if (date$1) {
    return new date.CalendarDate(date$1.getFullYear(), date$1.getMonth() + 1, date$1.getDate());
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
  const handleChange = (date$1) => {
    onChange?.(date$1.toDate(date.getLocalTimeZone()));
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactAriaComponents.Calendar,
    {
      ...props,
      value: toCalendarDate(value),
      minValue: toCalendarDate(minValue),
      maxValue: toCalendarDate(maxValue),
      defaultValue: toCalendarDate(defaultValue),
      className: (0, tailwind_exports.cn)("w-fit max-w-full text-base", className),
      onChange: handleChange,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { as: "header", alignItems: "center", marginBottom: "4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Button, { slot: "previous", variant: "quiet", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { rotate: 180, children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) }) }),
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Heading, { className: "flex-1 m-0 text-center text-base font-bold" }),
          /* @__PURE__ */ jsxRuntime.jsx(Button, { slot: "next", variant: "quiet", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.CalendarGrid, { children: [
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.CalendarGridHeader, { children: (day) => /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.CalendarHeaderCell, { className: "font-bold", children: day }) }),
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.CalendarGridBody, { children: (date) => /* @__PURE__ */ jsxRuntime.jsx(
            reactAriaComponents.CalendarCell,
            {
              className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Checkbox, { ...props, isSelected, className: (0, tailwind_exports.cn)(styles.root(), className), children: ({ isIndeterminate, isSelected: isSelected2 }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { className: styles.box(), children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: styles.icon(), size: "sm", children: isIndeterminate ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Minus, {}) : isSelected2 ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) : null }) }),
      children
    ] });
  } });
}
function Code({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Text,
    {
      ...props,
      as: "code",
      size: "base",
      weight: "medium",
      className: (0, tailwind_exports.cn)("font-mono bg-surface-sunken rounded p-1", className),
      children
    }
  );
}
function useFieldId(id) {
  const generatedId = react.useId();
  return id ?? generatedId;
}
function Label({
  size = "base",
  weight = "semibold",
  lineHeight = "loose",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Text,
    {
      ...props,
      size,
      weight,
      lineHeight,
      render: (renderProps) => /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Label, { ...renderProps })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.ListBox,
      {
        id: fieldId,
        "aria-label": "list",
        ...props,
        selectedKeys: value || selectedKeys,
        defaultSelectedKeys: value || defaultSelectedKeys,
        className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.ListBoxItem,
    {
      ...props,
      id,
      className: (0, tailwind_exports.cn)(
        "text-base flex items-center justify-between px-2 py-1.5 gap-3 min-w-[120px] cursor-pointer outline-none rounded",
        "hover:bg-interactive",
        "data-[focus]:bg-interactive",
        "data-[disabled]:text-foreground-disabled",
        "data-[selected]:font-semibold",
        className
      ),
      textValue: typeof children === "string" ? children : id?.toString(),
      children: ({ isSelected }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        children,
        showCheckmark && isSelected && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) })
      ] })
    }
  );
}
function ListSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Separator, { ...props, className: (0, tailwind_exports.cn)("border-b border-edge-muted", className) });
}
function ListSection({ title, className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.ListBoxSection, { ...props, className: (0, tailwind_exports.cn)("[&:not(:last-child)]:mb-4", className), children: [
    title && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Header, { className: "text-base font-bold px-2 py-1.5", children: title }),
    children
  ] });
}
function Popover({ children, isFullscreen, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Popover,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.ComboBox, { "aria-label": "ComboBox", ...props, className: (0, tailwind_exports.cn)("relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.Group,
      {
        className: (0, tailwind_exports.cn)(
          "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6",
          "focus-within:border-edge-strong"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            reactAriaComponents.Input,
            {
              className: (0, tailwind_exports.cn)(
                "flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted"
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            reactAriaComponents.Button,
            {
              className: (0, tailwind_exports.cn)(
                "flex items-center mr-3 text-foreground-muted hover:text-foreground-primary"
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { rotate: 90, "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(Popover, { ...popoverProps, children: /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { padding: "2", border: true, borderRadius: "md", shadow: "lg", className: "bg-surface-overlay", children: /* @__PURE__ */ jsxRuntime.jsx(List, { renderEmptyState, ...listProps, children }) }) })
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
  const [copied, setCopied] = react.useState(false);
  const ref = react.useRef(timeout);
  const handleCopy = async () => {
    const text2 = typeof value === "function" ? value() : value;
    if (text2) {
      await navigator.clipboard.writeText(text2);
      setCopied(true);
      clearTimeout(ref.current);
      ref.current = +setTimeout(() => setCopied(false), timeout);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Icon, { ...props, className: (0, tailwind_exports.cn)("animate-icon-pop", className), onClick: handleCopy, children: copied ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) : /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Copy, {}) });
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
  const [inputValue, setInputValue] = react.useState(defaultValue || value);
  const Component = asTextArea ? reactAriaComponents.TextArea : reactAriaComponents.Input;
  const handleChange = (value2) => {
    setInputValue(value2);
    return onChange?.(value2);
  };
  react.useEffect(() => {
    setInputValue(value);
  }, [value]);
  const inputClasses = (0, tailwind_exports.cn)(
    "flex-1 min-w-0 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted",
    asTextArea && "p-3 w-full",
    resize && resizeClasses[resize]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.TextField,
      {
        "aria-label": "Text",
        ...props,
        className: (0, tailwind_exports.cn)("relative", className),
        value: inputValue,
        isReadOnly,
        isDisabled,
        onChange: handleChange,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          reactAriaComponents.Group,
          {
            className: (0, tailwind_exports.cn)(
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
              /* @__PURE__ */ jsxRuntime.jsx(Component, { placeholder, className: inputClasses }),
              allowCopy && /* @__PURE__ */ jsxRuntime.jsx(
                CopyButton,
                {
                  value: inputValue,
                  className: (0, tailwind_exports.cn)(
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
  const [canSave, setCanSave] = react.useState(false);
  const handleChange = (e) => {
    setCanSave(e.target.value === value);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialog, { ...props, className: (0, tailwind_exports.cn)(className), isConfirmDisabled: !canSave, children: ({ close }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      typeof children === "function" ? children({ close }) : children,
      /* @__PURE__ */ jsxRuntime.jsxs(Text, { children: [
        confirmMessage || "Type the following value to confirm",
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        kaze_star.Box,
        {
          paddingX: "3",
          paddingY: "2",
          marginY: "2",
          borderRadius: "md",
          className: "font-mono text-base bg-surface-sunken",
          children: value
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(TextField, { autoFocus: true, "aria-label": "Confirmation", onChange: handleChange })
    ] });
  } });
}

// src/lib/utils.ts
function mapIdProperty(data) {
  return data.length && data?.[0]?.id === void 0 ? data.map((row, id) => ({ ...row, id })) : data;
}
function DataCard({ data = [], labelWidth = "auto", ...props }) {
  const rows = mapIdProperty(data);
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Grid,
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
          /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Row, { paddingY: "3", border: "bottom", borderColor: "muted", paddingRight: "6", children: /* @__PURE__ */ jsxRuntime.jsx(Text, { weight: "bold", children: row?.label }) }),
            /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Row, { paddingY: "3", border: "bottom", children: /* @__PURE__ */ jsxRuntime.jsx(Text, { children: row?.value }) })
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Table,
    {
      "aria-label": "Table",
      ...props,
      className: (0, tailwind_exports.cn)("grid text-base w-full relative", className),
      children
    }
  );
}
function TableHeader({ children, className, style, ...props }) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.TableHeader,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "[&>tr]:grid [&>tr]:border-b [&>tr]:border-edge [&>tr]:[grid-template-columns:var(--grid-cols)]",
        className
      ),
      style: { "--grid-cols": cols },
      children
    }
  );
}
function TableBody({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TableBody, { ...props, className: (0, tailwind_exports.cn)("contents", className), children });
}
function TableRow({ children, className, style, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Row,
    {
      ...props,
      className: (0, tailwind_exports.cn)("grid border-b border-edge-muted min-h-10", className),
      style: { gridTemplateColumns, ...style },
      children
    }
  );
}
function TableColumn({ children, className, align, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Column,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Cell,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  const columns = react.Children.map(children, (child) => {
    if (child) {
      widths.push(child?.props?.width || "1fr");
      return { ...child?.props };
    }
    return null;
  })?.filter((n) => n);
  const gridTemplateColumns2 = widths.join(" ");
  if (displayMode === "cards") {
    return /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Grid, { id: "grid", width: "100%", gap: "6", children: rows.map((row, index) => {
      const items = columns?.filter(({ hidden }) => !hidden).map(({ id, label, children: children2 }) => {
        const value = typeof children2 === "function" ? children2(row, index) : children2 ?? row[id];
        return { id, label, value };
      });
      return /* @__PURE__ */ jsxRuntime.jsx(DataCard, { data: items }, `${row.id}-${index}`);
    }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Table, { ...props, className: (0, tailwind_exports.cn)("relative text-base", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(({ id, label, as, hidden, width, ...columnProps }) => {
      if (hidden) {
        return null;
      }
      return /* @__PURE__ */ react.createElement(TableColumn, { ...columnProps, key: id, id }, label);
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: rows.map((row, index) => {
      return (
        // biome-ignore lint/suspicious/noArrayIndexKey: row data may not have unique ids
        /* @__PURE__ */ jsxRuntime.jsx(TableRow, { style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(({ id, as, hidden, className: className2, children: children2, ...cellProps }) => {
          if (hidden) {
            return null;
          }
          const value = typeof children2 === "function" ? children2(row, index) : children2 || row[id];
          return /* @__PURE__ */ react.createElement(
            TableCell,
            {
              ...cellProps,
              key: id,
              className: (0, tailwind_exports.cn)("items-center", className2)
            },
            as ? react.createElement(as, {}, value) : value
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
  return /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { className: (0, tailwind_exports.cn)("zen-dot", sizeMap2[size]) });
}
var gapMap = {
  sm: "1",
  md: "1.5",
  lg: "2"
};
function Dots({ size = "md", className, color: _color, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { ...props, alignItems: "center", gap: gapMap[size], className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size }),
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size }),
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size })
  ] });
}
function Tooltip({ children, className, offset = 8, showArrow, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Tooltip, { ...props, offset, className: (0, tailwind_exports.cn)("group", tooltip(), className), children: [
    showArrow && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.OverlayArrow, { className: "w-2 h-2", children: /* @__PURE__ */ jsxRuntime.jsx(
      "svg",
      {
        viewBox: "0 0 8 8",
        className: (0, tailwind_exports.cn)(
          "block fill-surface-inverted",
          "group-data-[placement=bottom]:rotate-180",
          "group-data-[placement=left]:-rotate-90",
          "group-data-[placement=right]:rotate-90"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M0 0 L4 4 L8 0" })
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
  return /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { ...props, className, children });
}
function FloatingTooltip({ className, style, children, ...props }) {
  const [position, setPosition] = react.useState({ x: -1e3, y: -1e3 });
  react.useEffect(() => {
    const handler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipBubble,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  const formValues = reactHookForm.useForm({
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
  react.useEffect(() => {
    formValues.reset(values);
  }, [formValues, values]);
  react.useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(void 0, { keepDirty: true, keepValues: true });
    }
  }, [error, formValues]);
  return /* @__PURE__ */ jsxRuntime.jsxs(reactHookForm.FormProvider, { ...formValues, children: [
    error && /* @__PURE__ */ jsxRuntime.jsx(
      AlertBanner,
      {
        variant: "error",
        align: "center",
        title: error instanceof Error ? error?.message : error
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "form",
      {
        ...props,
        autoComplete,
        className: (0, tailwind_exports.cn)("flex flex-col relative text-base gap-3", className),
        onSubmit: onSubmit ? handleSubmit(onSubmit) : void 0,
        onKeyDown,
        children: typeof children === "function" ? children(formValues) : children
      }
    )
  ] });
}
function FormButtons({ fill, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Row, { paddingTop: "3", gap: "3", justifyContent: "flex-end", ...props, children });
}
function FormController({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props, render: children });
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
  const context = reactHookForm.useFormContext();
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(FormController, { name, control, rules, children: ({ field }) => {
      return react.Children.map(
        typeof children === "function" ? children({ context, field }) : children,
        (child) => {
          if (!child) {
            return null;
          }
          return react.cloneElement(child, { ...field, id: fieldId });
        }
      );
    } }),
    description && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted", children: description }),
    invalid && /* @__PURE__ */ jsxRuntime.jsx(Text, { className: "text-red-500", children: error?.message })
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
  const context = reactHookForm.useFormContext();
  const { formState, control, register } = context;
  const fieldProps = reactHookForm.useFieldArray({
    control,
    name
  });
  register(name, rules);
  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message;
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    description && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted", children: description }),
    errorMessage && /* @__PURE__ */ jsxRuntime.jsx(Text, { className: "text-red-500", children: errorMessage }),
    children({ ...context, ...fieldProps })
  ] });
}
function FormResetButton({
  values = {},
  children,
  onPress,
  ...props
}) {
  const { reset } = reactHookForm.useFormContext();
  const handleReset = (e) => {
    reset(values);
    onPress?.(e);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Button, { ...props, type: "reset", onPress: handleReset, children });
}
var sizeMap3 = {
  sm: "w-4 h-4",
  md: "w-7 h-7",
  lg: "w-12 h-12"
};
function Spinner(props) {
  const { size = "md", quiet, className, isDisabled, color: _color, ...domProps } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Box,
    {
      ...domProps,
      className: (0, tailwind_exports.cn)("relative inline-flex justify-center items-center", sizeMap3[size], className),
      children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "25 25 50 50", className: "zen-spinner-svg w-full h-full", children: [
        !quiet && /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "zen-spinner-track stroke-interactive", cx: "50", cy: "50", r: "20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(Button, { ...props, isDisabled, children: [
    isLoading && /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(Spinner, { isDisabled }) }),
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
  } = reactHookForm.useFormContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
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
  const triggerRef = react.useRef(null);
  const [open, setOpen] = react.useState(isOpen);
  const isOverMenu = react.useRef(false);
  const isOverButton = react.useRef(false);
  const timeout = react.useRef(null);
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { ref: triggerRef, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: triggerElement }),
    /* @__PURE__ */ jsxRuntime.jsx(Popover, { isOpen: open, isNonModal: true, triggerRef, children: /* @__PURE__ */ jsxRuntime.jsx("div", { onMouseEnter: handleMenuEnter, onMouseLeave: handleMenuLeave, children: popupElement }) })
  ] });
}
function useDebounce(value, delay) {
  const [debouncedValue, setValue] = react.useState(value);
  react.useEffect(() => {
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
var useTheme = zustand.create((set, get) => ({
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
  react.useLayoutEffect(() => {
    initTheme(preferred, colorScheme);
    initPalette(preferredPalette);
  }, [preferred, colorScheme, preferredPalette, initTheme, initPalette]);
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { ...props, className: (0, tailwind_exports.cn)(toast({ variant }), className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { flexGrow: 1, gap: "1", children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(Text, { weight: "semibold", children: title }),
      message && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: title ? "muted" : void 0, children: message })
    ] }),
    hasActions && actions.map((action) => {
      return /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onPress: () => onClose?.(action), children: action }, action);
    }),
    !hasActions && allowClose && /* @__PURE__ */ jsxRuntime.jsx(
      Icon,
      {
        "aria-hidden": true,
        "aria-label": "Close",
        size: "sm",
        className: "cursor-pointer text-foreground-muted hover:text-foreground-primary",
        onClick: () => onClose?.(TOAST_CLOSE_ACTION),
        children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {})
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
var AnimatedBox = web.animated(kaze_star.Box);
function Toaster({ duration = 0, position = "bottom-right" }) {
  const { toasts } = useToast();
  const [hovered, setHovered] = react.useState(false);
  const transitions = web.useTransition(toasts, {
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
  react.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Column,
    {
      gap: "2",
      className: (0, tailwind_exports.cn)("fixed z-[9999]", positionClasses[position]),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: transitions((style, item) => {
        const { id, ...props } = item;
        return /* @__PURE__ */ jsxRuntime.jsx(AnimatedBox, { style, children: /* @__PURE__ */ jsxRuntime.jsx(Toast, { ...props, id, onClose: () => removeToast(id) }) }, id);
      })
    }
  );
}
var ToastContext = react.createContext({});
function ToastProvider({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastContext.Provider, { value: props, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(Toaster, { ...props })
  ] });
}

// src/components/hooks/useToast.ts
var TOAST_ID = 1;
var TOAST_DURATION = 0;
var initialState = {
  duration: TOAST_DURATION,
  toasts: []
};
var store = zustand.create(() => ({ ...initialState }));
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
  const config = react.useContext(ToastContext);
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
  const classes = (0, tailwind_exports.cn)(
    "block max-w-full",
    (0, tailwind_exports.mapBorderRadius)(borderRadius),
    (0, tailwind_exports.mapShadow)(shadow),
    objectFit && objectFitMap[objectFit],
    objectFit && "w-full h-full",
    isCentered && "mx-auto",
    className
  );
  return /* @__PURE__ */ jsxRuntime.jsx("img", { ...props, className: classes, src, alt });
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    kaze_star.Box,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "relative flex justify-center items-center flex-1 pointer-events-none",
        placementClasses[placement],
        className
      ),
      children: [
        icon === "dots" && /* @__PURE__ */ jsxRuntime.jsx(Dots, { size }),
        icon === "spinner" && /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size })
      ]
    }
  );
}
function Menu({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Menu,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.MenuItem,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "text-base flex items-center justify-between gap-3 text-base px-2 py-1.5 rounded cursor-pointer outline-none w-full",
        "hover:bg-interactive",
        "data-[focus]:bg-interactive",
        "data-[disabled]:text-foreground-disabled",
        "data-[selected]:font-semibold",
        className
      ),
      children: ({ isSelected }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { alignItems: "center", gap: true, children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { children: icon }),
          label && /* @__PURE__ */ jsxRuntime.jsx(Text, { children: label }),
          children
        ] }),
        showChecked && isSelected && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) }),
        showSubMenuIcon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) })
      ] })
    }
  );
}
function MenuSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Separator, { ...props, className: (0, tailwind_exports.cn)("border-b border-edge-muted my-2 -mx-2", className) });
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
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    title && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Header, { className: "text-base font-bold px-2 py-1.5", children: title }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.MenuSection,
      {
        ...props,
        className: (0, tailwind_exports.cn)("[&:not(:last-child)]:mb-4", className),
        style: { ...sectionStyle, ...style },
        children
      }
    )
  ] });
}
function SubMenuTrigger({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SubmenuTrigger, { ...props, children });
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.ModalOverlay,
    {
      ...props,
      className: "zen-modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]",
      style,
      isDismissable: true,
      children: /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Modal, { className: (0, tailwind_exports.cn)("relative z-[9999]", placementClasses2[placement], className), children })
    }
  );
}
var NavbarContext = react.createContext(void 0);
var useNavigationContext = () => {
  const context = react.useContext(NavbarContext);
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
  const [activeMenu, setActiveMenu] = react.useState("");
  return /* @__PURE__ */ jsxRuntime.jsx(NavbarContext.Provider, { value: { activeMenu, setActiveMenu }, children: /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Row, { ...props, alignItems: "center", gap: "1", className, children }) });
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
    return /* @__PURE__ */ jsxRuntime.jsxs(HoverTrigger, { isOpen: activeMenu === label, onHoverStart: () => setActiveMenu(label), children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        kaze_star.Row,
        {
          ...props,
          alignItems: "center",
          gap: "1",
          paddingX: "3",
          paddingY: "2",
          borderRadius: "md",
          className: (0, tailwind_exports.cn)("cursor-pointer", "hover:bg-interactive", className),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Text, { children: label }),
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { rotate: 90, size: "sm", color: "muted", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) })
          ]
        }
      ),
      children
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Row,
    {
      ...props,
      alignItems: "center",
      gap: "1",
      paddingX: "3",
      paddingY: "2",
      borderRadius: "md",
      className: (0, tailwind_exports.cn)("cursor-pointer", "hover:bg-interactive", className),
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
  const [mounted, setMounted] = react.useState(false);
  react.useEffect(() => {
    setMounted(true);
  }, []);
  const currentPalette = mounted ? palette : "neutral";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: (0, tailwind_exports.cn)(
        "inline-flex items-center bg-surface-base border border-edge rounded-md overflow-hidden",
        className
      ),
      children: PALETTES.map((p) => /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          onClick: () => setPalette(p),
          "aria-label": PALETTE_LABELS[p],
          "aria-pressed": currentPalette === p,
          className: (0, tailwind_exports.cn)(
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
var SvgEye = (props) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsxRuntime.jsx(
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
  /* @__PURE__ */ jsxRuntime.jsx(
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
var SvgEyeSlash = (props) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsxRuntime.jsx(
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
  /* @__PURE__ */ jsxRuntime.jsx(
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
  const [show, setShow] = react.useState(false);
  const type = show ? "text" : "password";
  const handleShowPassword = () => setShow((state) => !state);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      reactAriaComponents.TextField,
      {
        "aria-label": "Password",
        ...props,
        className: (0, tailwind_exports.cn)(
          "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6 relative",
          "focus-within:border-edge-strong",
          "[&_input]:border-0 [&_input]:outline-none [&_input]:py-2 [&_input]:px-3 [&_input]:bg-transparent [&_input]:w-full [&_input]:flex-1",
          "[&_input]:placeholder:text-foreground-muted",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Input, { type }),
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "mr-3", onClick: handleShowPassword, children: show ? /* @__PURE__ */ jsxRuntime.jsx(EyeSlash_default, {}) : /* @__PURE__ */ jsxRuntime.jsx(Eye_default, {}) })
        ]
      }
    )
  ] });
}
function Track({ children }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Box,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Box,
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
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ProgressBar, { ...props, className: (0, tailwind_exports.cn)("flex items-center gap-3 w-full", className), children: ({ percentage = 0, valueText }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Track, { children: /* @__PURE__ */ jsxRuntime.jsx(Fill, { percentage }) }),
      showPercentage && /* @__PURE__ */ jsxRuntime.jsx(Text, { className: "tabular-nums", children: valueText })
    ] });
  } });
}
function ProgressCircle({ className, showPercentage, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.ProgressBar, { ...props, className: (0, tailwind_exports.cn)("relative flex justify-center items-center", className), children: ({ percentage = 0, valueText }) => {
    const radius = 45;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - percentage / 100 * circumference;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          className: "fill-none stroke-[8px] -rotate-90 w-24 h-24",
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "stroke-interactive", cx: "50", cy: "50", r: "45" }),
            /* @__PURE__ */ jsxRuntime.jsx(
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
      showPercentage && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-base font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", children: valueText })
    ] });
  } });
}
function RadioGroup({ label, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactAriaComponents.RadioGroup,
    {
      "aria-label": "RadioGroup",
      ...props,
      className: (0, tailwind_exports.cn)("flex flex-col gap-2", className),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Column, { gap: "2", children })
      ]
    }
  );
}
function Radio({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Radio,
    {
      "aria-label": "Radio",
      ...props,
      className: (0, tailwind_exports.cn)(
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
  const [search, setSearch] = react.useState(defaultValue);
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
  react.useEffect(() => {
    if (delay > 0) {
      onSearch?.(searchValue);
    }
  }, [searchValue, delay]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.SearchField,
      {
        "aria-label": "Search",
        ...props,
        className: (0, tailwind_exports.cn)("relative", className),
        onChange: handleChange,
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          reactAriaComponents.Group,
          {
            className: (0, tailwind_exports.cn)(
              "flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6",
              "focus-within:border-edge-strong"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "ml-3", color: "muted", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Search, {}) }),
              /* @__PURE__ */ jsxRuntime.jsx(
                reactAriaComponents.Input,
                {
                  placeholder,
                  value: search,
                  className: "flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted [&::-webkit-search-cancel-button]:hidden"
                }
              ),
              search && /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "mr-3", size: "sm", color: "muted", onClick: resetSearch, children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
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
  const [search, setSearch] = react.useState("");
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactAriaComponents.Select,
    {
      "aria-label": "Select",
      ...props,
      className: (0, tailwind_exports.cn)("flex flex-col gap-1", className),
      value,
      defaultValue,
      onChange: handleChange,
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "outline",
            ...buttonProps,
            className: (0, tailwind_exports.cn)("w-full justify-between", buttonProps?.className),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SelectValue, { children: renderValue }),
              showIcon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { rotate: 90, "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Popover, { ...popoverProps, onOpenChange: handleOpenChange, isFullscreen, children: /* @__PURE__ */ jsxRuntime.jsxs(
          kaze_star.Column,
          {
            gap: "2",
            padding: "2",
            border: true,
            borderRadius: "md",
            shadow: "lg",
            className: "bg-surface-overlay",
            children: [
              allowSearch && /* @__PURE__ */ jsxRuntime.jsx(
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
              isLoading && /* @__PURE__ */ jsxRuntime.jsx(Loading, { icon: "dots", placement: "center", size: "sm", height: "60px" }),
              /* @__PURE__ */ jsxRuntime.jsx(
                List,
                {
                  ...listProps,
                  isFullscreen,
                  ...isFullscreen && {
                    shouldSelectOnPressUp: true,
                    shouldFocusOnHover: false,
                    autoFocus: "first"
                  },
                  className: (0, tailwind_exports.cn)("overflow-auto", listProps?.className),
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-y-0 left-0 rounded-full bg-primary", style: { width } });
}
function Thumb({ percentage }) {
  const left = `calc(${percentage}% - ${percentage * 0.2}px)`;
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.SliderThumb,
    {
      className: (0, tailwind_exports.cn)(
        "absolute w-5 h-5 rounded-full bg-surface-base border-2 border-primary shadow",
        "focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
      ),
      style: { top: "50%", left, transform: "translateY(-50%)" }
    }
  );
}
function Slider({ className, showValue = true, label, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Slider, { ...props, className: (0, tailwind_exports.cn)("flex flex-col gap-2 w-full", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { justifyContent: "space-between", alignItems: "center", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
      showValue && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderOutput, { className: "text-base tabular-nums" })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.SliderTrack, { className: "relative h-5 w-full", children: ({ state }) => {
      const percentage = state.getThumbPercent(0) * 100;
      return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-interactive overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(Fill2, { percentage }) }),
        /* @__PURE__ */ jsxRuntime.jsx(Thumb, { percentage })
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
  return /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Row, { alignItems: "center", justifyContent: "center", className: "relative w-3 h-3", children: /* @__PURE__ */ jsxRuntime.jsx(
    kaze_star.Box,
    {
      borderRadius: "full",
      className: (0, tailwind_exports.cn)("w-2 h-2", variantColors[variant]),
      style: color ? { backgroundColor: color } : void 0
    }
  ) });
}
function StatusLight(props) {
  const { color, variant = "inactive", children, className, ...domProps } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Row, { ...domProps, alignItems: "center", gap: "2", className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(StatusDot, { color, variant }),
    children
  ] });
}
function Switch({ label, children, className, ...props }) {
  const styles = switchVariant();
  return /* @__PURE__ */ jsxRuntime.jsxs(kaze_star.Column, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.Switch, { ...props, className: (0, tailwind_exports.cn)(styles.root(), className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { className: styles.track(), children: /* @__PURE__ */ jsxRuntime.jsx(kaze_star.Box, { className: styles.thumb() }) }),
      children
    ] })
  ] });
}
function Tabs({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Tabs, { ...props, className: (0, tailwind_exports.cn)("grid relative w-full gap-6", className), children });
}
function TabList({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.TabList,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "flex items-center border-b border-edge gap-6",
        "[&_a.tab]:font-medium [&_a.tab]:no-underline",
        className
      ),
      children
    }
  );
}
function Tab({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Tab,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TabPanel, { ...props, className, children });
}
function TagGroup({ label, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactAriaComponents.TagGroup, { ...props, className: (0, tailwind_exports.cn)("flex flex-col gap-1", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TagList, { className: "flex flex-wrap gap-1", children })
  ] });
}
function Tag({ variant, children, className, ...props }) {
  const textValue = typeof children === "string" ? children : void 0;
  const styles = tag({ variant });
  return /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Tag, { ...props, textValue, className: (0, tailwind_exports.cn)(styles.base(), className), children: ({ allowsRemoving }) => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    children,
    allowsRemoving && /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.Button, { slot: "remove", className: styles.removeButton(), children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "xs", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) }) })
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
  const [localTheme, setLocalTheme] = react.useState(null);
  const initializedRef = react.useRef(false);
  const isLocal = !!target;
  react.useEffect(() => {
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
  const transitions = web.useTransition(theme, {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
        "w-[42px] flex justify-center items-center cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:absolute",
        className
      ),
      variant,
      onPress: handleClick,
      children: [
        transitions((style, item) => (
          // @ts-expect-error
          /* @__PURE__ */ jsxRuntime.jsx(web.animated.div, { style, children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: item === "light" ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Sun, {}) : /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Moon, {}) }) }, item)
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
  const [mode, setMode] = react.useState("system");
  react.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setMode(stored);
    }
  }, []);
  react.useEffect(() => {
    if (mode === "system") {
      setTheme(getSystemTheme());
    } else {
      setTheme(mode);
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, setTheme]);
  react.useEffect(() => {
    if (mode !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(getSystemTheme());
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode, setTheme]);
  const options = [
    { value: "light", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Sun, {}), label: "Light" },
    { value: "dark", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Moon, {}), label: "Dark" },
    { value: "system", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Monitor, {}), label: "System" }
  ];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: (0, tailwind_exports.cn)(
        "inline-flex items-center bg-surface-base border border-edge rounded-md overflow-hidden",
        className
      ),
      children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          onClick: () => setMode(option.value),
          "aria-label": option.label,
          "aria-pressed": mode === option.value,
          className: (0, tailwind_exports.cn)(
            "size-9 flex items-center justify-center cursor-pointer outline-none transition-colors",
            "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge",
            "hover:bg-interactive",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
            mode === option.value ? "bg-interactive text-foreground-primary" : "text-foreground-muted"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: option.icon })
        },
        option.value
      ))
    }
  );
}
function Toggle({ label, children, className, ...props }) {
  const isSelected = typeof props.value !== "undefined" ? !!props.value : void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      reactAriaComponents.ToggleButton,
      {
        ...props,
        isSelected,
        className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    reactAriaComponents.TagGroup,
    {
      ...props,
      selectedKeys: value || selectedKeys,
      defaultSelectedKeys: defaultValue || defaultSelectedKeys,
      selectionMode,
      onSelectionChange: handleChange,
      className: (0, tailwind_exports.cn)(
        "bg-surface-base shadow-sm border border-edge rounded overflow-hidden",
        className
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
        /* @__PURE__ */ jsxRuntime.jsx(reactAriaComponents.TagList, { className: "flex flex-row items-center", children })
      ]
    }
  );
}
function ToggleGroupItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactAriaComponents.Tag,
    {
      ...props,
      className: (0, tailwind_exports.cn)(
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
  return /* @__PURE__ */ jsxRuntime.jsx(ToastProvider, { ...toast2, children });
}

Object.defineProperty(exports, "DialogTrigger", {
  enumerable: true,
  get: function () { return reactAriaComponents.DialogTrigger; }
});
Object.defineProperty(exports, "FileTrigger", {
  enumerable: true,
  get: function () { return reactAriaComponents.FileTrigger; }
});
Object.defineProperty(exports, "Focusable", {
  enumerable: true,
  get: function () { return reactAriaComponents.Focusable; }
});
Object.defineProperty(exports, "MenuTrigger", {
  enumerable: true,
  get: function () { return reactAriaComponents.MenuTrigger; }
});
Object.defineProperty(exports, "Pressable", {
  enumerable: true,
  get: function () { return reactAriaComponents.Pressable; }
});
Object.defineProperty(exports, "RouterProvider", {
  enumerable: true,
  get: function () { return reactAriaComponents.RouterProvider; }
});
Object.defineProperty(exports, "SubmenuTrigger", {
  enumerable: true,
  get: function () { return reactAriaComponents.SubmenuTrigger; }
});
Object.defineProperty(exports, "TooltipTrigger", {
  enumerable: true,
  get: function () { return reactAriaComponents.TooltipTrigger; }
});
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AlertBanner = AlertBanner;
exports.AlertDialog = AlertDialog;
exports.Blockquote = Blockquote;
exports.Breadcrumb = Breadcrumb;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Checkbox = Checkbox;
exports.Code = Code;
exports.ComboBox = ComboBox;
exports.ConfirmationDialog = ConfirmationDialog;
exports.CopyButton = CopyButton;
exports.DataCard = DataCard;
exports.DataColumn = DataColumn;
exports.DataTable = DataTable;
exports.Dialog = Dialog;
exports.Dots = Dots;
exports.FloatingTooltip = FloatingTooltip;
exports.Form = Form;
exports.FormButtons = FormButtons;
exports.FormController = FormController;
exports.FormField = FormField;
exports.FormFieldArray = FormFieldArray;
exports.FormResetButton = FormResetButton;
exports.FormSubmitButton = FormSubmitButton;
exports.Heading = Heading;
exports.HoverTrigger = HoverTrigger;
exports.Icon = Icon;
exports.Image = Image;
exports.Label = Label;
exports.List = List;
exports.ListItem = ListItem;
exports.ListSection = ListSection;
exports.ListSeparator = ListSeparator;
exports.Loading = Loading;
exports.LoadingButton = LoadingButton;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.MenuSection = MenuSection;
exports.MenuSeparator = MenuSeparator;
exports.Modal = Modal;
exports.Navbar = Navbar;
exports.NavbarContext = NavbarContext;
exports.NavbarItem = NavbarItem;
exports.PALETTES = PALETTES;
exports.PaletteSwitcher = PaletteSwitcher;
exports.PasswordField = PasswordField;
exports.Popover = Popover;
exports.ProgressBar = ProgressBar;
exports.ProgressCircle = ProgressCircle;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.SearchField = SearchField;
exports.Select = Select;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.StatusLight = StatusLight;
exports.SubMenuTrigger = SubMenuTrigger;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableColumn = TableColumn;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TagGroup = TagGroup;
exports.Text = Text;
exports.TextField = TextField;
exports.ThemeButton = ThemeButton;
exports.ThemeSwitcher = ThemeSwitcher;
exports.Toast = Toast;
exports.ToastContext = ToastContext;
exports.ToastProvider = ToastProvider;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip;
exports.TooltipBubble = TooltipBubble;
exports.ZenProvider = ZenProvider;
exports.removeToast = removeToast;
exports.useDebounce = useDebounce;
exports.useInitTheme = useInitTheme;
exports.useNavigationContext = useNavigationContext;
exports.useTheme = useTheme;
exports.useToast = useToast;
Object.keys(kaze_star).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return kaze_star[k]; }
  });
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map