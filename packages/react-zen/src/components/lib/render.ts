import { cloneElement, isValidElement, type ReactElement } from 'react';

export type RenderProp<P = Record<string, unknown>> = ReactElement | ((props: P) => ReactElement);

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
export function resolveRender<P extends Record<string, unknown>>(
  render: RenderProp<P> | undefined,
  props: P,
  defaultElement: ReactElement,
): ReactElement {
  if (!render) {
    return defaultElement;
  }

  if (typeof render === 'function') {
    return render(props);
  }

  if (isValidElement(render)) {
    const renderProps = render.props as Record<string, unknown>;
    // Merge props onto the element, with element's own props taking precedence for explicit overrides
    // Use children from render element if provided, otherwise use children from props
    const children = renderProps.children !== undefined ? renderProps.children : props.children;
    return cloneElement(render, {
      ...props,
      ...renderProps,
      children,
      // Merge classNames if both exist
      className: renderProps.className
        ? `${(props.className as string) || ''} ${renderProps.className}`.trim()
        : props.className,
    });
  }

  return defaultElement;
}
