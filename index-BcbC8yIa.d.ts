import { I as Filter, V as FilterResult, c as If, f as Not, n as Metro, t as MaybeDefaultExportMatched } from "./types-DEG71kQs.js";
declare namespace _internal_d_exports {
  export { FilterResultFlag, FilterResultFlagToHumanReadable, FilterResultFlags, RunFilterOptions, RunFilterReturnExportsOptions, exportsFromFilterResultFlag, noDefaultExportsCache, runFilter };
}
interface RunFilterOptions {
  /**
   * Whether to skip checking the default export.
   *
   * @default false
   * @deprecated Wrap the filter with {@link namespaceOnly} instead, so it doesn't depend on the lookup:
   *
   * ```ts
   * namespaceOnly(filter)
   * ```
   */
  skipDefault?: boolean;
  /**
   * Whether to allow initializing modules to confirm their exports.
   *
   * @default true
   */
  initialize?: boolean;
}
type RunFilterReturnExportsOptions<ReturnNamespace extends boolean = boolean> = RunFilterOptions & If<ReturnNamespace, {
  /**
   * Whether to return the whole module with all exports instead of just the default export **if the default export matches**.
   *
   * @default false
   */
  returnNamespace: true;
}, {
  returnNamespace?: false;
}>;
declare const FilterResultFlags: {
  /**
   * A module was found, without exports filtering.
   */
  Found: number;
  /**
   * A module was found, and the filter matched the default export.
   */
  Default: number;
  /**
   * A module was found, and the filter matched the module namespace.
   */
  Namespace: number;
};
type FilterResultFlag = (typeof FilterResultFlags)[keyof typeof FilterResultFlags];
declare const FilterResultFlagToHumanReadable: Record<FilterResultFlag, string>;
/** Modules we already know have no `default` export. */
declare const noDefaultExportsCache: Set<number>;
declare function runFilter(filter: Filter, id: Metro.ModuleID, exports?: Metro.ModuleExports, options?: RunFilterOptions): FilterResultFlag | undefined;
declare function exportsFromFilterResultFlag(flag: FilterResultFlag, exports: Metro.ModuleExports, options?: RunFilterReturnExportsOptions): any;
//#endregion
//#region lib/modules/src/finders/lookup.d.ts
type LookupModulesOptions<ReturnNamespace extends boolean = boolean, Initialize extends boolean = boolean> = RunFilterReturnExportsOptions<ReturnNamespace> & {
  /**
   * Whether to use cached lookup results.
   */
  cached?: boolean;
} & If<Not<Initialize>, {
  initialize: false;
}, {
  /**
   * Whether to initialize matching uninitialized modules.
   *
   * **This will initialize any modules that match the exportsless filter and may cause unintended side effects.**
   */
  initialize?: true;
}>;
type LookupModulesResult<F extends Filter, O extends LookupModulesOptions> = [exports: LookupFilterResult<F, O>, id: Metro.ModuleID];
type LookupFilterResult<F extends Filter, O extends LookupModulesOptions> = O extends LookupModulesOptions<any, false> ? InitializedLookupFilterResult<F, O> | undefined : InitializedLookupFilterResult<F, O>;
type InitializedLookupFilterResult<F extends Filter, O extends LookupModulesOptions> = O extends RunFilterReturnExportsOptions<true> ? MaybeDefaultExportMatched<FilterResult<F>> : FilterResult<F>;
declare const NotFoundResult: readonly [];
type LookupNotFoundResult = typeof NotFoundResult;
/**
 * Lookup modules.
 *
 * @param filter The filter to use.
 * @param options The options to use for the lookup.
 * @returns A generator that yields the module exports that match the filter.
 *
 * @example
 * ```ts
 * const lookup = lookupModules(withProps('x'))
 * // Log all module exports that has exports.x
 * for (const [exports, id] of lookup) console.log(id, exports)
 * ```
 */
declare function lookupModules<F extends Filter>(filter: F): Generator<LookupModulesResult<F, object>, undefined>;
declare function lookupModules<F extends Filter, const O extends LookupModulesOptions>(filter: F, options: O): Generator<LookupModulesResult<F, O>, undefined>;
/**
 * Lookup a module. Skipping creating a `Generator`.
 *
 * @see {@link lookupModules} for more documentation.
 *
 * @param filter The filter to use.
 * @param options The options to use for the lookup.
 * @returns The first module exports that match the filter.
 *
 * @example
 * ```ts
 * const [React, ReactModuleId] = lookupModule(withProps<typeof import('react')>('createElement'))
 * ```
 */
