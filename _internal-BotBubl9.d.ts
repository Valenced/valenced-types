import { dt as noop } from "./types-DEG71kQs.js";
import { n as SettingsModulesLoadedSubscription, r as SettingsSection, t as SettingsItem } from "./index-CXADKtBZ.js";
declare namespace _internal_d_exports {
  export { sConfig, sRefresher, sSections, sSubscriptions };
}
declare const sSections: Record<string, SettingsSection>;
declare const sConfig: Record<string, SettingsItem>;
declare const sSubscriptions: Set<SettingsModulesLoadedSubscription>;
/**
 * Refresh IDs and re-render callbacks for the settings UI.
 *
 * IDs increment when a refresh is requested.
 * Patches check if they changed and recomputes/rerenders the hooks/components.
 */
declare const sRefresher: {
  navigator: number;
  overviewScreen: number;
  callNavigator: typeof noop;
  callOverviewScreen: typeof noop;
  callSearchableSettingsList: typeof noop;
};
//#endregion
export { sSubscriptions as a, sSections as i, sConfig as n, sRefresher as r, _internal_d_exports as t };