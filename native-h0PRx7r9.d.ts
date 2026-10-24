import { t as DiscordNativeModules } from "./native-BO-F1-Zf.js";
declare namespace native_d_exports {
  export { BundleUpdaterManager, CacheModule, ClientInfoModule, DeviceModule, FileModule, ThemeModule };
}
/**
 * Naming conventions:
 * - Always use the most recent module name (if we can do it in a non-breaking way)
 * - If the module name starts with "Native", remove it
 * - If the module name starts with "RTN", remove it
 * - If the module name ends with "Module", include it
 * - If the module name ends with "Manager", include it
 */
declare let CacheModule: DiscordNativeModules.CacheModule;
declare let FileModule: DiscordNativeModules.FileModule;
declare let ClientInfoModule: DiscordNativeModules.ClientInfoModule;
declare let DeviceModule: DiscordNativeModules.DeviceModule;
declare let ThemeModule: DiscordNativeModules.ThemeModule;
declare let BundleUpdaterManager: DiscordNativeModules.BundleUpdaterManager;
//#endregion
export { FileModule as a, DeviceModule as i, CacheModule as n, ThemeModule as o, ClientInfoModule as r, native_d_exports as s, BundleUpdaterManager as t };