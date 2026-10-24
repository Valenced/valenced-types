import { G as DiscordModules } from "./types-DEG71kQs.js";
import { _t as PluginSource } from "./index-D2BcLw5R.js";
declare namespace repositories_d_exports {
  export { DownloadProgressEvent, InstallPlan, InstallPlanAction, PlanOptions, PlanTarget, PluginUpdate, Repo, RepoConfigEntry, RepoPluginListing, RepoStateEvent, ResolveIssue, VersionCandidate, breakingIssuesOf, installFromRepo, listRepoPlugins, listRepos, listUpdates, planInstall, refreshAllRepos, refreshRepo, registerRepositoryEvents, repoEvents, selectSafeUpdates, setPluginHeld, setRepos, updateAllPlugins, updatePlugins };
}
interface DownloadProgressEvent {
  id: string;
  version: string;
  /** Provenance repository URL. */
  repo: string;
  /** Downloaded bytes. */
  received: number;
  /** Total byte size from install plan. */
  total: number;
  /** 1-based index in download sequence. */
  index: number;
  /** Total artifact count in plan. */
  count: number;
}
interface RepoStateEvent {
  url: string;
  state: 'refreshing' | 'ready' | 'error';
  error?: string;
}
declare const repoEvents: DiscordModules.Utils.TypedEventEmitter<{
  downloadProgress: [DownloadProgressEvent];
  repoState: [RepoStateEvent];
}>;
declare function registerRepositoryEvents(): void;
interface Repo {
  /** Absolute root URL and unique identity of the repository. */
  url: string;
  enabled: boolean;
  internal: boolean;
  name: string | null;
  description: string | null;
  /** Packaged asset name or `data:` URL. */
  icon: string | null;
}
interface RepoConfigEntry {
  url: string;
  enabled?: boolean;
}
declare function listRepos(): Promise<Repo[]>;
declare function setRepos(config: RepoConfigEntry[]): Promise<null>;
declare function refreshRepo(url: string): Promise<Repo>;
/** Refreshes enabled user repositories in parallel, collecting per-repository errors. */
declare function refreshAllRepos(): Promise<{
  refreshed: Repo[];
  errors: {
    url: string;
    error: unknown;
  }[];
}>;
interface RepoPluginListing {
  id: string;
  name: string;
  description: string;
  author: string;
  contributors?: string[];
  /** Packaged asset name or `data:` URL. */
  icon: string | null;
  /** Channel target pointers (e.g. `latest`) referencing keys of {@link versions}. */
  channels: Record<string, string>;
  /** Keys of {@link versions}, newest first. */
  order: string[];
  versions: Record<string, {
    /** Absolute artifact download URL, or `null` for internal repositories. */
    url: string | null;
    sha256: string | null;
    size: number;
    dependencies: Record<string, {
      version: string;
      optional: boolean;
    }>;
  }>;
}
interface InstallPlanAction {
  id: string;
  version: string;
  url: string;
  sha256: string;
  size: number;
  /** Source repository recorded as installation provenance. */
  repo: string;
  /** Channel recorded for future updates. */
  channel: string;
  /** `true` pauses updates, `false` resumes, `null` uses the current. */
  hold: boolean | null;
  /** The installed version being replaced, or `null` for fresh installs. */
  replaces: string | null;
  /** What {@link channel} points to when it can't install and {@link version} fell back below it. */
  channelVersion: string | null;
  /** Planned actions that pulled this plugin in. Empty for the requested plugin. */
  dependents: {
    id: string;
    optional: boolean;
    /** Version range it requires. */
    range: string;
  }[];
  /** Versions satisfying planned dependents, keyed by repository then version. */
  candidates: Record<string, Record<string, VersionCandidate>>;
}
/** A version a planned plugin could switch to. */
interface VersionCandidate {
  /** Installed plugins outside the plan this version breaks. */
  breaks: string[];
}
interface InstallPlan {
  actions: InstallPlanAction[];
  /** Non-blocking problems (dependency resolution). */
  warnings: ResolveIssue[];
}
type ResolveIssue = {
  message: string;
} & ({
  /** Root already at the resolved version. */
  type: 'upToDate';
  id: string;
  version: string;
} | {
  type: 'downgrade';
  id: string;
  from: string;
  to: string;
} | {
  /** Planned version outside the range of an installed dependent outside the plan. */
  type: 'breaks';
  id: string;
  version: string;
  dependent: string;
  range: string;
  /** Update of {@link dependent} accepting {@link version}. Only from {@link listUpdates}. */
  fixedBy: string | null;
} | {
  /** Planned version outside the range of a planned dependent. */
  type: 'conflict';
  id: string;
  version: string;
  dependent: string;
  dependentVersion: string;
  range: string;
} | {
  /** Dependency with no usable version. Skipped when optional, blocks otherwise. */
  type: 'unresolved';
  id: string;
  dependent: string;
  dependentVersion: string;
  range: string;
  optional: boolean;
  reason: 'unavailable' | 'held' | 'target';
  installed: string | null;
  /** Explains a `target` reason. */
  detail: string | null;
} | {
  /** Paused updates, held at {@link version}. Only from {@link listUpdates}. */
  type: 'held';
  id: string;
  version: string;
} | {
  /** Root not served, or not at the requested version. */
  type: 'unavailable';
  id: string;
  version: string | null;
});
interface PluginUpdate {
  id: string;
  /** Installed version, or the pending on-disk update. */
  installed: string;
  available: string;
  channel: string;
  /** What {@link channel} points to when it can't install and {@link available} fell back below it. */
  channelVersion: string | null;
  repo: string;
  /** Artifact size of {@link available} in bytes. */
  size: number;
  /** Other planned actions, such as dependency updates. Empty with a {@link blocker}. */
  includes: {
    id: string;
    version: string;
    replaces: string | null;
    size: number;
  }[];
  warnings: ResolveIssue[];
  /** Why the update can't install. */
  blocker: ResolveIssue | null;
}
/** Lists plugins for repository from cached index. */
declare function listRepoPlugins(url: string): Promise<RepoPluginListing[]>;
/** Rules for resolving plugins. */
interface PlanTarget {
  /** Resolve from this repository instead of its provenance or the priority order. */
  repo?: string;
  /**
   * Channel to follow. Installs exactly what it points to, unless {@link compatible}.
   * @default The installed plugin's current channel, or `latest`.
   */
  channel?: string;
  /** Falls back to the newest older version that installs when what {@link channel} points to can't. */
  compatible?: boolean;
  /** Install exactly this version and hold it. Overrides {@link channel}. */
  version?: string;
}
interface PlanOptions {
  /** Per-plugin targets keyed by ID. */
  targets?: Record<string, PlanTarget>;
  /** Only consider these repositories, for every plugin. */
  repos?: string[];
  /** Skips untargeted optional dependencies that aren't installed, eg. for updates. */
  skipMissingOptionals?: boolean;
}
/**
 * Computes dependency installation plan against cached repository indexes.
 * A plugin already at the resolved version is reinstalled when its repository, channel, hold, or artifact would change.
 */
