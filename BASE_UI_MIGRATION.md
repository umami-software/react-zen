# Base UI migration

React Zen now uses shadcn-style component composition with Base UI primitives. The public Zen
component names and design tokens remain in place so applications can migrate incrementally.

The React Zen package and project manifests no longer reference `react-aria-components`,
`@react-aria/*`, `react-stately`, or `@internationalized/date`. The workspace lockfile still
contains a small set of `@react-aria/*` utilities transitively through
`nextra-theme-docs -> @headlessui/react`; that dependency belongs to the documentation shell, not
the React Zen component runtime. Removing it would require replacing or changing the docs theme.

## Component mapping

| Zen component | New foundation | Compatibility notes |
| --- | --- | --- |
| Accordion | Base UI Accordion | React Aria key props are translated to Base UI values. |
| Button / LoadingButton / CopyButton / ThemeButton | Base UI Button | `onPress` and `isDisabled` remain as compatibility props; `onClick` and `disabled` are also available from the primitive. |
| Checkbox | Base UI Checkbox | `isSelected`, `defaultSelected`, `isIndeterminate`, and `onChange` are translated to checked-state props. |
| ComboBox | Base UI Combobox | Uses Base UI's input, trigger, popup, list, and items. |
| Dialog / Modal / AlertDialog / ConfirmationDialog | Base UI Dialog | `DialogTrigger` keeps Zen's two-child composition and supplies coordinated Dialog/Popover roots. `Modal` owns the Base UI portal, backdrop, viewport, and popup; `Dialog` remains the styled content surface. |
| Popover / HoverTrigger | Base UI Popover | Trigger compatibility wrappers now provide the explicit Base UI root and anchor required by popovers. |
| ProgressBar | Base UI Progress | Track, indicator, and value now use Base UI parts. |
| RadioGroup / Radio | Base UI Radio Group and Radio | React Aria state prop names remain supported. |
| Select | Base UI Select | Existing search UI remains an externally filtered Select; use ComboBox for built-in filtering. |
| Slider | Base UI Slider | Uses Root, Value, Control, Track, Indicator, and Thumb. |
| Switch | Base UI Switch | React Aria state prop names remain supported. |
| Tabs | Base UI Tabs | `selectedKey`/`defaultSelectedKey` map to Base UI values. |
| Toggle / ToggleGroup | Base UI Toggle and Toggle Group | Key arrays map to Base UI value arrays. |
| Tooltip | Base UI Tooltip | `TooltipTrigger` supplies the Base UI provider, root, trigger, portal, positioner, and popup. |

## No direct Base UI equivalent

These components stay in React Zen and use native elements or the same supporting package used by
the corresponding shadcn component.

| Zen component | Implementation | Difference from the former React Aria version |
| --- | --- | --- |
| Breadcrumbs | Semantic `nav`, `ol`, and `li` | Native semantics replace React Aria collection management. |
| Calendar | `react-day-picker` | Dates are native `Date` values; internationalized calendar-system objects are no longer exposed. |
| DataTable / Table | Semantic native table parts | Rendering and layout are preserved. React Aria row selection behavior is not provided by the native wrapper. |
| List | Native listbox compatibility layer | Supports single/multiple key selection. Advanced React Aria collection features such as virtual focus and dynamic collection render functions are not reproduced. Select and ComboBox items switch to their Base UI item primitives automatically. |
| Menu when used as static Popover content | Native menu roles | The existing triggerless/static composition remains supported. Base UI Menu is used by `MenuTrigger`; advanced React Aria collection selection is reduced to Zen's key-based compatibility behavior. |
| SearchField | Native search input | Keeps debounce and `onSearch`; browser-native input events replace React Aria field state. |
| PasswordField / TextField / Label | Native form controls | State props are translated to `disabled` and `readOnly`; `TextField.onChange` continues to receive the field value. |
| ProgressCircle | SVG rendered inside Base UI Progress Root | Base UI supplies accessible progress state; Zen still owns the circular visualization. |
| TagGroup / Tag | Native list plus removable buttons | Removal remains key-based; React Aria tag selection and keyboard collection management are not reproduced. |
| AlertBanner, Blockquote, Code, CodeBlock, DataCard, Dots, FloatingTooltip, Heading, Icon, Image, Loading, Navbar, Spinner, StatusLight, Text, toast, and form helpers | Existing Zen composition | These did not require a React Aria primitive or are composed from the migrated components. |

## Preserved Zen layout layer

`Box`, `Container`, `Flexbox`, `Grid`, `Row`, and `Column` remain Zen-owned. Their props, responsive
behavior, spacing scale, and styling utilities were intentionally left unchanged.

## Removed public React Aria passthroughs

`DialogTrigger`, `MenuTrigger`, `TooltipTrigger`, `FileTrigger`, `Focusable`, `Pressable`,
`RouterProvider`, `Selection`, and `SubmenuTrigger` are now Zen compatibility exports rather than
re-exports from `react-aria-components`. Consumers that imported additional React Aria types through
Zen should import the corresponding Base UI or React types directly.
