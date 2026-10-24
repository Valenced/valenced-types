import { n as Metro } from "./types-DEG71kQs.js";
import { a as GetModulesUnsubscribeFunction, m as LookupNotFoundResult, n as GetModulesCallback, s as WaitForModulesCallback, u as WaitForModulesUnsubscribeFunction } from "./index-BcbC8yIa.js";
declare namespace finders_d_exports {
  export { getModuleWithImportedPath, lookupModuleWithImportedPath, waitForModuleWithImportedPath };
}
/**
 * Lookup an initialized module by its imported path.
 *
 * Think of it as if you are doing a `import * as exports from path`, the app must have already initialized the module or this will return `undefined`.
 *
 * @param path The path to lookup the module by.
 * @returns The module exports if the module is initialized, or `undefined` if the module is not found or not initialized.
 *
 * @example
 * ```ts
 * const [{ default: Logger }] = lookupModuleWithImportedPath<{ default: typeof DiscordModules.Logger }>('modules/debug/Logger.tsx')
 * ```
 */
declare function lookupModuleWithImportedPath<T = any>(path: string): [exports: T, id: Metro.ModuleID] | LookupNotFoundResult;
/**
 * Wait for a module to initialize by its imported path. **Callback won't be called if the module is already initialized!**
 *
 * Once callback is called, the subscription will be removed automatically, because modules have unique imported paths.
 *
 * Think of it as if you are doing `import * as exports from path`, and you are also waiting for the app to initialize the module by itself.
 *
 * @param path The path to wait for.
 * @param callback The callback to call once the module is initialized.
 * @returns A function to unsubscribe.
 *
 * @example
 * ```ts
 * waitForModuleWithImportedPath(
 *   'utils/PlatformUtils.tsx',
 *   (exports, id) => {
 *      // Do something with the module...
 *   }
 * )
 * ```
 */
declare function waitForModuleWithImportedPath<T = any>(path: string, callback: WaitForModulesCallback<T>): WaitForModulesUnsubscribeFunction;
/**
 * Get a single module by its imported path.
 * Once a module is found, unsubscription happens automatically, since imported paths are unique.
 *
 * @param path The path to find the module by.
 * @param options The options to use for the find.
 * @returns A promise that resolves to the module's exports or rejects if the find is aborted before the module is found.
 *
 * @example
 * ```ts
 * getModuleWithImportedPath('modules/main_tabs_v2/native/settings/SettingsConstants.tsx', SettingsConstants => {
 *   console.log('Settings page opened') // Logs once the module is initialized
 * })
 * ```
 */
declare function getModuleWithImportedPath<T>(path: string, callback: GetModulesCallback<T>): GetModulesUnsubscribeFunction;
//#endregion
export { waitForModuleWithImportedPath as i, getModuleWithImportedPath as n, lookupModuleWithImportedPath as r, finders_d_exports as t };