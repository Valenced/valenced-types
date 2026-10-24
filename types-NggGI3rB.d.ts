import { I as Filter, i as AnyFunction, n as Metro, r as ValencedMetro } from "./types-DEG71kQs.js";
import { o as ModuleFirstRequiredCallback, s as ModuleInitializedCallback } from "./utils-Dykmqfmu.js";
import { n as RunApplicationCallback } from "./types-DF_Zi2C5.js";
import { i as CustomAsset, r as AssetOverride, t as Asset } from "./types-wMXAdSQk.js";
import { t as AssetRegisteredCallback } from "./index-BvT9yWwI.js";
import { n as _internal_d_exports$6 } from "./_internal-Dpk0X74L.js";
import { r as flux_d_exports } from "./app-start-performance-BbStgG4z.js";
import { r as import_tracker_d_exports } from "./import-tracker-BPyfV8Y8.js";
import { v as FilterResultFlag, y as _internal_d_exports$7 } from "./index-BcbC8yIa.js";
import { t as _internal_d_exports$8 } from "./_internal-BotBubl9.js";
import { i as Callable, l as InsteadHook, n as AfterHook, o as FiniteDomain, r as BeforeHook, t as AbstractNewable, y as UnknownFunction } from "./types-B-daZwj8.js";
import { i as PluginApiDecorator } from "./types-DFEAl8CS.js";
import { i as InsteadJSXCallback, r as BeforeJSXCallback, t as AfterJSXCallback } from "./index-OrcA6ApY.js";
import { It as index_d_exports, J as external_plugins_d_exports, St as PluginSystemErrorPayload, lt as AnyPlugin, pt as InternalPluginMeta, t as index_d_exports$1 } from "./index-D2BcLw5R.js";
import { C as repositories_d_exports } from "./repositories-DouXPaTj.js";
declare namespace _internal_d_exports$5 {
  export { FunctionProxyState, HookNode, InsteadHookNode, PatchedFunctionProxyState, createPatchedFunctionProxy, patchedFunctionProxyHandler, patchedFunctionProxyStates, unproxy };
}
interface FunctionProxyState<T extends UnknownFunction = UnknownFunction> {
  readonly proxy: T;
  readonly target: T;
}
interface PatchedFunctionProxyState<Key extends PropertyKey = PropertyKey, Value extends UnknownFunction = UnknownFunction> extends FunctionProxyState<Value> {
  /** Must have a function valued property whose key is {@link key}. */
  readonly parent: Record<Key, Value>;
  readonly key: Key;
  before: HookNode<BeforeHook<Value>> | undefined;
  instead: InsteadHookNode<Value> | undefined;
  after: HookNode<AfterHook<Value>> | undefined;
}
interface HookNode<Hook extends UnknownFunction = UnknownFunction> {
  /** Checked so that hook node lists are not cleared if an unpatch function is called more than once. */
  unpatched: boolean;
  /** Can be undefined only in instances that are not in a hook node list. */
  hook: Hook | undefined;
  priority: number;
  prev: HookNode<Hook> | undefined;
  next: HookNode<Hook> | undefined;
}
interface InsteadHookNode<T extends UnknownFunction = UnknownFunction> extends HookNode<InsteadHook<T>>, FunctionProxyState<T> {
  hook: InsteadHook<T> | undefined;
  priority: number;
  prev: InsteadHookNode<T> | undefined;
  next: InsteadHookNode<T> | undefined;
}
declare const patchedFunctionProxyHandler: {
  readonly apply: <T extends Callable>(state: PatchedFunctionProxyState<PropertyKey, T>, receiver: ThisParameterType<T>, args: Parameters<T>) => ReturnType<T>;
  readonly construct: <T extends AbstractNewable<never, object>>(state: PatchedFunctionProxyState<PropertyKey, T>, args: ConstructorParameters<T>, ctor: AbstractNewable) => InstanceType<T>;
  readonly defineProperty: (state: FunctionProxyState<UnknownFunction>, key: string | symbol, descriptor: PropertyDescriptor) => boolean;
  readonly deleteProperty: (state: FunctionProxyState<UnknownFunction>, key: string | symbol) => boolean;
  readonly get: (state: FunctionProxyState<UnknownFunction>, key: string | symbol, receiver: unknown) => any;
  readonly getOwnPropertyDescriptor: (state: FunctionProxyState<UnknownFunction>, key: string | symbol) => TypedPropertyDescriptor<any> | undefined;
  readonly getPrototypeOf: (state: FunctionProxyState<UnknownFunction>) => object | null;
  readonly has: (state: FunctionProxyState<UnknownFunction>, key: string | symbol) => boolean;
  readonly isExtensible: (state: FunctionProxyState<UnknownFunction>) => boolean;
  readonly ownKeys: (state: FunctionProxyState<UnknownFunction>) => (string | symbol)[];
  readonly preventExtensions: (state: FunctionProxyState<UnknownFunction>) => boolean;
  readonly set: (state: FunctionProxyState<UnknownFunction>, key: string | symbol, value: unknown, receiver: unknown) => boolean;
  readonly setPrototypeOf: (state: FunctionProxyState<UnknownFunction>, prototype: object | null) => boolean;
};
interface PatchedFunctionProxyStateMap extends WeakMap<UnknownFunction, any> {
  readonly delete: (key: UnknownFunction) => boolean;
  readonly get: <K extends UnknownFunction>(key: K) => PatchedFunctionProxyState<PropertyKey, K> | undefined;
  readonly has: (key: UnknownFunction) => boolean;
  readonly set: <K extends UnknownFunction>(key: K, value: PatchedFunctionProxyState<PropertyKey, K>) => this;
}
/** proxy -> state */
declare const patchedFunctionProxyStates: PatchedFunctionProxyStateMap;
declare function createPatchedFunctionProxy<Key extends PropertyKey, Value extends UnknownFunction>(target: Value, parent: Record<Key, Value>, key: FiniteDomain<Key>, before: HookNode<BeforeHook<Value>> | undefined, instead: InsteadHookNode<Value> | undefined, after: HookNode<AfterHook<Value>> | undefined): PatchedFunctionProxyState<Key, Value>;
declare function unproxy(state: PatchedFunctionProxyState): void;
declare namespace helpers_d_exports {
  export { MetroSnapshot, ModuleDescription, ModuleFlags, PluginDescription, bitFieldToString, describeMetro, describeModule, describePlugin, describePlugins, getPatchState };
}
/** The module definition flag bits, so a raw `flags` number can be read. */
declare const ModuleFlags: {
  Initialized: number;
  Initializing: number;
  HasError: number;
  HasImportedDefault: number;
  HasImportedAll: number;
};
interface ModuleDescription {
  id: Metro.ModuleID;
  /** Blacklisted modules are skipped by finders unless explicitly requested via {@link FilterScopes.All}. */
  blacklisted: boolean;
  dependencies: Metro.DependencyMap | undefined;
  error: unknown;
  exports: Metro.ModuleExports | undefined;
  /** The raw flags, in case you want to decode them yourself. */
  flags: number;
  flagsDecoded: string;
}
/** Describes a module the way the runtime sees it. */
declare function describeModule(id: Metro.ModuleID): ModuleDescription;
interface MetroSnapshot {
  total: number;
  initialized: number;
  uninitialized: number;
  blacklisted: number;
  /** The module currently running its factory, if any. */
  initializingId: Metro.ModuleID | undefined;
  /** Every module that threw while initializing, in the order it happened. */
  errors: [Metro.ModuleID, unknown][];
}
/** A quick look at the state of the module table. */
declare function describeMetro(): MetroSnapshot;
interface PluginDescription {
  id: string;
  name: string;
  version: string;
  status: string;
  flags: string;
  iflags: string;
  api: boolean;
  dependencies: string[];
  errors: readonly unknown[];
  /** Errors reported by the plugin's native side. */
  nativeErrors: readonly PluginSystemErrorPayload[];
}
/** Describes a registered plugin with its flags and status decoded. */
declare function describePlugin(id: string): PluginDescription | undefined;
/** Describes every registered plugin. */
declare function describePlugins(): PluginDescription[];
/** Returns the patch state of a function, if it is patched. */
declare function getPatchState(fn: UnknownFunction): PatchedFunctionProxyState | undefined;
declare function bitFieldToString(map: Record<string, number>, bitField: number): string;
declare namespace decorators_d_exports {
  export { PluginApiDecoratorStore, addPluginApiDecorator, decoratePluginApi, pApis, pDecoratorsInit, pDecoratorsPreInit, pDecoratorsStart };
}
type PluginApiDecoratorStore<T extends 'PreInit' | 'Init' | 'Start'> = WeakMap<AnyPlugin, PluginApiDecorator<any, T>[]>;
declare const pApis: Set<AnyPlugin>;
declare const pDecoratorsPreInit: PluginApiDecoratorStore<'PreInit'>;
declare const pDecoratorsInit: PluginApiDecoratorStore<'Init'>;
declare const pDecoratorsStart: PluginApiDecoratorStore<'Start'>;
declare function addPluginApiDecorator(store: PluginApiDecoratorStore<any>, plugin: AnyPlugin, decorator: PluginApiDecorator<any, any>): void;
declare function decoratePluginApi(store: PluginApiDecoratorStore<any>, plugin: AnyPlugin, meta: InternalPluginMeta): void;
//#endregion
//#region lib/plugins/src/_internal/manifest.d.ts
declare const ApiDependencyId = "valenced.api";
declare const DiscordDependencyId = "discord";
declare function isReservedDependency(id: string): boolean;
declare namespace dependency_graph_d_exports {
  export { ApiDependencyId, DiscordDependencyId, computePendingNodes, isReservedDependency, pLeafOrSingleNodes, pListOrdered, pPending, pRootNodes, resolvePluginGraph };
}
declare const pRootNodes: Set<AnyPlugin>;
declare const pLeafOrSingleNodes: Set<AnyPlugin>;
declare const pListOrdered: AnyPlugin[];
declare const pPending: Set<AnyPlugin>;
declare function computePendingNodes(): void;
declare function resolvePluginGraph(plugin: AnyPlugin): void;
declare namespace caches_d_exports$1 {
  export { Blacklist, Cache$1 as Cache, Finds, Uncached$1 as Uncached, cache$1 as cache, cacheBlacklistedModule, cacheFilterNotFound, cacheFilterResultForId, getBlacklistedModules, getFilterMatches };
}
declare const Uncached$1: Cache$1;
declare let cache$1: Cache$1;
type Blacklist = Metro.ModuleID[];
type Finds = Record<Filter['key'], Record<Metro.ModuleID, FilterResultFlag> | null>;
interface Cache$1 {
  blacklist: Blacklist;
  finds: Finds;
  version: number;
  /** Indicates if the loader cache on an outdated format */
  outdated?: boolean;
}
declare function cacheBlacklistedModule(id: Metro.ModuleID): boolean;
declare function cacheFilterResultForId(key: keyof Finds, id: Metro.ModuleID, flag: FilterResultFlag): FilterResultFlag;
declare function cacheFilterNotFound(key: keyof Finds): void;
declare const getFilterMatches: (key: keyof Finds) => Finds[keyof Finds] | undefined;
declare const getBlacklistedModules: () => Blacklist;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.caches.modules.read': [[], Cache$1 | null];
    'valenced.caches.modules.write': [[blacklist: Blacklist, finds: Finds], void];
  }
}
declare namespace _internal_d_exports$4 {
  export { ExposedJSMethods };
}
/** Every JS method native can call, keyed by the name it was registered under. */
declare const ExposedJSMethods: {
  [methodName: string]: AnyFunction;
};
declare namespace patches_d_exports {
  export { loadModuleFromSegment, mDeps, mInitialized, mInitializingId, mList, mModuleIdToSegmentId, mSegmentDefiners, mUninitialized };
}
declare let mInitializingId: Metro.ModuleID | undefined;
/** Uninitialized IDs (not blacklisted) */
declare const mUninitialized: Set<number>;
/** Initialized IDs (not blacklisted) */
declare const mInitialized: Set<number>;
declare const mDeps: Map<number, Metro.DependencyMap>;
declare const mList: ValencedMetro.ModuleList;
/**
 * Metro allows a bundle to be split into segments.
 *
 * A segment registers itself with `globalThis.__registerSegment(segmentId, moduleDefiner, moduleIds?)`:
 * - `moduleDefiner(id)` is a callback that triggers the (deferred) `__d(...)`
 *   call for module `id` belonging to this segment.
 * - `moduleIds` (optional, non-zero segments) is the list of module IDs that
 *   live in this segment, so the runtime can route requires to the right
 *   definer before the segment has actually defined them.
 *
 * When `metroRequire(id)` is called and `id` is not yet in `mList`, we look up
 * its segment, invoke that segment's definer (which is expected to call
 * `__d(...)` synchronously), and retry the lookup.
 *
 * @see https://github.com/facebook/metro/blob/6d63660/packages/metro-runtime/src/polyfills/require.js#L387
 */