declare function lookupModule<F extends Filter>(filter: F): LookupModulesResult<F, object> | LookupNotFoundResult;
declare function lookupModule<F extends Filter, const O extends LookupModulesOptions>(filter: F, options: O): LookupModulesResult<F, O> | LookupNotFoundResult;
//#endregion
//#region lib/modules/src/finders/wait.d.ts
type WaitForModulesUnsubscribeFunction = () => void;
type WaitForModulesCallback<T> = (exports: T, id: Metro.ModuleID) => any;
type WaitForModulesOptions<ReturnNamespace extends boolean = boolean> = RunFilterReturnExportsOptions<ReturnNamespace> & {
  /**
   * Use cached results **only** (if possible).
   * If there is no cache result, this works as if you did not pass this option at all.
   *
   * By default, waits cache results but does not use them, because new modules may still be found.
   * Use this option as an optimization if you are sure that you don't need to find new modules once results are cached.
   *
   * @default false
   */
  cached?: boolean;
};
type WaitForModulesResult<F extends Filter, O extends WaitForModulesOptions> = O extends RunFilterReturnExportsOptions<true> ? MaybeDefaultExportMatched<FilterResult<F>> : FilterResult<F>;
/**
 * Wait for modules to initialize. **Callback won't be called if the module is already initialized!**
 *
 * @param filter The filter to use.
 * @param callback The callback to call when matching modules are initialized.
 * @param options The options to use for the wait.
 * @returns A function to unsubscribe.
 *
 * @example
 * ```ts
 * const unsub = waitForModules(
 *   withName<typeof import('@shopify/flash-list')>('FlashList'),
 *   // (exports: typeof import('@shopify/flash-list'), id: Metro.ModuleID) => any
 *   (exports, id) => {
 *     unsub()
 *     // Do something with the module...
 *   }
 * )
 * ```
 */
declare function waitForModules<F extends Filter>(filter: F, callback: WaitForModulesCallback<WaitForModulesResult<F, object>>): WaitForModulesUnsubscribeFunction;
declare function waitForModules<F extends Filter, O extends WaitForModulesOptions>(filter: F, callback: WaitForModulesCallback<WaitForModulesResult<F, O>>, options: O): WaitForModulesUnsubscribeFunction;
//#endregion
//#region lib/modules/src/finders/get.d.ts
type GetModulesOptions<ReturnNamespace extends boolean = boolean> = WaitForModulesOptions<ReturnNamespace> & LookupModulesOptions<ReturnNamespace, true> & {
  /**
   * The maximum number of modules to get.
   *
   * @default 1
   */
  max?: number;
};
type GetModulesResult<F extends Filter, O extends GetModulesOptions> = WaitForModulesResult<F, O>;
type GetModulesCallback<T> = (exports: T, id: Metro.ModuleID) => any;
type GetModulesUnsubscribeFunction = () => void;
/**
 * Get modules matching the filter.
 * If the matching modules are already initialized, the callback will be called immediately.
 * Otherwise, it will be called when the matching modules are initialized.
 *
 * @param filter The filter to use to find the module.
 * @param options The options to use for the find.
 * @returns A function to unsubscribe.
 *
 * @example
 * ```ts
 * getModules(withProps<typeof import('react')>('createElement'), React => {
 *   // Immediately called because React is always initialized when plugins are loaded
 * })
 *
 * getModules(withProps<typeof import('@shopify/flash-list')>('FlashList'), FlashList => {
 *   // Called when the module is initialized
 * })
 *
 * // Get multiple modules matching the filter
 * getModules(withProps<ReactNative.AssetsRegistry>('registerAsset'), AssetsRegistry => {
 *   // Called 2 times, once for each module that matches the filter
 * }, { max: 2 })
 * ```
 */
declare function getModules<F extends Filter>(filter: F, callback: GetModulesCallback<FilterResult<F>>): GetModulesUnsubscribeFunction;
declare function getModules<F extends Filter, const O extends GetModulesOptions>(filter: F, callback: GetModulesCallback<GetModulesResult<F, O>>, options: O): GetModulesUnsubscribeFunction;
declare namespace index_d_exports {
  export { GetModulesCallback, GetModulesOptions, GetModulesResult, GetModulesUnsubscribeFunction, LookupModulesOptions, LookupModulesResult, LookupNotFoundResult, NotFoundResult, WaitForModulesCallback, WaitForModulesOptions, WaitForModulesResult, WaitForModulesUnsubscribeFunction, getModules, lookupModule, lookupModules, waitForModules };
}
//#endregion
export { lookupModules as _, GetModulesUnsubscribeFunction as a, WaitForModulesOptions as c, waitForModules as d, LookupModulesOptions as f, lookupModule as g, NotFoundResult as h, GetModulesResult as i, WaitForModulesResult as l, LookupNotFoundResult as m, GetModulesCallback as n, getModules as o, LookupModulesResult as p, GetModulesOptions as r, WaitForModulesCallback as s, index_d_exports as t, WaitForModulesUnsubscribeFunction as u, FilterResultFlag as v, _internal_d_exports as y };