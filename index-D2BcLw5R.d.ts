import { G as DiscordModules } from "./types-DEG71kQs.js";
import { a as PluginApiExtensionsOptions, b as UnscopedPreInitPluginApi, f as PluginManifest, g as PluginVersion, m as PluginOptionsFactory, n as Plugin, p as PluginOptions, s as PluginCleanup, v as UnscopedInitPluginApi, y as UnscopedPluginApi } from "./types-DFEAl8CS.js";
import { i as MethodResult, n as MethodArgs, r as MethodName } from "./index-Cy23VD1B.js";
declare namespace index_d_exports$1 {
  export { guardIndexInitialized, pUnscopedApi, spreadDescriptors };
}
declare const pUnscopedApi: UnscopedPreInitPluginApi | UnscopedInitPluginApi | UnscopedPluginApi;
declare function guardIndexInitialized(name: string): void;
declare function spreadDescriptors<T extends object, U extends object>(from: T, to: U): T & U;
//#endregion
//#region lib/plugins/src/_internal/constants.d.ts
declare const storageRootPath: string, distRootPath: string, defaultsOnlySlot: string;
/** Bundle version applied to internal plugins. */
declare const InternalPluginVersion: PluginVersion;
/** Timeout in milliseconds before force-stopping a plugin. */
declare const MaxStopWaitTime = 5000;
declare const PluginStatus: {
  PreIniting: number;
  PreInited: number;
  Initing: number;
  Inited: number;
  Starting: number;
  Started: number;
  Stopping: number;
};
declare const PluginFlags: {
  Enabled: number;
  RequiredByUser: number;
  PendingReload: number;
  StartedLate: number;
  /**
   * Newer version on disk while running version remains active until reload.
   *
   * JS-side flag.
   */
  PendingUpdate: number;
  /**
   * Session-skipped plugins. Enabled, but will not execute during current session.
   * Caused by missing, unsatisfied, or failed dependencies, or bad manifest/code.
   *
   * JS-side flag.
   */
  Failed: number;
};
/** Highest prepared lifecycle stage for plugin API. */
declare const PluginApiLevel: {
  readonly None: 0;
  readonly PreInit: 1;
  readonly Init: 2;
  readonly Start: 3;
};
declare const InternalPluginFlags: {
  Internal: number;
  /** Plugin can't be stopped, disabled, or uninstalled. */
  Essential: number;
  /**
   * Plugin implicitly decorates all plugins' APIs, except for other API plugins.
   * API plugins do not decorate each other unless explicitly declared as dependencies.
   */
  API: number;
};
//#endregion
//#region lib/plugins/src/_internal/errors.d.ts
/** Error payload shared by native method failures, boot errors, and install events. */
interface PluginSystemErrorPayload {
  /** Error code identifier from {@link PluginErrorCodes} or arbitrary string. */
  code: string;
  message: string;
  stack?: string | null;
  details?: Record<string, unknown>;
}
declare const PluginErrorCodes: {
  readonly ManifestInvalid: 'MANIFEST_INVALID';
  readonly DependencyMissing: 'DEPENDENCY_MISSING';
  readonly DependencyUnsatisfied: 'DEPENDENCY_UNSATISFIED';
  readonly DependencyFailed: 'DEPENDENCY_FAILED';
  readonly DependencyCycle: 'DEPENDENCY_CYCLE';
  readonly LoadFailed: 'LOAD_FAILED';
  readonly PluginError: 'PLUGIN_ERROR';
  readonly InstallInvalidZip: 'INSTALL_INVALID_ZIP';
  readonly InstallVerifyFailed: 'INSTALL_VERIFY_FAILED';
  readonly InstallMismatch: 'INSTALL_MISMATCH';
  readonly InstallFailed: 'INSTALL_FAILED';
  readonly InvalidArgument: 'INVALID_ARGUMENT';
  readonly NotFound: 'NOT_FOUND';
  readonly NotAllowed: 'NOT_ALLOWED';
  readonly DependenciesUnsatisfied: 'DEPENDENCIES_UNSATISFIED';
  readonly ResolveFailed: 'RESOLVE_FAILED';
  readonly StorageFailed: 'STORAGE_FAILED';
  readonly Unknown: 'UNKNOWN';
};
declare function isPluginSystemErrorPayload(e: unknown): e is PluginSystemErrorPayload;
declare function toPluginSystemErrorPayload(e: unknown): PluginSystemErrorPayload;
declare function formatPluginSystemErrorPayload(e: unknown): string;
/** Throwable carrying error code alongside message. */
declare class PluginError extends Error implements PluginSystemErrorPayload {
  code: string;
  details?: Record<string, unknown>;
  constructor(error: PluginSystemErrorPayload);
}
/** Plugin system native method failure. Thrown by `callPluginSystemMethod`. */
declare class PluginSystemError extends PluginError {
  constructor(error: PluginSystemErrorPayload);
}
//#endregion
//#region lib/plugins/src/_internal/types.d.ts
type AnyPlugin = Plugin<any, any>;
type InternalPluginManifest = Omit<PluginManifest, 'version' | 'format' | 'dependencies'> & Partial<Pick<PluginManifest, 'format' | 'dependencies'>> & {
  /**
   * Plugin version. Defaults to the bundle version.
   * Only stubs (see {@link InternalPluginManifestExtras.defaultSource}) may set it in `manifest.json`, as a string like `1.0.0`.
   */
  version?: PluginManifest['version'] | string;
} & InternalPluginManifestExtras;
/** Extra keys from an internal plugin's `manifest.json` for the build and registration system. */
interface InternalPluginManifestExtras {
  /**
   * Default source for the plugin.
   * @see {@link PluginSource}
   */
  defaultSource?: {
    repo: string;
    channel?: string;
    held?: boolean;
  } | boolean;
  /** The plugin cannot be stopped, disabled, or uninstalled. Implies {@link enabledByDefault}. */
  essential?: boolean;
  /**
   * Enabled unless the user explicitly disables the plugin.
   * Set to `'dev'` to apply to development builds only.
   */
  enabledByDefault?: boolean | 'dev' | (string & {});
  /** The plugin decorates every other plugin's API. */
  api?: boolean;
  /** Build system configuration. */
  build?: {
    devOnly?: boolean;
  };
}
interface InternalPluginMeta {
  /**
   * Whether the plugin has an implementation.
   *
   * Internal plugins register their manifests before pre-init, so the dependency graph is complete before dependency resolution.
   * However, plugin options may only arrive after certain stages. This is `true` once the options have been set.
   */
  attached: boolean;
  /** Handles critical errors during plugin execution. */
  handleError: (e: unknown) => Promise<void>;
  promises: Promise<void>[];
  cleanups: PluginCleanup[];
  iflags: number;
  apiLevel: number;
  /** Installed optional dependencies that are unsatisfied reported by native. */
  unsatisfiedOptionalDependencies: ReadonlySet<string>;
  /** Dependency IDs this was linked to (JS side only) to track decorators. */
  linkedDependencies: Set<string>;
  options: PluginOptions<any>;
  optionsFactory?: PluginOptionsFactory<any>;
  status: number;
  /** @see {@link addPluginFlags} and {@link adoptPluginFlags} for different methods of applying flags. */
  readonly flags: number;
  nativeErrors: readonly PluginSystemErrorPayload[];
  /** Plugin provenance. `repo: null` or missing indicates sideloaded plugin. Internal plugins don't have this field. */
  source?: PluginSource | null;
  /** Uninstalling restores an internal plugin with the same ID, reported by native. */
  hasStub?: boolean;
  /** Version installed on disk that runs after a reload, set with {@link PluginFlags.PendingUpdate}. */
  pendingVersion?: string;
}
interface PluginSource {
  repo: string | null;
  channel: string;
  /** Update hold flag. Affects dependency resolution. */
  held: boolean;
}
/** Staged and validated sideload plugin awaiting user confirmation. */
interface PluginInstallReadyEvent {
  /** Single-use confirmation token. */
  token: string;
  manifest: {
    id: string;
    name: string;
    description: string;
    author: string;
    version: string;
    icon?: string | null;
  };
  /** Installed version this replaces, or null for a fresh install. */
  replaces: string | null;
}
type PluginInstallEvent = {
  error: false;
  manifest: PluginManifest;
  updated: boolean;
  pending: false;
} | {
  /**
   * Plugin applied on disk only. Running version untouched until next reload.
   */
  error: false;
  pending: true;
  id: string;
  version: string;
} | {
  error: PluginSystemErrorPayload;
};
/** Unsatisfied dependency reported by native when enabling is refused. */
interface DependencyProblem {
  id: PluginManifest['id'];
  /** Declared range (`*` for any). */
  required: string;
  /** Installed version, or `null` when missing. */
  installed: string | null;
  enabled: boolean;
}
interface PluginStateObject {
  enabled?: boolean;
  pendingReload?: boolean;
  startedLate?: boolean;
  requiredByUser?: boolean;
}
/** Flags of every loaded slot, keyed by slot ID then plugin ID. */
interface PluginSlotStates {
  [slot: string]: {
    [id: PluginManifest['id']]: PluginStateObject;
  };
}
//#endregion
//#region lib/plugins/src/_internal/dependencies.d.ts
/**
 * Resolves dependencies ordered before plugin.
 * Optional dependencies are included only when enabled and satisfied.
 *
 * @param throwOnMissing Throws when required dependency is unregistered.
 */