declare const mSegmentDefiners: Array<((moduleId: Metro.ModuleID) => void) | undefined>;
declare const mModuleIdToSegmentId: Map<number, number>;
/**
 * Resolve a module that is not yet present in `mList` by invoking its segment definer (if available)
 *
 * @returns The freshly-registered definition or `undefined`.
 */
declare function loadModuleFromSegment(moduleId: Metro.ModuleID): ValencedMetro.ModuleDefinition | undefined;
declare namespace runtime_d_exports {
  export { HasError, HasImportedAll, HasImportedDefault, Initialized, Initializing, global, mErrorChain, metroImportAll, metroImportDefault, metroRequire };
}
declare const mErrorChain: [Metro.ModuleID, unknown][];
declare const Initialized: number;
declare const HasError: number;
declare const HasImportedDefault: number;
declare const HasImportedAll: number;
declare const Initializing: number;
declare const global: typeof globalThis;
declare const metroRequire: Metro.Require;
declare const metroImportDefault: Metro.RequireFn;
declare const metroImportAll: Metro.RequireFn;
declare namespace _internal_d_exports$3 {
  export { executeInitializeSubscriptions, executeRequireSubscriptions, sInitialize, sInitializeAny, sRequire, sRequireAny };
}
declare const sRequireAny: Set<ModuleFirstRequiredCallback>;
declare const sRequire: Map<number, Set<ModuleFirstRequiredCallback>>;
declare const sInitializeAny: Set<ModuleInitializedCallback>;
declare const sInitialize: Map<number, Set<ModuleInitializedCallback>>;
declare function executeRequireSubscriptions(id: Metro.ModuleID): void;
declare function executeInitializeSubscriptions(id: Metro.ModuleID, exports: Metro.ModuleExports): void;
declare namespace _internal_d_exports$2 {
  export { jPatches };
}
declare const jPatches: Map<"RCTImage" | "RCTScrollView" | "RCTText" | "RCTView" | "a" | "abbr" | "address" | "animate" | "animateMotion" | "animateTransform" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "center" | "circle" | "cite" | "clipPath" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "defs" | "del" | "desc" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "ellipse" | "em" | "embed" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "fieldset" | "figcaption" | "figure" | "filter" | "footer" | "foreignObject" | "form" | "g" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "image" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "line" | "linearGradient" | "link" | "main" | "map" | "mark" | "marker" | "mask" | "menu" | "menuitem" | "meta" | "metadata" | "meter" | "mpath" | "nav" | "noindex" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "path" | "pattern" | "picture" | "polygon" | "polyline" | "pre" | "progress" | "q" | "radialGradient" | "rect" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "search" | "section" | "select" | "set" | "slot" | "small" | "source" | "span" | "stop" | "strong" | "style" | "sub" | "summary" | "sup" | "svg" | "switch" | "symbol" | "table" | "tbody" | "td" | "template" | "text" | "textPath" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "tspan" | "u" | "ul" | "use" | "var" | "video" | "view" | "wbr" | "webview" | import("react").ComponentClass<any, any> | import("react").FunctionComponent<any>, {
  before?: Set<BeforeJSXCallback<any>>;
  after?: Set<AfterJSXCallback<any>>;
  instead?: Set<InsteadJSXCallback<any>>;
}>;
declare namespace _internal_d_exports$1 {
  export { sAfterRunApplication, sBeforeRunApplication };
}
declare const sBeforeRunApplication: Set<RunApplicationCallback>;
declare const sAfterRunApplication: Set<RunApplicationCallback>;
declare namespace caches_d_exports {
  export { Cache, Uncached, cache, cacheAsset };
}
declare const Uncached: Cache;
declare let cache: Cache;
interface Cache {
  data: {
    [key: Asset['name']]: {
      [key: Asset['type']]: Metro.ModuleID;
    };
  };
  version: number;
  /** Indicates if the loader cache on an outdated format */
  outdated?: boolean;
}
declare function cacheAsset(asset: Asset, moduleId: Metro.ModuleID): void;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.caches.assets.read': [[], Cache | null];
    'valenced.caches.assets.write': [[data: Cache['data']], void];
  }
}
declare namespace _internal_d_exports {
  export { aCustoms, aNameOverrides, aOverrides, aSubs, aSubsAny, executeAssetSubscriptions, resolveAssetOverride };
}
declare const aCustoms: Set<CustomAsset>;
declare const aOverrides: WeakMap<Asset, AssetOverride>;
declare const aNameOverrides: Map<string, AssetOverride>;
declare const aSubsAny: Set<AssetRegisteredCallback>;
declare const aSubs: Map<string, Set<AssetRegisteredCallback>>;
declare function executeAssetSubscriptions(asset: Asset): void;
/** Resolves an override, keeping the original dimensions when the override has none. */
declare function resolveAssetOverride(asset: Asset): {
  uri: string;
  width: number | undefined;
  height: number | undefined;
  scale: number;
} | undefined;
//#endregion
//#region lib/hidden/src/types.d.ts
/**
 * The hidden API. Anything in here can change or disappear in any build.
 *
 * Everything here is internal state of the loader and its libraries.
 * It exists so you can look at what Valenced is doing at runtime.
 *
 * Namespaces are lazy, so reading one before its library is ready may throw (e.g. Discord ones need the index module).
 */
