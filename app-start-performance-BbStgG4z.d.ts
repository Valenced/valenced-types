import { G as DiscordModules } from "./types-DEG71kQs.js";
import { t as FluxEventDispatchPatch } from "./dispatcher-Dw25tcId.js";
declare namespace flux_d_exports {
  export { fPatches, fPatchesAll };
}
declare const fPatchesAll: Set<FluxEventDispatchPatch<any>>;
declare const fPatches: Map<string, Set<FluxEventDispatchPatch<any>>>;
//#endregion
//#region lib/discord/src/preinit.d.ts
declare const AppStartPerformance: DiscordModules.AppStartPerformance;
declare namespace app_start_performance_d_exports {
  export { AppStartPerformance };
}
//#endregion
export { AppStartPerformance as n, flux_d_exports as r, app_start_performance_d_exports as t };