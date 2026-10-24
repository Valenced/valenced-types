import { C as index_d_exports } from "./types-DEG71kQs.js";
import { i as react_navigation_d_exports } from "./react-navigation-C0E6Cr3d.js";
import { a as utils_d_exports$1, c as index_d_exports$1 } from "./utils-Dykmqfmu.js";
import { t as PluginApiComponents } from "./types-Ta3Y6krt.js";
import { s as actions_d_exports } from "./actions-Das1ldxq.js";
import { t as app_start_performance_d_exports } from "./app-start-performance-BbStgG4z.js";
import { r as constants_d_exports } from "./constants-DZaB9m60.js";
import { r as flux_d_exports } from "./flux-Dvytw1cu.js";
import { t as import_tracker_d_exports } from "./import-tracker-Ux4kTtON.js";
import { r as logger_d_exports } from "./logger-0ydsr_ar.js";
import { r as tokens_d_exports } from "./tokens-BfLlg_6O.js";
import { n as utils_d_exports$2 } from "./utils-CeJu_WJB.js";
import { i as design_d_exports } from "./design-BRO4yYiV.js";
import { t as index_d_exports$2 } from "./index-BcbC8yIa.js";
import { t as index_d_exports$3 } from "./index-0fkbIG0B.js";
import { n as main_tabs_v2_d_exports } from "./main_tabs_v2-NT-UEEvf.js";
import { a as index_d_exports$4 } from "./index-CXADKtBZ.js";
import { n as renderer_d_exports } from "./renderer-DpRJxXQU.js";
import { s as native_d_exports } from "./native-h0PRx7r9.js";
import { t as finders_d_exports } from "./finders-1E0ZNdJk.js";
import { n as subscriptions_d_exports } from "./subscriptions-BGQgNnbm.js";
import { t as browserify_d_exports } from "./browserify-DJ5AyWx4.js";
import { n as gorhom_d_exports } from "./gorhom-KnPvpOlY.js";
import { n as react_native_clipboard_d_exports } from "./react-native-clipboard-C-xVcySM.js";
import { n as react_native_community_d_exports } from "./react-native-community-D0jSJ8Ha.js";
import { n as react_native_safe_area_context_d_exports } from "./react-native-safe-area-context-DULPjWwC.js";
import { n as shopify_d_exports } from "./shopify-Bvy25Ylf.js";
import { n as zustand_d_exports } from "./zustand-BaXQPaW1.js";
import { u as index_d_exports$5 } from "./index-Cy23VD1B.js";
import { t as app_d_exports } from "./app-DLGq9siW.js";
import { i as fs_d_exports } from "./fs-CyDEU4fJ.js";
import { t as constants_d_exports$1 } from "./constants-BVbhDsQs.js";
import { s as index_d_exports$6 } from "./index-OrcA6ApY.js";
import { t as index_d_exports$7 } from "./index-CLY5DbuK.js";
import { FunctionComponent } from "react";
import * as PluginApiReact_ from "#lib/react";
//#region lib/plugins/src/apis/discord.d.ts
interface PreInitPluginApiDiscord {
  actions: PluginApiDiscord.Actions;
  common: PreInitPluginApiDiscordCommon;
  design: PluginApiDiscord.Design;
  flux: PluginApiDiscord.Flux;
  modules: PluginApiDiscord.Modules;
  native: PluginApiDiscord.Native;
  utils: PluginApiDiscord.Utils;
}
interface InitPluginApiDiscord extends PreInitPluginApiDiscord {
  common: InitPluginApiDiscordCommon;
}
interface PreInitPluginApiDiscordCommon {
  appStartPerformance: typeof app_start_performance_d_exports;
  importTracker: typeof import_tracker_d_exports;
  utils: typeof utils_d_exports$2;
  /** This API is available in and after the `init` phase. */
  constants: unknown;
  /** This API is available in and after the `init` phase. */
  flux: unknown;
  /** This API is available in and after the `init` phase. */
  logger: unknown;
  /** This API is available in and after the `init` phase. */
  tokens: unknown;
}
interface InitPluginApiDiscordCommon extends PreInitPluginApiDiscordCommon {
  constants: typeof constants_d_exports;
  flux: typeof flux_d_exports;
  logger: typeof logger_d_exports;
  tokens: typeof tokens_d_exports;
}
type PluginApiDiscord = PreInitPluginApiDiscord | InitPluginApiDiscord;
declare namespace PluginApiDiscord {
  type Actions = typeof actions_d_exports;
  type Common = PreInitPluginApiDiscordCommon | InitPluginApiDiscordCommon;
  type Design = typeof design_d_exports;
  type Flux = typeof index_d_exports$3;
  type Native = typeof native_d_exports;
  interface Utils {
    modules: {
      finders: typeof finders_d_exports;
      metro: {
        subscriptions: typeof subscriptions_d_exports;
      };
    };
  }
  interface Modules {
    mainTabsV2: typeof main_tabs_v2_d_exports;
    settings: typeof index_d_exports$4 & {
      renderer: typeof renderer_d_exports;
    };
  }
}
//#endregion
//#region lib/plugins/src/apis/externals.d.ts
interface PluginApiExternals {
  Browserify: typeof browserify_d_exports;
  Gorhom: typeof gorhom_d_exports;
  ReactNativeClipboard: typeof react_native_clipboard_d_exports;
  ReactNativeCommunity: typeof react_native_community_d_exports;
  ReactNativeSafeAreaContext: typeof react_native_safe_area_context_d_exports;
  ReactNavigation: typeof react_navigation_d_exports;
  Shopify: typeof shopify_d_exports;
  Zustand: typeof zustand_d_exports;
}
//#endregion
//#region lib/plugins/src/apis/modules.d.ts
interface PluginApiModules {
  finders: PluginApiModulesFinders;
  metro: PluginApiModulesMetro;
  native: PluginApiModulesNative;
}
type PluginApiModulesNative = typeof index_d_exports$5 & {
  app: typeof app_d_exports;
  fs: typeof fs_d_exports;
};
type PluginApiModulesMetro = typeof utils_d_exports$1 & typeof index_d_exports$1;
type PluginApiModulesFinders = typeof index_d_exports$2 & {
  filters: typeof index_d_exports;
};
declare namespace utils_d_exports {
  export { PluginContributor, PluginContributorLink, formatVersion, getPluginContributorName, parsePluginContributor };
}
/** Formats plugin version for display. */
declare const formatVersion: (version: PluginVersion) => string;
/** Contributor parsed from a `Name <DISCORD_ID> (LINK "LABEL")` string. */
interface PluginContributor {
  name: string;
  /** Discord user IDs. */
  ids: string[];
  /** Links with `https:`, `http:` or `mailto:` scheme. */
  links: PluginContributorLink[];
}
/** Contributor link with an optional display label. */
interface PluginContributorLink {
  url: string;
  label?: string;
}
/**
 * Parses a contributor string, such as {@link PluginManifest.author}.
 *
 * Format: `Name <DISCORD_ID_1> <DISCORD_ID_N> (LINK_1 "LABEL") (LINK_N)`.
 * Discord IDs and links are optional and repeatable, with IDs first.
 *
 * @returns The parsed contributor, or `null` when the string does not follow the format.
 */