interface HiddenApi {
  assets: HiddenApiAssets;
  /** `@valenced/components`' shared styles. */
  components: typeof _internal_d_exports$6;
  discord: HiddenApiDiscord;
  /** Read-only conveniences built on top of the namespaces below. */
  helpers: typeof helpers_d_exports;
  modules: HiddenApiModules;
  /** Patch topology: proxy states, the proxy handler, (un)proxy internals. */
  patcher: typeof _internal_d_exports$5;
  plugins: HiddenApiPlugins;
  react: HiddenApiReact;
}
interface HiddenApiPlugins {
  /** The unscoped API object plugins get, and its guards. */
  apis: typeof index_d_exports;
  /** API decorator stores, keyed per lifecycle. */
  decorators: typeof decorators_d_exports;
  /** Start ordering: node sets, the pending queue, reserved dependency IDs. */
  dependencyGraph: typeof dependency_graph_d_exports;
  /** Bridge consumers for natively-managed plugins (install, uninstall, sync). */
  externalPlugins: typeof external_plugins_d_exports;
  /** The plugin registry, emitter, flags and lifecycle runners. */
  internal: typeof index_d_exports$1;
  /** Repository listing, resolution and install execution. */
  repositories: typeof repositories_d_exports;
}
interface HiddenApiModules {
  /** The persisted module find cache and its writers. */
  caches: typeof caches_d_exports$1;
  /** Filter running, result flags and the no-default-export cache. */
  finders: typeof _internal_d_exports$7;
  metro: HiddenApiModulesMetro;
  /** The registry of JS methods native can call. */
  native: typeof _internal_d_exports$4;
}
interface HiddenApiModulesMetro {
  /** The module table itself: `mList`, initialized/uninitialized sets, deps, segments. */
  patches: typeof patches_d_exports;
  /** Our `__r` implementation, the module flag bits and `mErrorChain`. */
  runtime: typeof runtime_d_exports;
  /** Module require/initialize subscription sets. */
  subscriptions: typeof _internal_d_exports$3;
}
interface HiddenApiDiscord {
  /** Flux dispatch interceptors, per event type and for all events. */
  flux: typeof flux_d_exports;
  /** The source path to module ID index. */
  importTracker: typeof import_tracker_d_exports;
  /** Injected settings items/sections and the refresh counters. */
  settings: typeof _internal_d_exports$8;
}
interface HiddenApiReact {
  /** Element type patches applied on every `jsx()` call. */
  jsxRuntime: typeof _internal_d_exports$2;
  /** `runApplication` callback sets. */
  native: typeof _internal_d_exports$1;
}
interface HiddenApiAssets {
  /** The persisted asset name to module ID cache. */
  caches: typeof caches_d_exports;
  /** Registered custom assets and asset overrides. */
  internal: typeof _internal_d_exports;
}
declare module '@valenced/plugins/types' {
  interface UnscopedPreInitPluginApi {
    hidden?: HiddenApi;
  }
}
//#endregion
export { HiddenApiModulesMetro as a, HiddenApiModules as i, HiddenApiAssets as n, HiddenApiPlugins as o, HiddenApiDiscord as r, HiddenApiReact as s, HiddenApi as t };