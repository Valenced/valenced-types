import { n as Metro } from "./types-DEG71kQs.js";
declare namespace import_tracker_d_exports {
  export { ImportTrackerModuleId, ModuleFinishedImportingCallback, executeImportedPathSubscriptions, mImportedPaths, sImportedPath };
}
type ModuleFinishedImportingCallback = (id: Metro.ModuleID, path: string) => void;
declare const sImportedPath: Set<ModuleFinishedImportingCallback>;
declare const mImportedPaths: Map<string, number>;
declare let ImportTrackerModuleId: Metro.ModuleID;
declare function executeImportedPathSubscriptions(id: Metro.ModuleID, path: string): void;
//#endregion
export { ModuleFinishedImportingCallback as n, import_tracker_d_exports as r, ImportTrackerModuleId as t };