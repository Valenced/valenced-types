declare namespace app_d_exports {
  export { reloadApp };
}
declare function reloadApp(): void;
declare module '@valenced/modules/native' {
  interface NativeMethods {
    'valenced.app.reload': [[], null];
  }
}
//#endregion
export { reloadApp as n, app_d_exports as t };