declare function getPluginDependencies(plugin: AnyPlugin, throwOnMissing?: boolean): AnyPlugin[];
/** Required dependency IDs that aren't registered preventing plugin activation. */
declare function getMissingPluginDependencies(plugin: AnyPlugin): string[];
/**
 * Derives dependent plugins from manifest dependencies and native satisfaction state.
 *
 * If you're looking for the runtime state, use {@link getLinkedDependents} instead.
 *
 * @param includeOptionals Includes optional dependents that could be linked.
 */
declare function getPluginDependents(plugin: AnyPlugin, includeOptionals?: boolean): AnyPlugin[];
/**
 * {@link getPluginDependents} but for the currently linked dependents of a running plugin.
 * Linked optional dependents are always included.
 */
declare function getLinkedDependents(plugin: AnyPlugin): AnyPlugin[];
/** Optional dependents of this plugin that are running and linked to it. */
declare function getLinkedOptionalDependents(plugin: AnyPlugin): AnyPlugin[];
/** Dependencies of this plugin that cannot be linked right now: not registered, or version unsatisfied. */
declare function getUnsatisfiedPluginDependencies(plugin: AnyPlugin): string[];
/**
 * Enabled dependencies left without enabled dependents once plugin is disabled, transitively.
 * Skips dependencies required by user or enabled by default.
 * Ordered dependents first, so disabling in order never cascades.
 */
