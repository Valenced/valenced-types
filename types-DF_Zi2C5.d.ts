//#region lib/react/src/types.d.ts
declare namespace ReactNative {
  namespace AssetsRegistry {
    type AssetDestPathResolver = 'android' | 'generic';
    interface PackagerAsset {
      __packager_asset: boolean;
      fileSystemLocation?: string;
      httpServerLocation?: string;
      width?: number;
      height?: number;
      scales: number[];
      hash: string;
      name: string;
      type: string;
      resolver?: AssetDestPathResolver;
    }
  }
  interface AssetsRegistry {
    registerAsset(asset: AssetsRegistry.PackagerAsset): number;
    getAssetByID(assetId: number): AssetsRegistry.PackagerAsset;
  }
}
type RunApplicationCallback = () => any;
//#endregion
export { RunApplicationCallback as n, ReactNative as t };