declare function parsePluginContributor(contributor: string): PluginContributor | null;
/** Returns the contributor's name, or the raw string when unparseable. */
declare const getPluginContributorName: (contributor: string) => string;
//#endregion
//#region lib/plugins/src/apis/plugins.d.ts
interface PluginApiPlugins {
  utils: typeof utils_d_exports;
  constants: typeof constants_d_exports$1;
}
//#endregion
//#region lib/plugins/src/apis/react.d.ts
type PluginApiReact = typeof PluginApiReact_ & {
  jsxRuntime: typeof index_d_exports$6;
  native: typeof index_d_exports$7;
};
//#endregion
//#region lib/plugins/src/types.d.ts
interface PluginApiExtensionsOptions {}
/** Unscoped plugin API available in the `preInit` lifecycle stage. */
interface UnscopedPreInitPluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> {
  modules: PluginApiModules;
  patcher: typeof import('#lib/patcher');
  plugins: PluginApiPlugins;
  react: PluginApiReact;
  assets: typeof import('#lib/assets');
  externals: PluginApiExternals;
  /** Available in and after the `init` lifecycle stage. */
  components: unknown;
  discord: PreInitPluginApiDiscord;
}
/** Unscoped plugin API available in the `init` lifecycle stage. */
interface UnscopedInitPluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends UnscopedPreInitPluginApi<O> {
  components: PluginApiComponents;
  discord: InitPluginApiDiscord;
}
/** Unscoped plugin API available in the `start` and `stop` lifecycle stages. */
interface UnscopedPluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends UnscopedInitPluginApi<O> {}
/** Plugin cleanup callback to be called when the plugin is stopped. */
type PluginCleanup = () => any;
/**
 * Registers cleanup callbacks to be called when the plugin is stopped.
 *
 * @example
 * ```ts
 * cleanup(unpatch)
 * cleanup(unsub)
 * ```
 */
