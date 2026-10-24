import { i as AnyFunction } from "./types-DEG71kQs.js";
declare namespace index_d_exports {
  export { BridgeInfo, MethodArgs, MethodName, MethodResult, NativeMethods, callNativeMethod, callNativeMethodSync, getBridgeInfo, getNativeModule, registerJSMethod };
}
/**
 * Backwards compatible way to get a native module. Throws an error if the module is not found.
 *
 * Use this as a replacement to `TurboModuleRegistry.getEnforcing()`.
 *
 * @see {@link https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/TurboModule/TurboModuleRegistry.js#L19-L39 React Native's source}
 *
 * @param name The name of the native module to get.
 */
declare function getNativeModule<T>(name: string): T | null;
/**
 * Calls a method on the native module and returns a promise that resolves with the result.
 *
 * @param name The name of the native method to call.
 * @param args The arguments to pass to the native method.
 * @returns A promise that resolves with the result of the native method call.
 */
declare function callNativeMethod<N extends MethodName>(name: N, args: MethodArgs<N>): Promise<MethodResult<N>>;
/**
 * Calls a method on the native module synchronously and returns the result.
 *
 * Only use synchronous methods when absolutely necessary, as they block JS execution until the native method returns.
 *
 * @param name The name of the native method to call.
 * @param args The arguments to pass to the native method.
 * @returns The result of the native method call.
 */
declare function callNativeMethodSync<N extends MethodName>(name: N, args: MethodArgs<N>): MethodResult<N>;
/**
 * Get the bridge information.
 */
declare function getBridgeInfo(): BridgeInfo | null;
declare const CallableReturnNativeMethodName: 'valenced.__callableReturn';
/**
 * Registers a JS method that can be called from native code.
 *
 * @param name The name of the method to register.
 * @param method The method implementation.
 */
declare function registerJSMethod(name: string, method: AnyFunction): void;
interface BridgeInfo {
  name: string;
  version: number;
}
type MethodName = Extract<keyof NativeMethods, string>;
type MethodArgs<T extends MethodName> = NativeMethods[T][0];
type MethodResult<T extends MethodName> = NativeMethods[T][1];
interface NativeMethods {
  'valenced.info': [[], BridgeInfo];
  [CallableReturnNativeMethodName]: [[payload: object], void];
}
//#endregion
export { NativeMethods as a, getBridgeInfo as c, registerJSMethod as d, MethodResult as i, getNativeModule as l, MethodArgs as n, callNativeMethod as o, MethodName as r, callNativeMethodSync as s, BridgeInfo as t, index_d_exports as u };