declare function getUnusedPluginDependencies(plugin: AnyPlugin): AnyPlugin[];
/** Running dependents that declare this plugin as an optional dependency but didn't link it. */
declare function getRelinkableDependents(plugin: AnyPlugin): AnyPlugin[];
//#endregion
//#region lib/plugins/src/_internal/emitter.d.ts
declare const pEmitter: DiscordModules.Utils.TypedEventEmitter<{
  register: [AnyPlugin, PluginOptions<any>, update?: true];
  unregister: [AnyPlugin];
  /** Flags changed. */
  stateUpdate: [AnyPlugin];
  /** Lifecycle status changed.*/
  statusUpdate: [AnyPlugin];
  /** Metadata changed that isn't a state or status change. */
  metadataUpdate: [AnyPlugin];
  install: [PluginInstallEvent];
  installReady: [PluginInstallReadyEvent];
}>;
declare namespace external_plugins_d_exports {
  export { confirmInstallFile, registerExternalPlugin, registerExternalPlugins, resyncPluginSources, setUpdatesPaused, uninstallExternalPlugin };
}
interface ExternalPlugin {
  manifest: PluginManifest;
  script?: string;
  internal?: boolean;
  essential?: boolean;
  enabledByDefault?: boolean;
  api?: boolean;
  /**
   * Session-skipped plugin failing native boot discovery.
   * Registered for UI visibility without executing during active session.
   */
  failed?: boolean;
  /** Plugin provenance. Missing or `repo: null` means sideloaded. */
  source?: PluginSource | null;
  /** Uninstalling restores an internal plugin with the same ID. */
  hasStub?: boolean;
  /** Declared optional dependencies native sees installed at an incompatible version. */
  unsatisfiedOptionalDependencies?: string[];
  /** Native boot and validation errors. */
  errors?: PluginSystemErrorPayload[];
}
/** Registers native event listeners and imports native-discovered plugins. */
declare function registerExternalPlugins(): void;
/** Registers external plugin instance from native descriptor. */
declare function registerExternalPlugin(external: ExternalPlugin): string | undefined;
/** Updates update-hold state for plugin. */
declare function setUpdatesPaused(plugin: AnyPlugin, paused: boolean): Promise<void>;
/**
 * Uninstalls an external plugin, removing files, state, and runtime registration.
 * Uninstalling updates of a stub registers the restored stub like a fresh install.
 *
 * Optional dependents stopped by the disable cascade are restarted. Required dependents stay disabled.
 */
