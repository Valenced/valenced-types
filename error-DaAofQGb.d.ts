declare namespace error_d_exports {
  export { getCurrentStack, getErrorStack };
}
declare function getErrorStack(e: unknown): string;
declare function getCurrentStack(): string;
//#endregion
export { getCurrentStack as n, getErrorStack as r, error_d_exports as t };