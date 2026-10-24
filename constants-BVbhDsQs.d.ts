declare namespace constants_d_exports {
  export { pluginDistDirFor, pluginStorageDirFor };
}
/** Absolute path to per-plugin storage directory. */
declare const pluginStorageDirFor: (id: string) => string;
/** Absolute path to an installed plugin's files. */
declare const pluginDistDirFor: (id: string) => string;
//#endregion
export { pluginDistDirFor as n, pluginStorageDirFor as r, constants_d_exports as t };