declare function uninstallExternalPlugin(plugin: AnyPlugin): Promise<void>;
/** Resyncs plugin source metadata from native registry. */
declare function resyncPluginSources(): Promise<void>;
/** Submits user response to staged sideload installation prompt. */
declare function confirmInstallFile(token: string, accepted: boolean): Promise<{
  result: 'installed' | 'pending' | 'cancelled';
}>;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.plugins.list': [[], ExternalPlugin[] | null];
    'valenced.plugins.uninstall': [[string], {
      /** Set if a stub has to be restored. */
      restored: ExternalPlugin | null;
    }];
    'valenced.plugins.installFile': [[], null];
    'valenced.plugins.confirmInstallFile': [[token: string, accepted: boolean], {
      result: 'installed' | 'pending' | 'cancelled';
    }];
  }
}
//#endregion
//#region lib/plugins/src/_internal/lifecycles.d.ts
/** Handles plugin runtime error, logs diagnostics, and disables non-essential plugin if {@link critical}. */
declare function handlePluginError(e: unknown, plugin: AnyPlugin, critical: boolean): Promise<void>;
/** Disables plugin in active slot, cascading stop and disable to dependents. */
declare function disablePluginInActiveSlot(plugin: AnyPlugin): Promise<void>;
/** Enables plugin in active slot after ensuring required dependencies are enabled. */
declare function enablePluginInActiveSlot(plugin: AnyPlugin, requiredByUser: boolean): Promise<void>;
/** Starts plugin and unresolved dependencies after initial boot sequence. */
declare function runPluginLate(plugin: AnyPlugin): Promise<void>;
declare function preInitPlugin(plugin: AnyPlugin): Promise<void>;
declare function initPlugin(plugin: AnyPlugin): Promise<void>;
declare function startPlugin(plugin: AnyPlugin): Promise<void>;
/**
 * Stops running plugin, cascading stop to linked dependents and executing cleanups.
 *
 * Gated on the plugin *running*, which is neither "enabled" nor "started":
 * - enabled is a setup fact, and a plugin that was just disabled is still running — that is exactly when native asks.
 * - started is too narrow. A plugin that threw in `start` never gets {@link Status.Started}, yet it still holds
 *   whatever `preInit` and `init` left behind, and is the plugin that most needs tearing down.
 *
 * @param stopNative Pass `false` when native asked for the stop and will end its own half.
 */