type PluginCleanupApi = (...fns: PluginCleanup[]) => void;
/**
 * Registers an API decorator extending the plugin API for dependent plugins.
 *
 * @param decorator Decorator function modifying dependent plugin API.
 *
 * @example
 * ```ts
 * // Your plugin's `init` function:
 * init({ decorate }) {
 *   decorate((plugin, options) => {
 *     plugin.api.customMethod = () => {
 *       console.log('Custom method called!')
 *     }
 *
 *     // Optionally return a cleanup function to remove the decoration when the plugin is stopped.
 *     return () => {
 *       delete plugin.api.customMethod
 *     }
 *   })
 * }
 *
 * // In another plugin, with your plugin as a dependency:
 * init({ customMethod }) {
 *   customMethod() // Logs: "Custom method called!"
 * }
 * ```
 */
type PluginDecorateApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions, S extends keyof PluginApiInLifecycleMap<O> = keyof PluginApiInLifecycleMap<O>> = (decorator: PluginApiDecorator<O, S>) => void | (() => unknown);
/**
 * Decorator callback that modifies the plugin API for dependents.
 *
 * @param plugin Target plugin instance.
 * @param options Plugin options.
 *
 * @see {@link PluginDecorateApi}
 */
type PluginApiDecorator<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions, S extends keyof PluginApiInLifecycleMap<O> = keyof PluginApiInLifecycleMap<O>> = (plugin: Plugin<O, S>, options: O) => void;
/** Plugin API available in the `preInit` lifecycle stage. */
interface PreInitPluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> {
  decorate: PluginDecorateApi<O, 'PreInit'>;
  unscoped: UnscopedPreInitPluginApi;
  cleanup: PluginCleanupApi;
  plugin: Plugin<O, 'PreInit'>;
}
/** Plugin API available in the `init` lifecycle stage. */
interface InitPluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends PreInitPluginApi<O> {
  decorate: PluginDecorateApi<O, 'Init'>;
  unscoped: UnscopedInitPluginApi;
  plugin: Plugin<O, 'Init'>;
}
/** Plugin API available in the `start` and `stop` lifecycle stages. */
interface PluginApi<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends InitPluginApi<O> {
  decorate: PluginDecorateApi<O, 'Start'>;
  unscoped: UnscopedPluginApi;
  plugin: Plugin<O, 'Start'>;
}
interface PluginManifest {
  /** Manifest schema format version. */
  format: number;
  /** Unique plugin identifier. */
  id: string;
  /** Display name. */
  name: string;
  /**
   * Author information, as `Name <DISCORD_ID> (LINK "LABEL")`.
   * Discord IDs and links are optional and repeatable.
   *
   * Use {@link getPluginContributorName} and {@link parsePluginContributor} to extract the name, IDs, and links.
   */
  author: string;
  /** Contributors, in the same format as {@link author}. */
  contributors?: string[];
  /** Plugin description. */
  description: string;
  /** Plugin icon: asset name or `data:` URL. */
  icon?: string;
  /** Dependencies keyed by plugin ID. */
  dependencies?: Record<string, PluginDependencyConstraint>;
  /** Plugin version. */
  version: PluginVersion;
}
interface PluginVersion {
  nums: number[];
  label?: string;
}
interface PluginDependencyConstraint {
  /** Required version range. */
  version?: string;
  /** Whether dependency is optional. */
  optional?: boolean;
}
interface PluginOptions<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends PluginLifecycles<O> {
  SettingsComponent?: PluginSettingsComponent<O>;
}
/** Factory creating plugin options lazily to avoid evaluating code before execution is needed. */
type PluginOptionsFactory<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> = () => PluginOptions<O>;
interface PluginLifecycles<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> {
  /**
   * Runs as soon as possible, before the index module (module 0)'s factory is run, with very limited APIs.
   */
  preInit?: (this: Plugin<O, 'PreInit'>, api: PreInitPluginApi<O>) => any;
  /**
   * Runs after the index module (module 0)'s factory is run, with limited APIs.
   */
  init?: (this: Plugin<O, 'Init'>, api: InitPluginApi<O>) => any;
  /** Runs during `AppRegistry.runApplication` with all APIs available. */
  start?: (this: Plugin<O, 'Start'>, api: PluginApi<O>) => any;
  /** Runs when plugin is stopped. */
  stop?: (this: Plugin<O, 'Start'>, api: PluginApi<O>) => any;
}
interface Plugin<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions, S extends keyof PluginApiInLifecycleMap<O> = keyof PluginApiInLifecycleMap<O>> {
  manifest: PluginManifest;
  lifecycles: PluginLifecycles<O>;
  /**
   * Indicates whether plugin was started after initial startup sequence.
   * This can happen if the user just started the plugin in the UI.
   */
  startedLate: boolean;
  /** Errors encountered during plugin execution. */
  errors: readonly unknown[];
  /**
   * Reports an error during plugin execution.
   *
   * Reporting errors won't disable the plugin.
   * You can call {@link Plugin.stop} or {@link Plugin.disable} if needed.
   */
  reportError(e: unknown): void;
  SettingsComponent?: PluginSettingsComponent<O>;
  /** Stops and disables the plugin. */
  disable(this: Plugin<O, S>): Promise<void>;
  /** Stops the plugin. */
  stop(this: Plugin<O, S>): Promise<void>;
  /** Marks plugin as requiring reload to apply changes. */
  requireReload(this: Plugin<O, S>): void;
  /** Scoped plugin API instance. */
  api: PluginApiInLifecycleMap<O>[S];
}
/** Maps lifecycle stage names to scoped API types. */
type PluginApiInLifecycleMap<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> = {
  Register: undefined;
  PreInit: PreInitPluginApi<O>;
  Init: InitPluginApi<O>;
  Start: PluginApi<O>;
};
/** React component rendering plugin settings UI. */
interface PluginSettingsComponent<O extends PluginApiExtensionsOptions = PluginApiExtensionsOptions> extends FunctionComponent<{
  api: PluginApi<O>;
}> {}
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.plugins.getConstants': [[], {
      storageRootPath: string;
      distRootPath: string;
      defaultsOnlySlot: string;
    }];
  }
}
//#endregion
export { formatVersion as C, PluginContributorLink as S, parsePluginContributor as T, PreInitPluginApi as _, PluginApiExtensionsOptions as a, UnscopedPreInitPluginApi as b, PluginCleanupApi as c, PluginLifecycles as d, PluginManifest as f, PluginVersion as g, PluginSettingsComponent as h, PluginApiDecorator as i, PluginDecorateApi as l, PluginOptionsFactory as m, Plugin as n, PluginApiInLifecycleMap as o, PluginOptions as p, PluginApi as r, PluginCleanup as s, InitPluginApi as t, PluginDependencyConstraint as u, UnscopedInitPluginApi as v, getPluginContributorName as w, PluginContributor as x, UnscopedPluginApi as y };