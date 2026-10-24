import { n as ReactJSXRuntime } from "./index-6rQM0fxC.js";
import { ElementType, JSX, Key, ReactElement } from "react";
declare namespace index_d_exports {
  export { AfterJSXCallback, AnyJSXFactoryFunction, BeforeJSXCallback, InsteadJSXCallback, afterJSX, beforeJSX, insteadJSX };
}
type AnyJSXFactoryFunction = (typeof ReactJSXRuntime)['jsx' | 'jsxs'];
type BeforeJSXCallback<E extends ElementType> = (args: [element: E, props: ElementTypeProps<E>, key?: Key | undefined]) => Parameters<AnyJSXFactoryFunction>;
type InsteadJSXCallback<E extends ElementType> = (args: [element: E, props: ElementTypeProps<E>, key?: Key | undefined], jsx: AnyJSXFactoryFunction) => ReturnType<AnyJSXFactoryFunction> | null;
type AfterJSXCallback<E extends ElementType> = (element: ReactElement<ElementTypeProps<E>, E>) => ReturnType<AnyJSXFactoryFunction> | null;
type ElementTypeProps<E extends ElementType> = E extends ElementType<infer Props> ? Props : E extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[E] : never;
/**
 * Registers a hook to be called after a JSX element with the specified type is created.
 *
 * @param type The type of the element.
 * @param patch The hook.
 * @returns A function to unpatch.
 */
declare function afterJSX<E extends ElementType>(type: E, patch: AfterJSXCallback<E>): () => boolean;
/**
 * Registers a hook to be called before a JSX element with the specified type is created.
 *
 * @param type The type of the element.
 * @param patch The hook.
 * @returns A function to unpatch.
 */
declare function beforeJSX<E extends ElementType>(type: E, patch: BeforeJSXCallback<E>): () => boolean;
/**
 * Registers a callback to run instead when a JSX element with the specified type is created.
 *
 * @param type The type of the element.
 * @param patch The hook.
 * @returns A function to unpatch.
 */
declare function insteadJSX<E extends ElementType>(type: E, patch: InsteadJSXCallback<E>): () => boolean;
//#endregion
export { afterJSX as a, insteadJSX as c, InsteadJSXCallback as i, AnyJSXFactoryFunction as n, beforeJSX as o, BeforeJSXCallback as r, index_d_exports as s, AfterJSXCallback as t };