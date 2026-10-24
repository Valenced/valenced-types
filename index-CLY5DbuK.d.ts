import { n as RunApplicationCallback } from "./types-DF_Zi2C5.js";
declare namespace index_d_exports {
  export { onRunApplication, onRunApplicationFinished };
}
/**
 * Registers a callback to be run when a call to {@link AppRegistry.runApplication} is made.
 *
 * @param callback The callback to be called.
 * @returns A function to unregister the callback.
 */
declare function onRunApplication(callback: RunApplicationCallback): () => void;
/**
 * Registers a callback to be run when a call to {@link AppRegistry.runApplication} is finished.
 *
 * @param callback The callback to be called.
 * @returns A function to unregister the callback.
 */
declare function onRunApplicationFinished(callback: RunApplicationCallback): () => void;
//#endregion
export { onRunApplication as n, onRunApplicationFinished as r, index_d_exports as t };