declare function stopPlugin(plugin: AnyPlugin, stopNative?: boolean): Promise<void>;
//#endregion
//#region lib/plugins/src/_internal/native.d.ts
declare function callPluginSystemMethod<N extends MethodName>(name: N, args: MethodArgs<N>): Promise<MethodResult<N>>;
declare function callPluginSystemMethodSync<N extends MethodName>(name: N, args: MethodArgs<N>): MethodResult<N>;
//#endregion
//#region lib/plugins/src/_internal/predicates.d.ts
declare function isPluginEnabled(plugin: AnyPlugin): boolean;
declare function isPluginStartedLate(plugin: AnyPlugin): boolean;
declare function isPluginEssential({ iflags }: InternalPluginMeta): boolean;
declare function isPluginInternal({ iflags }: InternalPluginMeta): boolean;
/** Whether uninstalling restores an internal plugin with the same ID. */
declare function hasPluginStub({ hasStub }: InternalPluginMeta): boolean;
declare function isPluginErrored(plugin: AnyPlugin): boolean;
/**
 * Whether a plugin has started. Try to use in UI only.
 * For control flows, you likely want to invert {@link isPluginStopped}.
 */
declare function isPluginStarted(plugin: AnyPlugin): boolean;
declare function isPluginStopped(plugin: AnyPlugin): boolean;
declare function isPluginPendingReload(plugin: AnyPlugin): boolean;
declare function isPluginPendingUpdate(plugin: AnyPlugin): boolean;
/** @see {@link Flag.Failed} */
declare function isPluginFailed(plugin: AnyPlugin): boolean;
/**
 * Whether a plugin has an implementation.
 *
 * @see {@link InternalPluginMeta.attached}
 */
declare function isPluginAttached(plugin: AnyPlugin): boolean;
/**
 * Validates if a plugin can start:
 *
 * 1. Attached
 * 2. Enabled
 * 3. Not {@link Flag.PendingReload}. {@link Flag.PendingUpdate} does not block execution.
 * 4. Not session-skipped
 */
declare function requirePluginStartableState(plugin: AnyPlugin): void;
/** @see {@link requirePluginStartableState} */
declare function isPluginStartable(plugin: AnyPlugin): boolean;
//#endregion
//#region lib/plugins/src/_internal/registry.d.ts
declare const pList: Map<string, AnyPlugin>;
/**
 * Registers a plugin.
 *
 * @param manifest Plugin manifest.
 * @param options Plugin options or deferred factory.
 * @param defflags Default flags applied when persisted state is absent.
 */
declare function registerPlugin<O extends PluginApiExtensionsOptions>(manifest: PluginManifest, options: PluginOptions<O> | PluginOptionsFactory<O>, defflags: number): string;
/**
 * Registers an internal plugin.
 * If not passed, version, manifest format, and reserved dependencies are filled automatically.
 *
 * The manifest has usually been registered already by {@link registerInternalManifest} at pre-init,
 * in which case this attaches the implementation to the same instance rather than creating a new one.
 *
 * @see {@link registerPlugin}
 *
 * @param manifest Partial or complete plugin manifest.
 * @param defflags Defaults to what the manifest declares.
 * @param iflags Defaults to what the manifest declares.
 */
declare function registerInternalPlugin<O extends PluginApiExtensionsOptions>(manifest: InternalPluginManifest, options: PluginOptions<O> | PluginOptionsFactory<O>, defflags?: number, iflags?: number): string;
/**
 * Registers an internal plugin's manifest without its implementation.
 *
 * The plugin cannot run until its implementation is registered via {@link registerInternalPlugin}.
 */
declare function registerInternalManifest(manifest: InternalPluginManifest): string;
/**
 * Removes a registered plugin.
 *
 * @param keepFlags Retains slot flags. Ysed fior when an installed copy replaces a bundled stub with the same ID.
 */
