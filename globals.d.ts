import { n as Metro } from "./types-DEG71kQs.js";
import { a as PluginApiExtensionsOptions, b as UnscopedPreInitPluginApi, p as PluginOptions, v as UnscopedInitPluginApi, y as UnscopedPluginApi } from "./types-DFEAl8CS.js";
import { ImageProps, ScrollViewProps, TextProps, ViewProps } from "react-native";
//#region types/globals.d.ts
/// REACT NATIVE COMPONENTS
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      // TODO(PalmDevs): more intrinsic elements?
      RCTView: ViewProps;
      RCTImage: ImageProps;
      RCTScrollView: ScrollViewProps;
      RCTText: TextProps;
    }
  }
}
/// HERMES
declare global {
  function setTimeout(cb: (...args: unknown[]) => unknown, timeout?: number): number;
  /**
   * Calls the garbage collector
   */
  function gc(): void;
  interface HermesInternalObject {
    getRuntimeProperties(): Record<string, string>;
    // biome-ignore lint/complexity/noBannedTypes: You can pass any function here
    getFunctionLocation(fn: Function): {
      fileName: string;
      lineNumber: number;
      columnNumber: number;
      segmentID: number;
      virtualOffset: number;
      isNative: boolean;
    };
  }
}
/// HERMES PROMISES
declare global {
  interface Promise<T> {
    /// PROMISE POLYFILLS FROM: https://github.com/then/promise
    /// AND: https://github.com/facebook/hermes/blob/main/lib/InternalBytecode/01-Promise.js
    _h: 0 | 1 | 2;
    /**
     * The resolved value of the promise, if it has been resolved.
     */
    _j: any;
  }
  type HermesPromiseRejectionHandler = (promise: Promise<any>, error: any) => void;
  interface PromiseConstructor {
    _m: HermesPromiseRejectionHandler;
  }
}
/// REACT DEVTOOLS
declare global {
  var __REACT_DEVTOOLS_GLOBAL_HOOK__: unknown | undefined;
  var __REACT_DEVTOOLS__: {
    version: number;
    exports: {
      connectToDevTools(opts: {
        host?: string;
        port?: number;
        websocket?: WebSocket;
      }): void;
    };
  } | undefined;
}
/// METRO
declare global {
  var __METRO_GLOBAL_PREFIX__: '';
  var __d: Metro.DefineFn;
  var __r: Metro.Require;
  var __c: Metro.ClearFn;
  var __registerSegment: Metro.RegisterSegmentFn;
}
/// REACT NATIVE
declare global {
  var nativeModuleProxy: Record<string, unknown>;
  var __turboModuleProxy: ((name: string) => unknown) | undefined;
  function nativeLoggingHook(str: string, level: number): void;
  function RN$registerCallableModule(name: string, moduleProvider: () => object): void;
  function alert(message: unknown): void;
  function queueMicrotask(cb: () => void): void;
  var nativePerformanceNow: typeof performance.now;
  var performance: {
    now(): number;
  };
}
//#endregion
//#region types/globals.consumers.d.ts
declare global {
  /**
   * Defines an entrypoint for a Valenced JS plugin.
   */
  export function plugin<O extends PluginApiExtensionsOptions>(options: PluginOptions<O>): PluginOptions<O>;
  /**
   * The unscoped plugin API. **Use directly only when necessary.**
   *
   * You should be using the `unscoped` property of the `PluginApi` object instead.
   */
  export const valenced: UnscopedPreInitPluginApi | UnscopedInitPluginApi | UnscopedPluginApi;
}