declare namespace react_navigation_d_exports {
  export { ReactNavigationNative, ReactNavigationParamList, ReactNavigationStack };
}
declare let ReactNavigationNative: typeof import('@react-navigation/native');
declare let ReactNavigationStack: typeof import('@react-navigation/stack');
interface ReactNavigationParamList {
  [Page: string]: any;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ReactNavigationParamList {}
  }
}
//#endregion
export { react_navigation_d_exports as i, ReactNavigationParamList as n, ReactNavigationStack as r, ReactNavigationNative as t };