declare function unregisterPlugin(plugin: AnyPlugin, keepFlags?: boolean): void;
/** Internal metadata for registered plugin. Throws when unregistered. */
declare function getInternalPluginMeta(plugin: AnyPlugin): InternalPluginMeta;
//#endregion
//#region lib/plugins/src/_internal/state.d.ts
/** Slot the user chose. The UI reads and edits it. */
declare const ActiveSlot: string;
/** Slot this boot runs on. */
declare const BootSlot: string;
/** Whether boot ignores the chosen slot to load default plugins only. */
declare const isDefaultsOnlyBoot: boolean;
declare function isPluginEnabledInActiveSlot(plugin: AnyPlugin): boolean;
declare function isPluginRequiredByUserInActiveSlot(plugin: AnyPlugin): boolean;
/** Whether plugin is enabled when no persisted state exists. */
declare function isPluginEnabledByDefault(plugin: AnyPlugin): boolean;
declare function pluginStateToFlags(state: PluginStateObject): number;
declare function flagsToPluginState(flags: number): PluginStateObject;
/** Applies flags to a plugin in a specific slot. */
declare function adoptSlotFlags(slot: string, id: PluginManifest['id'], flags: number): void;
/** Adds flags and reports them to native. */
declare function addPluginFlags(plugin: AnyPlugin, flags: number): void;
/** Adds flags native has already set, or is setting as part of a call in-flight. */
declare function adoptPluginFlags(plugin: AnyPlugin, flags: number): void;
/**
 * Persists enabled state to native.
 *
 * Throws `PluginSystemError` when native rejects state change (e.g. `DEPENDENCIES_UNSATISFIED`).
 */
declare function writePluginEnabledState(plugin: AnyPlugin, enabled: boolean, requiredByUser: boolean): Promise<void>;
/** Deletes plugin storage directory on filesystem. */
declare function deleteStorageForPlugin(plugin: Plugin<any, any>): Promise<void>;
/**
 * Selects the slot for the next boot.
 *
 * @param oneShot Applies to the next boot only.
 */