declare function planInstall(id: string, options?: PlanOptions): Promise<InstallPlan>;
/** Updates plugin hold status, pinning version or resuming channel updates. */
declare function setPluginHeld(id: string, held: boolean): Promise<PluginSource>;
/** Executes an install plan, downloading and applying artifacts to disk. */
declare function installFromRepo(plan: InstallPlan): Promise<{
  installed: string[];
  pending: string[];
  skipped: string[];
}>;
/** Lists updates across enabled repositories from cached indexes. */
declare function listUpdates(): Promise<PluginUpdate[]>;
/** Returns issues of {@link update} that break installed plugins, ignoring breaks fixed by {@link selected} updates. */
declare function breakingIssuesOf(update: PluginUpdate, selected: ReadonlySet<string>): ResolveIssue[];
/** Picks updates safe to install that won't break existing plugins. */
declare function selectSafeUpdates(updates: PluginUpdate[]): Set<string>;
/** Resolves and installs updates of {@link ids}. */
declare function updatePlugins(ids: Iterable<string>): Promise<{
  installed: string[];
  pending: string[];
  errors: {
    id: string;
    error: unknown;
  }[];
}>;
/** Installs updates from {@link selectSafeUpdates}. */
declare function updateAllPlugins(): Promise<{
  installed: string[];
  pending: string[];
  errors: {
    id: string;
    error: unknown;
  }[];
}>;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.plugins.repos.list': [[], Repo[]];
    'valenced.plugins.repos.set': [[config: RepoConfigEntry[]], null];
    'valenced.plugins.repos.refresh': [[url: string], Repo];
    'valenced.plugins.repos.listPlugins': [[url: string], RepoPluginListing[]];
    'valenced.plugins.listUpdates': [[], PluginUpdate[]];
    'valenced.plugins.planInstall': [[id: string, options: PlanOptions | null], InstallPlan];
    'valenced.plugins.install': [[plan: InstallPlan], {
      installed: string[];
      pending: string[];
      skipped: string[];
    }];
    'valenced.plugins.setHeld': [[id: string, held: boolean], PluginSource];
  }
}
//#endregion
export { repositories_d_exports as C, updateAllPlugins as D, setRepos as E, updatePlugins as O, repoEvents as S, setPluginHeld as T, listUpdates as _, PlanTarget as a, refreshRepo as b, RepoConfigEntry as c, ResolveIssue as d, VersionCandidate as f, listRepos as g, listRepoPlugins as h, PlanOptions as i, RepoPluginListing as l, installFromRepo as m, InstallPlan as n, PluginUpdate as o, breakingIssuesOf as p, InstallPlanAction as r, Repo as s, DownloadProgressEvent as t, RepoStateEvent as u, planInstall as v, selectSafeUpdates as w, registerRepositoryEvents as x, refreshAllRepos as y };