declare function setActiveSlot(slot: string, oneShot?: boolean): void;
/** Requests defaults-only mode for subsequent boot. */
declare function requestNextBootDefaultsOnly(): void;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    /**
     * Starts a plugin's native half, stopping it first if it is running.
     * Throws with `RELOAD_REQUIRED` when the stop could not undo the plugin cleanly.
     */
    'valenced.plugins.restart': [[id: PluginManifest['id']], null];
    /** Stops a plugin's native half. */
    'valenced.plugins.stop': [[id: PluginManifest['id']], null];
    /** Flags of every loaded slot. */
    'valenced.plugins.states.read': [[], PluginSlotStates];
    'valenced.plugins.states.getSlots': [[], {
      active: string;
      oneShot?: string;
      slots: string[];
    }];
    'valenced.plugins.states.setActiveSlot': [[slot: string, oneShot?: boolean], null];
    /**
     * Persists plugin enabled state. Rejects with `DEPENDENCIES_UNSATISFIED` when required
     * dependencies are missing, disabled, or incompatible.
     */
    'valenced.plugins.setEnabled': [[id: PluginManifest['id'], enabled: boolean, requiredByUser: boolean], null];
    /** JS reporting the flags it changed in a slot. Answers with them. */
    'valenced.plugins.states.update': [[slot: string, id: PluginManifest['id'], state: PluginStateObject], PluginStateObject];
  }
}
declare namespace index_d_exports {
  export { ActiveSlot, AnyPlugin, BootSlot, DependencyProblem, InternalPluginFlags, InternalPluginManifest, InternalPluginManifestExtras, InternalPluginMeta, InternalPluginVersion, MaxStopWaitTime, PluginApiLevel, PluginError, PluginErrorCodes, PluginFlags, PluginInstallEvent, PluginInstallReadyEvent, PluginSlotStates, PluginSource, PluginStateObject, PluginStatus, PluginSystemError, PluginSystemErrorPayload, addPluginFlags, adoptPluginFlags, adoptSlotFlags, callPluginSystemMethod, callPluginSystemMethodSync, confirmInstallFile, defaultsOnlySlot, deleteStorageForPlugin, disablePluginInActiveSlot, distRootPath, enablePluginInActiveSlot, flagsToPluginState, formatPluginSystemErrorPayload, getInternalPluginMeta, getLinkedDependents, getLinkedOptionalDependents, getMissingPluginDependencies, getPluginDependencies, getPluginDependents, getRelinkableDependents, getUnsatisfiedPluginDependencies, getUnusedPluginDependencies, guardIndexInitialized, handlePluginError, hasPluginStub, initPlugin, isDefaultsOnlyBoot, isPluginAttached, isPluginEnabled, isPluginEnabledByDefault, isPluginEnabledInActiveSlot, isPluginErrored, isPluginEssential, isPluginFailed, isPluginInternal, isPluginPendingReload, isPluginPendingUpdate, isPluginRequiredByUserInActiveSlot, isPluginStartable, isPluginStarted, isPluginStartedLate, isPluginStopped, isPluginSystemErrorPayload, pEmitter, pList, pUnscopedApi, pluginStateToFlags, preInitPlugin, registerExternalPlugin, registerExternalPlugins, registerInternalManifest, registerInternalPlugin, registerPlugin, requestNextBootDefaultsOnly, requirePluginStartableState, resyncPluginSources, runPluginLate, setActiveSlot, setUpdatesPaused, spreadDescriptors, startPlugin, stopPlugin, storageRootPath, toPluginSystemErrorPayload, uninstallExternalPlugin, unregisterPlugin, writePluginEnabledState };
}
//#endregion
export { uninstallExternalPlugin as $, isPluginPendingReload as A, PluginFlags as At, enablePluginInActiveSlot as B, hasPluginStub as C, formatPluginSystemErrorPayload as Ct, isPluginEssential as D, InternalPluginVersion as Dt, isPluginErrored as E, InternalPluginFlags as Et, isPluginStopped as F, guardIndexInitialized as Ft, startPlugin as G, initPlugin as H, requirePluginStartableState as I, index_d_exports$1 as It, external_plugins_d_exports as J, stopPlugin as K, callPluginSystemMethod as L, pUnscopedApi as Lt, isPluginStartable as M, defaultsOnlySlot as Mt, isPluginStarted as N, distRootPath as Nt, isPluginFailed as O, MaxStopWaitTime as Ot, isPluginStartedLate as P, storageRootPath as Pt, setUpdatesPaused as Q, callPluginSystemMethodSync as R, spreadDescriptors as Rt, unregisterPlugin as S, PluginSystemErrorPayload as St, isPluginEnabled as T, toPluginSystemErrorPayload as Tt, preInitPlugin as U, handlePluginError as V, runPluginLate as W, registerExternalPlugins as X, registerExternalPlugin as Y, resyncPluginSources as Z, getInternalPluginMeta as _, PluginSource as _t, adoptPluginFlags as a, getPluginDependents as at, registerInternalPlugin as b, PluginErrorCodes as bt, flagsToPluginState as c, getUnusedPluginDependencies as ct, isPluginEnabledInActiveSlot as d, InternalPluginManifest as dt, pEmitter as et, isPluginRequiredByUserInActiveSlot as f, InternalPluginManifestExtras as ft, writePluginEnabledState as g, PluginSlotStates as gt, setActiveSlot as h, PluginInstallReadyEvent as ht, addPluginFlags as i, getPluginDependencies as it, isPluginPendingUpdate as j, PluginStatus as jt, isPluginInternal as k, PluginApiLevel as kt, isDefaultsOnlyBoot as l, AnyPlugin as lt, requestNextBootDefaultsOnly as m, PluginInstallEvent as mt, ActiveSlot as n, getLinkedOptionalDependents as nt, adoptSlotFlags as o, getRelinkableDependents as ot, pluginStateToFlags as p, InternalPluginMeta as pt, confirmInstallFile as q, BootSlot as r, getMissingPluginDependencies as rt, deleteStorageForPlugin as s, getUnsatisfiedPluginDependencies as st, index_d_exports as t, getLinkedDependents as tt, isPluginEnabledByDefault as u, DependencyProblem as ut, pList as v, PluginStateObject as vt, isPluginAttached as w, isPluginSystemErrorPayload as wt, registerPlugin as x, PluginSystemError as xt, registerInternalManifest as y, PluginError as yt, disablePluginInActiveSlot as z };